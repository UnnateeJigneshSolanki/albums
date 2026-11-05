'use client';

import { useState, FormEvent } from 'react';
import { FormFieldConfig } from '@/types/content';
import FormField from './FormField';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EnquiryFormProps {
  title?: string;
  description?: string;
  fields: FormFieldConfig[];
  submitButtonText?: string;
  verificationNote?: string;
}

export default function EnquiryForm({
  title = 'Send an Enquiry',
  description = 'Fill out the form below and our album design specialists will connect within 24 hours.',
  fields,
  submitButtonText = 'Submit Enquiry',
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#2D3A47]/10 shadow-lg">
      <div className="mb-6">
        <h3 className="font-editorial text-2xl font-bold text-[#2D3A47]">{title}</h3>
        {description && (
          <p className="text-xs sm:text-sm text-[#2D3A47]/70 mt-1 font-sans">
            {description}
          </p>
        )}
      </div>

      {submitted ? (
        <div className="p-8 bg-[#F1F4ED] border border-[#A8B58A]/40 rounded-2xl text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-[#6D7F49] mx-auto mb-2" />
          <h4 className="font-editorial text-lg font-bold text-[#2D3A47]">
            Thank You for Your Enquiry
          </h4>
          <p className="text-xs text-[#2D3A47]/75 font-sans max-w-sm mx-auto">
            Our team has received your message. We will review your request and get in touch with you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((field) => (
              <div
                key={field.name}
                className={field.type === 'textarea' ? 'sm:col-span-2' : ''}
              >
                <FormField
                  config={field}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6D7F49] hover:bg-[#556436] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>{submitButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
