import { FaLinkedinIn, FaGithub, FaDev, FaSass, FaNodeJs, FaPen, FaFeather, FaCloudSun, FaCrown, FaEnvelope } from 'react-icons/fa';
import { 
  SiSpring, 
  SiJava, 
  SiPostgresql, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiGraphql,
  SiApollo,
  SiRuby, 
  SiRubyonrails, 
  SiHeroku, 
  SiMysql,
  SiTailwindcss, 
  SiStyledcomponents, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiNextDotJs, 
  SiExpress, 
  SiBootstrap, 
  SiMaterialUi, 
  SiMongodb, 
  SiRedis, 
  SiSqlite, 
  SiJest, 
  SiCypress, 
  SiMockito, 
  SiSelenium, 
  SiRspec, 
  SiCucumber, 
  SiGithub, 
  SiJira, 
  SiConfluence, 
  SiSlack, 
  SiAmazonaws, 
  SiGooglecloud, 
  SiDigitalocean, 
  SiNetlify, 
  SiVercel, 
  SiTrello, 
  SiAdobephotoshop, 
  SiAdobeillustrator  } from "react-icons/si";


export const ABOUT = {
  title: `Hi`,
  subtitle: `I'm a highly skilled and experienced full stack developer based in Norway. Currently working for`,
  companyLink: 'www.mo9.no',
  company: 'Mo9 Media',
  description: `With 5 years of experience in the IT industry, Whether you need a new website or application developed from scratch, or you require enhancements or updates to an existing one, I have the expertise and dedication to help bring your ideas to life.`,
  subDescription: `I am proficient in a wide range of programming languages and technologies, including HTML, CSS, JavaScript, React, Node.js, and many more. I am also highly proficient in both back-end and front-end development, ensuring that I can handle all aspects of your project from start to finish.`,
  subDescription2: `In addition to my technical skills, I am a strong communicator and problem-solver, with the ability to work effectively both independently and as part of a team. I am committed to delivering high-quality work on time and on budget, and I am always eager to learn and stay up-to-date with the latest trends and best practices in the industry.`,
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
        icon: FaPen
    },

    {
        name: "About.",
        links: "/about",
        icon: FaCrown
    },
    // {

    //     name: "Contact.",
    //     links: "/contact",
    //     icon: FaFeather
    // },
    {
      name: "Projects.",
      links: "/projects",
      icon: FaFeather
    },
        // {
    //     name: "Weather.",
    //     links: "/weather",
    //     icon: FaCloudSun
        
    // },
]  
  
export const TYPED_STRINGS = [
  "Full Stack Developer",
  "I type things that to build things",
];

export const SOCIAL_LINKS = [
  {
    name: "Mail",
    url: "mailto: andrehatlo@icloud.com",
    icon: FaEnvelope  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrehatlo/",
    icon: FaLinkedinIn  },
  {
    name: "Github",
    url: "https://github.com/andrehatlo",
    icon: FaGithub  },
  {
    name: "Dev.to",
    url: "https://dev.to/andrehatlo",
    icon: FaDev  }
];

export const SKILLS = {
  languages: [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3  },
    { name: "SASS", icon: FaSass },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Sass", icon: FaSass },
    { name: "Java", icon: SiJava  },
    { name: "Python", icon: SiPython },
    { name: "Ruby", icon: SiRuby },
  ],
  langFrameworks: [
    { name: "Rails", icon: SiRubyonrails },
    { name: "React", icon: SiReact },
    // { name: "Next.js", icon: SiNextDotJs },
    { name: "GraphQL", icon: SiGraphql },
    // { name: "Apollo", icon: SiApollo },
    { name: "Spring", icon: SiSpring },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
    { name: "MongoDB", icon: SiMongodb  },
  ],
  stylingFrameworks: [
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Styled Components", icon: SiStyledcomponents },
    // { name: "Bootstrap", icon: SiBootstrap },
    // { name: "Material UI", icon: SiMaterialUi },
  ],
  testingFrameworks: [
    { name: "Jest", icon: SiJest },
    { name: "Cypress", icon: SiCypress },
    // { name: "Mockito", icon: SiMockito },
    { name: "Selenium", icon: SiSelenium},
    // { name: "Rspec", icon: SiRspec },
    { name: "Cucumber", icon: SiCucumber},
  ],
  tools: [
    { name: "Github", icon: SiGithub},
    { name: "Slack", icon: SiSlack },
    { name: "Jira", icon: SiJira },
    { name: "Confluence", icon: SiConfluence },
  ],
  other: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Heroku", icon: SiHeroku },
    { name: "AWS", icon: SiAmazonaws },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop },
    { name: "Digital Ocean", icon: SiDigitalocean },
  ],
};
  

export const PROJECTS = [
  {
    name: "Portfolio",
    image: "/projects/portfolio.webp",
    blurImage: "/projects/blur/portfolio.webp",
    description: "My portfolio, built with Next.js",
    gradient: ["#F14658", "#DC2537"],
    url: "https://andrehatlo.com/",
    tech: ["react", "tailwindcss", "nextjs"],
  },
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
  {
    company: "Freelance",
    title: "Fullstack Developer",
    location: "Oslo, Norway",
    range: "August 2022 - Present",
    responsibilities: [
      "Maintained and designed websites for clients",
      "Developed features both backend and frontend",
      "Everything from simple maintainance to implementing ETL loaders.",
    ],
    url: "https://andrehatlo.com/",
  }
];

export const GTAG = "";
