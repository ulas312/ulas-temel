export type ProjectStatus = 'live' | 'prototype' | 'concept' | 'in_progress';

export interface NavLink {
  label: string;
  sectionId: string;
}

export interface ExternalLink {
  label: string;
  href: string;
  isPlaceholder?: boolean;
}

export interface OtherProject {
  name: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  cta?: {
    label: string;
    disabled: boolean;
    tooltip?: string;
  };
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const siteMeta = {
  name: 'Ulas Temel',
  email: 'temel.ulas@googlemail.com',
  github: 'https://github.com/ulas312',
  linkedin: 'https://www.linkedin.com/in/ulastemel/',
  location: 'Based in the UK.',
  /** Set true to show the Formbold contact form below the social buttons */
  showEmailForm: false,
};

export const navLinks: NavLink[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'QA', sectionId: 'qa' },
  { label: 'Contact', sectionId: 'contact' },
];

export const hero = {
  title: 'QA-minded Product Builder',
  tagline:
    'I build useful web tools with a focus on quality, testing, and real-world problem solving.',
  headline:
    'Hi, I’m Ulas — I build useful web tools with a strong focus on quality, testing, and real-world problem solving.',
  subheading:
    'I’m a QA-minded product builder with experience across React, TypeScript, automation testing, and product development. I like turning practical problems into simple, useful software.',
  roles: [
    'QA Automation',
    'React + TypeScript',
    'Product Builder',
    'Chrome Extensions',
    'Mobile Experiments',
  ],
  winlyNote:
    'Currently building Winly — a Chrome extension for saving and managing browser windows.',
  previewCard: {
    name: 'Winly',
    type: 'Chrome Extension',
    status: 'live' as ProjectStatus,
    tags: ['React + TypeScript', 'Local-first', 'QA-minded build'],
  },
};

export const about = {
  title: 'Hi, I’m Ulas. Nice to meet you.',
  paragraphs: [
    'I originally came into software through web development, but my strongest experience has been in QA automation and building reliable user flows. That background has shaped how I build products: I care about edge cases, usability, testing, and whether something actually works for real people.',
    'Outside of work, I enjoy building my own product ideas — from browser tools like Winly to mobile app experiments and small business-focused SaaS ideas. I’m interested in practical software that solves real problems, not just portfolio projects.',
  ],
  keyPoints: [
    'I build practical tools',
    'I have QA/automation experience',
    'I care about reliability',
    'I think like a product builder',
    'I’m still hands-on with code',
  ],
};

export const winly = {
  name: 'Winly',
  tagline:
    'A Chrome extension for saving, restoring, and managing browser windows.',
  description:
    'Winly helps users organise browser chaos by saving groups of tabs as named sessions, restoring them later, and keeping their workspace cleaner. It started as a practical problem I had myself and has grown into a real product with its own landing page and Chrome extension.',
  features: [
    'Save open Chrome windows as sessions',
    'Restore saved sessions later',
    'Rename and organise saved windows',
    'Manage open tabs and windows',
    'Local-first storage',
    'Built with React, TypeScript and Chrome Extension APIs',
  ],
  tech: [
    'React',
    'TypeScript',
    'Chrome Extension APIs',
    'Manifest V3',
    'Local Storage',
    'UI/UX',
    'QA Testing',
  ],
  status: 'live' as ProjectStatus,
  links: {
    website: { label: 'Visit Winly website', href: '', isPlaceholder: true },
    chromeStore: {
      label: 'Chrome Web Store',
      href: '',
      isPlaceholder: true,
    },
    github: { label: 'GitHub', href: '', isPlaceholder: true },
  },
  linksArePlaceholder: true,
};

export const otherProjects: OtherProject[] = [
  {
    name: 'Workout App',
    description:
      'A mobile workout app experiment focused on generating simple daily workouts and exploring mobile UX, AI-assisted content, and React Native development.',
    status: 'prototype',
    tech: ['React Native', 'TypeScript', 'Expo', 'AI integration'],
    cta: {
      label: 'Watch demo video',
      disabled: true,
      tooltip: 'Demo video coming soon',
    },
  },
  {
    name: 'Invoice Comparator',
    description:
      'A product idea for small businesses to upload supplier invoices, extract line items, and quickly spot price increases over time.',
    status: 'concept',
    tech: [
      'Next.js',
      'TypeScript',
      'OCR',
      'data comparison',
      'dashboard UI',
    ],
  },
  {
    name: 'WhatsApp Booking Agent',
    description:
      'An automation experiment using WhatsApp-style flows to help service businesses answer questions, qualify leads, and manage booking requests.',
    status: 'prototype',
    tech: ['n8n', 'Twilio', 'automation', 'Google Calendar concepts'],
  },
];

export const qa = {
  title: 'Built with a QA mindset',
  copy: 'My QA automation background gives me a different approach to building software. I think beyond the happy path — how users break flows, how UI behaves across states, how tests can protect features, and how small bugs affect trust.',
  highlights: [
    'End-to-end testing with Cypress and Detox',
    'Writing stable, maintainable automated tests',
    'Debugging real production-style user flows',
    'Testing across web and mobile experiences',
    'Thinking about edge cases, accessibility, and reliability',
    'Building features with testability in mind',
  ],
  quote:
    'I don’t just want software to look good — I want it to hold up when people actually use it.',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Material UI',
      'Tailwind',
    ],
  },
  {
    title: 'Testing / QA',
    skills: [
      'Cypress',
      'Detox',
      'Jest',
      'Mocha',
      'End-to-end testing',
      'Regression testing',
    ],
  },
  {
    title: 'Product / Backend / Tools',
    skills: [
      'Node.js',
      'Express',
      'Firebase',
      'Supabase',
      'REST APIs',
      'Git',
      'GitHub',
      'Chrome Extensions',
      'n8n',
      'Twilio',
    ],
  },
  {
    title: 'Soft / business skills',
    skills: [
      'Product thinking',
      'Customer experience',
      'Small business operations',
      'Problem solving',
      'Project ownership',
    ],
  },
];

export const contact = {
  title: 'Interested in collaborating?',
  copy: 'I’m always open to discussing useful products, automation, QA, or interesting build ideas.',
  cta: "Let's start a conversation",
};

export const pillars = [
  {
    title: 'Product Builder',
    description:
      'I turn practical problems into simple software — browser tools, experiments, and small-business ideas that people can actually use.',
    enjoyLabel: 'Things I enjoy building:',
    enjoy: ['Chrome extensions', 'Web apps', 'Mobile experiments', 'Automation workflows'],
    toolsLabel: 'Stack & tools:',
    tools: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Chrome APIs'],
  },
  {
    title: 'QA Automation',
    description:
      'My strongest experience is in test automation and reliable user flows. I think beyond the happy path before shipping.',
    enjoyLabel: 'What I focus on:',
    enjoy: ['E2E testing', 'Regression suites', 'Edge cases', 'Accessibility', 'Testability'],
    toolsLabel: 'Testing tools:',
    tools: ['Cypress', 'Detox', 'Jest', 'Mocha', 'CI pipelines'],
  },
  {
    title: 'Frontend Developer',
    description:
      'I like shipping clean interfaces in the browser — readable code, thoughtful UX, and components that hold up in production.',
    enjoyLabel: 'Languages & UI:',
    enjoy: ['React', 'TypeScript', 'HTML & CSS', 'Material UI', 'Responsive layout'],
    toolsLabel: 'Dev tools:',
    tools: ['Git & GitHub', 'VS Code', 'REST APIs', 'Tailwind', 'Netlify'],
  },
];
