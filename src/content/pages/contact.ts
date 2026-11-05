import { FormFieldConfig } from '@/types/content';

export const contactContent = {
  hero: {
    label: 'GET IN TOUCH',
    title: 'Let’s Create Your Heirloom',
    titleAccent: 'Together',
    subtitle: 'Have a question about our album formats, custom sizing, design themes, or international shipping? Our team in Mumbai is here to help.',
  },

  contactDetails: {
    address: {
      title: 'Our Workshop & Studio',
      lines: [
        'Shree Krishna Ind. Estate, Near Toll Naka,',
        '211, Western Express Highway,',
        'Dahisar East, Mumbai 400068, India.',
      ],
      mapNote: 'Conveniently situated along Western Express Highway in Mumbai.',
    },
    phone: {
      title: 'Direct Calls & Inquiries',
      numbers: ['+91-93222 54315', '+91-93200 54315'],
      availability: 'Mon – Sat, 10:00 AM – 7:30 PM IST',
    },
    email: {
      title: 'Email Correspondence',
      emails: ['ultraaalbums@gmail.com', 'ultraadesignes@gmail.com'],
      responseTime: 'We respond to all email inquiries within 24 business hours.',
    },
    whatsapp: {
      title: 'Instant WhatsApp Assistance',
      number: '919322254315',
      label: 'Chat Directly on WhatsApp',
    },
  },

  form: {
    title: 'Send Us an Enquiry',
    description: 'Share your event details, album preferences, or photography project requirements below.',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your Name', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
      { name: 'country', label: 'Country / City', type: 'text', placeholder: 'e.g. Mumbai, India or London, UK', required: false },
      {
        name: 'service',
        label: 'Interested In',
        type: 'select',
        required: true,
        options: [
          'Flush Mount Albums',
          'Layflat Albums',
          'Photo Books',
          'Luxury Albums & Wooden Caskets',
          'Boxes & Presentation Bags',
          'Slip-in Albums',
          'Album Designing Services',
          'Image Editing & Retouching',
          'Wedding Photography & Videography',
          'Studio Sample Demonstration Kit',
        ],
      },
      { name: 'message', label: 'Message & Project Details', type: 'textarea', placeholder: 'Tell us about your wedding date, approximate photo count, or cover preferences...', required: true },
    ] as FormFieldConfig[],
    submitButtonText: 'Submit Enquiry',
  },

  faq: [
    {
      question: 'How do I submit photos for an album order?',
      answer: 'You can upload your high-resolution photographs via Google Drive, Dropbox, WeTransfer, or hard drive. Once received, our design team reviews your files and initiates your custom layout.',
    },
    {
      question: 'Can I request revisions to the album layout?',
      answer: 'Yes! We provide digital soft proofs for your inspection before any printing begins. We work closely with you until you are completely thrilled with every spread.',
    },
    {
      question: 'Do you deliver internationally?',
      answer: 'Yes, we safely ship our albums worldwide using reinforced multi-layer protective packaging engineered to prevent edge or corner damage during transit.',
    },
  ],
};
