export interface UserProfile {
  name: string;
  role: string;
  tagline?: string;

  contact?: {
    email?: string;
    location?: string;
  };

  socials?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };

  resume?: {
    yearsOfExperience?: number;
    currentCompany?: string;
    openToWork?: boolean;
  };
}

export const profile: UserProfile = {
  name: 'Sam Mosios',
  role: 'Distributed Systems Engineer',
  tagline: 'I build things that occasionally work.',

  contact: {
    email: 'sam.mosios@gmail.com',
    location: 'Stockholm, SE',
  },

  socials: {
    github: 'https://github.com/sammosios',
    linkedin: 'https://linkedin.com/in/sam-mosios',
  },

  resume: {
    yearsOfExperience: 2,
    openToWork: true,
  },
};
