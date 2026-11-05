export interface ProductSpecification {
  label: string;
  value: string;
  needsVerification?: boolean;
}

export interface CoverOption {
  title: string;
  description: string;
  features?: string[];
  imagePlaceholder?: string;
  needsVerification?: boolean;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string[];
  specifications?: ProductSpecification[];
  features?: ProductFeature[];
  coverOptions?: CoverOption[];
  carryOptions?: string[];
  packagingNote?: string;
  displayBoxesAndCarryCases?: {
    displayBoxes?: string;
    carryCases?: string;
    needsVerification?: boolean;
  };
  galleryPlaceholders?: string[];
  qualityGuarantee?: string;
  verificationNotes?: string[];
}
