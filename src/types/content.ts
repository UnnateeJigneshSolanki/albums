export interface VerificationItem {
  id: string;
  item: string;
  whatNeedsConfirmation: string;
  page?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imagePlaceholder?: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface ContactInfo {
  companyName: string;
  addressLines: string[];
  phoneNumbers: string[];
  emailAddresses: string[];
  hours?: string;
  needsVerification?: boolean;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required: boolean;
  options?: string[];
}
