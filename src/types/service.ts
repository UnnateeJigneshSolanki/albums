export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  description: string[];
  serviceList?: string[];
  features?: string[];
  designThemes?: Array<{ name: string; description: string; tag: string }>;
  videoSamples?: Array<{ title: string; duration: string; theme: string }>;
  detailedServices?: Array<{ title: string; description: string }>;
  offer?: {
    title: string;
    description: string;
    needsVerification?: boolean;
  };
  teamDetails?: {
    size: string;
    description: string;
    needsVerification?: boolean;
  };
  styles?: string[];
  coverageDetails?: string[];
  themesAndRevisions?: {
    themesCount?: string;
    previewProcess?: string;
    pricingNote?: string;
    needsVerification?: boolean;
  };
  galleryPlaceholders?: string[];
  verificationNotes?: string[];
}
