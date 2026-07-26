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

export function articleSocialMeta(slug: string, title: string) {
  const url = `${SITE_URL}/assets/og/${slug}.png`;
  return [
    { property: "og:image", content: url },
    { property: "og:image:secure_url", content: url },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },
    { name: "twitter:image", content: url },
  ];
}
