import { NavigationConfig } from '@/types/navigation';
import { siteConfig } from './site';

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About Us',
      href: '/about-us',
    },
    {
      title: 'Our Products',
      items: [
        { title: 'Our Products Overview', href: '/our-products' },
        { title: 'Flush Mount Album', href: '/flush-mount-album' },
        { title: 'Layflat', href: '/layflat' },
        { title: 'Photo Book', href: '/photo-book' },
        { title: 'Luxury Albums', href: '/luxury-albums' },
        { title: 'Box and Bags', href: '/box-and-bags' },
        { title: 'Slip-in Albums', href: '/slip-in-albums' },
      ],
    },
    {
      title: 'Services',
      items: [
        { title: 'Image Editing', href: '/image-editing' },
        { title: 'Wedding Photography', href: '/photography' },
        { title: 'Album Designing', href: '/album-designing' },
      ],
    },
    {
      title: 'UK',
      items: [
        { title: 'Flush Mount Album for UK', href: '/uk/flush-mount-album-for-uk' },
        { title: 'Luxury Albums for UK', href: '/uk/luxury-albums-for-uk' },
        { title: 'Box and Bags for UK', href: '/uk/box-and-bags-for-uk' },
        { title: 'Slip-in Albums for UK', href: '/uk/slip-in-albums-for-uk' },
        { title: 'Image Editing for UK', href: '/uk/image-editing-for-uk' },
        { title: 'Photo Book for UK', href: '/uk/photo-book-for-uk' },
        { title: 'Photography for UK', href: '/uk/photography-for-uk' },
      ],
    },
    {
      title: 'Album Designing',
      href: '/album-designing',
    },
    {
      title: 'Contact Us',
      href: '/contact-us',
    },
    {
      title: 'Pay Online',
      href: siteConfig.externalPaymentUrl,
      isExternal: true,
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
  ],
  footerNav: {
    products: [
      { title: 'Flush Mount Albums', href: '/flush-mount-album' },
      { title: 'Layflat Albums', href: '/layflat' },
      { title: 'Photo Books', href: '/photo-book' },
      { title: 'Luxury Albums', href: '/luxury-albums' },
      { title: 'Box and Bags', href: '/box-and-bags' },
      { title: 'Slip-in Albums', href: '/slip-in-albums' },
    ],
    services: [
      { title: 'Image Editing', href: '/image-editing' },
      { title: 'Wedding Photography', href: '/photography' },
      { title: 'Album Designing', href: '/album-designing' },
    ],
    ukServices: [
      { title: 'Flush Mount Album for UK', href: '/uk/flush-mount-album-for-uk' },
      { title: 'Luxury Albums for UK', href: '/uk/luxury-albums-for-uk' },
      { title: 'Box and Bags for UK', href: '/uk/box-and-bags-for-uk' },
      { title: 'Slip-in Albums for UK', href: '/uk/slip-in-albums-for-uk' },
      { title: 'Image Editing for UK', href: '/uk/image-editing-for-uk' },
      { title: 'Photo Book for UK', href: '/uk/photo-book-for-uk' },
      { title: 'Photography for UK', href: '/uk/photography-for-uk' },
    ],
    company: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/about-us' },
      { title: 'Contact Us', href: '/contact-us' },
      { title: 'Blogs', href: '/blogs' },
      { title: 'Pay Online (External)', href: siteConfig.externalPaymentUrl, isExternal: true },
    ],
    standalone: [
      { title: 'Wedding Photo Albums and Books', href: '/wedding-photo-albums' },
      { title: 'Wedding Album Designs', href: '/album-designs' },
    ],
  },
};
