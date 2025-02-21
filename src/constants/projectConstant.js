import PortfolioImg from "../assets/portfolio-v1.png";
import ApplianceNowImg from "../assets/appliancenow.png";
import Spaces_MMUImg from "../assets/spaces-mmu.png";

const projectsData = [
  {
    id: 1,
    name: "ApplianceNow",
    description: "A Full-Stack Home Appliance E-Commerce Site",
    techStack: ["JavaScript", "Java", "SQLite", "HTML", "CSS"],
    image: ApplianceNowImg,
    github: "https://github.com/itskom",
    website: "https://github.com/itskom",
  },
  {
    id: 2,
    name: "SpacesMMU",
    description: "Interactive study space finder for MMU Students",
    techStack: ["NextJS", "Mapbox", "Tailwind", "Vercel"],
    image: Spaces_MMUImg,
    github: "https://github.com/itskom/SpacesMMU",
    website: "https://spaces-mmu.vercel.app/",
  },
  {
    id: 3,
    name: "Portfolio V1",
    description: "A personal portfolio to showcase my projects and skills.",
    techStack: ["JavaScript", "React", "CSS", "NextJS", "Vercel"],
    image: PortfolioImg,
    github: "https://github.com/itskom",
    website: "https://github.com/itskom",
  },
];

export default projectsData;
