export type WeddingPackage = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  guestRange: string;
  idealFor: string;
  startingFrom: string;
  features: string[];
  addOns: string[];
  tone: string;
  image: string;
};

export const packages: WeddingPackage[] = [
  {
    slug: "short-sweet-hitched",
    name: "Short, Sweet & Hitched",
    eyebrow: "Effortless vows",
    description:
      "A polished, intimate ceremony for couples who want the chapel moment without a full production.",
    guestRange: "Couple plus a small circle",
    idealFor: "Simple ceremonies, weekday requests, and private vow exchanges",
    startingFrom: "Starting at concept pricing by request",
    features: ["Chapel ceremony setting", "Ceremony coordination", "Keepsake-friendly timing"],
    addOns: ["Teresa Newman Photography inquiry", "Small floral accent", "Keepsake certificate"],
    tone: "Quiet, personal, unfussy",
    image: "/images/courtyard-feature.png"
  },
  {
    slug: "standard-chapel-ceremony",
    name: "Standard Chapel Ceremony",
    eyebrow: "Classic chapel gathering",
    description:
      "The signature French Quarter chapel experience for couples gathering loved ones in a warm, historic-feeling room.",
    guestRange: "Around 50 guests",
    idealFor: "Family ceremonies, guest-forward vows, and a classic New Orleans chapel setting",
    startingFrom: "Starting at concept pricing by request",
    features: ["Intimate chapel ceremony", "Guest arrival window", "Chapel team planning help"],
    addOns: ["Teresa Newman Photography inquiry", "Additional guest guidance", "Champagne toast planning"],
    tone: "Elegant, warm, traditional",
    image: "/images/fqwc-hero-concept.png"
  },
  {
    slug: "elopement-package",
    name: "Elopement Package",
    eyebrow: "New Orleans for two",
    description:
      "A romantic chapel elopement with enough structure to feel cared for and enough ease to feel spontaneous.",
    guestRange: "Couple or a few guests",
    idealFor: "Destination couples, vow renewals, and low-pressure celebrations",
    startingFrom: "Starting at concept pricing by request",
    features: ["Soft planning guidance", "Ceremony essentials", "Optional photo-friendly pacing"],
    addOns: ["Teresa Newman Photography inquiry", "Bouquet and boutonniere note", "Dinner reservation guidance"],
    tone: "Romantic, intimate, editorial",
    image: "/images/photography-feature.png"
  },
  {
    slug: "carriage-wedding",
    name: "Carriage Wedding",
    eyebrow: "French Quarter arrival",
    description:
      "A chapel ceremony concept paired with the romance of a carriage moment through the old city.",
    guestRange: "Couple plus select guests",
    idealFor: "Couples who want atmosphere, movement, and a memorable New Orleans entrance",
    startingFrom: "Starting at concept pricing by request",
    features: ["Chapel ceremony request", "Carriage-inspired timeline", "Photo moment planning"],
    addOns: ["Carriage timing coordination", "Teresa Newman Photography inquiry", "French Quarter portrait route"],
    tone: "Cinematic, gracious, old New Orleans",
    image: "/images/carriage-feature.png"
  },
  {
    slug: "second-line-wedding",
    name: "Second Line Wedding",
    eyebrow: "Celebration in motion",
    description:
      "A joyful chapel-to-street concept built around the energy of a New Orleans second line celebration.",
    guestRange: "Best for intimate groups",
    idealFor: "Couples who want music, movement, and a true city celebration",
    startingFrom: "Starting at concept pricing by request",
    features: ["Chapel ceremony request", "Second line planning path", "Guest flow guidance"],
    addOns: ["Second line timing guidance", "Umbrella and handkerchief note", "Teresa Newman Photography inquiry"],
    tone: "Festive, soulful, unmistakably New Orleans",
    image: "/images/second-line-feature.png"
  }
];
