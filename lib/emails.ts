import { resend } from './resend';

export async function sendWelcomeEmail(email: string, username: string) {
  try {
    await resend.emails.send({
      from: 'MicroSaaSFast <noreply@microsaasfast.com>',
      to: email,
      subject: 'Welcome to MicroSaaSFast',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to MicroSaaSFast</title>
          </head>
          <body style="font-family: system-ui, -apple-system, sans-serif; padding: 20px;">
            <div style="max-width: 560px; margin: 0 auto;">
              <h1 style="color: #000; font-size: 24px; font-weight: bold; margin-bottom: 24px;">
                Welcome to MicroSaaSFast
              </h1>
              
              <p style="font-size: 16px; line-height: 24px; margin-bottom: 16px;">
                Hi ${username},
              </p>
              
              <p style="font-size: 16px; line-height: 24px; margin-bottom: 24px;">
                We're excited to have you on board! MicroSaaSFast helps you build and launch 
                your SaaS product faster than ever.
              </p>
              
              <a href="https://microsaasfast.com/dashboard" 
                style="display: inline-block; background-color: #000; color: #fff; 
                padding: 12px 24px; text-decoration: none; border-radius: 4px;">
                Get Started
              </a>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;">
              
              <p style="color: #666; font-size: 14px;">
                If you have any questions, just reply to this email - we're always happy to help out.
              </p>
            </div>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
}

export async function sendPaymentConfirmation(
  email: string,
  orderId: string,
  amount: number
) {
  try {
    await resend.emails.send({
      from: 'MicroSaaSFast <noreply@microsaasfast.com>',
      to: email,
      subject: 'Payment Confirmation',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Payment Confirmation</title>
          </head>
          <body style="font-family: system-ui, -apple-system, sans-serif; padding: 20px;">
            <div style="max-width: 560px; margin: 0 auto;">
              <h1 style="color: #000; font-size: 24px; font-weight: bold; margin-bottom: 24px;">
                Payment Confirmation
              </h1>
              
              <p style="font-size: 16px; line-height: 24px; margin-bottom: 16px;">
                Thank you for your payment of ₹${amount}.
              </p>
              
              <p style="font-size: 16px; line-height: 24px; margin-bottom: 16px;">
                Order ID: ${orderId}
              </p>
              
              <p style="font-size: 16px; line-height: 24px; margin-bottom: 24px;">
                We've received your payment and your account has been updated.
              </p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;">
              
              <p style="color: #666; font-size: 14px;">
                If you have any questions about your payment, please contact our support team.
              </p>
            </div>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error('Error sending payment confirmation:', error);
    throw error;
  }
}