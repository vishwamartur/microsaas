import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const { title, content } = json;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug: slugify(title, { lower: true }),
        authorId: session.user.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("[POSTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}