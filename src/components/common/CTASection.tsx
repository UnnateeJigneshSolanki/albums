import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
}

export default function CTASection({
  title,
  description,
  ctaText,
  ctaLink,
  isExternal = false,
}: CTASectionProps) {
  return (
    <section className="my-10 p-6 border border-gray-300 bg-gray-50 rounded text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-4">{description}</p>
      {isExternal ? (
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 border border-gray-800 bg-white font-medium text-sm text-gray-900 rounded hover:bg-gray-100"
        >
          {ctaText} ↗
        </a>
      ) : (
        <Link
          href={ctaLink}
          className="inline-block px-5 py-2 border border-gray-800 bg-white font-medium text-sm text-gray-900 rounded hover:bg-gray-100"
        >
          {ctaText}
        </Link>
      )}
    </section>
  );
}
