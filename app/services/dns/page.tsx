import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Globe, CheckCircle } from "lucide-react";

export default function DNSServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Globe className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">DNS Setup</h1>
          <p className="text-xl text-muted-foreground">
            Complete DNS configuration guide
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Custom domain setup",
            "SSL configuration",
            "Email DNS records",
            "Cloudflare integration",
            "DNS propagation check",
            "Subdomain management",
            "DNS security",
            "Load balancing setup",
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
          <h3>1. Domain Configuration</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`# A Record
Type: A
Name: @
Value: Your-Server-IP

# CNAME Record
Type: CNAME
Name: www
Value: your-app.vercel.app`}
          </pre>

          <h3>2. SSL Setup</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`# Install certbot
sudo apt-get install certbot

# Generate certificate
sudo certbot --nginx -d yourdomain.com`}
          </pre>

          <h3>3. Email DNS</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`# SPF Record
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all

# DKIM Record
Type: TXT
Name: google._domainkey
Value: v=DKIM1; k=rsa; p=YOUR_KEY`}
          </pre>

          <h3>4. Cloudflare Setup</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`# Update nameservers
NS1.CLOUDFLARE.COM
NS2.CLOUDFLARE.COM

# Enable proxy status
Enable orange cloud icon for each record`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-dns" />
      </div>
    </div>
  );
}