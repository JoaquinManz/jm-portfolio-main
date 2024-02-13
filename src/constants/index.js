import {
  frontend,
  backend,
  ux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  nextjs,
  git,
  figma,
  sql,
  geritch,
  gpt3,
  spotify,
  datafinance,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  shoppingcart,
  alorica
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Costumer Support Representative',
    company_name: 'Alorica',
    description: 'As a Customer Support Representative at Alorica, I played a pivotal role in ensuring a positive and seamless experience for customers. In this dynamic and fast-paced environment, I honed my communication and problem-solving skills while addressing customer inquiries and concerns.',
    icon: alorica,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Geritch restaurant',
    description: 'A modern and responsive fine dining application',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: geritch,
    repo: 'https://github.com/JoaquinManz/geritch-restaurant',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'GPT3 OpenAI',
    description:
      'A gpt3 OpenAI modern and responsive application',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt3,
    repo: 'https://github.com/JoaquinManz/gpt3-jm',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Spotify Clone',
    description: 'This is a fullstack fully functional Spotify clone application, with a database storing music and users.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: spotify,
    repo: 'https://github.com/JoaquinManz/spotify-clone',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Data Finance',
    description: `A single-page application that helps you to monitor your finances and increase your revenues.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: datafinance,
    repo: 'https://github.com/JoaquinManz/data-finance',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Shopping Cart',
    description:
      'Simple ReactJS shopping cart.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: shoppingcart,
    repo: 'https://github.com/JoaquinManz/Shopping-cart',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
