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

export const INTRO = {
  title: `Welcome To My Portfolio`,
  subtitle: `I'm a highly skilled and experienced fullstack developer based in Norway.`,
  companyLink: 'http://example.com',
  company: 'ExampleCompany',
  description: `With 5 years of experience in the IT industry, Whether you need a new website or application developed from scratch, or you require enhancements or updates to an existing one, I have the expertise and dedication to help bring your ideas to life.`,
  outro: `Do not hesitate to connect with me. I am hungry for work and looking forward to work with you by bringing your ideas to life. 🚀`,
  socialimg: "/public/profile.jpeg"
}

export const ABOUT = {
  title: `About Me`,
  profileimg: "/public/profile.jpeg",
  PROF: {
      title: `Fullstack Developer`,
      subtitle: `A Passionate Full Stack Developer in Norway Oslo. crafting beautiful and functional applications.`,
      description: `Technically: I'm proficient in a wide range of programming languages displayed further down the page. I am also highly proficient in both back-end and front-end development, ensuring that I can handle all aspects of your project from start to finish.`,  
      description_2: [
        `Socialy: A strong communicator and problem-solver, with the ability to work effectively both independently and in a team.`,
        `Values: I am a highly motivated and passionate developer, with a strong work ethic and a desire to succeed. I am always looking to learn new skills and improve my knowledge, and I am always open to new opportunities and challenges.`,
        `I'm a highly skilled and experienced full stack developer based in Norway. Currently searching for clients to work with. With 5 years of experience in the IT industry, Whether you need a new website or application developed from scratch, or you require enhancements or updates to an existing one, I have the expertise and dedication to help bring your ideas to life.`,
      ],
    },
  PRIV: {
    title: `Me Personally`,
    subtitle: `I'm a 31 years of age. Currently living in Drammen, Norway. I love to spread good vibes by having a good laugh, having a good time and values my time.`,
    description: `I was born in Norway but traveled to Saudi Arabia when i was 6 years old. I attended a international private school that resembles something out of Harry Potter movie. Here I attended both computer, technology and chess clubs.
                  When we got our first computer I was stuck, I've been playing around with it, tought myself to code and been coding ever since.`,
    description_2: [
      `I play the guitar and currently learning to play the piano.`,
      `I built and maintain a family E-Commerce store we I sell oriental lamps.`,
      `I have a dog, a 6 years old Boxer/American Bulldog mix and weighs 35kg.`,
    ],
    hobbies: [
      `🎮 Gaming`,
      `🎧 Music`,
      `📚 Reading`,
      `🏋️‍♂️ Gym`,
      `🎨 Art`,
      `🎥 Movies`,
      `🎬 TV Shows`,
    ],
    phrases: [
      `Love what you do and you'll never work a day in your life.`,
      `Let the universe do the worrying for you, anxiety gets you no where.`,
      `Last but not least, live in the now, which is all that actually exists, the past and future are just illusions.`,
    ]
  },
}

export const SKILLS = [
  { title: 'languages',
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3  },
      { name: "SASS", icon: FaSass },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Sass", icon: FaSass },
      { name: "Java", icon: SiJava  },
      { name: "Python", icon: SiPython },
      { name: "Ruby", icon: SiRuby }
    ]
  },
  { title: 'langFrameworks',
    skills: [
      { name: "Rails", icon: SiRubyonrails },
      { name: "React", icon: SiReact },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Spring", icon: SiSpring },
    ]
  },
  { title: 'Databases',
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "MongoDB", icon: SiMongodb  },
    ]
  },
  { title: 'StylingFrameworks',
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Styled Components", icon: SiStyledcomponents },
    ]
  },
  { title: 'TestingFrameworks',
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Cypress", icon: SiCypress },
      { name: "Selenium", icon: SiSelenium},
      { name: "Cucumber", icon: SiCucumber},
    ]
  },
  { title: 'tools',

    skills: [
      { name: "Github", icon: SiGithub},
      { name: "Slack", icon: SiSlack },
      { name: "Jira", icon: SiJira },
      { name: "Confluence", icon: SiConfluence },
    ]
  },
];
    
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



  

  

// export const PROJECTS = [
//   {
//     name: "Portfolio",
//     image: "/projects/portfolio.webp",
//     blurImage: "/projects/blur/portfolio.webp",
//     description: "My portfolio, built with Next.js",
//     gradient: ["#F14658", "#DC2537"],
//     url: "https://andrehatlo.com/",
//     tech: ["react", "tailwindcss", "nextjs"],
//   },
//   {
//     name: "Crypto Coin watcher",
//     image: "/projects/cryptocoin.webp",
//     blurImage: "/projects/blur/cryptocoin.webp",
//     description: "Cryptocoin watcher in react, using",
//     gradient: ["#F14658", "#DC2537"],
//     url: "https://cryptocoin.vercel.app/",
//     tech: ["react", "tailwindcss", ""],
//   },
//   {
//     name: "Weather app",
//     image: "/projects/whatstheweather.webp",
//     blurImage: "/projects/blur/whatstheweather.webp",
//     description: "Weather checker in react, using nextjs",
//     gradient: ["#F14658", "#DC2537"],
//     url: "https://andrehatlo.com/",
//     tech: ["react", "tailwindcss", "nextjs"],
//   },
// ];

// export const WORK = [
//   {
//     company: "Rørkjøp",
//     title: "Fullstack Junior Developer",
//     location: "Oslo, Norway",
//     range: "August 2017 - August 2019",
//     responsibilities: [
//       "Developed on CMS and E-Commerce platform",
//       "Developed features both backend and frontend",
//       "Everything from simple forms to ETL loaders.",
//     ],
//     url: "https://rorkjop.no/",
//   },
//   {
//     company: "Nordea",
//     title: "Senior Developer",
//     location: "Oslo, Norway",
//     range: "August 2019 - August 2022",
//     responsibilities: [
//       "Developed backend microservices",
//       "integration with CRUD features for payment",
//       "for nettbank both on mobile and web.",
//     ],
//     url: "https://nordea.no/",
//   },
//   {
//     company: "Freelance",
//     title: "Fullstack Developer",
//     location: "Oslo, Norway",
//     range: "August 2022 - Present",
//     responsibilities: [
//       "Maintained and designed websites for clients",
//       "Developed features both backend and frontend",
//       "Everything from simple maintainance to implementing ETL loaders.",
//     ],
//     url: "https://andrehatlo.com/",
//   }
// ];

export const GTAG = "";
