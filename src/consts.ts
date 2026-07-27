import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mario Gomez",
  EMAIL: "margomez@ethz.ch",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Mario Gomez - robotics researcher at ETH Zürich working on motion planning, control and perception for autonomous systems.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes and write-ups on robotics, optimization and things I am learning.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Applied work and side projects across robotics, control and computer vision.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "Peer-reviewed research in robot motion planning, manipulation and tactile sensing.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Curriculum vitae of Mario Gomez Andreu.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/mgomezandreu",
  },
  {
    NAME: "google scholar",
    HREF: "https://scholar.google.com/citations?user=Dqd2NBMAAAAJ",
  },
  {
    NAME: "X",
    HREF: "https://x.com/mgomezandreu",
  },
];
