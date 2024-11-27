import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = headers();
  const signature = headersList.get("x-webhook-signature");

  // Verify webhook signature
  const isValidSignature = verifySignature(
    body,
    signature || "",
    process.env.WEBHOOK_SECRET || ""
  );

  if (!isValidSignature) {
    return new NextResponse("Invalid signature", { status: 401 });
  }

  const payload = JSON.parse(body);
  const eventType = payload.type;

  try {
    switch (eventType) {
      case "payment.success":
        await handlePaymentSuccess(payload);
        break;
      case "user.created":
        await handleUserCreated(payload);
        break;
      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}

function verifySignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return signature === digest;
}

async function handlePaymentSuccess(payload: any) {
  const { orderId, userId } = payload;

  // Update payment status in database
  await prisma.payment.update({
    where: { orderId },
    data: { status: "completed" },
  });

  // Get user details
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (user?.email) {
    // Send payment confirmation email
    await resend.emails.send({
      from: "MicroSaaSFast <noreply@microsaasfast.com>",
      to: user.email,
      subject: "Payment Successful",
      html: `
        <h1>Thank you for your payment!</h1>
        <p>Your payment has been successfully processed.</p>
        <p>Order ID: ${orderId}</p>
      `,
    });
  }
}

async function handleUserCreated(payload: any) {
  const { userId } = payload;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (user?.email) {
    // Send welcome email
    await resend.emails.send({
      from: "MicroSaaSFast <noreply@microsaasfast.com>",
      to: user.email,
      subject: "Welcome to MicroSaaSFast",
      html: `
        <h1>Welcome to MicroSaaSFast!</h1>
        <p>We're excited to have you on board.</p>
        <p>Get started by exploring our features:</p>
        <ul>
          <li>Create your first blog post</li>
          <li>Set up payments</li>
          <li>Customize your profile</li>
        </ul>
      `,
    });
  }
}