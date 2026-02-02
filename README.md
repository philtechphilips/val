# Be My Valentine 💌

A beautiful, interactive proposal website built with Next.js, Framer Motion, and Tailwind CSS. Designed to create a memorable digital experience for asking that special question on Valentine's Day.

![Preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q1ZzV4YnV5YnV5dW55dW55dW55dW55dW55dW55dW5/xT4uQulxzV39haRFjG/giphy.gif)
*(Note: You can replace this placeholder with a screenshot of your actual app)*

## ✨ Features

- **3D Card Reveal**: A realistic envelope/card opening animation using CSS 3D transforms and Framer Motion.
- **Typewriter Effect**: Messages appear character-by-character for a heartfelt, cinematic feel.
- **Floating Hearts**: Subtle background animations to set the mood.
- **Interactive Confetti**: A celebration explosion when they say "Yes!".
- **Mobile First**: Fully responsive design that looks great on phones and desktops.
- **Background Music**: Optional toggle for romantic background music.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts**: Inter & Great Vibes (Google Fonts)

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd val
pnpm install
# or npm install / yarn install
```

### 2. Run Locally

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Changing the Message

To personalize the text, open `app/components/MessageSequence.tsx`:

```typescript
const messages = [
  "Hey [Her Name]...", // <-- Change this!
  "Every moment with you means more than I can explain.",
  "So I wanted to ask you something special...",
];
```

### Adding Background Music

1. Find a romantic MP3 file you like.
2. Rename it to `music.mp3`.
3. Place it inside the `public/` folder.
4. The requested path in `app/components/MusicPlayer.tsx` is already set to `/music.mp3`.

### Adjusting the Question

To change the final question or the button text, edit `app/components/FinalCTA.tsx`.

## 📦 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Click **Deploy**.

## ❤️ License

Made for love, free to use. Happy Valentine's Day!
