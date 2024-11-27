import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Palette, CheckCircle } from "lucide-react";

export default function ThemesServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Palette className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Theme System</h1>
          <p className="text-xl text-muted-foreground">
            20+ beautiful themes with DaisyUI integration
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "20+ pre-built themes",
            "Dark mode support",
            "Custom theme creation",
            "Theme switching",
            "Color palette generator",
            "CSS variables system",
            "Responsive design",
            "Accessibility support",
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
            npm install @microsaasfast/themes daisyui
          </pre>

          <h3>2. Configure Tailwind</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// tailwind.config.js
module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald"],
  },
}`}
          </pre>

          <h3>3. Theme Provider</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { ThemeProvider } from '@microsaasfast/themes';

export default function Layout({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}`}
          </pre>

          <h3>4. Theme Switcher</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { ThemeSwitcher } from '@microsaasfast/themes';

export default function Header() {
  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
}`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-themes" />
      </div>
    </div>
  );
}