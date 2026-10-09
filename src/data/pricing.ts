export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  ctaText: string;
  ctaHref: string;
};

export type PricingCard = {
  id: string;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  featured: boolean;
};

/** Cell value: 'check' renders a check icon, any other string renders as text */
export type PricingTableRow = {
  features: string[];
  basic: string[];
  team: string[];
};

export const pricingPlan: PricingPlan = {
  id: 'starter',
  name: 'Starter',
  description: 'Best for startup and small teams',
  priceMonthly: 269,
  priceYearly: 2459,
  features: [
    'Code Generation Support',
    'JSON & Mongoose Schema Outputs',
    'JavaScript Snippet Library',
    'API Integration Examples',
    'Advanced Error Handling Techniques',
    'User Authentication Workflows',
  ],
  ctaText: 'Buy Now',
  ctaHref: '/contact',
};

export const pricingCards: PricingCard[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$29',
    description: 'One time payment plus local taxes',
    ctaText: 'Get Basic',
    ctaHref: '/contact',
    featured: false,
  },
  {
    id: 'team',
    name: 'Team',
    price: '$99',
    description: 'One time payment plus local taxes',
    ctaText: 'Upgrade to Team',
    ctaHref: '/contact',
    featured: true,
  },
];

export const pricingTableRows: PricingTableRow[] = [
  {
    features: [
      'AI Pricing Insights',
      'Dynamic Cost Adjustments',
      'Predictive Pricing Models',
      'Automated Price Optimization',
      'Real-time Market Analysis',
    ],
    basic: ['10', 'check', 'check', '', ''],
    team: ['Unlimited', 'check', 'check', 'check', 'check'],
  },
  {
    features: [
      'Rule-based Automation',
      'Custom Pricing Rules',
      'Bulk Price Updates',
      'Scheduled Adjustments',
      'Fail-safe Price Limits',
    ],
    basic: ['5 Rules', 'check', 'check', '', ''],
    team: ['Unlimited Rules', 'check', 'check', 'check', 'check'],
  },
  {
    features: [
      'Performance Analytics',
      'Revenue Impact Tracking',
      'Competitor Price Monitoring',
      'Historical Price Reports',
      'Exportable Data Insights',
    ],
    basic: ['Basic Reports', 'check', 'check', '', ''],
    team: ['Advanced Reports', 'check', 'check', 'check', 'check'],
  },
];
