'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig } from '@/config/navigation';
import { NavDropdown, NavItem } from '@/types/navigation';
import { Menu, X, ChevronDown, ExternalLink, ArrowRight } from 'lucide-react';

function isDropdown(item: NavItem | NavDropdown): item is NavDropdown {
  return 'items' in item;
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="p-2 text-[#2D3A47] hover:text-[#B46A72] focus:outline-hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 bg-[#2D3A47]/40 backdrop-blur-xs">
          <div className="bg-[#FFF7E6] max-h-[calc(100vh-73px)] overflow-y-auto px-6 py-6 border-b border-[#2D3A47]/10 shadow-2xl space-y-4">
            <div className="space-y-1">
              {navigationConfig.mainNav.map((item, idx) => {
                if (isDropdown(item)) {
                  const isExpanded = !!expandedSections[item.title];
                  return (
                    <div key={idx} className="border-b border-[#2D3A47]/5 py-2">
                      <button
                        type="button"
                        onClick={() => toggleSection(item.title)}
                        className="w-full flex items-center justify-between text-left text-base font-medium text-[#2D3A47] py-1"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#B46A72]' : 'text-[#2D3A47]/50'
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#B46A72]/30">
                          {item.items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={`block text-sm py-1 ${
                                pathname === sub.href
                                  ? 'text-[#B46A72] font-semibold'
                                  : 'text-[#2D3A47]/80 hover:text-[#B46A72]'
                              }`}
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.isExternal) {
                  return (
                    <div key={idx} className="border-b border-[#2D3A47]/5 py-2">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-base font-medium text-[#2D3A47]/80 hover:text-[#B46A72] py-1"
                      >
                        <span>{item.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#2D3A47]/50" />
                      </a>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="border-b border-[#2D3A47]/5 py-2">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium py-1 ${
                        pathname === item.href
                          ? 'text-[#B46A72] font-semibold'
                          : 'text-[#2D3A47] hover:text-[#B46A72]'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#B46A72] hover:bg-[#984E56] text-white text-sm font-semibold rounded-full shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
