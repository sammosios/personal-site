import type { ContactData } from '@/pages/Contact/Contact.schema';

export const contactData: ContactData = {
  title: 'Contact Me',
  intro: 'Feel free to reach out to me via email or connect on social media!',
  links: [
    {
      label: 'Email',
      value: 'sam.mosios@gmail.com',
      href: 'mailto:sam.mosios@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'sam-mosios',
      href: 'https://linkedin.com/in/sam-mosios',
    },
    {
      label: 'GitHub',
      value: 'sammosios',
      href: 'https://github.com/sammosios',
    },
  ],
};
