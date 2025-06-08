import { ReactNode } from "react";

export interface PortfolioItem {
  id: string;
  title: string;
  category: "web" | "app" | "design";
  image: string;
  link: string;
  github?: string;
  technologies: string[];
  description: string;
}
export interface Education {
  degree: string;
  institution: string;
  period: string;
description: React.ReactNode;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: "Code" | "Smartphone" | "Palette" | "Server";
}

export interface ContactInfo {
  title: string;
  value: string;
  icon: "Mail" | "Phone" | "MapPin";
  link?: string;
}
