import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDistance } from "date-fns";

export default async function BlogDashboard() {
  const session = await auth();
  const posts = await prisma.post.findMany({
    where: {
      authorId: session?.user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link href="/dashboard/blog/new">Create Post</Link>
        </Button>
      </div>

      <div className="divide-y divide-border rounded-lg border">
        {posts.map((post) => (
          <div key={post.id} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  href={`/dashboard/blog/${post.id}`}
                  className="font-semibold hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {formatDistance(new Date(post.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/dashboard/blog/${post.id}`}>Edit</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  {post.published ? "Unpublish" : "Publish"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}