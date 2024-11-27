import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code,
  Database,
  Key,
  LayoutDashboard,
  Mail,
  Rocket,
  Settings,
} from 'lucide-react';

export default function GetStartedPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold">Get Started with MicroSaaSFast</h1>
        <p className="text-xl text-muted-foreground">
          Follow this guide to set up your SaaS application
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1: Initial Setup */}
        <Card className="p-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              1
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Initial Setup</h2>
              <p className="text-muted-foreground">
                Configure your environment and install dependencies
              </p>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Environment Variables
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Create a <code>.env</code> file in your project root:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`DATABASE_URL=your_postgresql_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email
RESEND_API_KEY=your_resend_api_key

# Payments
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 2: Database Setup */}
        <Card className="p-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              2
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Database Setup</h2>
              <p className="text-muted-foreground">Set up your database schema and migrations</p>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Initialize Database
                  </h3>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 3: Authentication */}
        <Card className="p-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              3
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Authentication Setup</h2>
              <p className="text-muted-foreground">Configure authentication providers</p>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    Available Methods
                  </h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Google OAuth</li>
                    <li>Magic Links (Passwordless)</li>
                    <li>Email/Password</li>
                  </ul>
                  <Button asChild className="mt-4">
                    <Link href="/docs/auth">View Auth Documentation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 4: Email Configuration */}
        <Card className="p-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              4
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Email Configuration</h2>
              <p className="text-muted-foreground">Set up transactional emails with Resend</p>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Templates
                  </h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Welcome emails</li>
                    <li>Password reset</li>
                    <li>Payment confirmations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 5: Dashboard Setup */}
        <Card className="p-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              5
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Dashboard Configuration</h2>
              <p className="text-muted-foreground">Customize your admin dashboard</p>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Available Features
                  </h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>User management</li>
                    <li>Payment history</li>
                    <li>Blog post editor</li>
                    <li>Analytics dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6">
              <Settings className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Customize Your App</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Modify the UI, add new features, and make it your own
              </p>
              <Button variant="outline" asChild>
                <Link href="/docs/customization">
                  Customization Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <Rocket className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Deploy Your App</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Deploy your application to production
              </p>
              <Button variant="outline" asChild>
                <Link href="/docs/deployment">
                  Deployment Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}