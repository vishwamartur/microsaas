import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Mail, CheckCircle } from "lucide-react";

export default function EmailServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Email System</h1>
          <p className="text-xl text-muted-foreground">
            Transactional emails with Resend
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Welcome emails",
            "Password reset",
            "Payment confirmations",
            "Custom email templates",
            "Email tracking",
            "HTML and text versions",
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
            npm install @microsaasfast/email resend
          </pre>

          <h3>2. Configure Environment Variables</h3>
          <pre className="bg-muted p-4 rounded-lg">
            RESEND_API_KEY=your_resend_api_key
          </pre>

          <h3>3. Initialize Email Client</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { createEmailClient } from '@microsaasfast/email';

const emailClient = createEmailClient({
  apiKey: process.env.RESEND_API_KEY
});`}
          </pre>

          <h3>4. Send Emails</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`await emailClient.send({
  to: 'user@example.com',
  subject: 'Welcome!',
  template: 'welcome',
  data: { name: 'User' }
});`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-email" />
      </div>
    </div>
  );
}