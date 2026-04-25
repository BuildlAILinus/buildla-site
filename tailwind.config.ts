import type { Config } from 'tailwindcss';

// Tailwind v4 uses @theme in app/globals.css as the primary token source.
// This config remains as a marker file and content scope declaration; tokens
// (colors, shadows, radii, fonts) are defined in globals.css under @theme.

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
