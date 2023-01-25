import { FaCrown, FaEnvelope, FaPen, FaFeather, FaGithub, FaLinkedinIn, FaSass, FaDev } from 'react-icons/fa'
import { SiSpring, SiJava, SiPostgresql, SiReact, SiHtml5, SiCss3, SiGraphql,SiRuby, SiRubyonrails, SiMysql, SiTailwindcss, SiStyledcomponents, SiJavascript, SiTypescript, SiPython, SiMongodb, SiSqlite, SiJest, SiSelenium, SiCucumber, SiGithub, SiJira, SiConfluence, SiSlack } from "react-icons/si";

export const SKILLS = [
  { title: 'Languages',
    skills: [
      { name: "HTML5", icon: SiHtml5, url: "https://html.com/blog/html-5-cheat-sheets/" },
      { name: "CSS3", icon: SiCss3, url: "https://websitesetup.org/css3-cheat-sheet/"   },
      { name: "SASS", icon: FaSass, url: "https://devhints.io/sass" },
      { name: "JavaScript", icon: SiJavascript, url:"https://htmlcheatsheet.com/js/"  },
      { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/cheatsheets" },
      { name: "Java", icon: SiJava, url: "https://github.com/yungnickyoung/Java-Cheatsheet" },
      { name: "Python", icon: SiPython, url: "https://www.pythoncheatsheet.org/" },
      { name: "Ruby", icon: SiRuby, url: "https://www.codecademy.com/learn/learn-ruby/modules/learn-ruby-introduction-to-ruby-u/cheatsheet"}
    ]
  },
  { title: 'Frameworks',
    skills: [
      { name: "Rails", icon: SiRubyonrails, url: "https://gist.github.com/mdang/95b4f54cadf12e7e0415" },
      { name: "React", icon: SiReact, url: "https://devhints.io/react" },
      { name: "GraphQL", icon: SiGraphql, url: "https://devhints.io/graphql" },
      { name: "Spring", icon: SiSpring, url: "https://gist.github.com/jahe/0bdb68fc7ffecc196530" },
    ]
  },
  { title: 'Databases',
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, url: "https://gist.github.com/jahe/0bdb68fc7ffecc196530" },
      { name: "MySQL", icon: SiMysql, url: "https://devhints.io/mysql" },
      { name: "SQLite", icon: SiSqlite, url: "https://www.sqlitetutorial.net/sqlite-cheat-sheet/" },
      { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/developer/products/mongodb/cheat-sheet/"  },
    ]
  },
  { title: 'Styling',
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, url: "https://nerdcave.com/tailwind-cheat-sheet" },
      { name: "Styled Components", icon: SiStyledcomponents, url: "https://scalablecss.com/static/Styled-Components-Cheat-Sheet-c9ef20eda7095a43b5e4c80b36b545a4.pdf" },
    ]
  },
  { title: 'Testing',
    skills: [
      { name: "Jest", icon: SiJest, url: "https://github.com/sapegin/jest-cheat-sheet" },
      { name: "Selenium", icon: SiSelenium, url: "https://intellipaat.com/blog/tutorial/selenium-tutorial/selenium-cheat-sheet/" },
      { name: "Cucumber", icon: SiCucumber, url: "https://gist.github.com/yuriiik/5728701"},
    ]
  },
  { title: 'Tools',
    skills: [
      { name: "Github", icon: SiGithub, url: "https://education.github.com/git-cheat-sheet-education.pdf"},
      { name: "Slack", icon: SiSlack, url: "https://cpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/2/8459/files/2019/02/The-Ultimate-Slack-Cheat-Sheet-1672rod.pdf"},
      { name: "Jira", icon: SiJira, url: "https://cheatography.com/perturbatio/cheat-sheets/jira/"},
      { name: "Confluence", icon: SiConfluence, url: "https://cheatography.com/tgdchmi2/cheat-sheets/confluence-markup/" },
    ]
  },
];

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
  title: `Hi!`,
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
                  When we got our first computer I was stuck, I've been playing around with it, taught myself to code basic html and css. Thats when i found out i wanted to be a developer.`,
    description_2: [
      `I play the guitar and currently learning to play the piano.`,
      `I built and maintain a family E-Commerce store we I sell Oriental Lamps. OrientDesign.no`,
      `I have a dog, a 6 years old Boxer/American Bulldog mix and weighs 35kg.`,
    ],
    hobbies: [
      `🎮 Gaming`,
      `🎧 Music`,
      `📚 Reading`,
      `🏋️‍♂️ Gym`,
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
    {
      name: "Projects.",
      links: "/projects",
      icon: FaFeather
    },
]  
  
export const TYPED_STRINGS = [
  "Full Stack Developer",
  "I type things that to build things",
];

export const SOCIAL_LINKS = [
  {
    name: "MailMe",
    url: "mailto: andrehatlo@icloud.com",
    icon: FaEnvelope  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrehatlo/",
    icon: FaLinkedinIn  },
  {
    name: "My Git",
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
//       "Everything from simple fixes to implementing new sites.",
//     ],
//     url: "https://andrehatlo.com/",
//   }
// ];

export const GTAG = "";
