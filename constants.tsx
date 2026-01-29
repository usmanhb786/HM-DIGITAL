
import React from 'react';
import { Service, PortfolioItem, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "HM Digital Solutions",
  whatsapp: "+923225700804",
  email: "hmvisuals804@gmail.com",
  address: "12 Haseeb Block, Chenab Road, Azam Garden, Multan Road, Lahore.",
  waLink: "https://wa.me/923225700804?text=Hi%20HM%20Digital%20Solutions%2C%20I%20need%20help%20with%20a%20quote."
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" }
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "High-performance, responsive websites built with modern frameworks to scale your business.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600",
    icon: "🌐"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centric interfaces that combine aesthetics with functionality for a seamless experience.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600",
    icon: "🎨"
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Strategic SEO to boost your visibility and drive organic growth globally.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    icon: "🚀"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Crafting unique brand voices and visual identities that resonate with your target audience.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1600",
    icon: "✨"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Results-driven marketing campaigns across social media and search engines.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600",
    icon: "📈"
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Custom iOS and Android applications designed for reliability and performance.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600",
    icon: "📱"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Compelling visuals and copy that tell your brand's unique story effectively.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600",
    icon: "✍️"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: "p1", title: "Luxury Real Estate", category: "Web Development", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: "p2", title: "Fintech App Interface", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { id: "p3", title: "Global Logistics Brand", category: "Identity", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { id: "p4", title: "E-commerce Redesign", category: "Web Development", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800" },
  { id: "p5", title: "Social Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
  { id: "p6", title: "Fitness Tracking App", category: "Mobile", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" }
];
