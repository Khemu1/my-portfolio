import {
  FaJsSquare,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaCss3Alt,
  FaLock,
  FaAws,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiPostman,
  SiGraphql,
  SiJest,
  SiPm2,
  SiPrisma,
  SiSequelize,
  SiTypeorm,
  SiNextdotjs,
  SiCloudflare,
  SiCloudflareworkers,
  SiDocker,
  SiGithubactions,
  SiTravisci,
  SiSqlite,
  SiRedis,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import { BiLogoTypescript } from "react-icons/bi";

export const categorizedSkills = {
  frontend: [
    { icon: <FaHtml5 />, name: "HTML5", color: "orange" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "blue" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "purple" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "cyan" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "yellow" },
    { icon: <BiLogoTypescript />, name: "TypeScript", color: "blue" },
    { icon: <FaReact />, name: "React", color: "sky" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "slate" },
    { icon: <FaVuejs />, name: "Vue", color: "green" },
    { icon: <SiRedux />, name: "Redux", color: "violet" },
    { icon: <SiReactquery />, name: "React Query", color: "rose" },
  ],

  backend: [
    { icon: <FaNodeJs />, name: "Node.js", color: "green" },
    { icon: <BiLogoTypescript />, name: "TypeScript", color: "blue" },
    { icon: <SiExpress />, name: "Express.js", color: "dark" },
    { icon: <SiGraphql />, name: "GraphQL", color: "pink" },
    { icon: <FaLock />, name: "JWT", color: "amber" },
    { icon: <SiPm2 />, name: "PM2", color: "lime" },
    { icon: <SiPrisma />, name: "Prisma", color: "indigo" },
    { icon: <SiTypeorm />, name: "TypeORM", color: "orange" },
    { icon: <SiSequelize />, name: "Sequelize", color: "teal" },
    { icon: <SiRedis />, name: "Redis", color: "red" }, 
  ],

  database: [
    { icon: <SiMongodb />, name: "MongoDB", color: "emerald" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "blue" },
    { icon: <SiMysql />, name: "MySQL", color: "orange" },
    { icon: <SiSqlite />, name: "SQLite", color: "slate" },
  ],

  tools: [
    { icon: <RiSupabaseFill />, name: "Supabase", color: "emerald" },
    { icon: <FaGithub />, name: "GitHub", color: "slate" },
    { icon: <FaAws />, name: "AWS", color: "amber" },
    { icon: <SiCloudflare />, name: "Cloudflare", color: "orange" },
    {
      icon: <SiCloudflareworkers />,
      name: "Cloudflare Workers",
      color: "orange",
    },
    { icon: <SiDocker />, name: "Docker", color: "sky" },
    { icon: <SiTravisci />, name: "Travis CI", color: "red" },
    { icon: <SiGithubactions />, name: "GitHub Actions", color: "violet" },
    { icon: <SiPostman />, name: "Postman", color: "orange" },
  ],

  testing: [{ icon: <SiJest />, name: "Jest", color: "red" }],
};

