import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Download,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
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

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          MicroSaaSFast Services
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose and implement the services you need for your SaaS project. Each service comes with detailed documentation and ready-to-use code.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold mb-2">{service.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href={service.href} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Build Your SaaS?
          </h2>
          <p className="mb-6">
            Get started with our complete toolkit and launch your product faster.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download All Services
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}