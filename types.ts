
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface Lead {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}

export interface NavItem {
  label: string;
  path: string;
}
