import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug,
      published: true,
    },
    include: {
      author: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-2 text-muted-foreground mb-8">
        <span>By {post.author.name}</span>
        <span>•</span>
        <time dateTime={post.createdAt.toISOString()}>
          {format(post.createdAt, "MMMM d, yyyy")}
        </time>
      </div>
      <div
        className="prose prose-neutral dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}