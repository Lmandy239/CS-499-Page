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
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Alex Morgan',
  },
  about: {
    paragraphs: [
      'A brief, compelling introduction about who you are and what you do. Mention your core philosophy, your passion for building digital products, and your drive for creating efficient, high-impact solutions.',
      'I care about clear boundaries between modules, automated checks in CI, and documentation that helps the next contributor ship safely.',
      {
        heading: 'Example focus areas',
        bullets: [
          'Designing APIs and client boundaries with typed contracts',
          'Performance budgets, caching, and pragmatic observability',
          'Shipping incrementally with feature flags and rollback-friendly deploys',
        ],
      },
    ],
  },

  featuredProjects: [
    {
      title: 'Lumen Studio Website',
      period: '2025',
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
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
        },
      ],
    },
  ],

  contact: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;

export type FeaturedProject = (typeof site.featuredProjects)[number];
