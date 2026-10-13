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

## Application architecture
- Use TanStack file routes for each CERO content and product page, with the shared brand header and footer in the root; this keeps navigation and page metadata consistent.
- Keep product and detector data in a browser-safe shared module; this provides one source of truth for product views, compatibility search, and rule tests.
- Keep all site styles and semantic visual tokens in the global stylesheet; this preserves the premium brand consistently across pages.
- Contact enquiries are prepared client-side for explicit sending through the visitor's email app; this honors the frontend-only scope without implying submissions are stored or sent.
