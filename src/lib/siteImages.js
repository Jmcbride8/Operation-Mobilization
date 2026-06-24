// Central registry of all configurable site images.
// key: unique identifier used by components via getImage(key)
// label: human-readable name shown in admin
// category: grouping for admin UI
// url: default/fallback URL (used until an admin overrides it in the DB)

export const SITE_IMAGES = [
  // ── HOME PAGE ──
  { key: "hero.main", label: "Hero Background", category: "Home", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/f4ecd5f2e_generated_image.png" },
  { key: "commission.background", label: "Great Commission Background", category: "Home", url: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2400&q=80" },
  { key: "sacrifice.background", label: "Sacrifice Statement Background", category: "Home", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/182e07e9d_generated_image.png" },

  // ── WHAT WE ARE NOT ──
  { key: "identity.charity", label: "Not: A Charity", category: "What We Are Not", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/d3dee249f_generated_image.png" },
  { key: "identity.ngo", label: "Not: An NGO", category: "What We Are Not", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/6166e16c0_generated_image.png" },
  { key: "identity.tourists", label: "Not: Disaster Tourists", category: "What We Are Not", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/37398c563_generated_image.png" },
  { key: "identity.corporation", label: "Not: A Corporation", category: "What We Are Not", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/4da8084f2_generated_image.png" },
  { key: "identity.donors", label: "Not: Passive Donors", category: "What We Are Not", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/751d76893_generated_image.png" },
  { key: "identity.trained", label: "Not: Well-Meaning", category: "What We Are Not", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/0c410993c_generated_image.png" },

  // ── OPERATIONS ──
  { key: "operations.south_asia", label: "South Asia Operations", category: "Operations", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/b3202034e_generated_f1e526ec.png" },
  { key: "operations.middle_east", label: "Middle East & North Africa Operations", category: "Operations", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/b925a4c82_generated_e0771031.png" },
  { key: "operations.east_africa", label: "East Africa Operations", category: "Operations", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/34ef08e21_generated_fd8ecaec.png" },
  { key: "operations.central_asia", label: "Central Asia Operations", category: "Operations", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/57b2add53_generated_7a4bd510.png" },

  // ── FIELD REPORTS ──
  { key: "intel.portrait", label: "Field Report - Portrait", category: "Field Reports", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/f7dc02aed_generated_68021472.png" },
  { key: "intel.command", label: "Field Report - Command", category: "Field Reports", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/53789e54b_generated_696925f2.png" },
  { key: "intel.ops_hub", label: "Field Report - Operations Hub", category: "Field Reports", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/34ef08e21_generated_fd8ecaec.png" },
  { key: "intel.medical", label: "Field Report - Medical", category: "Field Reports", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/57b2add53_generated_7a4bd510.png" },

  // ── LOGISTICS ──
  { key: "logistics.supply", label: "Supply Distribution", category: "Logistics", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/fe9557239_generated_7bc052d7.png" },

  // ── HALL OF FAITH ──
  { key: "faith.jesus", label: "Jesus of Nazareth", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/59f667692_generated_image.png" },
  { key: "faith.paul", label: "The Apostle Paul", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/7198696f7_generated_image.png" },
  { key: "faith.carey", label: "William Carey", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/d1f83d3b0_generated_image.png" },
  { key: "faith.livingstone", label: "David Livingstone", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/01f8a3506_generated_image.png" },
  { key: "faith.taylor", label: "Hudson Taylor", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/dfa5b188e_generated_image.png" },
  { key: "faith.carmichael", label: "Amy Carmichael", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/4aec35b71_generated_image.png" },
  { key: "faith.saint_elliot", label: "Saint & Elliot", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/f711e1ed1_generated_image.png" },
  { key: "faith.verwer", label: "George Verwer", category: "Hall of Faith", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/7ba33378b_generated_image.png" },

  // ── ABOUT PAGE ──
  { key: "about.hero", label: "About Hero Background", category: "About", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/f4ecd5f2e_generated_image.png" },
  { key: "mission.background", label: "Mission Section Background", category: "About", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/9d8f7d593_generated_image.png" },

  // ── ABOUT STORY MILESTONES ──
  { key: "story.1955", label: "1955 - The Conversion", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/1391a8c8d_generated_image.png" },
  { key: "story.1957", label: "1957 - The Beginning", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/cbc67e493_generated_image.png" },
  { key: "story.1960", label: "1960 - Spain & Send the Light", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/e19c0d760_generated_image.png" },
  { key: "story.1963", label: "1963 - Going Global", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/3d30bdb67_generated_image.png" },
  { key: "story.1970", label: "1970 - The Logos Ship", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/3004808b5_generated_image.png" },
  { key: "story.1978", label: "1978 - Doulos Launched", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/63d6519de_generated_image.png" },
  { key: "story.1981", label: "1981 - Officially OM", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/28b5e37c6_generated_image.png" },
  { key: "story.2000s", label: "2000s - New Frontiers", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/28b8c68cb_generated_image.png" },
  { key: "story.2023", label: "2023 - A Servant Goes Home", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/72da8824b_generated_image.png" },
  { key: "story.today", label: "Today - 5,800+ Workers", category: "About Story", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/162fe90d2_generated_image.png" },

  // ── DIAGNOSIS & CURE ──
  { key: "diagnosis.symptom", label: "Diagnosis - The Symptom", category: "Diagnosis & Cure", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/62ecb575d_generated_image.png" },
  { key: "diagnosis.cause", label: "Diagnosis - The Cause", category: "Diagnosis & Cure", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/c89850f6d_generated_image.png" },
  { key: "diagnosis.cure", label: "Diagnosis - The Cure", category: "Diagnosis & Cure", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/199f6f543_generated_image.png" },
  { key: "cure.message", label: "Cure - The Message", category: "Diagnosis & Cure", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/821cb991b_generated_image.png" },
  { key: "cure.proof", label: "Cure - The Proof", category: "Diagnosis & Cure", url: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/b6c0da36b_generated_image.png" },
];

// Quick lookup map: key → default url
export const DEFAULT_IMAGE_MAP = SITE_IMAGES.reduce((acc, img) => {
  acc[img.key] = img.url;
  return acc;
}, {});