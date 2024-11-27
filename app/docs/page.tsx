import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { 
  BookOpen, 
  CreditCard, 
  FileText, 
  Key, 
  Mail, 
  Webhook 
} from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <p className="text-muted-foreground mb-8">
        Everything you need to know about using MicroSaaSFast
      </p>

      <div className="grid gap-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Key className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Authentication</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    MicroSaaSFast supports multiple authentication methods:
                  </p>
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li>Google OAuth</li>
                    <li>Magic Links (Passwordless)</li>
                    <li>Email/Password</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Payments</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Integrated RazorPay payment gateway for Indian businesses:
                  </p>
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li>UPI payments</li>
                    <li>Credit/Debit cards</li>
                    <li>Net Banking</li>
                    <li>Automatic payment verification</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Blog System</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built-in blog functionality with:
                  </p>
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li>Rich text editor</li>
                    <li>SEO optimization</li>
                    <li>Draft/Publish workflow</li>
                    <li>Author management</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email System</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automated email notifications using Resend:
                  </p>
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li>Welcome emails</li>
                    <li>Payment confirmations</li>
                    <li>Custom notifications</li>
                    <li>Beautiful email templates</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Integration Guide</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Environment Setup</h3>
                <p className="mb-2">Create a <code>.env</code> file with the following variables:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
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
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Webhooks
WEBHOOK_SECRET=your_webhook_secret`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Database Setup</h3>
                <p className="mb-2">Run the following commands to set up your database:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`npx prisma generate
npx prisma db push`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="mb-2">Start the development server:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`npm run dev`}
                </pre>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Webhooks</h2>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Webhook className="h-6 w-6 text-primary mt-1" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Available Webhook Events</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><code>payment.success</code> - Triggered when a payment is successful</li>
                    <li><code>user.created</code> - Triggered when a new user signs up</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Webhook Security</h3>
                  <p>
                    All webhooks are signed using HMAC SHA-256. Verify the signature using the
                    <code className="mx-1">x-webhook-signature</code> header.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Testing Webhooks</h3>
                  <p>
                    Use the webhook test endpoint at <code>/api/webhook-test</code> to simulate
                    webhook events during development.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Need Help?</h2>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Support Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs/faq" className="text-primary hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/troubleshooting" className="text-primary hover:underline">
                      Troubleshooting Guide
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="mailto:support@microsaasfast.com"
                      className="text-primary hover:underline"
                    >
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}