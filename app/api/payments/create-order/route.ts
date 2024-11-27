import { NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';
import { auth } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { amount } = body;

    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (error) {
    console.error('[RAZORPAY_ORDER_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}