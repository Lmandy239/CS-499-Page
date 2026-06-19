/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Armando Laguardia',
    description:
      'ePortfolio',
  },
  hero: {
    name: 'Armando Laguardia',
    role: 'SNHU CS Student',
    tagline: 'ePorfolio showcasing a bit of my journey and accomplishments during the CS program at SNHU',
    avatarSrc: '/CS-499-Page/AvatarMaker.png',
  },
  about: {
    paragraphs: [
      'Originally, I joined the program shortly after finishing a full-stack bootcamp through Skill Distillery. At first, I imagined that most of the program would feel like a review of what I had already learned. However, it proved to be much more challenging and rewarding that I could’ve imagined at the time. Throughout the program, I learned many new things such as static testing, defense in depth, how to work with embedded systems, and even mobile app development, which became the focus of my capstone project for this portfolio. All of these experiences have been enlightening as well as tremendously helped expand my knowledge as a computer and tech enthusiast. Moreover, all the classes I’ve taken have changed my view on the world of computer science; I now know that it is more than writing code. It is about communication, testing, implementing technologies, researching, and understanding how different methodologies work for different scenarios.',
      'For this portfolio, I’ve chosen an artifact from a mobile development class. It is a simple application that allows users to register or log in, create and edit events, and sort or filter those events. The app itself has a simple layout that follows Android’s best UI/UX practices, and it keeps things consistent and simple throughout every screen. The original version of the application will be listed for comparison, but the enhanced version shows how all three enhancements proposed in class have been applied to the app. The enhanced version has a better and updated UI with a more professional design, additional functions through the use of algorithms, and an added MySQL database connected through a Node.js and Express API. Together, these enhancements meet all the given milestones from class and demonstrate mastery of many of the desired class outcomes. Although not my greatest project, it is a perfect demonstration of my growth here at SNHU.',
      'Learning the technical sides of computer science was another thing that this program taught me. During my classes that tackled methodologies, I learned a lot about team collaboration and approaches such as agile and waterfall. These concepts helped me learn about planning, problem-solving, and adjusting to change. The coding classes and data structure courses helped me learn the concepts related to safe coding, algorithms, and data structures. Finally, during the full-stack course prior to this one, I learned about how to deliver products to stakeholders and making sure I used simple language that was not jargon-centered. As mentioned before, security was a huge portion of the program, and static testing, defense in depth, and the zero trust principles helped build strong foundations for my future career. In essence, the entire program has helped me become a much more rounded professional who can now employ and effectively utilize a plethora of tools and strategies.',
      {
        
      },
    ],
  },

  featuredProjects: [
    {
      title: 'Event Tracker Application',
      period: '',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'Tailwind CSS', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
    {
      title: 'Informal Code Review',
      period: '',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Informal code review of the Event Tracker application where I go over the existing functionality, code analysis, and proposed enhancements',
      impact: '',
      image: '/CS-499-Page/Thumbnail.png',
      imageAlt: 'Informal Code Review Video',
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'hello@example.com',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
