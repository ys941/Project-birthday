<div align="center">

# 🎀 A Little Surprise For You 🎀

### _A heartfelt, animated birthday & compliments microsite_

Built with love using **Next.js**, **Tailwind CSS**, and **Framer Motion** —
a soft, glowing, five-screen journey that unfolds one sweet moment at a time. ✨

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## 💖 Overview

This is a tiny, lovingly-crafted website designed to make someone feel special on
their birthday. It guides the visitor through **five cinematic screens** — each one
revealing a little more warmth — wrapped in floating hearts, drifting aurora glows,
twinkling sparkles, and the occasional burst of confetti.

Everything is animated, responsive, and tuned for a slow, delightful reveal. No
clutter, no noise — just a gentle experience that feels personal.

---

## ✨ The Journey

The experience flows through five screens, tracked by an animated progress indicator
at the bottom of the page:

| # | Screen | What happens |
|:-:|:-------|:-------------|
| 1 | **Intro** | A waving avatar inside a pulsing glow ring, a shimmering "Hey Name!!" headline, and an inviting **Open this 💗** button. |
| 2 | **Compliments** | Five "sealed" cards. Tap each to reveal a compliment that **types itself out**, with a live counter cheering you on. |
| 3 | **The Note** | A floating envelope you tap to open — revealing a heartfelt, hand-written-feeling letter that types in line by line. |
| 4 | **Birthday Cards** | Three greeting cards that **flip open in 3D**, raining confetti, each typing out its own birthday wish (including one in German 🇩🇪). |
| 5 | **Finale** | A celebratory closing scene with a cute GIF, glowing rings, a trio of beating hearts, and a tender sign-off. |

---

## 🌟 Highlights

- 🎬 **Cinematic transitions** — every screen change is a smooth blur-fade-and-scale, never an abrupt cut.
- 💗 **Living background** — floating hearts drift upward, aurora blobs slowly breathe, and sparkles twinkle endlessly behind everything.
- ⌨️ **Typewriter reveals** — compliments, notes, and card messages type themselves out for a personal, real-time feel.
- 🎉 **Confetti moments** — bursts of color celebrate the birthday cards and the grand finale.
- 🔘 **Animated progress dots** — a stretchy indicator shows exactly where you are in the journey.
- ✨ **Glow everywhere** — the shared `GlowButton` has a gradient fill, soft halo, and a shine that sweeps across every few seconds.
- 📱 **Fully responsive** — looks lovely on phones and desktops alike.

---

## 🗂️ Project Structure

```
Project birthday/
├── public/
│   └── gifs/                      # Cute waving + celebration GIFs
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout, fonts, metadata
│   │   ├── page.jsx               # Screen orchestrator + ambient background
│   │   └── globals.css            # Theme, keyframes (shimmer, aurora, heartbeat…)
│   │
│   ├── components/
│   │   ├── GlowButton.jsx         # Shared gradient button with sweeping shine
│   │   ├── TypewriterText.jsx     # Reusable "types itself out" text effect
│   │   │
│   │   ├── effects/
│   │   │   ├── FloatingHearts.jsx # Hearts drifting up the screen
│   │   │   ├── Twinkles.jsx       # Scattered twinkling sparkles
│   │   │   └── Confetti.jsx       # Gentle confetti rain
│   │   │
│   │   └── screens/
│   │       ├── IntroScreen.jsx
│   │       ├── ComplimentsScreen.jsx
│   │       ├── MessageScreen.jsx
│   │       ├── BirthdayCardScreen.jsx
│   │       ├── BirthdayCardScreen.module.css   # 3D card flip styling
│   │       └── FinalScreen.jsx
│   │
└── package.json
```

---

## 🛠️ Tech Stack

| Tool | Why it's here |
|------|---------------|
| **[Next.js 16](https://nextjs.org/)** (App Router) | The framework — fast, modern React with file-based routing. |
| **[React 19](https://react.dev/)** | UI library powering every interactive screen. |
| **[Tailwind CSS 4](https://tailwindcss.com/)** | Utility-first styling for rapid, consistent design. |
| **[Framer Motion 12](https://www.framer.com/motion/)** | Every entrance, exit, float, and pulse animation. |
| **[Lucide React](https://lucide.dev/)** | Crisp, lightweight icons (hearts, sparkles, gifts…). |
| **[Vercel Analytics](https://vercel.com/analytics)** | Optional, privacy-friendly visit insights. |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.18+** (Node 20+ recommended)
- **npm** (or pnpm / yarn / bun)

### Installation

```bash
# 1. Clone the repo and move into it
git clone https://github.com/ys941/Project-birthday.git
cd Project-birthday

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser. 🎈

> 💡 The dev server supports hot reload — edit any file and watch it update instantly.

### Available Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Run the production build locally. |
| `npm run lint` | Check the code for style and quality issues. |

---

## 🎨 Make It Your Own

This site is built to be personalized in minutes. Here's where to look:

| You want to change… | Edit this file |
|---------------------|----------------|
| **The name** in the greeting | `src/components/screens/IntroScreen.jsx` |
| **The compliments** | `src/components/screens/ComplimentsScreen.jsx` (the `compliments` array) |
| **The heartfelt note** | `src/components/screens/MessageScreen.jsx` (the `message` string) |
| **The birthday card wishes** | `src/components/screens/BirthdayCardScreen.jsx` (the `CARDS` array) |
| **The closing message** | `src/components/screens/FinalScreen.jsx` |
| **Colors / theme / glow** | `src/app/globals.css` |
| **Page title & description** | `src/app/layout.js` |
| **GIFs** | `public/gifs/` |

> 💞 **Tip:** search the project for the word `Name` and swap it for whoever this is for.

---

## 🌈 Design Notes

- The palette leans into **soft pinks and roses** against a deep near-black radial
  background, so every glowing element pops.
- Animations favor **ease-out springs and gentle infinite loops** to feel alive
  without ever being distracting.
- Text reveals are intentionally **slow and deliberate** — the pacing is part of
  the gift.

---

## 🚢 Deployment

The easiest way to share this is **[Vercel](https://vercel.com/)** (the makers of Next.js):

1. Push the project to a GitHub repository.
2. Import it into Vercel.
3. Vercel auto-detects Next.js — just click **Deploy**.

Your surprise will be live on a shareable link in under a minute. 🎁

---

<div align="center">

### Made with 💗, just for someone special.

_If this put a smile on someone's face, it did its job._

</div>
