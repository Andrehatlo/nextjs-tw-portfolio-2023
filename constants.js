import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCrown, faRocket, faFireFlameCurved, faFeather, faCloudSun  } from '@fortawesome/free-solid-svg-icons'

export const ABOUT = {
  title: 'Hi, I’m André Hatlo',
  subtitle: 'I work as a Full Stack Developer, I build things for the web.',
  companyLink: 'https://mo9.no/',
  company: 'MO9',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500's, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
  subDescription: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
  underTitle: `I'm a rocket 🚀`,
  socialimg: "/public/profile.jpeg"
}

export const PROFILEIMG = { 
  socialimg: "/public/profile.jpeg"
}


export const METADATA = {
  title: "HATLO",
  description: "I've been working in IT for ~5 years straight, get in touch with me to see what I can do for you.",
  image: "/public/avatar.png",
  type: 'website',
  date: new Date().toDateString(),
  siteurl: "https://andrehatlo.com/",
  sitename: ":)"
}

export const INDEXMETA = {
  title: "HATLO",
  description:
    "André is a Full Stack Developer from Norway, crafting beautiful and functional applications.",
      siteUrl: "https://andrehatlo.com/",
      twitterHandle: "@andrehatlo",
};

export const MENULINKS = [
    {
        name: "Blog.",
        links: "/blog",
        icon: <FontAwesomeIcon icon={faFeather} className="cursor-pointer light:text-black dark:text-white md:hidden" />
    },
    {
        name: "Weather.",
        links: "/weather",
        icon: <FontAwesomeIcon icon={faCloudSun} className="cursor-pointer light:text-black dark:text-white md:hidden" />
        
    },
    {
        name: "Skills.",
        links: "/Skills",
        icon: <FontAwesomeIcon icon={faCrown} className="cursor-pointer light:text-black dark:text-white md:hidden" />
    },
]  
  
export const TYPED_STRINGS = [
  "Full Stack Developer",
  "I build things",
];

export const SOCIAL_LINKS = [
  {
    name: "Mail",
    url: "mailto: andrehatlo@icloud.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrehatlo/",
  },
  {
    name: "Github",
    url: "https://github.com/andrehatlo",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/andrehatlo",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "java",
    "python",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
  ],
  databases: [
    "mysql",
    "postgresql",
  ],
  other: ["nodejs", "git"],
};

export const PROJECTS = [
  {
    name: "Crypto Coin watcher",
    image: "/projects/cryptocoin.webp",
    blurImage: "/projects/blur/cryptocoin.webp",
    description: "Cryptocoin watcher in react, using",
    gradient: ["#F14658", "#DC2537"],
    url: "https://cryptocoin.vercel.app/",
    tech: ["react", "tailwindcss", ""],
  },
  {
    name: "Weather app",
    image: "/projects/whatstheweather.webp",
    blurImage: "/projects/blur/whatstheweather.webp",
    description: "Weather checker in react, using nextjs",
    gradient: ["#F14658", "#DC2537"],
    url: "https://andrehatlo.com/",
    tech: ["react", "tailwindcss", "nextjs"],
  },
];

export const WORK = [
  {
    company: "Rørkjøp",
    title: "Fullstack Junior Developer",
    location: "Oslo, Norway",
    range: "August 2017 - August 2019",
    responsibilities: [
      "Developed on CMS and E-Commerce platform",
      "Developed features both backend and frontend",
      "Everything from simple forms to ETL loaders.",
    ],
    url: "https://rorkjop.no/",
  },
  {
      company: "Nordea",
      title: "Senior Developer",
      location: "Oslo, Norway",
      range: "August 2019 - August 2022",
      responsibilities: [
        "Developed backend microservices",
        "integration with CRUD features for payment",
        "for nettbank both on mobile and web.",
      ],
      url: "https://nordea.no/",
    },
  
];

export const GTAG = "";
