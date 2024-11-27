import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Search, CheckCircle } from "lucide-react";

export default function SEOServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Search className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">SEO Optimization</h1>
          <p className="text-xl text-muted-foreground">
            Complete SEO toolkit for Next.js applications
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Meta tags optimization",
            "JSON-LD structured data",
            "Automatic sitemap generation",
            "robots.txt configuration",
            "OpenGraph tags",
            "Twitter cards",
            "Canonical URLs",
            "SEO-friendly routing",
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
            npm install @microsaasfast/seo next-seo next-sitemap
          </pre>

          <h3>2. Configure SEO</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Your Site',
    template: '%s | Your Site'
  },
  description: 'Your site description',
  openGraph: {
    // OpenGraph configuration
  }
}`}
          </pre>

          <h3>3. Add Structured Data</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { JsonLd } from '@microsaasfast/seo';

export default function Page() {
  return (
    <>
      <JsonLd
        type="Product"
        data={{
          name: 'Your Product',
          description: 'Product description',
          // ...other fields
        }}
      />
      {/* Page content */}
    </>
  );
}`}
          </pre>

          <h3>4. Generate Sitemap</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://your-site.com',
  generateRobotsTxt: true,
  // Additional configuration
}`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-seo" />
      </div>
    </div>
  );
}