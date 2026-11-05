'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FFF7E6]">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B46A72] font-semibold">
          Error Encountered
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#2D3A47]">
          We apologize for the inconvenience
        </h1>
        <p className="text-sm text-[#2D3A47]/75 leading-relaxed">
          The requested page could not be displayed properly. You may refresh or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#B46A72] text-white text-xs font-medium tracking-wider rounded-full hover:bg-[#984E56] transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 border border-[#2D3A47]/20 text-[#2D3A47] text-xs font-medium tracking-wider rounded-full hover:bg-[#FFFDF9] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
