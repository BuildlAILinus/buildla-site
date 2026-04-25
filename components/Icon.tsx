import type { ReactElement } from 'react';

/**
 * Icon component (DS ui_kits/website/ui.jsx).
 * Inline SVGs render sharper, scale better, and accept currentColor for tint —
 * which is what we need for the dark Pillars cards (ikoner ska bli buildla-light).
 */
type IconName =
  | 'arrow' | 'check' | 'shield' | 'phone' | 'worker'
  | 'plus' | 'minus' | 'send' | 'sparkle' | 'chat' | 'menu' | 'home';

interface IconProps {
  name: IconName;
  size?: number;
  stroke?: number;
  color?: string;
}

const PATHS: Record<IconName, ReactElement> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  shield: (
    <>
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path d="M8.5 12l2.5 2.5L15.5 10" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  worker: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21c1-4 3.5-6 7-6s6 2 7 6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  send: (
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </>
  ),
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />,
  chat: <path d="M4 5h16v11H8l-4 4V5z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  home: (
    <>
      <path d="M3 13L12 4l9 9" />
      <path d="M6 11v9h12v-9" />
    </>
  ),
};

export default function Icon({ name, size = 20, stroke = 1.75, color = 'currentColor' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: '0 0 auto' }}
    >
      {PATHS[name]}
    </svg>
  );
}
