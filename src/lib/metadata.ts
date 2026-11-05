import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function constructMetadata({
  title,
  description,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
