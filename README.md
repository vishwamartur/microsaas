# MicroSaaSFast

MicroSaaSFast is a complete SaaS boilerplate designed specifically for Indian developers to launch their MVPs quickly. Built with modern technologies and integrated with Indian payment solutions.

## Features

### 🔐 Authentication System
- Multiple auth methods (Google OAuth, Magic Links, Email)
- NextAuth.js integration
- Role-based access control
- Secure session management

### 💳 Payment Integration
- RazorPay integration for Indian payments
- Subscription management
- Payment webhooks
- Invoice generation
- Multiple pricing tiers

### 📝 Blog System
- Rich text editor
- SEO optimization
- Draft/Publish workflow
- Author management
- Categories and tags

### 📧 Email System
- Transactional emails with Resend
- Email templates
- Welcome emails
- Payment confirmations
- Custom notifications

### 🔄 Webhook System
- Secure webhook endpoints
- Event handling
- Signature verification
- Webhook logs
- Test endpoints

### 🎨 Modern UI
- Beautiful, responsive design
- Dark/Light mode
- Tailwind CSS
- shadcn/ui components
- Customizable themes

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: RazorPay
- **Email**: Resend
- **UI**: Tailwind CSS + shadcn/ui
- **Hosting**: Vercel/AWS Amplify ready

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- RazorPay account
- Resend account
- Google OAuth credentials (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/microsaasfast.git
cd microsaasfast
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your environment variables:
```env
DATABASE_URL=your_postgresql_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email
RESEND_API_KEY=your_resend_api_key

# Payments
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Webhooks
WEBHOOK_SECRET=your_webhook_secret
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## Project Structure

```
├── app/                   # Next.js 13 app directory
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── blog/             # Blog pages
│   ├── dashboard/        # Dashboard pages
│   └── ...
├── components/           # React components
│   ├── ui/              # UI components
│   ├── blog/            # Blog components
│   └── ...
├── lib/                  # Utility functions
├── prisma/              # Database schema
└── public/              # Static files
```

## Configuration

### Database

The project uses Prisma as the ORM. The schema is defined in `prisma/schema.prisma`. To modify the database schema:

1. Edit `prisma/schema.prisma`
2. Run migrations:
```bash
npx prisma migrate dev
```

### Authentication

Configure authentication providers in `app/api/auth/[...nextauth]/route.ts`. The project supports:
- Google OAuth
- Magic Links
- Email/Password

### Payments

RazorPay integration is configured in `lib/razorpay.ts`. Update your RazorPay credentials in the `.env` file.

### Emails

Email templates are located in `components/emails/`. Configure Resend in `lib/resend.ts`.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy

### Docker

A Dockerfile is included for containerized deployment:

```bash
docker build -t microsaasfast .
docker run -p 3000:3000 microsaasfast
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- Documentation: [/docs](https://microsaasfast.com/docs)
- Issues: [GitHub Issues](https://github.com/yourusername/microsaasfast/issues)
- Email: support@microsaasfast.com

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [RazorPay](https://razorpay.com/)
- [Resend](https://resend.com/)