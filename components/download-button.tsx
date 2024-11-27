"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generateDownloadPackage } from '@/lib/download';

interface DownloadButtonProps {
  packageName?: string;
}

export function DownloadButton({ packageName = 'microsaasfast-starter' }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const blob = await generateDownloadPackage(packageName);
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${packageName}.zip`);
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      disabled={loading}
      size="lg" 
      className="gap-2"
    >
      <Download className="h-5 w-5" />
      {loading ? 'Preparing Download...' : 'Download Package'}
    </Button>
  );
}