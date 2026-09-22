export type ProjectCategory = "Personal" | "Taibah Valley" | "Elm Company";

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
    title: "This Portfolio",
    category: "Personal",
    description:
      "A game-inspired personal site — animated journey map, quest-style project log, and a hero built around an RPG framing of a software career.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    badge: "All",
  },
  {
    id: 2,
    title: "Hotel Booking — Angular",
    category: "Personal",
    description:
      "A hotel booking app built to work through Angular's component and routing patterns end to end — search, listings, and a booking flow.",
    tags: ["Angular", "TypeScript", "RxJS"],
  },
  {
    id: 3,
    title: "NFT Marketplace MVP",
    category: "Taibah Valley",
    description:
      "Built the minimum viable marketplace for minting, listing, and trading NFTs, from contract interaction through the browsing UI.",
    tags: ["React", "Solidity", "Web3.js", "Ethereum"],
    badge: "MVP",
  },
  {
    id: 4,
    title: "Smart Contract Development",
    category: "Taibah Valley",
    description:
      "Wrote and tested Solidity smart contracts for several accelerator projects, covering token logic and on-chain marketplace mechanics.",
    tags: ["Solidity", "Hardhat", "Ethers.js"],
  },
  {
    id: 5,
    title: "React UI for Web3 Products",
    category: "Taibah Valley",
    description:
      "Delivered the front-end interfaces for other blockchain projects in the accelerator, connecting wallets and contract state to usable screens.",
    tags: ["React", "Web3.js", "UI"],
  },
  {
    id: 6,
    title: "Jira Service Integration",
    category: "Elm Company",
    description:
      "Implemented the HTML/UI side of a Jira Service Management integration, wiring the interface to the ticketing workflow.",
    tags: ["HTML", "JavaScript", "Jira Service"],
    badge: "Production",
  },
  {
    id: 7,
    title: "Rased — Tawakalna",
    category: "Elm Company",
    description:
      "Contributed to Rased within the Tawakalna platform.",
    tags: ["UI", "Tawakalna"],
  },
  {
    id: 8,
    title: "Meyah — Tawakalna",
    category: "Elm Company",
    description:
      "Built the UI and handled API integration and testing for Meyah on the Tawakalna platform.",
    tags: ["UI", "API Integration", "Testing"],
  },
  {
    id: 9,
    title: "UX Testing Support",
    category: "Elm Company",
    description:
      "Supported Monther with UX testing, helping validate flows and catch usability issues before release.",
    tags: ["UX Testing", "QA"],
  },
  {
    id: 10,
    title: "Dhamen — Core Enhancement",
    category: "Elm Company",
    description:
      "Worked on core enhancements for Dhamen, improving the existing platform's functionality.",
    tags: ["UI", "Enhancement"],
  },
  {
    id: 11,
    title: "Abi — UI",
    category: "Elm Company",
    description:
      "Built out interface work for Abr.",
    tags: ["UI"],
  },
];

export const projectFilters = [
  { label: "All", value: "All", count: projects.length },
  { label: "Personal", value: "Personal", count: projects.filter((project) => project.category === "Personal").length },
  { label: "Taibah Valley", value: "Taibah Valley", count: projects.filter((project) => project.category === "Taibah Valley").length },
  { label: "Elm Company", value: "Elm Company", count: projects.filter((project) => project.category === "Elm Company").length },
];
