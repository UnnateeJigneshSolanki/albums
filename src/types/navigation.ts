export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface NavDropdown {
  title: string;
  items: NavItem[];
}

export type NavigationLink = NavItem | NavDropdown;

export interface NavigationConfig {
  mainNav: NavigationLink[];
  footerNav: {
    products: NavItem[];
    services: NavItem[];
    ukServices: NavItem[];
    company: NavItem[];
    standalone: NavItem[];
  };
}
