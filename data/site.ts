/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 *
 */

export const site = {
  url: "https://example.com",
  meta: {
    title: "Armando Laguardia",
    description: "ePortfolio",
  },
  hero: {
    name: "Armando Laguardia",
    role: "SNHU CS Student",
    tagline:
      "ePortfolio showcasing a bit of my journey and accomplishments during the CS program at SNHU",
    avatarSrc: "/CS-499-Page/AvatarMaker.png",
  },
  about: {
    title: "Professional Self-Assessment",
    paragraphs: [
      "Originally, I joined the program shortly after finishing a full-stack bootcamp through Skill Distillery. At first, I imagined that most of the program would feel like a review of what I had already learned. However, it proved to be much more challenging and rewarding that I could’ve imagined at the time. Throughout the program, I learned many new things such as static testing, defense in depth, how to work with embedded systems, and even mobile app development, which became the focus of my capstone project for this portfolio. All of these experiences have been enlightening as well as tremendously helped expand my knowledge as a computer and tech enthusiast. Moreover, all the classes I’ve taken have changed my view on the world of computer science; I now know that it is more than writing code. It is about communication, testing, implementing technologies, researching, and understanding how different methodologies work for different scenarios.",
      "For this portfolio, I’ve chosen an artifact from a mobile development class. It is a simple application that allows users to register or log in, create and edit events, and sort or filter those events. The app itself has a simple layout that follows Android’s best UI/UX practices, and it keeps things consistent and simple throughout every screen. The original version of the application will be listed for comparison, but the enhanced version shows how all three enhancements proposed in class have been applied to the app. The enhanced version has a better and updated UI with a more professional design, additional functions through the use of algorithms, and an added MySQL database connected through a Node.js and Express API. Together, these enhancements meet all the given milestones from class and demonstrate mastery of many of the desired class outcomes. Although not my greatest project, it is a perfect demonstration of my growth here at SNHU.",
      "Learning the technical sides of computer science was another thing that this program taught me. During my classes that tackled methodologies, I learned a lot about team collaboration and approaches such as agile and waterfall. These concepts helped me learn about planning, problem-solving, and adjusting to change. The coding classes and data structure courses helped me learn the concepts related to safe coding, algorithms, and data structures. Finally, during the full-stack course prior to this one, I learned about how to deliver products to stakeholders and making sure I used simple language that was not jargon-centered. As mentioned before, security was a huge portion of the program, and static testing, defense in depth, and the zero trust principles helped build strong foundations for my future career. In essence, the entire program has helped me become a much more rounded professional who can now employ and effectively utilize a plethora of tools and strategies.",
    ],
  },

  featuredProjects: [
    {
      title: "Enhancement Three: Databases",
      period: "",
      summary: [
        "This is the third and final enhancement, also referred to as the completed application. This version completely overhauled and replaced the app's storage system. I changed the SQLite storage to a MySQL database connected through a Node.js and Express API.",
      ],
      solution: [
        {
          text: "Enhanced version 1.3",
          href: "/CS-499-Page/downloads/enhanced-version-1.3.zip",
        },
      ],
      impact: "",
      narrative: {
        description:
          "To view the narrative for this enhancement, click the link below.",
        text: "View Narrative (PDF)",
        href: "/CS-499-Page/downloads/Narratives3.pdf",
      },
      image: "Version3.png",
      imageAlt: "Event Tracker Application showcase",
      link: "",
    },
    {
      title: "Enhancement Two: Algorithms and Data Structures",
      period: "",
      summary: [
        "This is the second enhancement which makes use of data structures and algorithms to implement sorting and name filtering functionalities for stored events.",
      ],
      solution: [
        {
          text: "Enhanced version 1.2",
          href: "/CS-499-Page/downloads/enhanced-version-1.2.zip",
        },
      ],
      impact: "",
      narrative: {
        description:
          "To view the narrative for this enhancement, click the link below.",
        text: "View Narrative (PDF)",
        href: "/CS-499-Page/downloads/Narratives2.pdf",
      },
      image: "Version2.png",
      imageAlt: "Algorithms and Data Structures enhancement showcase",
      link: "",
    },
    {
      title: "Enhancement One: Software Design and Engineering",
      period: "",
      summary: [
        "This first enhancement focused on redesigning the UI, improving navigation and making things cleaner and more concise.",
      ],
      solution: [
        {
          text: "Enhanced version 1.1",
          href: "/CS-499-Page/downloads/enhanced-version-1.1.zip",
        },
      ],
      impact: "",
      narrative: {
        description:
          "To view the narrative for this enhancement, click the link below.",
        text: "View Narrative (PDF)",
        href: "/CS-499-Page/downloads/Narratives1.pdf",
      },
      image: "Version1.png",
      imageAlt: "Software Design and Engineering enhancement showcase",
      link: "",
    },
    {
      title: "Original Artifact",
      period: "",
      summary: [
        "The original application included features such as logging in, registering, creating events, and viewing events through multiple screens like the calendar view, today view, settings page, and event cards. This application originally worked; however, many aspects of the design and navigation were outdated, unprofessional, and basic.",
      ],
      solution: "",
      impact: [
        {
          text: "Original Artifact",
          href: "/CS-499-Page/downloads/original-artifact.zip",
        },
      ],
      image: "Original1.png",
      imageAlt: "Original Event Tracker Application artifact",
      link: "",
    },

    {
      title: "Informal Code Review",
      period: "",
      summary:
        "Informal code review of the Event Tracker application where I go over the existing functionality, code analysis, and proposed enhancements.",
      solution: "",
      impact: "",
      image: "Thumbnail.png",
      imageAlt: "Informal Code Review Video",
      link: "https://www.youtube.com/watch?v=knc-cGDlss0",
    },
  ],
  contact: {
    email: "",
    github: "https://github.com/Lmandy239",
    linkedin: "https://www.linkedin.com/in/armandolaguardia/",
  },
} as const;

export type FeaturedProject = (typeof site.featuredProjects)[number];