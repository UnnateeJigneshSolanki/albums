import { ContactInfo } from '@/types/content';

export const siteConfig = {
  name: 'Ultraa Albums',
  description: 'Photo album manufacturing, album design and professional photography services based in Mumbai, India, serving clients worldwide.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ultraaalbums.com',
  externalPaymentUrl: process.env.NEXT_PUBLIC_PAYPAL_URL || 'https://www.paypal.com',
  contact: {
    companyName: 'Ultraa Albums',
    addressLines: [
      'Shree Krishna Ind. Estate,',
      'Near Toll Naka, 211, Western Express Highway,',
      'Dahisar East, Mumbai 400068, India.',
    ],
    phoneNumbers: [
      '+91-93222 54315',
      '+91-93200 54315',
    ],
    emailAddresses: [
      'ultraaalbums@gmail.com',
      'ultraadesignes@gmail.com',
    ],
    needsVerification: true,
  } as ContactInfo,
  founderTeam: [
    { name: 'Rajiv Panchal', role: 'Founder' },
    { name: 'Mayank Panchal', role: 'Co-Founder' },
    { name: 'Bhairavi Panchal', role: 'Head of Designing Department' },
  ],
};
