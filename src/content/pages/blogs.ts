import { FormFieldConfig } from '@/types/content';
import { siteImages } from '@/lib/images';

export const blogsContent = {
  hero: {
    label: 'STORIES & INSIGHTS',
    title: 'The Ultra Albums Journal',
    titleAccent: 'Inspiration & Advice',
    subtitle: 'Expert insights on wedding album curation, fine art bookbinding, print preservation, and professional photo retouching from our Mumbai studio.',
  },

  featuredArticles: [
    {
      id: 'choosing-flush-mount-vs-layflat',
      title: 'Flush Mount vs. Layflat Albums: Which Format Best Fits Your Wedding Story?',
      category: 'Album Guide',
      readTime: '4 min read',
      excerpt: 'Explore the key architectural differences between thick archival flush mount boards and lighter layflat spreads to select the perfect keepsake for your celebrations.',
      image: siteImages.products.flushMount.openSpread,
      date: 'November 2026',
    },
    {
      id: 'curating-wedding-photos',
      title: 'How to Select the Perfect 100 Photos for Your Wedding Album',
      category: 'Design & Curation',
      readTime: '6 min read',
      excerpt: 'Our Head of Design shares practical advice on storytelling pacing, balancing ceremonial portraits with spontaneous candid moments, and avoiding visual fatigue.',
      image: siteImages.services.albumDesigning.westernEditorialSpread,
      date: 'October 2026',
    },
    {
      id: 'preservation-and-care',
      title: 'Heirloom Care: Protecting Your Silver Halide Prints for Generations',
      category: 'Care & Archival',
      readTime: '5 min read',
      excerpt: 'Learn the optimal temperature, humidity, and handling practices to preserve your leather covers, gold foil embossing, and silver halide photographic paper pristine.',
      image: siteImages.products.luxuryAlbums.cover,
      date: 'September 2026',
    },
  ],

  contactForm: {
    title: 'Have a Topic or Question in Mind?',
    description: 'Looking for advice on custom sizing, cover swatches, or retouching techniques? Reach out to our editors.',
    fields: [
      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Your Name', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
      { name: 'topic', label: 'Subject or Inquiry', type: 'text', placeholder: 'e.g. Inquiring about cover swatches', required: true },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Write your message...', required: true },
    ] as FormFieldConfig[],
    submitButtonText: 'Send to Editors',
  },
};
