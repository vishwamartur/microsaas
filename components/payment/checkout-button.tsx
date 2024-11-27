"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { loadScript } from '@/lib/utils';

interface CheckoutButtonProps {
  amount: number;
  planName: string;
}

export function CheckoutButton({ amount, planName }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      if (!res) {
        toast({
          title: 'Error',
          description: 'Razorpay SDK failed to load',
          variant: 'destructive',
        });
        return;
      }

      const response = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'MicroSaaSFast',
        description: `Payment for ${planName}`,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            const verifyResponse = await fetch('/api/payments/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(response),
            });

            if (verifyResponse.ok) {
              toast({
                title: 'Success',
                description: 'Payment completed successfully',
              });
            }
          } catch (error) {
            toast({
              title: 'Error',
              description: 'Payment verification failed',
              variant: 'destructive',
            });
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#0C4A6E',
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handlePayment} disabled={loading}>
      {loading ? 'Processing...' : 'Pay Now'}
    </Button>
  );
}