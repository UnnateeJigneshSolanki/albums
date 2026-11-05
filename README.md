# Ultraa Albums — Multi-Page Website

A multi-page website for **Ultraa Albums** built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## 1. Project Overview

Ultraa Albums is an album-designing and manufacturing company based in Dahisar East, Mumbai, India, serving photographers and couples across India and internationally.

This project implements:
- Clean Next.js App Router structure inside `src/app`.
- Full separation of website content (`src/content/`) from presentation components (`src/components/`).
- Independent routes for all original pages, including seven standalone UK-specific pages.
- External routing configuration for the "Pay Online" payment gateway.
- Full type safety using TypeScript interfaces for navigation, products, services, and content.
- Preservation of original content, wording, specifications, and verification notices without premature visual styling.

---

## 2. Directory Architecture

```
ultra-albums/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── home/
│   │   ├── about/
│   │   ├── products/
│   │   │   ├── flush-mount/
│   │   │   ├── layflat/
│   │   │   ├── photo-book/
│   │   │   ├── luxury-albums/
│   │   │   ├── box-and-bags/
│   │   │   └── slip-in/
│   │   ├── services/
│   │   │   ├── image-editing/
│   │   │   ├── photography/
│   │   │   └── album-designing/
│   │   ├── uk/
│   │   ├── wedding/
│   │   ├── team/
│   │   ├── galleries/
│   │   └── icons/
│   ├── fonts/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── loading.tsx
│   │   ├── about-us/page.tsx
│   │   ├── our-products/page.tsx
│   │   ├── flush-mount-album/page.tsx
│   │   ├── layflat/page.tsx
│   │   ├── photo-book/page.tsx
│   │   ├── luxury-albums/page.tsx
│   │   ├── box-and-bags/page.tsx
│   │   ├── slip-in-albums/page.tsx
│   │   ├── image-editing/page.tsx
│   │   ├── photography/page.tsx
│   │   ├── album-designing/page.tsx
│   │   ├── uk/
│   │   │   ├── flush-mount-album-for-uk/page.tsx
│   │   │   ├── luxury-albums-for-uk/page.tsx
│   │   │   ├── box-and-bags-for-uk/page.tsx
│   │   │   ├── slip-in-albums-for-uk/page.tsx
│   │   │   ├── image-editing-for-uk/page.tsx
│   │   │   ├── photo-book-for-uk/page.tsx
│   │   │   └── photography-for-uk/page.tsx
│   │   ├── wedding-photo-albums/page.tsx
│   │   ├── album-designs/page.tsx
│   │   ├── contact-us/page.tsx
│   │   └── blogs/page.tsx
│   │
│   ├── components/
│   │   ├── layout/ (Header, Footer, Navigation, MobileNavigation, PageContainer)
│   │   ├── common/ (SectionHeading, Breadcrumb, CTASection, ContactForm, ImageGallery, BeforeAfter, VideoSection, WhatsAppButton)
│   │   ├── home/ (HeroSection, AlbumCategories, ProductOverview, ServicesOverview, WorkProcess, WhyChooseUs, HomeContact)
│   │   ├── products/ (ProductCard, ProductGrid, ProductHero, ProductFeatures, CoverOptions, CoverCard, ProductGallery)
│   │   ├── services/ (ServiceHero, ServiceCard, ServiceList, ServiceGallery)
│   │   ├── about/ (CompanyIntroduction, TeamSection, WhyChooseUs)
│   │   ├── wedding/ (WeddingAlbumCategories, WeddingGallery, AlbumDesignGallery)
│   │   └── forms/ (EnquiryForm, FormField)
│   │
│   ├── content/
│   │   ├── pages/ (home.ts, about.ts, contact.ts, blogs.ts)
│   │   ├── products/ (flush-mount.ts, layflat.ts, photo-book.ts, luxury-albums.ts, box-and-bags.ts, slip-in.ts)
│   │   ├── services/ (image-editing.ts, photography.ts, album-designing.ts)
│   │   ├── uk/ (flush-mount.ts, luxury-albums.ts, box-and-bags.ts, slip-in.ts, image-editing.ts, photo-book.ts, photography.ts)
│   │   └── wedding/ (wedding-photo-albums.ts, album-designs.ts)
│   │
│   ├── config/ (navigation.ts, products.ts, services.ts, site.ts)
│   ├── lib/ (utils.ts, constants.ts, metadata.ts)
│   └── types/ (product.ts, service.ts, navigation.ts, content.ts)
│
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 3. Implemented Routes & Destinations

| URL Slug | Page Title | Category |
| :--- | :--- | :--- |
| `/` | Home | Main |
| `/about-us` | About Us — Ultraa Album | Main |
| `/our-products` | Our Products | Main / Overview |
| `/flush-mount-album` | Flush Mount Albums | Product |
| `/layflat` | Layflat Albums | Product |
| `/photo-book` | Photo Book | Product |
| `/luxury-albums` | Luxury Albums | Product |
| `/box-and-bags` | Box and Bags | Product |
| `/slip-in-albums` | Slip-in Albums | Product |
| `/image-editing` | Image Editing Services | Service |
| `/photography` | Wedding Photography Services | Service |
| `/album-designing` | Professional Album Designs | Service |
| `/uk/flush-mount-album-for-uk` | Flush Mount Album for UK | UK Standalone |
| `/uk/luxury-albums-for-uk` | Luxury Albums for UK | UK Standalone |
| `/uk/box-and-bags-for-uk` | Box and Bags for UK | UK Standalone |
| `/uk/slip-in-albums-for-uk` | Slip-in Albums for UK | UK Standalone |
| `/uk/image-editing-for-uk` | Image Editing for UK | UK Standalone |
| `/uk/photo-book-for-uk` | Photo Book for UK | UK Standalone |
| `/uk/photography-for-uk` | Photography for UK | UK Standalone |
| `/wedding-photo-albums` | Wedding Photo Albums and Books | Standalone |
| `/album-designs` | Wedding Album Designs | Standalone |
| `/contact-us` | Contact Us | Main |
| `/blogs` | Our Blogs | Main |
| *External Destination* | Pay Online (PayPal URL) | Payment (External) |

---

## 4. Development & Build

Run development server:
```bash
npm run dev
```

Run production build:
```bash
npm run build
```

Run linter:
```bash
npm run lint
```
