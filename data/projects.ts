export type ProjectCategory = "Personal" | "Professional" | "Research";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  badge?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Amjad Journey Portfolio",
    category: "Personal",
    description:
      "A personal portfolio focused on interactive storytelling, section-based navigation, and polished responsive presentation.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    badge: "All",
  },
  {
    id: 2,
    title: "Hotel Booking — Angular",
    category: "Personal",
    description:
      "A hotel booking app built to work through Angular's component and routing patterns end to end — search, listings, and a booking flow",
    tags: ["Angular", "TypeScript", "RxJS"],
  },
  {
    id: 3,
    title: "NFT Marketplace MVP",
    category: "Professional",
    description:
      "Contributed to a minimum viable marketplace for minting, listing, and trading NFTs as part of a larger delivery team at Wadi Taibah.",
    tags: ["React", "Solidity", "Web3.js", "Ethereum"],
    badge: "MVP",
  },
  {
    id: 4,
    title: "Smart Contract & Web3 Product Delivery",
    category: "Professional",
    description:
      "Contributed to Solidity smart contract development, testing, and frontend delivery for accelerator products, including token logic, marketplace workflows, and wallet-connected interfaces.",
    tags: ["Solidity", "Ethers.js", "React", "Web3.js"],
  },
  {
    id: 5,
    title: "Tawakalna Services (Abr & Meyah & Mazadat)",
    category: "Professional",
    description:
      "Contributed to Mazadat, Abr, and Meyah services in Tawakalna platform as part of a large team, working on UI development, API integration, and testing.",
    tags: ["UI", "Integration", "Testing", "Tawakalna"],
  },
  {
    id: 6,
    title: "Enterprise Platform Enhancements",
    category: "Professional",
    description:
      "Contributed across Jira Service integration, Dhamen core enhancements, and UX testing support for internal delivery tracks.",
    tags: ["HTML", "JavaScript", "Jira Service", "UI", "UX Testing", "QA"],
  },
  {
    id: 7,
    title: "LLM-based Solidity Vulnerability Detection",
    category: "Research",
    description:
      "Research study evaluating GPT-3.5-Turbo, LLaMA-3 8B, and DeepSeek-R1-Distill-Qwen-14B for Solidity smart contract vulnerability detection.",
    tags: ["LLM", "Solidity", "Security Analysis"],
  },
];

export const projectFilters = [
  { label: "All", value: "All", count: projects.length },
  { label: "Personal", value: "Personal", count: projects.filter((project) => project.category === "Personal").length },
  { label: "Professional", value: "Professional", count: projects.filter((project) => project.category === "Professional").length },
  { label: "Research", value: "Research", count: projects.filter((project) => project.category === "Research").length },
];
