import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  verificationNote?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  as: Component = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', className)}>
      <Component className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3A47]">
        {title}
      </Component>
      {subtitle && (
        <p className="mt-2 text-base text-[#2D3A47]/75 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
