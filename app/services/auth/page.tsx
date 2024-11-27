import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Lock, CheckCircle } from "lucide-react";

export default function AuthServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Lock className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Authentication System</h1>
          <p className="text-xl text-muted-foreground">
            Complete auth solution with multiple providers
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Google OAuth integration",
            "Apple Sign-in",
            "Magic link authentication",
            "Email/Password auth",
            "JWT session handling",
            "Role-based access control",
            "Protected routes",
            "Authentication persistence",
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
            npm install @microsaasfast/auth next-auth @auth/prisma-adapter
          </pre>

          <h3>2. Configure Environment Variables</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
APPLE_ID=your_apple_id
APPLE_SECRET=your_apple_secret`}
          </pre>

          <h3>3. Set Up Authentication</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import NextAuth from 'next-auth';
import { authConfig } from '@microsaasfast/auth';

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };`}
          </pre>

          <h3>4. Protect Routes</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { auth } from '@microsaasfast/auth';

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect('/auth/signin');
  
  return <div>Protected Content</div>;
}`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-auth" />
      </div>
    </div>
  );
}