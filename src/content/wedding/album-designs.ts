import { FormFieldConfig } from '@/types/content';

export const albumDesignsContent = {
  title: 'Wedding Album Designs',
  introParagraphs: [
    'A wedding is an intricate tapestry of emotion, tradition, laughter, and family bonds. While thousands of digital photographs capture individual seconds, an artfully composed album synthesizes those moments into an unforgettable cinematic story.',
    'At Ultra Albums, our full-time in-house design team crafts custom album layouts from scratch. We do not use automated drop-in software or cookie-cutter templates. Instead, our designers study your photography collection, establishing harmonious pacing, narrative suspense, and emotional resonance across every page.',
    'We specialize in both grand traditional Indian wedding albums—honoring multi-day rituals from Haldi to Baraat—and understated contemporary Western editorial layouts with expansive negative space.',
    'Whether you come with an exact aesthetic vision or look to our design directors for guidance, we guide you through curated themes, typography treatments, and interactive digital proofs until your layout is absolutely flawless.',
  ],
  designCategories: [
    {
      id: 'indian-classic',
      title: 'Indian Wedding Grandeur Design',
      description: 'Culturally harmonious layouts incorporating ceremonial sequences, vibrant mandap details, haldi, mehendi, and high-energy baraat festivities with rich ornamental framing.',
      caption: 'Indian Wedding Classic Album Design Showcase',
      galleryPlaceholders: [
        'Indian Wedding Grandeur — Mandap pheras ceremony double-spread',
        'Indian Wedding Grandeur — Bridal portraits & intricate jewellery details',
        'Indian Wedding Grandeur — Baraat & sangeet montage sequence layout',
      ],
    },
    {
      id: 'western-classic',
      title: 'Western Contemporary & Fine Art Design',
      description: 'Clean, airy editorial layouts emphasizing generous white margins, intimate natural light portraiture, ceremony vows, and reception toast storytelling.',
      caption: 'Western Wedding Contemporary & Classic Design Showcase',
      galleryPlaceholders: [
        'Western Fine Art — Vow exchange & cathedral exit double spread',
        'Western Fine Art — Romantic golden hour outdoor couple portraits',
        'Western Fine Art — Reception candlelit dinner & first dance spreads',
      ],
    },
  ],
  designGallery: {
    title: 'Wedding Album Design Gallery',
    caption: 'Curated layout spreads crafted by Ultra Albums designers across diverse celebrations and themes.',
    placeholders: [
      'Design Spread 1 — Full-bleed double page panoramic spread',
      'Design Spread 2 — Multi-frame storytelling sequence with golden borders',
      'Design Spread 3 — Minimalist typography and hero bridal portrait',
      'Design Spread 4 — Emotional family group composition with clean spacing',
      'Design Spread 5 — Dramatic monochrome & contrast celebration layout',
      'Design Spread 6 — Color-blocked thematic sangeet performance spread',
    ],
  },
  contactForm: {
    title: 'Request a Custom Album Design Consultation',
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone Number', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Email Address', required: true },
      { name: 'message', label: 'Design Preferences', type: 'textarea', placeholder: 'Share your desired theme (Indian Grandeur, Contemporary Minimalist, Editorial) or questions', required: true },
    ] as FormFieldConfig[],
    submitButtonText: 'Send Design Inquiry',
  },
};
