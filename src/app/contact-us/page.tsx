import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/common/Breadcrumb';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { contactContent } from '@/content/pages/contact';
import { constructMetadata } from '@/lib/metadata';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Contact Us — Ultra Albums Mumbai Workshop & Design Studio',
  description: 'Connect with Ultra Albums in Dahisar East, Mumbai for custom photo albums, heirloom layflat books, and bespoke album design consultations.',
});

export default function ContactUsPage() {
  const { hero, contactDetails, form } = contactContent;

  return (
    <PageContainer className="py-12">
      <Breadcrumb items={[{ label: 'Contact Us', href: '/contact-us' }]} />

      <div className="mb-12">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
          {hero.label}
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#2D3A47] break-words">
          {hero.title}{' '}
          <span className="font-script-accent font-normal italic text-[#B46A72]">
            {hero.titleAccent}
          </span>
        </h1>
        {hero.subtitle && (
          <p className="text-base text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            {hero.subtitle}
          </p>
        )}
      </div>

      {/* Two Column Layout matching Page 7 of Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Studio Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address Card */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#2D3A47]">
              <div className="w-8 h-8 rounded-full bg-[#A8B58A]/30 flex items-center justify-center text-[#6D7F49] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-editorial text-base font-bold">{contactDetails.address.title}</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2D3A47]/80 space-y-1 pl-10 font-sans leading-relaxed">
              {contactDetails.address.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* Calling Card */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#2D3A47]">
              <div className="w-8 h-8 rounded-full bg-[#F7C8D3]/30 flex items-center justify-center text-[#B46A72] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-editorial text-base font-bold">{contactDetails.phone.title}</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2D3A47]/80 space-y-1.5 pl-10 font-sans">
              {contactDetails.phone.numbers.map((num, idx) => (
                <p key={idx}>
                  <a href={`tel:${num.replace(/\s+/g, '')}`} className="hover:text-[#B46A72] transition-colors font-medium">
                    {num}
                  </a>
                </p>
              ))}
              <p className="text-[11px] text-[#2D3A47]/60 pt-1">{contactDetails.phone.availability}</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#2D3A47]">
              <div className="w-8 h-8 rounded-full bg-[#A9B7C6]/30 flex items-center justify-center text-[#2D3A47] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="font-editorial text-base font-bold">{contactDetails.email.title}</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2D3A47]/80 space-y-1.5 pl-10 font-sans">
              {contactDetails.email.emails.map((email, idx) => (
                <p key={idx}>
                  <a href={`mailto:${email}`} className="hover:text-[#B46A72] transition-colors font-medium">
                    {email}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Connect */}
          <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <div>
                <p className="text-xs font-bold text-[#2D3A47]">{contactDetails.whatsapp.title}</p>
                <p className="text-[11px] text-[#2D3A47]/70">Chat with our design desk directly</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${contactDetails.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full shadow-xs transition-colors"
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Right Column: Send an Enquiry Card Form matching Mockup */}
        <div className="lg:col-span-7">
          <EnquiryForm
            title={form.title}
            description={form.description}
            fields={form.fields}
            submitButtonText="Submit Enquiry"
          />
        </div>
      </div>

      {/* Workshop Location Map Container */}
      <div className="mt-16 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#2D3A47]/10 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#6D7F49]" />
            <span className="text-xs font-semibold text-[#2D3A47]">
              Studio Hours: Mon – Sat &bull; 10:00 AM – 7:30 PM IST
            </span>
          </div>
          <span className="text-xs text-[#2D3A47]/60">Dahisar East, Mumbai, India</span>
        </div>

        <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden bg-[#E5E3DF] border border-[#2D3A47]/10 flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2D3A47_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white/90 backdrop-blur-xs rounded-2xl shadow-lg border border-[#2D3A47]/15 max-w-md">
            <div className="w-10 h-10 rounded-full bg-[#B46A72] flex items-center justify-center text-white mb-2 shadow-md animate-bounce">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-editorial text-base font-bold text-[#2D3A47]">
              Ultra Albums Workshop &amp; Studio
            </h4>
            <p className="text-xs text-[#2D3A47]/75 mt-1 font-sans">
              Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Highway, Dahisar East, Mumbai 400068
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
