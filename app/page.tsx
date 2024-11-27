import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  Webhook, 
  Globe, 
  Lock, 
  Palette, 
  Search, 
  FileText, 
  Database, 
  Cloud,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import { DownloadButton } from '@/components/download-button';

const features = [
  {
    title: "Email System",
    description: "Transactional emails with Resend",
    icon: Mail,
    href: "/services/email"
  },
  {
    title: "Webhook System",
    description: "Secure webhook handling",
    icon: Webhook,
    href: "/services/webhook"
  },
  {
    title: "DNS Setup",
    description: "Complete domain configuration",
    icon: Globe,
    href: "/services/dns"
  },
  {
    title: "Authentication",
    description: "Multi-provider auth system",
    icon: Lock,
    href: "/services/auth"
  },
  {
    title: "UI Components",
    description: "Beautiful, accessible UI kit",
    icon: Palette,
    href: "/services/ui"
  },
  {
    title: "SEO Tools",
    description: "Complete SEO optimization",
    icon: Search,
    href: "/services/seo"
  },
  {
    title: "Blog System",
    description: "Full-featured blog platform",
    icon: FileText,
    href: "/services/blog"
  },
  {
    title: "Database",
    description: "PostgreSQL & Prisma setup",
    icon: Database,
    href: "/services/database"
  },
  {
    title: "Deployment",
    description: "Docker & cloud deployment",
    icon: Cloud,
    href: "/services/deployment"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center p-24 bg-gradient-to-b from-background to-muted text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent animate-in fade-in-0">
          MicroSaaSFast
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in-50">
          The ultimate SaaS boilerplate for Indian developers. Ship your product faster with our complete toolkit.
        </p>

        <div className="flex justify-center gap-4 mb-12 animate-in fade-in-75">
          <DownloadButton />
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">Documentation</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Build Your SaaS
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <Link href={feature.href} className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground/50" />
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-24 text-center">
        <Card className="p-12 bg-primary text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your SaaS?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get started with MicroSaaSFast today and launch your product in days, not months.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}