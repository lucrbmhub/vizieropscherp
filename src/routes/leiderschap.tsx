import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/leiderschap")({
  head: () => ({
    meta: [
      { title: "Leiderschap & talentontwikkeling | Vizier op Scherp" },
      { name: "description", content: "Vizier op Scherp voert lopende programma's uit op het gebied van leiderschap en talentontwikkeling, waaronder coaching voor startende managers en trainees." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Leiderschap & talentontwikkeling, Vizier op Scherp" },
      { property: "og:description", content: "Lopende programma's op het gebied van leiderschap en talentontwikkeling: coaching voor startende managers en begeleiding van trainees." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/leiderschap` }],
  }),
  component: Page,
});

const HTML = "<main id=\"main\">\n\n<!-- HERO -->\n<section class=\"hero hero--linnen\">\n  <div class=\"watermark watermark--light\"></div>\n  <div class=\"container hero-pad\">\n    <div class=\"hero-copy\" style=\"max-width:820px;\">\n      <span class=\"badge badge--dark\">Achtergrond</span>\n      <h1 class=\"h-hero\">Le<span class=\"idot\">i</span>derschap &amp; talentontwikkeling</h1>\n      <p class=\"lead\">Naast loopbaancoaching voert Vizier op Scherp enkele lopende programma's uit op het gebied van leiderschap en talentontwikkeling.</p>\n    </div>\n  </div>\n</section>\n\n<!-- WAT WE UITVOEREN -->\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"split\">\n      <div>\n        <p class=\"eyebrow\">Achtergrond</p>\n        <h2 class=\"h-section\">Wat we uitvoeren</h2>\n      </div>\n      <div style=\"display:flex;flex-direction:column;gap:20px;max-width:68ch;\">\n        <p>Het gaat om coaching voor startende managers, begeleiding van trainees en trainingen binnen traineeships, onder meer binnen een meerjarig opleidingsprogramma voor een zakelijke dienstverlener, met thema's als feedback, gespreksvoering, stressmanagement, samenwerking en persoonlijk leiderschap.</p>\n        <p>Deze programma's voeren we met dezelfde zorg en kwaliteit uit als al ons werk: ervaren, gecertificeerde coaches, een duidelijke opbouw en concrete toepassing in de praktijk.</p>\n        <p>Heeft u een vraag in deze richting? <a href=\"/kennismaken\">Neem contact op</a>. Dan bespreken we persoonlijk wat mogelijk is.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n</main>\n\n";

function Page() {
  return (
    <>
      <SiteHeader />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <SiteFooter />
    </>
  );
}