# Personal Budget Manager — assets

These are the Play Store marketing graphics + app icon used by the showcase
([src/components/Projects.tsx](../../../src/components/Projects.tsx)).

| File                                      | Used as                  |
| ----------------------------------------- | ------------------------ |
| `app_icon.png`                            | App icon (card header)   |
| `All your finances in one place.png`      | Gallery — overview       |
| `Take control of your money.png`          | Gallery — home dashboard |
| `Understand your spending at a glance.png`| Gallery — spending       |
| `Track every transaction.png`             | Gallery — transactions   |
| `Keep all your accounts organized.png`    | Gallery — accounts       |
| `Plan smarter with budgets.png`           | Gallery — budgets        |
| `Clean dark mode, premium look.png`       | Gallery — dark mode      |

Notes:

- The gallery references these exact filenames (spaces are URL-encoded in code).
  To add/remove/reorder, edit the `screenshots` array in `Projects.tsx`.
- If an image fails to load, the gallery falls back to a built-in CSS mockup and
  the icon falls back to a generic glyph — nothing breaks.
