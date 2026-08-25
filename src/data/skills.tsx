import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
  FaBootstrap, 
  FaGit, 
  FaGithub
} from "react-icons/fa";

import {
  SiTailwindcss, 
  SiTypescript, 
  SiPostman,
  SiStyledcomponents,
  SiVite,
  SiGoogleanalytics,
  SiLooker,
  SiCypress,
  SiCheckmarx,
  SiGoogletagmanager,
  SiVuedotjs
} from "react-icons/si"; 

interface Skill {
  icon: React.ReactNode;
  name: string;
  color: string;
}

 export const FrontEndSkills: Skill[] = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-dracula-orange" },
    { icon: <FaCss3 />, name: "CSS3", color: "text-blue-400" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
    { icon: <SiVuedotjs />, name: "Vue.js", color: "text-dracula-green" },
    { icon: <FaReact />, name: "React", color: "text-dracula-cyan" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-dracula-cyan" },
    { icon: <SiStyledcomponents />, name: "Styled Components", color: "text-pink-400" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
    { icon: <FaFigma />, name: "Figma", color: "text-dracula-secondary" },
  ];

  export const BackEndSkills: Skill[] = [
    { icon: <SiCypress />, name: "Cypress / E2E", color: "text-dracula-green" },
    { icon: <SiCheckmarx />, name: "QA Manual", color: "text-dracula-green" },
    { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-dracula-green" },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-400" },
    { icon: <SiGoogleanalytics />, name: "Google Analytics", color: "text-dracula-orange" },
    { icon: <SiGoogletagmanager />, name: "Google Tag Manager", color: "text-blue-400" },
    { icon: <SiLooker />, name: "Looker Studio", color: "text-blue-400" },
    { icon: <FaGit />, name: "Git", color: "text-dracula-orange" },
    { icon: <FaGithub />, name: "GitHub", color: "text-dracula-cyan" },
    { icon: <FaFigma />, name: "UX/UI", color: "text-dracula-secondary" },
  ];
