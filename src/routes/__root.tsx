import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { SITE_URL } from "@/lib/site";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { WorkbookGate } from "../components/WorkbookGate";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Naar de homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Deze pagina kon niet laden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Er ging iets mis aan onze kant. Probeer het opnieuw of ga terug naar de homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Probeer opnieuw
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Naar de homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Loopbaancoaching | Amsterdam & Haarlem | Vizier op Scherp" },
      { name: "description", content: "Regionaal netwerk voor loopbaancoaching in Amsterdam, Haarlem en omgeving. Voor werkgevers en hun medewerkers." },
      { property: "og:title", content: "Loopbaancoaching | Amsterdam & Haarlem | Vizier op Scherp" },
      { property: "og:description", content: "Regionaal netwerk voor loopbaancoaching in Amsterdam, Haarlem en omgeving. Voor werkgevers en hun medewerkers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Loopbaancoaching | Amsterdam & Haarlem | Vizier op Scherp" },
      { name: "twitter:description", content: "Regionaal netwerk voor loopbaancoaching in Amsterdam, Haarlem en omgeving. Voor werkgevers en hun medewerkers." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ct3NhEEuxQhVXJa2EfZ5PETLH8a2/social-images/social-1783714203024-Loopbaan_social.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ct3NhEEuxQhVXJa2EfZ5PETLH8a2/social-images/social-1783714203024-Loopbaan_social.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap" },
      { rel: "stylesheet", href: "/styles.css" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Vizier op Scherp",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/favicon.ico`,
              email: "hallo@vizieropscherp.nl",
              telephone: "+31202146466",
              areaServed: ["Amsterdam", "Haarlem", "Noord-Holland"],
              sameAs: ["https://www.linkedin.com/company/10002759/"],
              address: [
                { "@type": "PostalAddress", streetAddress: "Klein Heiligland 84", postalCode: "2011 EJ", addressLocality: "Haarlem", addressCountry: "NL" },
                { "@type": "PostalAddress", streetAddress: "IJsbaanpad 9", postalCode: "1076 CV", addressLocality: "Amsterdam", addressCountry: "NL" },
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "Vizier op Scherp",
              inLanguage: "nl-NL",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WorkbookGate />
    </QueryClientProvider>
  );
}
