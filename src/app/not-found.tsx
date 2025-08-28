'use client';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFoundPage = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center font-bold mb-4">Oh! Page not found.</h1>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default NotFoundPage;
