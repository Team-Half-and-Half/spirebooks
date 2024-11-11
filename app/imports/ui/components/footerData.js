import { GeoAlt, Telephone, EnvelopeAt } from 'react-bootstrap-icons';

/** Column titles and links for each page within the footer */
const footerData = [
  {
    title: 'FINANCING',
    links: [
      { label: 'Balance Sheet', href: '/balance-sheet' },
      { label: 'Services', href: 'https://www.spirehawaii.com/our-services', external: true },
    ],
  },
  {
    title: 'AUDIT',
    links: [
      { label: 'Upload', href: '/import' },
      { label: 'Verification Table', href: '/verification-table', isAdminOnly: true },
      { label: 'Manage Database', href: '/manage-database', isAdminOnly: true },
    ],
  },
  {
    title: 'VISUALIZE',
    links: [
      { label: 'Dashboard', href: '/list' },
      { label: 'Compare Projections', href: '/compare-projections' },
      { label: 'Manage Projections', href: '/manage-projections' },
    ],
  },
  {
    title: 'CONTACT',
    image: {
      src: 'public/images/spirebooks-logo.png',
      href: '/home',
      alt: 'SpireBooks Logo',
    },
    links: [
      {
        label: '700 Bishop Street, Suite 2001 Honolulu, HI 96813',
        href: 'https://www.google.com/search?q=700+Bishop+Street+Suite+2001+Honolulu+Hawaii+96813',
        external: true,
        icon: GeoAlt,
      },
      { label: '(808) 536-0066', href: '/tel:+18085360066', icon: Telephone },
      { label: 'contactus@spirehi.com', href: 'mailto:contactus@spirehi.com', icon: EnvelopeAt },
    ],
  },
];

export default footerData;
