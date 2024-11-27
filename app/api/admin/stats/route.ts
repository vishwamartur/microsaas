import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Verify admin role
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (user?.role !== "ADMIN") {
      return new NextResponse("Forbidden", { status: 403 });
    }

    // Fetch stats
    const [totalUsers, totalPayments, waitlistCount] = await Promise.all([
      prisma.user.count(),
      prisma.payment.aggregate({
        _sum: { amount: true },
      }),
      prisma.waitlist.count(),
    ]);

    return NextResponse.json({
      totalUsers,
      totalPayments: totalPayments._sum.amount || 0,
      waitlistCount,
    });
  } catch (error) {
    console.error("[ADMIN_STATS_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}