'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#FFF7E6] text-[#2D3A47] p-6 font-sans">
        <div className="max-w-md text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B46A72] font-semibold">
            Ultra Albums
          </span>
          <h2 className="text-2xl font-serif text-[#2D3A47]">Something went wrong</h2>
          <p className="text-sm text-[#2D3A47]/70">
            We encountered an unexpected issue while rendering this page.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2.5 bg-[#B46A72] text-white text-xs tracking-wider rounded-full hover:bg-[#984E56] transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
