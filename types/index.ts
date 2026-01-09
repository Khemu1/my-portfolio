export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  fullDescription: string;
  technologies: string[];
  liveLink: string;
  sourceLink: string;
  imageColor: string;
}

export interface NavItem {
  name: string;
  href: string;
}
