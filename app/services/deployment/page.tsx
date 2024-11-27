import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/download-button";
import { Cloud, CheckCircle } from "lucide-react";

export default function DeploymentServicePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Cloud className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Deployment System</h1>
          <p className="text-xl text-muted-foreground">
            Docker and cloud deployment setup
          </p>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3">
          {[
            "Docker configuration",
            "Docker Compose setup",
            "Vercel deployment",
            "AWS Amplify support",
            "Environment management",
            "CI/CD pipelines",
            "Health checks",
            "Monitoring setup",
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
            npm install @microsaasfast/deployment
          </pre>

          <h3>2. Docker Setup</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}
          </pre>

          <h3>3. Docker Compose</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: password`}
          </pre>

          <h3>4. Deploy to Vercel</h3>
          <pre className="bg-muted p-4 rounded-lg">
{`vercel deploy --prod`}
          </pre>
        </div>
      </Card>

      <div className="flex justify-center">
        <DownloadButton packageName="microsaasfast-deployment" />
      </div>
    </div>
  );
}