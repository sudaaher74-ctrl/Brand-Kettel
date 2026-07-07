'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-background px-5 text-center">
      <h2 className="text-section-lg mb-4 text-white">Something went wrong</h2>
      <p className="text-body-main mb-8 max-w-lg">
        We apologize for the inconvenience. An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="btn-primary"
      >
        Try again
      </button>
    </div>
  );
}
