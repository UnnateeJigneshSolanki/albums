import Link from 'next/link';
import { ServiceListingItem } from '@/config/services';

interface ServiceCardProps {
  service: ServiceListingItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="border border-gray-300 rounded p-6 bg-white flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold text-gray-400 block mb-1">
          Service 0{index + 1}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <Link href={service.href} className="hover:underline">
            {service.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {service.shortDescription}
        </p>
      </div>
      <div>
        <Link
          href={service.href}
          className="text-xs font-semibold text-gray-900 border border-gray-400 px-3 py-1.5 rounded hover:bg-gray-100 inline-block"
        >
          View Service Details →
        </Link>
      </div>
    </div>
  );
}
