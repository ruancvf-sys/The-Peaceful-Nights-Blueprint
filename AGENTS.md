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

## Project rules
- The sales page is one long scrolling page at `/` (direct-response format) composed from section components in `src/components/landing/`; keep it single-page so every CTA can anchor-scroll to `#offer`.
- Offer facts (price, original price, guarantee, checkout link, support email) live only in `src/lib/offer.ts`; components read from it so prices never drift between sections.
