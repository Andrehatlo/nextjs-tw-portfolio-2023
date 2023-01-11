import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCrown, faFeather, faCloudSun, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedinIn, FaGithub, FaDev } from 'react-icons/fa';

export const ABOUT = {
  title: `Hi`,
  subtitle: `I'm a highly skilled and experienced full stack developer based in Norway. Currently working for`,
  companyLink: 'www.mo9.no',
  company: 'Mo9 Media',
  description: `With 5 years of experience in the IT industry, Whether you need a new website or application developed from scratch, or you require enhancements or updates to an existing one, I have the expertise and dedication to help bring your ideas to life.`,
  subDescription: `I am proficient in a wide range of programming languages and technologies, including HTML, CSS, JavaScript, React, Node.js, and many more. I am also highly proficient in both back-end and front-end development, ensuring that I can handle all aspects of your project from start to finish.`,
  subDescription: `In addition to my technical skills, I am a strong communicator and problem-solver, with the ability to work effectively both independently and as part of a team. I am committed to delivering high-quality work on time and on budget, and I am always eager to learn and stay up-to-date with the latest trends and best practices in the industry.`,

  underTitle: `Need a reliable and skilled developer, please do not hesitate to connect with me. I look forward to the opportunity to work with you and help bring your ideas to life.🚀`,
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
        links: "/skills",
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
    icon: <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer light:text-black dark:text-white"/>,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrehatlo/",
    icon: <FaLinkedinIn className='cursor-pointer light:text-black dark:text-white'/>,
  },
  {
    name: "Github",
    url: "https://github.com/andrehatlo",
    icon: <FaGithub className='cursor-pointer light:text-black dark:text-white'/>,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/andrehatlo",
    icon: <FaDev className='cursor-pointer light:text-black dark:text-white' />,
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
