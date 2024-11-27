import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Terminal, Wrench } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Download MicroSaaSFast</h1>
        <p className="text-xl text-muted-foreground">
          Get started with your SaaS project in minutes
        </p>
      </div>

      <Card className="p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Download className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Latest Version</h2>
          </div>
          <Button asChild size="lg">
            <a href="https://github.com/yourusername/microsaasfast/archive/refs/heads/main.zip">
              Download ZIP
            </a>
          </Button>
        </div>
        <p className="text-muted-foreground mb-4">
          Download the complete source code with all features:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            Full Next.js 13+ setup with TypeScript
          </li>
          <li className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />
            Authentication, Payments, Blog, and Email systems
          </li>
        </ul>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Quick Start Guide</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">1. Clone the repository</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>git clone https://github.com/yourusername/microsaasfast.git</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">2. Install dependencies</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`cd microsaasfast
npm install`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">3. Set up environment variables</h3>
          <p className="text-muted-foreground">
            Copy the .env.example file to .env and fill in your credentials
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>cp .env.example .env</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">4. Initialize the database</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`npx prisma generate
npx prisma db push`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">5. Start the development server</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>npm run dev</code>
          </pre>
        </div>

        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/docs">
              View Documentation
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/yourusername/microsaasfast" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}