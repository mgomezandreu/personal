// Single source of truth for publications, rendered in full on
// src/pages/publications.astro and as a compact list on the home page.
//
// Site-internal asset paths are wrapped in withBase() here so both consumers
// get correct URLs under the configured `base`; external URLs pass through.
// Entries are kept in curated order, most prominent first.

import { withBase } from "@lib/utils";

export type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string }
  | { type: "youtube"; src: string; title: string };

export type PubLink = { label: string; href: string };

export type Publication = {
  title: string;
  venue: string;
  links: PubLink[];
  description: string;
  media: Media;
};

export const publications: Publication[] = [
  {
    title: "FOCI: Trajectory Optimization on Gaussian Splats",
    venue: "Published at IROS 2025",
    links: [
      { label: "Paper Website", href: "https://rffr.leggedrobotics.com/works/foci/" },
      { label: "PDF", href: withBase("/files/FOCI.pdf") },
    ],
    description:
      "Trajectory optimization operating directly on 3D Gaussian Splats. We define a collision metric based on Gaussian overlap integrals and apply this to legged robot planning through tight spaces.",
    media: { type: "video", src: withBase("/videos/foci_spinner_fixed.mp4") },
  },
  {
    title: "RoboWrangler: Toward Rope-based Grasping for Mobile Manipulation",
    venue: "Published at RoboSoft 2025",
    links: [
      { label: "GitHub", href: "https://github.com/leggedrobotics/robowrangler" },
      { label: "PDF", href: withBase("/files/RoboWrangler.pdf") },
    ],
    description:
      "Rope-based robotic manipulator, capable of capturing and retrieving objects using a dynamically controlled loop of rope. We introduce a hardware prototype, develop a physical simulation model, and demonstrate object manipulation on a mobile quadrupedal robot.",
    media: { type: "image", src: withBase("/images/robowrangler_thumbnail.png"), alt: "RoboWrangler" },
  },
  {
    title: "Beyond the Cascade: Juggling Vanilla Siteswap Patterns",
    venue: "Published at IROS 2024",
    links: [
      { label: "Project Website", href: "https://kai-ploeger.com/beyond-cascades" },
      { label: "PDF", href: withBase("/files/BeyondTheCascade.pdf") },
    ],
    description:
      "Robotic juggling of siteswap patterns with varying throw heights. We introduce a constraint-based trajectory planning framework that enables seamless pattern transitions and juggling of all siteswap sequences involving up to nine-ball throws.",
    media: { type: "youtube", src: "https://www.youtube.com/embed/fqGm-cLNWFI?start=23", title: "Beyond the Cascade" },
  },
  {
    title: "Active Sampling for Hardness Classification with Vision-Based Tactile Sensors",
    venue: "Published at GRC 2025",
    links: [
      { label: "PDF", href: withBase("/files/TactileHardness.pdf") },
    ],
    description:
      "Information-theoretic active sampling strategies to improve tactile hardness classification using vision-based tactile sensors.",
    media: { type: "image", src: withBase("/images/hardness_thumbnail.png"), alt: "Tactile hardness" },
  },
];
