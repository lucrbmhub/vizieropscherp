export const SITE_URL = "https://www.vizieropscherp.nl";

export const SOCIAL_IMAGE_URL = `${SITE_URL}/assets/social-share.jpg`;
export const socialImageMeta = [
  { property: "og:image", content: SOCIAL_IMAGE_URL },
  { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
  { property: "og:image:type", content: "image/jpeg" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: "Vizier op Scherp — loopbaancoaching in Amsterdam en Haarlem" },
  { name: "twitter:image", content: SOCIAL_IMAGE_URL },
];
