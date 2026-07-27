# Media drop-in guide

Every image slot on the site already points at its final filename. Drop a
correctly-named file in the folder below and it appears automatically — no code
changes needed. Until a file exists, a clean placeholder shows in its place.

Use `.jpg` for photos. Keep the **exact** names and folders below.

## Brand

| File | Path | Appears |
|------|------|---------|
| Logo (transparent PNG) | `public/brand/logo.png` | Navbar + footer |

## People

| File | Path | Appears |
|------|------|---------|
| Dhananjay Dhoundiyal | `public/faculty/dhananjay.jpg` | Faculty page |
| Deekshit Rawat | `public/faculty/deekshit.jpg` | Faculty page |
| Parth Dhoundiyal | `public/faculty/parth.jpg` | Faculty page |
| Director's photo (a different pic of Dhananjay) | `public/about/director.jpg` | About → Director's message |

Recommended: square-ish, at least 600×600, face centred.

## Homepage hero

| File | Path | Appears | Notes |
|------|------|---------|-------|
| Class photo | `public/gallery/hero.jpg` | Homepage hero | Shows as a framed photo now. To use a video instead later, set `INTRO_VIDEO_URL` in `components/hero.tsx` to a YouTube link — it becomes an inline player. |

Recommended: landscape 16:9, at least 1280×720.

## Classroom / centre photos (About page)

| File | Path | Appears |
|------|------|---------|
| `public/gallery/classroom-1.jpg` | About → "Our core values" (row 1) |
| `public/gallery/classroom-2.jpg` | About → "Our core values" (row 2) |
| `public/gallery/classroom-3.jpg` | About → "Our core values" (row 3) |
| `public/gallery/classroom-4.jpg` | About → "Our core values" (row 4) |

Any real classroom / centre / student photos work — they're generic slots.

---

**Contact form key:** not an image — set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`
(already done locally) and in your host's environment variables at deploy time.
