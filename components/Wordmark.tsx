/**
 * SVG wordmark (DS ui_kits/website/ui.jsx Wordmark).
 * Replaces the rastered Squarespace logo for sharper rendering at all sizes.
 * Same visual identity (small mark + "buildla" wordmark).
 */
interface WordmarkProps {
  dark?: boolean;
  size?: number; // mark size in px
}

export default function Wordmark({ dark = false, size = 32 }: WordmarkProps) {
  const color = dark ? 'var(--buildla-light)' : 'var(--buildla-accent)';
  const wordSize = Math.round((size * 22) / 32);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: size,
          height: size,
          border: `1.5px solid ${color}`,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 28 22"
          width={Math.round(size * 0.625)}
          height={Math.round(size * 0.5)}
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
        >
          <path d="M2 13L14 3l12 10M5 11v8h18v-8" />
        </svg>
      </div>
      <span
        style={{
          font: `800 ${wordSize}px/1 var(--font-sans)`,
          letterSpacing: '-0.03em',
          color,
        }}
      >
        buildla
      </span>
    </div>
  );
}
