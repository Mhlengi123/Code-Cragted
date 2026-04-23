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

export interface Feature {
  text: string;
  detail: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: Feature[];
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
    features: [
      { text: 'Up to 5 strategic pages', detail: 'Engineering of core landing and information pages optimized for conversion and brand authority.' },
      { text: 'Contact Form Integration', detail: 'Custom-built secure lead capture forms with automated email delivery systems.' },
      { text: 'Mobile-Responsive UI', detail: 'Fully fluid interface that maintains technical and visual integrity across all modern mobile and tablet devices.' },
      { text: 'SEO Foundation', detail: 'Technical on-page optimization including semantic markup, meta-tagging, and site architecture analysis.' },
      { text: '1 Refinement Cycle', detail: 'Post-deployment review phase to ensure all technical and aesthetic specifications are met.' }
    ],
  },
  {
    name: 'Professional / E-commerce',
    price: 'R6,500 – R12,000',
    features: [
      { text: 'Up to 15 pages / Products', detail: 'Scalable infrastructure designed for product catalogs or deep informational hierarchies.' },
      { text: 'Secure Payment Gateway', detail: 'Integration with trusted payment providers (Stripe, Payfast) using industry-standard encryption.' },
      { text: 'Advanced Technical SEO', detail: 'Enhanced schema markup, keyword mapping, and performance-based SEO auditing.' },
      { text: 'E-commerce Management', detail: 'Intuitive administrative dashboard for managing inventory, orders, and customer data.' },
      { text: '2 Refinement Cycles', detail: 'Extended testing and feedback loops to ensure complex e-commerce logic is perfectly synchronized.' }
    ],
  },
  {
    name: 'Custom Web Application',
    price: 'R15,000+',
    features: [
      { text: 'Bespoke Logic & Features', detail: 'Development of unique functional requirements matching your specific business logic.' },
      { text: 'Enterprise Database Systems', detail: 'Robust, secure database architecture designed for data integrity and rapid retrieval.' },
      { text: 'Secure User Authentication', detail: 'Multi-layered login systems with role-based access control and data protection.' },
      { text: 'Cloud-Scalable Architecture', detail: 'Built on modern infrastructure (Firebase, AWS) that grows dynamically with your user base.' },
      { text: '3 Refinement Cycles', detail: 'Iterative development approach with multiple validation stages for mission-critical software.' }
    ],
  },
];

export const MAINTENANCE_PLANS: PricingPlan[] = [
  {
    name: 'Basic Care',
    price: 'R850 / mo',
    features: [
      { text: 'Weekly Cloud Backups', detail: 'Automated off-site storage of your entire digital asset to ensure rapid recovery from data loss.' },
      { text: '24/7 Uptime Monitoring', detail: 'Continuous active polling of your server state with instant notification of downtime events.' },
      { text: 'Core Security Updates', detail: 'Proactive patching of CMS cores, security patches, and server-side dependencies.' },
      { text: '1hr Technical Tweaks', detail: 'Dedicated engineering time for minor updates, content adjustments, or style refinements.' }
    ],
  },
  {
    name: 'Pro Care',
    price: 'R1,500 / mo',
    features: [
      { text: 'All Basic Care Features', detail: 'Full inclusion of backups, monitoring, and standard security patching.' },
      { text: 'Performance Analytics', detail: 'Deep-dive monthly report on page speed, conversion rates, and user engagement metrics.' },
      { text: '3hrs Technical Alignment', detail: 'Expanded engineering bandwidth for ongoing feature enhancements or optimizations.' },
      { text: 'Stack Updates', detail: 'Manual review and update of all third-party plugins, themes, and API integrations.' }
    ],
  },
  {
    name: 'Business Care',
    price: 'R2,800 / mo',
    features: [
      { text: 'All Pro Care Features', detail: 'Comprehensive management including full performance auditing and stack updates.' },
      { text: 'Priority Strategic Support', detail: 'Guaranteed sub-4 hour response time for critical technical inquiries or urgent updates.' },
      { text: '6hrs Strategic Development', detail: 'Significant monthly engineering allocation for scaling features or system expansions.' },
      { text: 'Deep SEO Auditing', detail: 'Monthly review of search rankings, competitor analysis, and technical SEO health.' }
    ],
  },
];
