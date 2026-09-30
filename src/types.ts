export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
