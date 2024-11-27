# DNS Setup Guide for MicroSaaSFast

## Custom Domain Configuration

1. Purchase a domain from your preferred registrar (GoDaddy, Namecheap, etc.)

2. Add DNS Records:
   ```
   Type  Name     Value
   A     @        Your-Server-IP
   CNAME www      your-app.vercel.app
   ```

3. SSL Configuration:
   - Enable SSL through your hosting provider
   - Or use Let's Encrypt with our automatic SSL script

## Email DNS Setup (for Resend)

Add these DNS records for email authentication:

```
Type   Name                Value
TXT    @                  v=spf1 include:spf.resend.com -all
CNAME  em.yourdomain.com  track.resend.com
```

## Vercel Domain Configuration

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Cloudflare Integration (Optional)

1. Add your domain to Cloudflare
2. Update nameservers at your registrar
3. Enable Cloudflare proxy for enhanced security