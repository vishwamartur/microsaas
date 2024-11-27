import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'MicroSaaSFast - Ship Your SaaS Product Faster',
    template: '%s | MicroSaaSFast'
  },
  description: 'The ultimate SaaS boilerplate for Indian developers to launch MVPs quickly with modern tech stack and built-in payment solutions.',
  keywords: 'SaaS, MVP, Startup, Indian Tech, RazorPay, NextJS, Supabase',
  authors: [{ name: 'MicroSaaSFast Team' }],
  creator: 'MicroSaaSFast',
  publisher: 'MicroSaaSFast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 px-6 md:px-12 lg:px-24">
              <div className="mx-auto max-w-7xl">
                {children}
              </div>
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}