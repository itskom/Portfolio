import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import HTMLIcon from "../assets/HTML5.svg";
import CSSIcon from "../assets/CSS3.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";
import PythonIcon from "../assets/python.svg";
import JavaIcon from "../assets/java.svg";
import SpringIcon from "../assets/springboot.svg";
import PostgresqlIcon from "../assets/postgresql.svg";

const skills = [
  // Programming Languages
  {
    id: 1,
    name: "Java",
    type: "Programming Language",
    image: JavaIcon,
  },
  {
    id: 2,
    name: "Python",
    type: "Programming Language",
    image: PythonIcon,
  },

  {
    id: 3,
    name: "JavaScript",
    type: "Programming Language",
    image: JavaScriptIcon,
  },

  // Frontend Libraries and Frameworks
  {
    id: 4,
    name: "SpringBoot",
    type: "Backend Framework",
    image: SpringIcon,
  },

  {
    id: 5,
    name: "React",
    type: "JavaScript Library",
    image: ReactIcon,
  },
  {
    id: 6,
    name: "Next.js",
    type: "React Framework",
    image: NextJsIcon,
  },

  // Styling and CSS Frameworks
  // {
  //   id: 5,
  //   name: "Tailwind CSS",
  //   type: "CSS Framework",
  //   image: TailwindIcon,
  // },

  // Backend and Databases
  {
    id: 7,
    name: "Node.js",
    type: "JavaScript Runtime",
    image: NodeJsIcon,
  },
  {
    id: 8,
    name: "PostgreSQL",
    type: "Database",
    image: PostgresqlIcon,
  },
  {
    id: 9,
    name: "MongoDB",
    type: "Database",
    image: MongoDBIcon,
  },

  // Tools and Version Control
  {
    id: 10,
    name: "Git",
    type: "Version Control",
    image: GitIcon,
  },
];

// Optional skills for future use
/*
  {
    id: 10,
    name: "HTML",
    type: "Markup Language",
    image: HTMLIcon,
  },
  {
    id: 11,
    name: "CSS",
    type: "Styling Language",
    image: CSSIcon,
  },
  {
    id: 12,
    name: "Bootstrap",
    type: "CSS Framework",
    image: BootstrapIcon,
  },
  {
    id: 13,
    name: "GitHub",
    type: "- Hosting Platform",
    image: GitHubIcon,
  },
*/

export default skills;
