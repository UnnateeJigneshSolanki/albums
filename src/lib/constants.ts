import { VerificationItem } from '@/types/content';

export const VERIFICATION_REGISTER: VerificationItem[] = [
  {
    id: 'company-timeline',
    item: 'Company timeline',
    whatNeedsConfirmation: 'Photography began in 2010; company founded in 2012; clarify the 2011 reference',
    page: '/about-us',
  },
  {
    id: 'about-us-design-paragraph',
    item: 'About Us design paragraph',
    whatNeedsConfirmation: 'Original text is corrupted/incomplete; confirm exact intended meaning before publication',
    page: '/about-us',
  },
  {
    id: 'team-details',
    item: 'Team',
    whatNeedsConfirmation: 'Confirm names, roles and current team photographs',
    page: '/about-us',
  },
  {
    id: 'studio-sample-offer',
    item: '10% studio sample offer',
    whatNeedsConfirmation: 'Confirm whether it is still active, eligibility and conditions',
    page: '/about-us',
  },
  {
    id: 'quality-guarantee',
    item: '100% quality guarantee',
    whatNeedsConfirmation: 'Confirm exact scope and terms for relevant album pages',
    page: '/flush-mount-album',
  },
  {
    id: 'flush-mount-thickness',
    item: 'Flush mount thickness',
    whatNeedsConfirmation: 'Confirm board, print and final page measurements (0.5 mm - 1 mm board, 1 mm standard / 1.5 mm extra-thick)',
    page: '/flush-mount-album',
  },
  {
    id: 'photo-paper',
    item: 'Photo paper',
    whatNeedsConfirmation: 'Confirm current paper name (Fujifilm Crystal Archive) and finish (lustre)',
    page: '/flush-mount-album',
  },
  {
    id: 'photo-book-sizes',
    item: 'Photo book sizes',
    whatNeedsConfirmation: 'Confirm units, current availability and whether sizes (6x8, 9x12, 12x18) apply to all variants',
    page: '/photo-book',
  },
  {
    id: 'slip-in-capacity',
    item: 'Slip-in capacity',
    whatNeedsConfirmation: 'Confirm whether up to 300 photos applies to every variant or only a particular model',
    page: '/slip-in-albums',
  },
  {
    id: 'box-materials',
    item: 'Box materials',
    whatNeedsConfirmation: 'Confirm Pearl and Carbon Buckram wording and material names',
    page: '/box-and-bags',
  },
  {
    id: 'box-sizes',
    item: 'Box sizes',
    whatNeedsConfirmation: 'Confirm 10x10 and 12x12 thresholds and current availability',
    page: '/box-and-bags',
  },
  {
    id: 'packaging-policy',
    item: 'Packaging',
    whatNeedsConfirmation: 'Confirm standard soft leather bag, upgrade choices and independent-purchase restriction',
    page: '/box-and-bags',
  },
  {
    id: 'image-editing-services',
    item: 'Image editing',
    whatNeedsConfirmation: 'Confirm current service list and 10+ years experience claim',
    page: '/image-editing',
  },
  {
    id: 'free-sample',
    item: 'Free sample',
    whatNeedsConfirmation: 'Confirm eligibility, number of sample raw files (1 or 2) and file-transfer method',
    page: '/image-editing',
  },
  {
    id: 'album-designing-policy',
    item: 'Album designing',
    whatNeedsConfirmation: 'Confirm six to seven themes, free design service and unlimited revisions claim',
    page: '/album-designing',
  },
  {
    id: 'photography-team',
    item: 'Photography team',
    whatNeedsConfirmation: 'Confirm 15+ team size and current national coverage',
    page: '/photography',
  },
  {
    id: 'uk-services',
    item: 'UK services',
    whatNeedsConfirmation: 'Confirm service locations, response times, package availability and UK-specific terms',
    page: '/uk/*',
  },
  {
    id: 'contact-details',
    item: 'Contact details',
    whatNeedsConfirmation: 'Confirm address, phone numbers (+91-93222 54315, +91-93200 54315) and email addresses',
    page: '/contact-us',
  },
  {
    id: 'pay-online-url',
    item: 'Pay Online',
    whatNeedsConfirmation: 'Confirm current external payment destination URL',
    page: 'Navigation / Pay Online',
  },
  {
    id: 'blogs-articles',
    item: 'Blogs',
    whatNeedsConfirmation: 'Confirm whether individual blog articles are available or to be migrated',
    page: '/blogs',
  },
];

export const DEFAULT_CONTACT_FORM_FIELDS = [
  { name: 'name', label: 'Name', type: 'text' as const, required: true, placeholder: 'Your Name' },
  { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true, placeholder: 'Your Phone Number' },
  { name: 'email', label: 'Email', type: 'email' as const, required: true, placeholder: 'Your Email Address' },
  { name: 'country', label: 'Country', type: 'text' as const, required: false, placeholder: 'Your Country' },
  { name: 'message', label: 'Message', type: 'textarea' as const, required: true, placeholder: 'How can we help you?' },
];
