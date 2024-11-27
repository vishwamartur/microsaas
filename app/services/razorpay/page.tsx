import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { CreditCard, CheckCircle } from "lucide-react";

export default function RazorPayServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <CreditCard className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">RazorPay Integration</h1>
          <p className="text-xl text-muted-foreground">
            Complete payment solution for Indian businesses
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "UPI payments",
            "Credit/Debit cards",
            "Net Banking",
            "Payment verification",
            "Webhook integration",
            "Subscription management",
            "Payment analytics",
            "Automatic invoicing",
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
            npm install @microsaasfast/razorpay razorpay
          </pre>

          <h3>2. Configure Environment Variables</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret`}
          </pre>

          <h3>3. Create Payment Button</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { RazorPayButton } from '@microsaasfast/razorpay';

export default function CheckoutPage() {
  return (
    <RazorPayButton
      amount={999}
      currency="INR"
      name="Your Product"
      description="Product description"
      onSuccess={(response) => {
        // Handle successful payment
      }}
    />
  );
}`}
          </pre>

          <h3>4. Verify Payment</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// app/api/payments/verify/route.ts
import { verifyPayment } from '@microsaasfast/razorpay';

export async function POST(req: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = 
    await req.json();

  const isValid = verifyPayment({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  });

  if (!isValid) {
    return new Response('Invalid signature', { status: 400 });
  }

  // Update payment status in database
  return new Response('Payment verified');
}`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-razorpay" />
      </div>
    </div>
  );
}