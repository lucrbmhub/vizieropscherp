import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/kennismaken")({
  head: () => ({
    meta: [
      { title: "Kennismaken | Plan een vrijblijvend gesprek | Vizier op Scherp" },
      { name: "description", content: "Bellen, WhatsAppen, mailen of langskomen in Haarlem of Amsterdam. Plan een vrijblijvend kennismakingsgesprek met Vizier op Scherp." },
      { property: "og:title", content: "Kennismaken | Vizier op Scherp" },
      { property: "og:description", content: "Vertel wat er speelt, dan kijken we samen wat helpt. Een eerste gesprek is zo gebeurd." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/kennismaken` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/kennismaken` }],
  }),
  component: Page,
});

const HTML_BEFORE = `<main id=\"main\">

<!-- HERO -->
<section class="hero hero--linnen">
  <div class="watermark watermark--light"></div>
  <div class="container hero-pad">
    <div class="hero-copy" style="max-width:760px;">
      <span class="badge badge--dark">Kennismaken</span>
      <h1 class="h-hero">Laten we kennismaken<span class="gold">.</span></h1>
      <p class="lead">Vertel wat er speelt, voor jezelf of in de organisatie. Dan kijken we samen wat helpt. Een eerste gesprek is zo gebeurd, en vaak verrassend verhelderend.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#bericht-form">Stuur een bericht</a>
        <a class="btn btn-outline" href="https://wa.me/31611221424" target="_blank" rel="noopener noreferrer">Of WhatsApp ons</a>
      </div>
      <p style="font-size:15px;white-space:pre-line;">Liever mailen of bellen?
<a href="mailto:hallo@vizieropscherp.nl" style="font-weight:500;border-bottom:1px solid var(--koraal);">hallo@vizieropscherp.nl</a>\u00a0
<a href="tel:+31202146466" style="font-weight:500;border-bottom:1px solid var(--koraal);">020 214 64 66</a></p>
    </div>
  </div>
</section>
`;

const HTML_AFTER = `
<!-- DE GESPREKKEN -->
<section class="section section--linnen">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">De gesprekken</p>
      <h2 class="h-section">Waar wil je het over hebben?</h2>
      <p>Drie manieren waarop een eerste gesprek eruit kan zien. Kies wat past, of laat het ons weten en we wijzen je de weg.</p>
    </div>
    <div class="grid g3">
      <article class="card card--petrol">
        <span class="label">Voor werkgevers &amp; HR</span>
        <h3>Verkennen wat past</h3>
        <p>Je vertelt wat er speelt in de organisatie, wij denken mee over de aanpak: van een gespreksronde tot een coachingpool. Daarna krijg je een concreet voorstel met heldere prijzen.</p>
      </article>
      <article class="card card--goud">
        <span class="label">Voor jezelf</span>
        <h3>Kennismaken met een coach</h3>
        <p>Je vertelt wat er speelt, wij stellen een coach voor die bij je past. Klikt het, dan ga je verder. Klikt het niet, dan zoeken we iemand anders.</p>
      </article>
      <article class="card card--warm">
        <span class="label">Via UWV</span>
        <h3>Rustig je opties verkennen</h3>
        <p>We leggen in gewone taal uit hoe een Werkfit- of Naar Werk-traject werkt. Daarna kijk je wat je wilt, en helpen we met de aanmelding als je dat prettig vindt.</p>
      </article>
    </div>
  </div>
</section>

<!-- FORMULIER -->
<section class="section" id="bericht-form">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Of laat iets achter</p>
      <h2 class="h-section">Stuur een bericht</h2>
      <p>Je naam, je mailadres en waar je het over wilt hebben. De rest bespreken we wel.</p>
    </div>
    <form class="form" novalidate>
      <div aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">
        <label for="hp-website">Website (niet invullen)</label>
        <input id="hp-website" name="hp_website" type="text" tabindex="-1" autocomplete="off">
      </div>
      <div class="field">
        <label for="name">Je naam</label>
        <input id="name" name="name" type="text" required maxlength="200" autocomplete="name">
      </div>

      <div class="field">
        <label for="email">Je e-mailadres</label>
        <input id="email" name="email" type="email" required maxlength="320" autocomplete="email">
      </div>
      <div class="field">
        <label for="phone">Telefoon (als je liever gebeld wordt)</label>
        <input id="phone" name="phone" type="tel" maxlength="30" autocomplete="tel">
      </div>
      <div class="field">
        <label for="role">Je komt</label>
        <select id="role" name="role">
          <option value="Voor jezelf" selected>Voor jezelf</option>
          <option value="Namens een medewerker">Namens een medewerker</option>
          <option value="Voor je organisatie">Voor je organisatie</option>
          <option value="Via UWV">Via UWV</option>
          <option value="Anders">Anders</option>
        </select>
        <p class="hint">Zo zorgen we dat de juiste persoon contact met je opneemt.</p>
      </div>
      <div class="field">
        <label for="message">Waar wil je het over hebben?</label>
        <textarea id="message" name="message" rows="6" maxlength="5000" placeholder="Een paar zinnen is genoeg."></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Versturen</button>
        <p class="hint" style="margin-top:14px;">We gaan netjes om met je gegevens en gebruiken ze alleen om contact op te nemen. Lees meer in onze <a href="/privacyverklaring" style="border-bottom:1px solid var(--koraal);">privacyverklaring</a>.</p>
      </div>
    </form>
  </div>
</section>

</main>

`;

import CalEmbed from "@/components/CalEmbed";
import { useEffect } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Vul je naam in").max(200),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(320),
  phone: z.string().trim().max(30).optional(),
  role: z.string().trim().max(100),
  message: z.string().trim().max(5000).optional(),
});

function useContactForm() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("#bericht-form form");
    if (!form) return;

    const statusEl = document.createElement("p");
    statusEl.className = "hint";
    statusEl.style.marginTop = "14px";
    statusEl.setAttribute("role", "status");
    form.appendChild(statusEl);

    const setStatus = (msg: string, color: string) => {
      statusEl.textContent = msg;
      statusEl.style.color = color;
    };

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    const onSubmit = async (e: SubmitEvent) => {
      e.preventDefault();
      setStatus("", "");

      const fd = new FormData(form);
      const parsed = contactSchema.safeParse({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        role: String(fd.get("role") ?? ""),
        message: String(fd.get("message") ?? ""),
      });

      if (!parsed.success) {
        setStatus(parsed.error.issues[0]?.message ?? "Controleer je gegevens", "#B4432A");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";
      }

      try {
        const res = await fetch("/api/public/submit-form", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            form: "contact",
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone || null,
            role: parsed.data.role,
            message: parsed.data.message || null,
            hp_website: String(fd.get("hp_website") ?? ""),
          }),
        });
        if (res.status === 429) {
          setStatus(
            "Er zijn te veel aanvragen vanaf dit adres. Probeer het over een paar minuten opnieuw of mail hallo@vizieropscherp.nl.",
            "#B4432A",
          );
          return;
        }
        if (!res.ok) throw new Error("submit_failed");
        form.reset();
        setStatus("Bedankt, we nemen zo snel mogelijk contact met je op.", "#1F3D3B");
      } catch (err) {
        console.error(err);
        setStatus(
          "Er ging iets mis. Probeer het nog eens of mail hallo@vizieropscherp.nl.",
          "#B4432A",
        );
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = "";
        }
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => {
      form.removeEventListener("submit", onSubmit);
      statusEl.remove();
    };
  }, []);
}


function Page() {
  useContactForm();
  return (
    <>
      <SiteHeader active="kennismaken" />
      <div dangerouslySetInnerHTML={{ __html: HTML_BEFORE }} />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Direct inplannen</p>
            <h2 className="h-section">Kies een moment dat jou uitkomt.</h2>
            <p>Twintig minuten, vrijblijvend. Jij kiest de tijd; we bellen of spreken af op een van onze locaties.</p>
          </div>
          <CalEmbed />
          <div className="dia-divider" style={{ margin: "44px 0 8px" }} aria-hidden="true"><span /></div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--petrol)", opacity: 0.7, margin: 0 }}>of</p>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: HTML_AFTER }} />
      <SiteFooter />

    </>
  );
}
