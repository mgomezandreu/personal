// Single source of truth for the Experience and Education entries rendered on
// both the home page (src/pages/index.astro) and the CV page (src/pages/cv.astro).
// Logo paths are site-internal; wrap them in withBase() at render time.
//
// Experience uses the *lab / group* mark (CVG, Prorok Lab, RSL, IAS); Education
// uses the *university* mark. Every logo renders on a light chip so dark marks
// stay legible on the dark-first theme.

export type Experience = {
  org: string;
  href?: string;
  note: string;
  logo: string;
  logoAlt: string;
};

export type Education = {
  institution: string;
  detail: string;
  period: string;
  href?: string;
  logo: string;
  logoAlt: string;
};

// Ordered by time, most recent first (see public/files/GomezAndreu_CV.pdf).
export const experience: Experience[] = [
  {
    org: "ETH Zürich - Computer Vision and Geometry Group",
    href: "https://cvg.ethz.ch/",
    note: "Incoming Ph.D. student.",
    logo: "/images/logos/cvg.svg",
    logoAlt: "ETH Computer Vision and Geometry Group",
  },
  {
    org: "University of Cambridge - Prorok Lab",
    href: "https://www.proroklab.org/",
    note: "Visiting student, Master's thesis.",
    logo: "/images/logos/prorok.png",
    logoAlt: "Prorok Lab",
  },
  {
    org: "Gravis Robotics AG",
    href: "https://gravisrobotics.com/",
    note: "Latency-aware MPC and collision-aware planning for autonomous excavators.",
    logo: "/images/logos/gravis.png",
    logoAlt: "Gravis Robotics",
  },
  {
    org: "ETH Zürich - Robotic Systems Lab",
    href: "https://rsl.ethz.ch/",
    note: "Trajectory optimization on Gaussian Splats (FOCI), rope-based mobile manipulation (RoboWrangler).",
    logo: "/images/logos/rsl.png",
    logoAlt: "Robotic Systems Lab",
  },
  {
    org: "TU Darmstadt - Intelligent Autonomous Systems Group",
    href: "https://www.ias.informatik.tu-darmstadt.de/",
    note: "Motion planning for robotic juggling; active sampling for tactile hardness classification.",
    logo: "/images/logos/ias.png",
    logoAlt: "Intelligent Autonomous Systems Group",
  },
  {
    org: "DKFZ & University Medical Center Hamburg-Eppendorf",
    href: undefined,
    note: "Medical imaging and clinical software.",
    logo: "/images/logos/dkfz.svg",
    logoAlt: "German Cancer Research Center (DKFZ)",
  },
];

export const education: Education[] = [
  {
    institution: "University of Cambridge",
    detail: "Visiting Student, Master's Thesis",
    period: "01/2026 - Ongoing",
    href: "https://www.cam.ac.uk/",
    logo: "/images/logos/cambridge-university.png",
    logoAlt: "University of Cambridge",
  },
  {
    institution: "ETH Zürich",
    detail: "M.Sc. in Robotics, Systems and Control",
    period: "09/2023 - Ongoing",
    href: "https://ethz.ch/en.html",
    logo: "/images/logos/eth.svg",
    logoAlt: "ETH Zürich",
  },
  {
    institution: "Technical University of Darmstadt",
    detail: "B.Sc. in Computer Science",
    period: "09/2020 - 08/2023",
    href: "https://www.tu-darmstadt.de/",
    logo: "/images/logos/tu-darmstadt.svg",
    logoAlt: "Technical University of Darmstadt",
  },
];
