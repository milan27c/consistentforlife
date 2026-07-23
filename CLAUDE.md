@AGENTS.md

# Consistent For Life — Project Guide

## What this is

"Consistent For Life" is an e-commerce prototype selling LG-manufactured products, but the LG brand is never named or referenced anywhere in the product — no "LG" in copy, alt text, metadata, page titles, or file-facing content. LG's visual language (photography style, gradients, brand fonts) can and should be reused; the name and logo cannot. Logo is a text wordmark: "Consistent For Life" (no icon yet).

This is currently a **static, visual prototype**: mock/placeholder data throughout, no real cart or checkout logic, no backend. Product photography is the one exception — Milan will supply real product images to drop into `public/images`; use gradient/placeholder treatments until then.

## Brand & content rules

- Never mention "LG" in any visible text, alt text, metadata, comments in content files, or filenames the user might see in the UI.
- Never label anything "CSR." The giving-back / community section needs a warm, human name instead — e.g. "Our Impact," "Beyond the Product," "Stories That Stay," "Giving Back." Pick language that fits the "consistent for life" theme (reliability, long-term relationships, community).
- Weave the "Consistent For Life" theme throughout — not just a tagline. Use banners, spotlight cards, and real-life-style stories/testimonials that reinforce durability, reliability, and long-term trust.
- Copy tone: warm, confident, human — matches the LG brand-photography principles below.

## Design tokens

### Colors
- Heritage Red `#A50034` — primary brand color, primary button fill.
- Active Red `#FD312E` — secondary/accent color; also the color used whenever the UI references AI features.
- Warm Grey `#F0ECE4` — main page background.
- White `#FFFFFF` — card backgrounds (layer gradients from `public/gradients/` on top where it matches the reference images, especially on hero/feature cards).
- Black `#000000` — primary text color.
- Neutral scale (tints/shades between white and black, for secondary text, borders, dividers, disabled states): derive a warm-tinted gray scale rather than pure gray, to sit naturally against Warm Grey. Suggested stops: `#FAFAF9`, `#E0DDD6`, `#C7C3BB`, `#9C9891`, `#757067`, `#56534C`, `#3D3B36`, `#262521`.
- Define all of the above as CSS variables in `app/globals.css` under `@theme` (Tailwind v4 CSS-first config) rather than a `tailwind.config.js` — e.g. `--color-primary`, `--color-secondary`, `--color-warm-grey`, `--color-ink`, etc. — so they're usable as Tailwind utilities (`bg-primary`, `text-ink`, ...).

### Typography
Two brand typefaces live in `public/fonts/` (both OTF and TTF provided — prefer OTF for static weights, `LGEIHeadlineVF.ttf` is available if a variable weight is ever needed):
- **LGEIHeadline** (Thin/Light/Regular/Semibold/Bold) — headings, hero copy, display text. Map to a `font-heading` Tailwind token.
- **LGEIText** (Light/Regular/SemiBold/Bold) — body copy, UI text, labels. Map to a `font-body` Tailwind token.

Load both via `next/font/local` in `app/layout.tsx` (not `next/font/google` — these are local files), register the weights, and expose them as CSS variables consumed in the `@theme` block in `globals.css`, replacing the current Geist setup.

### Corner radius & shape
- Cards: large, generous corner radius (reference: image 3 in this conversation) — roughly `rounded-2xl`/`rounded-3xl` (~20–32px). Apply consistently to product cards, feature cards, banners.
- Buttons: rounded corners, not sharp — roughly `rounded-xl` (~16px) as the default; primary hero/CTA buttons may go fully pill-shaped (`rounded-full`) per the reference screenshot.
- Icon-only buttons: always circular (`rounded-full`, equal width/height).

## Photography & imagery

Reference images supplied follow LG's brand-photography system — reuse the *style*, not the brand framing:
- Three photo roles: **Everyday Life** (real people, real homes, candid warmth), **Energy/Passion/Interests** (people engaged in hobbies/activities — this is where products appear contextually), **Products** (clean studio shots on neutral backgrounds).
- Six principles to keep in mind when sourcing/placing images: authenticity, positive & joyful, warmth, breathing space (don't crowd the frame), diversity, attention to detail.
- Gradient assets in `public/gradients/` (4 JPGs) are for use as background treatments behind product shots or on hero/feature cards — matching the bento-grid reference image.
- Organize `public/images/` by role as assets come in, e.g. `public/images/lifestyle/`, `public/images/products/`, `public/images/impact/`.

## Animation

- Use **Framer Motion** (`npm install motion` — the current package name for Framer Motion) for all animation. Do not hand-roll animations with raw CSS keyframes unless Framer Motion can't do it.
- Subtle by default: scroll-triggered fade/slide-in reveals for sections (`whileInView`), gentle hover lift/scale on cards and buttons, smooth page/section transitions. Avoid anything flashy or slow enough to feel laggy — this is a premium, understated brand.
- Respect `prefers-reduced-motion`.

## Tech stack & conventions

- Next.js 16 (App Router), React 19, TypeScript. **This Next.js version has breaking changes vs. training data** — check `node_modules/next/dist/docs/` before writing routing/data-fetching code (see `AGENTS.md`).
- Tailwind CSS v4 — config lives in `app/globals.css` via `@import "tailwindcss"` + `@theme`, not a `tailwind.config.js` file.
- **shadcn/ui** for interactive/structural components (buttons, dialogs, nav, forms, etc.), restyled with the brand tokens above rather than default shadcn styling.
- **lucide-react** for all icons.
- Mobile-first responsive design; verify layouts at mobile, tablet, and desktop breakpoints.
- Light mode only — no dark mode needed at this stage.

## Site structure (planned)

- **Homepage**: hero section, product categories, featured products, new arrivals, "Consistent For Life" story/spotlight section(s), impact/giving-back section (unlabeled as CSR), supporting banners/cards throughout.
- **Product catalog** (planned next): category/listing grid, filters.
- **Product detail / inner pages** (planned next): per-product page template reused across all products.

## Scope reminder for this phase

No real cart, checkout, payment, or backend logic — keep state client-side/mock only if any interactivity is needed for a demo. Use placeholder copy and pricing; real product photography will be supplied separately and should be easy to swap in.
