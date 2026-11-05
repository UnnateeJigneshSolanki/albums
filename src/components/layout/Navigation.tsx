'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigationConfig } from '@/config/navigation';
import { NavDropdown, NavItem } from '@/types/navigation';
import { ChevronDown, ExternalLink } from 'lucide-react';

function isDropdown(item: NavItem | NavDropdown): item is NavDropdown {
  return 'items' in item;
}

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-[#2D3A47]">
      {navigationConfig.mainNav.map((item, idx) => {
        if (isDropdown(item)) {
          const isOpen = openDropdown === item.title;
          const isCurrentCategory = item.items.some((sub) => pathname === sub.href);

          return (
            <div
              key={idx}
              className="relative py-2"
              onMouseEnter={() => setOpenDropdown(item.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors hover:text-[#B46A72] py-1 cursor-pointer ${
                  isCurrentCategory ? 'text-[#B46A72] font-semibold' : 'text-[#2D3A47]'
                }`}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#B46A72]' : 'text-[#2D3A47]/60'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full pt-2 min-w-[240px] z-50 transition-all duration-200 ${
                  isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-[#FFFDF9] border border-[#2D3A47]/10 rounded-2xl shadow-xl p-2.5 space-y-0.5 backdrop-blur-sm">
                  {item.items.map((sub, sIdx) => {
                    const isActive = pathname === sub.href;
                    return (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        className={`block px-3.5 py-2 rounded-xl text-xs transition-colors ${
                          isActive
                            ? 'bg-[#F7C8D3]/40 text-[#2D3A47] font-semibold'
                            : 'text-[#2D3A47]/85 hover:bg-[#FFF7E6] hover:text-[#B46A72]'
                        }`}
                      >
                        {sub.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

        if (item.isExternal) {
          return (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors text-[#2D3A47]/80 hover:text-[#B46A72]"
            >
              <span>{item.title}</span>
              <ExternalLink className="w-3 h-3 text-[#2D3A47]/50" />
            </a>
          );
        }

        const isActive = pathname === item.href;
        return (
          <Link
            key={idx}
            href={item.href}
            className={`transition-colors py-1 ${
              isActive
                ? 'text-[#B46A72] font-semibold border-b-2 border-[#B46A72]'
                : 'text-[#2D3A47] hover:text-[#B46A72]'
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
