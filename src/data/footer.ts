export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '#' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Tutorial', href: '#' },
      { label: '404 Page', href: '#' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'GDPR Compliance', href: '#' },
      { label: 'Affiliate Policy', href: '#' },
    ],
  },
];
