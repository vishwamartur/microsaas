import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Webhook, CheckCircle } from "lucide-react";

export default function WebhookServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Webhook className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Webhook System</h1>
          <p className="text-xl text-muted-foreground">
            Secure webhook handling and management
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Secure webhook endpoints",
            "Signature verification",
            "Event handling",
            "Webhook logs",
            "Retry mechanism",
            "Test endpoints",
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
            npm install @microsaasfast/webhook crypto
          </pre>

          <h3>2. Configure Environment Variables</h3>
          <pre className="bg-muted p-4 rounded-lg">
            WEBHOOK_SECRET=your_webhook_secret
          </pre>

          <h3>3. Create Webhook Handler</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { verifyWebhookSignature } from '@microsaasfast/webhook';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('x-webhook-signature');
  
  if (!verifyWebhookSignature(body, signature, process.env.WEBHOOK_SECRET)) {
    return new Response('Invalid signature', { status: 401 });
  }
  
  const event = JSON.parse(body);
  // Handle webhook event
}`}
          </pre>

          <h3>4. Test Webhooks</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// Use the test endpoint
const response = await fetch('/api/webhook-test', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    type: 'test.event',
    data: { /* test data */ }
  })
});`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-webhook" />
      </div>
    </div>
  );
}