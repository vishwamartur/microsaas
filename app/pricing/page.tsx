import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Download } from 'lucide-react';
import Link from 'next/link';
import { DownloadButton } from '@/components/download-button';

const features = [
  'Complete authentication system',
  'RazorPay integration',
  'Blog system with admin dashboard',
  'Email system with Resend',
  'Webhook system',
  'SEO optimization',
  'Beautiful UI components',
  'Database setup with Prisma',
  'Docker deployment configuration',
  'Documentation and guides',
  'Regular updates',
  'Community support'
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Free and Open Source</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to build your SaaS product, completely free
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Complete Package</h2>
              <p className="text-3xl font-bold mt-2">
                Free
                <span className="text-base font-normal text-muted-foreground ml-2">
                  Forever
                </span>
              </p>
            </div>
            <DownloadButton />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Why is it free?</h3>
              <p className="text-sm text-muted-foreground">
                We believe in empowering Indian developers to build and launch their SaaS products without barriers. Our goal is to grow the Indian SaaS ecosystem by providing high-quality tools and resources.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}