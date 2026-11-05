import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/common/Breadcrumb';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { blogsContent } from '@/content/pages/blogs';
import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Journal — Wedding Album Design & Print Insights',
  description: 'Expert insights on wedding album curation, fine art bookbinding, print preservation, and professional photo retouching from Ultra Albums Mumbai.',
});

export default function BlogsPage() {
  const { hero, featuredArticles, contactForm } = blogsContent;

  return (
    <PageContainer className="py-12">
      <Breadcrumb items={[{ label: 'Journal', href: '/blogs' }]} />

      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
          {hero.label}
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#2D3A47] leading-tight">
          {hero.title}{' '}
          <span className="font-script-accent font-normal italic text-[#B46A72] block sm:inline">
            {hero.titleAccent}
          </span>
        </h1>
        <p className="text-base text-[#2D3A47]/75 mt-3 font-sans leading-relaxed">
          {hero.subtitle}
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {featuredArticles.map((article) => (
          <article
            key={article.id}
            className="group bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full aspect-16/10 overflow-hidden bg-[#F6EFE6]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-[#B46A72] px-2.5 py-1 rounded-full">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] text-[#2D3A47]/60 mb-2 font-medium">
                  <span>{article.date}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-editorial text-xl font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors leading-snug mb-2">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#2D3A47]/75 leading-relaxed font-sans">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-[#2D3A47]/5">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B46A72] group-hover:text-[#984E56] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Editor Contact / Topic Request Form */}
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title={contactForm.title}
          description={contactForm.description}
          fields={contactForm.fields}
          submitButtonText={contactForm.submitButtonText}
        />
      </div>
    </PageContainer>
  );
}
