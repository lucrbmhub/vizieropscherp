<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- City landing pages generate location-tagged planning links in their shared template, so route data supplies labels without duplicating URL construction.
- City FAQ items provide visible answers and matching plain text used to generate FAQPage schema, so structured data stays aligned with page content.
- City FAQs use native details/summary with scoped marker suppression, so answers remain in server HTML without duplicate disclosure icons.
- City landing pages supply their location-specific coach cards through route data and reuse existing profile assets and classes, so other pages remain unchanged.
- Cookie consent uses the shared consent module with a versioned site-choice adapter and a pre-GTM bootstrap; the adapter mirrors purpose answers so the banner, other tabs and Google apply the same choice.
- Interactive controls inside imported page HTML mount through a scoped React portal after hydration, preserving the original document structure and shared design-system controls.
