"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
  Brush
} from "lucide-react";

const services = [
  { name: "Email System", href: "/services/email", icon: Mail },
  { name: "Webhook System", href: "/services/webhook", icon: Webhook },
  { name: "DNS Setup", href: "/services/dns", icon: Globe },
  { name: "Authentication", href: "/services/auth", icon: Lock },
  { name: "UI Components", href: "/services/ui", icon: Palette },
  { name: "Themes", href: "/services/themes", icon: Brush },
  { name: "SEO", href: "/services/seo", icon: Search },
  { name: "Blog System", href: "/services/blog", icon: FileText },
  { name: "Database", href: "/services/database", icon: Database },
  { name: "Deployment", href: "/services/deployment", icon: Cloud },
];

export function ServicesNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 space-y-2">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isActive = pathname === service.href;

        return (
          <motion.div
            key={service.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActive && "bg-primary text-primary-foreground"
              )}
              asChild
            >
              <Link href={service.href}>
                <Icon className="h-4 w-4" />
                {service.name}
              </Link>
            </Button>
          </motion.div>
        );
      })}
    </nav>
  );
}