'use client';

import { FormFieldConfig } from '@/types/content';

interface FormFieldProps {
  config: FormFieldConfig;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function FormField({ config, value, onChange }: FormFieldProps) {
  const { name, label, type, placeholder, required, options } = config;
  const id = `field-${name}`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold text-[#2D3A47]">
        {label} {required && <span className="text-[#B46A72]">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-[#FFF7E6]/40 border border-[#2D3A47]/15 rounded-xl p-3 text-xs sm:text-sm text-[#2D3A47] placeholder-[#2D3A47]/40 focus:outline-hidden focus:border-[#B46A72] focus:ring-1 focus:ring-[#B46A72] transition-colors"
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full bg-[#FFF7E6]/40 border border-[#2D3A47]/15 rounded-xl p-3 text-xs sm:text-sm text-[#2D3A47] focus:outline-hidden focus:border-[#B46A72] focus:ring-1 focus:ring-[#B46A72] transition-colors"
        >
          <option value="">Select an option</option>
          {options?.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-[#FFF7E6]/40 border border-[#2D3A47]/15 rounded-xl p-3 text-xs sm:text-sm text-[#2D3A47] placeholder-[#2D3A47]/40 focus:outline-hidden focus:border-[#B46A72] focus:ring-1 focus:ring-[#B46A72] transition-colors"
        />
      )}
    </div>
  );
}
