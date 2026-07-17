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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { WorkbookGate } from "../components/WorkbookGate";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
              "@id": "https://vizieropscherp.nl/#organization",
              name: "Vizier op Scherp",
              url: "https://vizieropscherp.nl/",
              logo: "https://vizieropscherp.nl/favicon.ico",
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
              "@id": "https://vizieropscherp.nl/#website",
              url: "https://vizieropscherp.nl/",
              name: "Vizier op Scherp",
              inLanguage: "nl-NL",
              publisher: { "@id": "https://vizieropscherp.nl/#organization" },
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

  useEffect(() => {
    const headers = document.querySelectorAll(".site-header .header-inner");
    const cleanups: Array<() => void> = [];
    headers.forEach((headerInner) => {
      const nav = headerInner.querySelector(".main-nav") as HTMLElement | null;
      if (!nav) return;
      if (headerInner.querySelector(".nav-toggle")) return;
      const btn = document.createElement("button");
      btn.className = "nav-toggle";
      btn.type = "button";
      btn.setAttribute("aria-label", "Menu openen");
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML = "<span></span>";
      const handler = () => {
        const open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
      };
      btn.addEventListener("click", handler);
      headerInner.appendChild(btn);
      cleanups.push(() => {
        btn.removeEventListener("click", handler);
        btn.remove();
        nav.classList.remove("open");
      });
    });
    return () => cleanups.forEach((c) => c());
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WorkbookGate />
    </QueryClientProvider>
  );
}
