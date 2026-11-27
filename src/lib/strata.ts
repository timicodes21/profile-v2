/**
 * Deterministic "strata" lines: horizontal layers deformed by a shared uplift,
 * like a geological cross-section. Generated at build time on the server.
 */
const seeded = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
};

export const strataPaths = ({
  width = 1440,
  height = 900,
  count = 22,
  seed = 7,
}: { width?: number; height?: number; count?: number; seed?: number } = {}) => {
  const rand = seeded(seed);
  const waves = Array.from({ length: 3 }, (_, i) => ({
    freq: (i + 1) * (0.9 + rand() * 0.6),
    phase: rand() * Math.PI * 2,
    amp: 10 / (i + 1),
  }));
  const step = 24;
  const paths: string[] = [];

  for (let line = 0; line < count; line += 1) {
    const baseY = (height / (count + 1)) * (line + 1);
    const depth = line / count;
    let d = "";
    for (let x = 0; x <= width; x += step) {
      const t = x / width;
      // Shared uplift towards the right, strongest in the middle layers.
      const uplift = -Math.exp(-((t - 0.72) ** 2) / 0.03) * 90 * Math.sin(depth * Math.PI);
      const ripple = waves.reduce(
        (acc, w) => acc + Math.sin(t * Math.PI * 2 * w.freq + w.phase + line * 0.35) * w.amp,
        0,
      );
      const y = baseY + uplift + ripple;
      d += `${x === 0 ? "M" : "L"}${x},${y.toFixed(1)} `;
    }
    paths.push(d.trim());
  }
  return paths;
};
