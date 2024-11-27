import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { FileText, CheckCircle } from "lucide-react";

export default function BlogServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Blog System</h1>
          <p className="text-xl text-muted-foreground">
            Full-featured blog with admin dashboard
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Rich text editor",
            "SEO optimization",
            "Draft/Publish workflow",
            "Author management",
            "Categories and tags",
            "Image optimization",
            "RSS feed",
            "Admin dashboard",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Guide</h2>
        <div className="prose max-w-none">
          <h3>1. Install Dependencies</h3>
          <pre className="bg-muted p-4 rounded-lg">
            npm install @microsaasfast/blog @tiptap/react @tiptap/starter-kit
          </pre>

          <h3>2. Database Setup</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// prisma/schema.prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}`}
          </pre>

          <h3>3. Create Blog Pages</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { BlogPost } from '@microsaasfast/blog';

export default function BlogPage() {
  return (
    <BlogPost
      post={{
        title: 'My Post',
        content: '...',
        author: { name: 'Author' }
      }}
    />
  );
}`}
          </pre>

          <h3>4. Admin Dashboard</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { BlogAdmin } from '@microsaasfast/blog';

export default function AdminPage() {
  return <BlogAdmin />;
}`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-blog" />
      </div>
    </div>
  );
}