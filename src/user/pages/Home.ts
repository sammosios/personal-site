import { PersonStanding, FileCodeCorner, MailIcon } from 'lucide-react';
import type { HomeData } from '@/pages/Home/Home.schema';

export const homeData: HomeData = {
  heading: "Hi, I'm Sam",
  subheading:
    'Many things keep me up at night... but my systems are not one of them.',

  actions: [
    {
      label: 'About',
      route: '/about',
      icon: PersonStanding,
    },
    {
      label: 'Projects',
      route: '/projects',
      icon: FileCodeCorner,
    },
    {
      label: 'Contact',
      route: '/contact',
      icon: MailIcon,
    },
  ],
};
