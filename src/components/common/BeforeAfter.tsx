'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { siteImages } from '@/lib/images';

interface SamplePair {
  id: number;
  label: string;
  beforePlaceholder?: string;
  afterPlaceholder?: string;
  beforeImage?: string;
  afterImage?: string;
}

interface BeforeAfterProps {
  title?: string;
  description?: string;
  samples?: SamplePair[];
}

export default function BeforeAfter({
  title = 'Interactive Before & After Retouching',
  description = 'Drag the slider below to inspect our digital skin retouching, jewellery enhancement, and balanced tone grading.',
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="my-16">
      <div className="mb-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
          RESTORATION &amp; RETOUCHING
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {/* Interactive Slider matching Page 5 of Mockup */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full max-w-3xl mx-auto aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#2D3A47]/15 cursor-ew-resize select-none bg-[#1E2730]"
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0">
          <Image
            src={siteImages.services.imageEditing.bridalAfter}
            alt="After Retouching"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 768px"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs text-[#2D3A47] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
            After Retouching
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <Image
              src={siteImages.services.imageEditing.bridalBefore}
              alt="Before Retouching"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />
            {/* Tone simulation for before state */}
            <div className="absolute inset-0 bg-[#5C3D1E]/10 mix-blend-multiply" />
          </div>
          <div className="absolute bottom-4 left-4 bg-[#2D3A47]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
            Original / Before
          </div>
        </div>

        {/* Draggable Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#2D3A47] shadow-xl border border-[#2D3A47]/20 flex items-center justify-center text-xs font-bold">
            &larr;&rarr;
          </div>
        </div>
      </div>

      {/* Editing Services Pills Bar matching Mockup */}
      <div className="mt-12 bg-[#FFFDF9] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs">
        <h3 className="font-editorial text-lg font-bold text-[#2D3A47] mb-4 text-center sm:text-left">
          Core Editing Specializations
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium text-[#2D3A47]">
          {[
            'Colour Correction',
            'Skin Retouching',
            'Object Removal',
            'Scratch & Dust Repair',
            'Background Editing',
            'E-commerce Editing',
            'Video Editing',
            'High-End Glamour',
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF7E6] border border-[#2D3A47]/10"
            >
              <div className="w-4 h-4 rounded-full bg-[#A8B58A] flex items-center justify-center text-white text-[10px] shrink-0 font-bold">
                ✓
              </div>
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
