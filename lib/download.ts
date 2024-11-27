import JSZip from 'jszip';

interface PackageConfig {
  name: string;
  dependencies: Record<string, string>;
  files: Record<string, string>;
}

const packages: Record<string, PackageConfig> = {
  'microsaasfast-razorpay': {
    name: 'microsaasfast-razorpay',
    dependencies: {
      'razorpay': '^2.9.2'
    },
    files: {
      'README.md': `# MicroSaaSFast RazorPay Integration\n\nComplete payment solution for Indian businesses.`,
      'src/razorpay-button.tsx': `"use client";

import { useEffect, useState } from 'react';
import { loadRazorpay } from './utils';

interface RazorPayButtonProps {
  amount: number;
  currency?: string;
  name: string;
  description?: string;
  onSuccess: (response: any) => void;
}

export function RazorPayButton({
  amount,
  currency = 'INR',
  name,
  description,
  onSuccess
}: RazorPayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      await loadRazorpay();
      
      const response = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency,
        name,
        description,
        order_id: order.id,
        handler: onSuccess,
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-4 py-2 bg-primary text-white rounded-md"
    >
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
}`,
      'src/utils.ts': `export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

export const verifyPayment = ({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}) => {
  const crypto = require('crypto');
  const secret = process.env.RAZORPAY_KEY_SECRET!;
  const generated_signature = crypto
    .createHmac('sha256', secret)
    .update(orderId + '|' + paymentId)
    .digest('hex');
  
  return generated_signature === signature;
};`
    }
  },
  // ... existing packages ...
};

export async function generateDownloadPackage(packageName: string) {
  const zip = new JSZip();
  const config = packages[packageName];

  if (!config) {
    throw new Error(`Package ${packageName} not found`);
  }

  // Add package.json
  zip.file('package.json', JSON.stringify({
    name: config.name,
    version: '1.0.0',
    private: true,
    dependencies: config.dependencies
  }, null, 2));

  // Add all package files
  Object.entries(config.files).forEach(([path, content]) => {
    zip.file(path, content);
  });

  return await zip.generateAsync({ type: 'blob' });
}