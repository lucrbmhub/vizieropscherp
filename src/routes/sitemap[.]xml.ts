import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/voor-werkgevers", changefreq: "monthly", priority: "0.9" },
          { path: "/coaching-voor-mij", changefreq: "monthly", priority: "0.9" },
          { path: "/uwv-traject", changefreq: "monthly", priority: "0.8" },
          { path: "/coaches", changefreq: "monthly", priority: "0.8" },
          { path: "/over-ons", changefreq: "monthly", priority: "0.7" },
          { path: "/leiderschap", changefreq: "monthly", priority: "0.6" },
          { path: "/kennismaken", changefreq: "monthly", priority: "0.8" },
          { path: "/inzichten", changefreq: "weekly", priority: "0.8" },
          { path: "/inzichten/het-tegenbod", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/goede-loopbaancoach-kiezen", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/job-crafting", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/duurzaam-inzetbaar-blijven", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/duurzame-inzetbaarheid-werkgever", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/outplacement-of-loopbaancoaching", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/loopbaanswitch-na-je-40e", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/vier-basisbehoeften-in-werk", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/persoonlijke-effectiviteit", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/passie-terugvinden-in-je-werk", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/energie-en-motivatie-in-werk", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/richting-vinden-in-je-loopbaan", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/vastzitten-in-een-goede-baan", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/impostersyndroom-twijfel-als-kracht", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/mentale-vermoeidheid-en-eigen-regie", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/je-eerste-baan", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/starters-behouden", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/van-werven-naar-behouden", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/skillsgericht-werven", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/solliciteren-en-arbeidsmarkt", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/ervaren-talent-als-kans", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/generaties-op-de-werkvloer", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/kosten-van-een-verkeerde-match", changefreq: "yearly", priority: "0.6" },
          { path: "/inzichten/loopbaangesprek-met-medewerker", changefreq: "yearly", priority: "0.6" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
