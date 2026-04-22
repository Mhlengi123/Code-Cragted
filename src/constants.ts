/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  link: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'eco-store',
    title: 'EcoStore Marketplace',
    category: 'E-commerce',
    description: 'A fully functional sustainable products marketplace with payment integration and inventory management.',
    result: '+35% Online Sales in 4 months',
    tags: ['E-commerce', 'React', 'Node.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'luxe-beauty',
    title: 'Luxe Beauty Co.',
    category: 'Booking System',
    description: 'High-end aesthetic clinic platform with real-time slot management.',
    result: '+40% Online Bookings in 3 months',
    tags: ['Booking System', 'Next.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'swift-finance',
    title: 'Swift Finance Portfolio',
    category: 'FinTech',
    description: 'Wealth management dashboard with interactive data visualization.',
    result: 'Reduced load time by 60%',
    tags: ['FinTech', 'React', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'urban-eat',
    title: 'Urban Eat Delivery',
    category: 'Order System',
    description: 'Direct-to-consumer food delivery platform for urban kitchens.',
    result: '1,200+ monthly orders within launch quarter',
    tags: ['On-demand', 'Next.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'zen-yoga',
    title: 'Zen Yoga Studio',
    category: 'Corporate Site',
    description: 'SEO-driven digital identity for a local wellness group.',
    result: 'Page 1 rankings for 5 key search terms',
    tags: ['Wellness', 'SEO', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'tech-flow',
    title: 'TechFlow SaaS',
    category: 'SaaS',
    description: 'Marketing-led landing page for an AI automation tool.',
    result: '2.5x higher sign-up conversion rate',
    tags: ['SaaS', 'React', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'bakery-site',
    title: 'Artisan Bakery',
    category: 'Business Site',
    description: 'Visual-heavy digital catalog for a premium boutique bakery.',
    result: '+50% catering inquiries monthly',
    tags: ['Food', 'SEO', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 'build-corp',
    title: 'BuildCorp Group',
    category: 'Corporate',
    description: 'Authority-driven digital headquarters for a construction conglomerate.',
    result: 'Consolidated 4 legacy entities into 1 hub',
    tags: ['Construction', 'Enterprise', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    link: '#',
  }
];

export const ONE_TIME_PLANS: PricingPlan[] = [
  {
    name: 'Basic Business Website',
    price: 'R2,500 – R4,500',
    features: ['Up to 5 pages', 'Contact Form', 'Mobile Responsive', 'SEO Basics', '1 round of revisions'],
  },
  {
    name: 'Professional / E-commerce',
    price: 'R6,500 – R12,000',
    features: ['Up to 15 pages / Products', 'Payment Gateway', 'Advanced SEO', 'Product Management', '2 rounds of revisions'],
  },
  {
    name: 'Custom Web Application',
    price: 'R15,000+',
    features: ['Custom features', 'Database integration', 'User login', 'Scalable architecture', '3 rounds of revisions'],
  },
];

export const MAINTENANCE_PLANS: PricingPlan[] = [
  {
    name: 'Basic Care',
    price: 'R850 / mo',
    features: ['Weekly backups', 'Uptime monitoring', 'Security updates', '1 hour of small changes'],
  },
  {
    name: 'Pro Care',
    price: 'R1,500 / mo',
    features: ['Everything in Basic', 'Monthly performance report', '3 hours of changes', 'Plugin/theme updates'],
  },
  {
    name: 'Business Care',
    price: 'R2,800 / mo',
    features: ['Everything in Pro', '24/7 priority support', '6 hours of changes', 'Monthly SEO check', 'Content updates'],
  },
];
