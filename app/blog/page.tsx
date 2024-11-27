import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid gap-8 max-w-3xl">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold group-hover:text-primary mb-2">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <span>By {post.author.name}</span>
              <span>•</span>
              <time dateTime={post.createdAt.toISOString()}>
                {format(post.createdAt, "MMMM d, yyyy")}
              </time>
            </div>
            <p className="text-muted-foreground line-clamp-3">
              {post.content.replace(/<[^>]*>/g, "").slice(0, 200)}...
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}