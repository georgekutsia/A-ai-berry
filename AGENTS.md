# AGENTS.md

This file defines the working rules for AI coding agents operating in this repository.

## Project Summary

- Project: `Acai Berry` marketing and menu website
- Stack: `React + Vite + SCSS`
- Deployment target: `Netlify`
- Current scope: frontend only
- Priority: mobile-first responsive experience

## Main Goals

- Preserve the neon, layered, poster-inspired visual identity from the original Acai Berry menu.
- Keep the menu as real UI built from components and data, not embedded as a flat image.
- Make the site easy to evolve with future animations, promotions, additional sections, and new menu items.
- Maintain a clean multilingual setup for `es`, `cat`, and `en`.

## Source Of Truth

- App entry: `src/App.jsx`
- Shared content and translations: `src/data/content.js`
- Global styles: `src/styles/main.scss`
- Reusable UI sections: `src/components/`

Agents should prefer updating structured content in `src/data/content.js` before hardcoding copy into components.

## File Boundaries

- Edit `src/` for application logic and styles.
- Edit `index.html` only for document-level metadata, fonts, and global shell setup.
- Edit `netlify.toml` only for deployment behavior.
- Do not manually edit `dist/`.
- Do not edit `node_modules/`.

## UI And Design Rules

- Always design mobile-first, then scale up for tablet and desktop.
- Preserve the brand direction:
  - dark berry background
  - neon pink, cyan, lime accents
  - rounded panels
  - glowing borders
  - layered decorative atmosphere
- Avoid generic SaaS styling.
- Avoid default system-looking UI.
- New sections should feel cohesive with the existing poster-like direction.
- Prefer reusable visual primitives over one-off styling hacks.

## Menu Rules

- The menu must remain component-driven.
- Prices, sizes, ingredient groups, and labels must live in data where possible.
- Do not replace structured menu UI with static images.
- Keep the layout flexible enough for future motion and hover effects.
- If adding decorative illustrations, prefer CSS or SVG over raster when practical.

## Multilingual Rules

- Supported languages are `es`, `cat`, and `en`.
- Any user-facing text change should be reflected across all three languages unless the task explicitly says otherwise.
- Keep translation keys aligned between languages.
- Do not move translated text into components unless there is a clear technical reason.

## Component Rules

- Prefer small presentational components with clear responsibilities.
- Keep section-level composition in dedicated section components.
- Reuse existing components before creating near-duplicates.
- When adding a new repeated block, extract it into a component.
- Avoid premature abstraction, but do not duplicate the same UI pattern multiple times.

## Styling Rules

- Use SCSS in `src/styles/main.scss` unless a new partial structure is clearly needed.
- Reuse existing design tokens and CSS variables when possible.
- Keep class naming readable and section-oriented.
- Prefer layout systems that are easy to animate later.
- Avoid deeply specific selectors that make later edits fragile.

## Content And Brand Editing

- Treat current loyalty and visit/store sections as editable placeholders unless the user provides final business content.
- Keep brand copy concise and visually scannable.
- When adding placeholder content, write it so the user can replace it easily later.

## Quality Bar

- Preserve responsive behavior across small mobile widths first.
- Do not introduce regressions in navigation, language switching, or section anchors.
- Keep scroll behavior compatible with section-based navigation.
- Favor accessibility basics:
  - semantic headings
  - button labels
  - sensible link text
  - readable contrast

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`

Agents should run `npm run build` after substantial code changes when feasible.

## When Making Changes

- For content-only edits, change data first, then adjust layout only if required.
- For design changes, preserve the overall Acai Berry identity unless the user requests a redesign.
- For new features, keep them consistent with the current architecture rather than introducing a second pattern.
- For animation work, prefer changes that build on existing component structure instead of bypassing it.

## Avoid

- Do not flatten the site into image-based sections.
- Do not move editable menu data into hardcoded JSX.
- Do not add a backend, database, or CMS unless explicitly requested.
- Do not overengineer state management for a mostly static frontend.
- Do not introduce unrelated dependencies without a clear benefit.

## Preferred Agent Behavior

- Make focused, reversible changes.
- Keep diffs understandable.
- Explain structural changes briefly when they affect future editing.
- Optimize for maintainability by the user in VS Code after the agent finishes.
