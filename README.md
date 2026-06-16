# Camilo Otálora Rivadeneira — Portfolio

A single-page personal portfolio site for Camilo Otálora Rivadeneira (Systems & Computing Engineer).
Bilingual (English / Spanish) with sections for Hero, About, Experience, Skills,
Certificates, and Contact.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool / dev server
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [lucide-react](https://lucide.dev/) — icons

There is no backend; all content is static and the "views" are switched client-side.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
```

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR           |
| `npm run build`     | Type-check-free production build to `dist/`  |
| `npm run preview`   | Preview the production build locally         |
| `npm run lint`      | Run ESLint over the project                  |
| `npm run typecheck` | Type-check with `tsc` (no emit)              |

> Note: `npm run build` does not type-check. Run `npm run typecheck` (and
> `npm run lint`) before shipping.

## Project structure

```
src/
  main.tsx              # entry; wraps the app in the Language + View providers
  App.tsx               # top-level view switch (home / skills / certificates)
  components/           # section + decorative components
  contexts/             # Language (i18n) and View state
    LanguageContext.tsx # context, translations dictionary, useLanguage hook
    LanguageProvider.tsx# LanguageProvider component
    ViewContext.tsx     # context + useView hook
    ViewProvider.tsx    # ViewProvider component
  constants/            # profile links, skill/certificate style maps
```

## Customizing content

- **Profile links** (CV, LinkedIn, email): `src/constants/profile.ts`
- **Translations**: `src/contexts/LanguageContext.tsx`
- **Skills**: `src/constants/skillCategories.ts`
- **Certificates**: the `certificates` array in `src/components/Certificates.tsx`
