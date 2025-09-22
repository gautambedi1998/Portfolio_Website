export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/gautambedi1998?tab=repositories",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/gautam-bedi-a86274187/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "Apple Website Clone",
    description:
      "Replica of Apple’s official website showcasing sleek product pages, animations, and responsive design to highlight front-end development skills.",
    subDescription: [
      "Developed with Next.js and React for fast, SEO-friendly rendering and a modern development workflow.",
      "Implemented pixel-perfect design using Tailwind CSS to closely match Apple’s clean aesthetic.",
      "Added smooth scrolling, product reveal animations, and transitions with Framer Motion/GSAP for an engaging user experience.",
      "Optimized performance with Next.js Image optimization, code-splitting, and lazy loading to achieve excellent Lighthouse scores.",
      "Structured pages with reusable, type-safe components in TypeScript for scalability and easy maintenance.",
    ],
    href: "https://apple-website-clone-umber.vercel.app/",
    logo: "",
    image: "/assets/projects/apple.png",
    tags: [
      {
        id: 1,
        name: "Next",
        path: "/assets/logos/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
    ],
  },
  {
    id: 2,
    title: "MSA Training Dashboard",
    description:
      "Developed a Next.js dashboard for mining companies to visualize and track operational data, enabling clients to access their session data securely and monitor progress in real-time.",
    subDescription: [
      "Integrated Firebase to fetch, structure, and display mining data for each client dynamically.",
      "Implemented role-based access control to ensure secure and personalized data access for different users.",
      "Designed interactive charts and tables to present session data, progress metrics, and trends clearly.",
      "Built a responsive and user-friendly interface using Tailwind CSS to ensure accessibility across devices.",
      "Optimized performance and data rendering for fast and reliable user experience with real-time updates.",
    ],
    href: "https://youtu.be/ZiP8aLjcAws",
    logo: "",
    image: "/assets/projects/dashboard.png",
    tags: [
      {
        id: 1,
        name: "Next",
        path: "/assets/logos/next.svg",
      },
      {
        id: 2,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Flappy Bird Web Game",
    description:
      "A web-based Flappy Bird game built with React, featuring state management, and hosted on Vercel for public access.",
    subDescription: [
      "Developed the game logic and state management using React hooks to handle bird movement, collision detection, and game flow.",
      "Implemented modular components for the bird, pipes, and game environment to ensure maintainable code structure.",
      "Hosted the project on Vercel for easy access and sharing, enabling users to play directly in the browser.",
    ],
    href: "https://flappy-bird-game-mu.vercel.app/",
    logo: "",
    image: "/assets/projects/Flappy.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Kids Connecting Parents",
    description:
      "Developed an award-winning Kids Connecting Parents app in Flutter, designed to help parents and carers who have experienced child loss connect with others in their local area for emotional support and shared experiences.",
    subDescription: [
      "Implemented geolocation-based search to help users find nearby parents and carers for support or offering support.",
      "Built secure chat functionality to enable compassionate and private communication between users.",
      "Designed a responsive and accessible interface using Flutter to provide a seamless experience across devices.",
      "Integrated user preferences for connection options, ensuring personalized and meaningful interactions.",
      "Contributed to an app that promotes mental health, positive social connection, and emotional support for a global community of parents.",
    ],

    href: "https://www.kidsconnectingparents.com/",
    logo: "",
    image: "/assets/projects/kids.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Bloc",
        path: "/assets/logos/bloc.png",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
    ],
  },

  {
    id: 5,
    title: "Disney+ Clone (In Progress)",
    description:
      "A modern streaming-platform clone built with Next.js, Firebase, and Tailwind CSS, featuring secure authentication and responsive UI.",
    subDescription: [
      "Implemented user sign-up, sign-in, and protected routes using Firebase Authentication for a production-ready login flow.",
      "Built a responsive interface with Tailwind CSS that closely mirrors the Disney+ design and provides a polished, mobile-friendly experience.",
      "Planned global state management with Redux to handle user data, watchlists, and future media interactions.",
      "Deployed on Vercel for fast, server-side rendered pages and seamless updates.",
    ],
    href: "https://disney-plus-clone-ten-psi.vercel.app/",
    logo: "",
    image: "/assets/projects/disney.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/next.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Firebase", path: "/assets/logos/firebase.svg" },
      { id: 4, name: "Redux", path: "/assets/logos/redux.png" },
    ],
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    job: "Blue Square Tech Solutions",
    date: "2022",
    contents: [
      "Built and maintained full-stack web features using Next.js, TypeScript, Firebase, Node.js, and Tailwind CSS.",
      "Integrated REST APIs and managed MongoDB and Saleor API for e-commerce functionality.",
      "Collaborated in an agile team using Git, GitHub, Jira, and Confluence for version control and project tracking.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "Deakin University",
    date: "2022",
    contents: [
      "Contributed to new website features and resolved reported issues within a collaborative team environment.",
      "Applied modern development practices to enhance performance and maintainability.",
    ],
  },
  {
    title: "Application Developer",
    job: "Mining Skills Australia",
    date: "2022 – 2023",
    contents: [
      "Designed and deployed new features for mobile applications using Flutter and the BLoC architecture, releasing updates to both the Google Play Store and Apple App Store.",
      "Optimized application performance and maintained backend databases to ensure reliability at scale.",
      "Developed custom web solutions with Next.js, aligning with client requirements and industry best practices.",
    ],
  },
  {
    title: "Web Developer",
    job: "Motion Curve",
    date: "2023 – Present",
    contents: [
      "Led the development of the company’s internal dashboard using Next.js and Firebase, enabling efficient data management and a seamless user experience.",
      "Built and maintained client-facing web projects and enhanced the corporate website to improve performance, accessibility, and responsiveness.",
      "Established best practices for version control, automated deployment, and technical documentation.",
    ],
  },
];
