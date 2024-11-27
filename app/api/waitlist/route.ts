import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const waitlistEntry = await prisma.waitlist.create({
      data: { email },
    });

    // Send confirmation email
    await resend.emails.send({
      from: "MicroSaaSFast <noreply@microsaasfast.com>",
      to: email,
      subject: "Welcome to MicroSaaSFast Waitlist",
      html: `
        <h1>Thanks for joining our waitlist!</h1>
        <p>We'll notify you when we launch.</p>
      `,
    });

    return NextResponse.json(waitlistEntry);
  } catch (error) {
    console.error("[WAITLIST_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}