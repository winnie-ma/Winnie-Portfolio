import {
  mobile,
  backend,
  creator,
  web,
  slb,
  cyberay,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Team Player",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Cyberay",
    icon: cyberay,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining SPA using React.js, MUI, Azure functions (NodeJS), MS SQL, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed RESTful APIS using NodeJS and Prisma ORM to connect with MS SQL database.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Software Engineer",
    company_name: "SLB",
    icon: slb,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Mar 2023",
    points: [
      "Developed user-friendly interfaces for data monitoring apps using Angular, TypeScript, Angular Material, igniteui-angular, and Apache Echarts.",
      "Managed app state with NgRx and handled asynchronous operationsefficiently with RxJS.",
      "Conducted unit tests using Jasmine and Karma, following BDD principles.",
      "Collaborated with .NET Core developers for seamless integration of front-end and back-end solutions.",
      "Realized UI automation with Playwright and Jenkins.",
    ],
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

export { navLinks, services, experiences, technologies };
