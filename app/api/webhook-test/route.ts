import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(req: Request) {
  const testPayload = {
    type: "payment.success",
    orderId: "test_order_123",
    userId: "test_user_123",
    amount: 999,
  };

  const secret = process.env.WEBHOOK_SECRET || "";
  const payload = JSON.stringify(testPayload);
  
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const webhookUrl = new URL("/api/webhooks", req.url);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-signature": signature,
      },
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`Webhook test failed: ${response.statusText}`);
    }

    return NextResponse.json({
      success: true,
      message: "Webhook test completed successfully",
    });
  } catch (error) {
    console.error("Webhook test error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Webhook test failed",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}