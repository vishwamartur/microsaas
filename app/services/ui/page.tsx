import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Palette, CheckCircle } from "lucide-react";

export default function UIServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Palette className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">UI Components</h1>
          <p className="text-xl text-muted-foreground">
            Beautiful, accessible components built with Tailwind and shadcn/ui
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "40+ accessible components",
            "Dark mode support",
            "Customizable themes",
            "Responsive layouts",
            "Form components",
            "Data display components",
            "Navigation components",
            "Feedback components",
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
            npm install @microsaasfast/ui tailwindcss @tailwindcss/typography class-variance-authority clsx tailwind-merge
          </pre>

          <h3>2. Configure Tailwind</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Theme configuration
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}`}
          </pre>

          <h3>3. Import Components</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { Button, Card, Input } from '@microsaasfast/ui';

export default function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Click me</Button>
    </Card>
  );
}`}
          </pre>

          <h3>4. Theme Customization</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// Add custom theme variables
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
}`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-ui" />
      </div>
    </div>
  );
}