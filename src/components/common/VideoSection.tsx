interface VideoSectionProps {
  title?: string;
  description?: string;
  placeholderText?: string;
}

export default function VideoSection({
  title = 'Wedding Cinematic Video Showcase',
  description = 'Original cinematic video footage and sample highlights.',
  placeholderText = 'Cinematic Wedding Video Player (Pending Video Asset Selection)',
}: VideoSectionProps) {
  return (
    <div className="my-8 border border-gray-300 rounded p-6 bg-white">
      {title && <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>}
      {description && <p className="text-xs text-gray-600 mb-4">{description}</p>}
      <div className="border border-dashed border-gray-400 bg-gray-50 rounded p-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
          Video Player Placeholder
        </span>
        <p className="text-xs text-gray-700 italic">{placeholderText}</p>
      </div>
    </div>
  );
}
