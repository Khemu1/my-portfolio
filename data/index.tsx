import { FaGithub, FaLinkedin } from "react-icons/fa";

export const personal = {
  firstName: "Ali",
  name: "Ali Hassan",
  email: "alghost2004@gmail.com",
  phone: "+20100062766",
  nationlity: "Egyptian",
  address: "Alexandria, Egypt",
  freeLance: "Available",
  languages: ["English", "Arabic"],
  expreince: "1 Year",
  summary: `
  Self-motivated Backend-leaning Full Stack Developer with hands-on experience building scalable and efficient web applications. Proficient in designing APIs, managing databases, and implementing secure, real-time backend systems — with solid frontend experience using modern JavaScript frameworks.`,
  image: "/assets/home/image.png",
  cv: "https://drive.google.com/drive/u/0/folders/1dsYyVv3Q96oMVZuxAlE07FeIG6Lwq5D5",
};

export const stats = [
  { name: "Years of Experience", value: 1 },
  { name: "Free Lancing Projects", value: 3 },
  { name: "Side Projects", value: 62 },
  { name: "Code Commits", value: 0 },
];

export const services = [
  {
    title: "Frontend Development",
    number: "01",
    description:
      "I specialize in building modern, responsive user interfaces using React, Next.js, and TypeScript. With expertise in state management (Redux, React Query) and UI frameworks (Tailwind CSS, DaisyUI), I focus on delivering intuitive, accessible experiences. I also leverage Zod for robust form validation, ensuring clean, maintainable, and high-performance code.",
  },
  {
    title: "Backend Development",
    number: "02",
    description:
      "I create scalable, high-performance APIs using Node.js, Express, and TypeScript. My experience includes working with both SQL (PostgreSQL) and NoSQL (MongoDB) databases, as well as ORMs like Prisma and Sequelize. I prioritize security and efficiency, implementing authentication solutions with JWT and OAuth, and designing RESTful APIs for optimal data handling.",
  },
  {
    title: "Full-Stack Solutions",
    number: "03",
    description:
      "I deliver end-to-end web applications by combining frontend and backend expertise. My toolkit includes Next.js for server-side rendering (SSR), WebSockets for real-time features, and TypeScript for strong type safety. I ensure seamless integration between the frontend and backend, creating cohesive and efficient user experiences.",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/Khemu1" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ali-hegazy-379030254/",
  },
];
