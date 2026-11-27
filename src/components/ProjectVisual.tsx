import Image from "next/image";

import type { ProjectVisual as Visual } from "@/data/types";
import { cn } from "@/lib/utils";

const A = "rgb(255 107 53)";
const L = "rgb(245 245 240 / 0.16)";
const L2 = "rgb(245 245 240 / 0.32)";
const T = "rgb(245 245 240 / 0.55)";

const mono = { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em" } as const;

/* ---------- Abstract illustrations (never presented as screenshots) ---------- */

const Ledger = () => (
  <svg viewBox="0 0 640 400" className="h-full w-full" fill="none">
    {/* flow: channels → switch → settlement */}
    {["CARD", "TRANSFER", "USSD", "QR"].map((c, i) => (
      <g key={c}>
        <rect x={40} y={70 + i * 70} width={110} height={36} rx={6} stroke={L2} />
        <text x={56} y={92 + i * 70} fill={T} style={mono}>
          {c}
        </text>
        <path
          d={`M150 ${88 + i * 70} C 210 ${88 + i * 70}, 220 200, 270 200`}
          stroke={i === 1 ? A : L}
        />
      </g>
    ))}
    <circle cx={300} cy={200} r={30} stroke={A} />
    <circle cx={300} cy={200} r={4} fill={A} />
    <text x={268} y={252} fill={T} style={mono}>
      AUTHORISE
    </text>
    <path d="M330 200 H 400" stroke={A} strokeDasharray="3 4" />
    {Array.from({ length: 6 }, (_, i) => (
      <g key={i}>
        <rect x={400} y={86 + i * 40} width={200} height={28} rx={4} stroke={i === 2 ? A : L} />
        <rect x={412} y={97 + i * 40} width={40 + ((i * 37) % 60)} height={6} rx={3} fill={L} />
        <text x={540} y={104 + i * 40} fill={i === 2 ? A : T} style={mono}>
          {i === 2 ? "PENDING" : "SETTLED"}
        </text>
      </g>
    ))}
  </svg>
);

const Monitor = () => {
  const nodes = Array.from({ length: 48 }, (_, i) => ({
    x: 60 + (i % 12) * 46,
    y: 70 + Math.floor(i / 12) * 46,
    hot: i === 17 || i === 30,
  }));
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" fill="none">
      <text x={60} y={44} fill={T} style={mono}>
        BRANCHES · LIVE
      </text>
      {nodes.map((n) => (
        <g key={`${n.x}-${n.y}`}>
          <circle cx={n.x} cy={n.y} r={n.hot ? 5 : 2.5} fill={n.hot ? A : L2} />
          {n.hot && <circle cx={n.x} cy={n.y} r={14} stroke={A} strokeOpacity={0.5} />}
        </g>
      ))}
      <path d="M60 300 H 580" stroke={L} />
      <path
        d="M60 340 L100 330 L140 336 L180 318 L220 326 L260 300 L300 322 L340 312 L380 330 L420 296 L460 316 L500 306 L540 320 L580 312"
        stroke={A}
      />
      <text x={60} y={376} fill={T} style={mono}>
        TXN / MIN
      </text>
      <text x={480} y={376} fill={A} style={mono}>
        2 NEED REVIEW
      </text>
    </svg>
  );
};

const Savings = () => {
  const members = Array.from({ length: 7 }, (_, i) => {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 320 + Math.cos(a) * 140,
      y: 200 + Math.sin(a) * 140,
      // contribution lines stop at the pool's edge so they never cross the label
      ex: 320 + Math.cos(a) * 48,
      ey: 200 + Math.sin(a) * 48,
    };
  });
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" fill="none">
      <circle cx={320} cy={200} r={140} stroke={L} strokeDasharray="2 6" />
      <circle cx={320} cy={200} r={70} stroke={L} />
      <circle cx={320} cy={200} r={46} stroke={A} />
      <text x={296} y={196} fill={A} style={mono}>
        GROUP
      </text>
      <text x={296} y={210} fill={T} style={mono}>
        POOL
      </text>
      {members.map((m, i) => (
        <g key={i}>
          <path d={`M${m.x} ${m.y} L ${m.ex} ${m.ey}`} stroke={i % 3 === 0 ? A : L} strokeDasharray="3 5" />
          <circle cx={m.x} cy={m.y} r={12} fill="#0a0a0a" stroke={L2} />
          <circle cx={m.x} cy={m.y} r={3} fill={i % 3 === 0 ? A : T} />
        </g>
      ))}
      <text x={40} y={370} fill={T} style={mono}>
        AUTO-CONTRIBUTION · SCHEDULED
      </text>
    </svg>
  );
};

const Bot = () => (
  <svg viewBox="0 0 640 400" className="h-full w-full" fill="none">
    <rect x={200} y={30} width={240} height={340} rx={24} stroke={L2} />
    {[
      { x: 220, y: 70, w: 150, me: false },
      { x: 270, y: 120, w: 150, me: true },
      { x: 220, y: 170, w: 170, me: false },
      { x: 220, y: 220, w: 120, me: false },
      { x: 290, y: 270, w: 130, me: true },
    ].map((b, i) => (
      <g key={i}>
        <rect x={b.x} y={b.y} width={b.w} height={34} rx={12} stroke={b.me ? A : L} />
        <rect x={b.x + 12} y={b.y + 14} width={b.w - 40} height={6} rx={3} fill={b.me ? A : L} />
      </g>
    ))}
    <rect x={220} y={326} width={200} height={26} rx={13} stroke={L} />
    <text x={40} y={370} fill={T} style={mono}>
      UI ⇄ API · SUPPORT BOT
    </text>
  </svg>
);

const Estate = () => (
  <svg viewBox="0 0 640 400" className="h-full w-full" fill="none">
    <g transform="translate(60 80)">
      {Array.from({ length: 49 }, (_, i) => {
        const x = i % 7;
        const y = Math.floor(i / 7);
        const corner = (x < 2 && y < 2) || (x > 4 && y < 2) || (x < 2 && y > 4);
        const on = corner || (i * 7) % 3 === 0;
        return on ? <rect key={i} x={x * 26} y={y * 26} width={22} height={22} rx={2} fill={corner ? A : L2} /> : null;
      })}
    </g>
    <path d="M260 170 H 330" stroke={A} strokeDasharray="3 4" />
    {["VISITOR · CHECKED IN", "PRE-REGISTERED", "RESIDENT · UNIT 4B", "VISITOR · CHECKED OUT"].map((r, i) => (
      <g key={r}>
        <rect x={340} y={90 + i * 52} width={250} height={36} rx={6} stroke={i === 0 ? A : L} />
        <text x={356} y={112 + i * 52} fill={i === 0 ? A : T} style={mono}>
          {r}
        </text>
      </g>
    ))}
  </svg>
);

const abstracts = { ledger: Ledger, monitor: Monitor, savings: Savings, bot: Bot, estate: Estate };

/* ---------- Public component ---------- */

type Props = {
  visual: Visual;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export const ProjectVisual = ({ visual, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority }: Props) => (
  <div
    className={cn(
      "relative aspect-[16/10] overflow-hidden rounded-[14px] border border-line bg-ink-2 transition-colors duration-500 group-hover:border-line-strong",
      className,
    )}
  >
    {visual.kind === "image" ? (
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="media object-cover"
      />
    ) : (
      <>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgb(255 107 53 / 0.12), rgb(255 180 80 / 0.03) 40%, transparent 70%)",
          }}
        />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="media absolute inset-0 p-[4%]">
          {(() => {
            const Abstract = abstracts[visual.variant];
            return <Abstract />;
          })()}
        </div>
        <span className="text-meta absolute right-4 bottom-4 rounded-full border border-line bg-ink/70 px-2.5 py-1 text-[0.6rem] text-dim backdrop-blur">
          Illustration · product is private
        </span>
      </>
    )}
  </div>
);
