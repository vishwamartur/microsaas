import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return new NextResponse('Invalid signature', { status: 400 });
    }

    // Record the payment in database
    await prisma.payment.create({
      data: {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        userId: session.user.id,
        status: 'completed',
      },
    });

    return NextResponse.json({
      message: 'Payment verified successfully',
    });
  } catch (error) {
    console.error('[RAZORPAY_VERIFY_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}