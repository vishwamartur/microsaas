import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Database, CheckCircle } from "lucide-react";

export default function DatabaseServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Database className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Database System</h1>
          <p className="text-xl text-muted-foreground">
            PostgreSQL with Prisma ORM setup
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "PostgreSQL setup",
            "Prisma ORM integration",
            "Database migrations",
            "Type-safe queries",
            "Relationship handling",
            "Connection pooling",
            "Data validation",
            "Seeding scripts",
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
            npm install @microsaasfast/database @prisma/client
          </pre>

          <h3>2. Configure Database</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`// .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"`}
          </pre>

          <h3>3. Initialize Prisma</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Use Prisma Client
}`}
          </pre>

          <h3>4. Run Migrations</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`npx prisma migrate dev
npx prisma generate`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-database" />
      </div>
    </div>
  );
}