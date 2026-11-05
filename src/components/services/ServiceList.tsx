interface ServiceListProps {
  title: string;
  items: string[];
  description?: string;
}

export default function ServiceList({ title, items, description }: ServiceListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      <div className="border border-gray-300 rounded overflow-hidden bg-white">
        <ol className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <li key={idx} className="p-3.5 flex items-start gap-3 hover:bg-gray-50 text-sm">
              <span className="font-bold text-gray-400 text-xs mt-0.5 w-6">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
