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
    title: "Smart Contract Development",
    category: "Professional",
    description:
      "Contributed to Solidity smart contract development and testing for accelerator projects, including token logic and marketplace workflows.",
    tags: ["Solidity", "Hardhat", "Ethers.js"],
  },
  {
    id: 5,
    title: "React UI for Web3 Products",
    category: "Professional",
    description:
      "Built frontend interfaces for blockchain products, connecting wallet flows and contract state to production-facing screens.",
    tags: ["React", "Web3.js", "UI"],
  },
  {
    id: 6,
    title: "Jira Service Integration",
    category: "Professional",
    description:
      "Implemented UI components for Jira Service Management integration and connected the interface to ticketing workflows.",
    tags: ["HTML", "JavaScript", "Jira Service"],
    badge: "Production",
  },
  {
    id: 7,
    title: "Rased — Tawakalna",
    category: "Professional",
    description:
      "Contributed to Rased within the Tawakalna platform as part of a broader product team.",
    tags: ["UI", "Tawakalna"],
  },
  {
    id: 8,
    title: "Meyah — Tawakalna",
    category: "Professional",
    description:
      "Worked on UI, API integration, and testing for Meyah in Tawakalna as part of a team delivery.",
    tags: ["UI", "API Integration", "Testing"],
  },
  {
    id: 9,
    title: "UX Testing Support",
    category: "Professional",
    description:
      "Supported Monther with UX testing, helping validate flows and catch usability issues before release.",
    tags: ["UX Testing", "QA"],
  },
  {
    id: 10,
    title: "Dhamen — Core Enhancement",
    category: "Professional",
    description:
      "Contributed to core enhancements for Dhamen, improving existing platform functionality within the product team.",
    tags: ["UI", "Enhancement"],
  },
  {
    id: 11,
    title: "Abi — UI",
    category: "Professional",
    description:
      "Contributed UI implementation work for Abr as part of internal delivery.",
    tags: ["UI"],
  },
  {
    id: 12,
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
