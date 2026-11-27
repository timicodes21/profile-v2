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

/* Money flow: customer → processed → settlement → merchant wallet → payout, reconciled. */
const sans = { fontFamily: "var(--font-sans)", fontSize: 10 } as const;

const Head = ({ x, y, dir, color }: { x: number; y: number; dir: "right" | "left" | "down"; color: string }) => {
  const pts =
    dir === "right"
      ? `${x},${y} ${x - 7},${y - 4} ${x - 7},${y + 4}`
      : dir === "left"
        ? `${x},${y} ${x + 7},${y - 4} ${x + 7},${y + 4}`
        : `${x},${y} ${x - 4},${y - 7} ${x + 4},${y - 7}`;
  return <polygon points={pts} fill={color} />;
};

const FlowNode = ({
  x,
  y,
  w,
  h = 44,
  step,
  title,
  sub,
  strong,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  step: string;
  title: string;
  sub: string;
  strong?: boolean;
}) => (
  <g>
    {step && (
      <text x={x} y={y - 8} fill={T} style={{ ...mono, fontSize: 8 }}>
        {step}
      </text>
    )}
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={8}
      stroke={strong ? A : L2}
      fill={strong ? "rgb(255 107 53 / 0.08)" : "rgb(10 10 10 / 0.6)"}
    />
    <text x={x + 12} y={y + h / 2 - 3} fill={strong ? A : "rgb(245 245 240 / 0.85)"} style={mono}>
      {title}
    </text>
    <text x={x + 12} y={y + h / 2 + 11} fill={T} style={sans}>
      {sub}
    </text>
  </g>
);

const SettlementWide = () => (
  <svg viewBox="0 0 640 400" className="hidden h-full w-full sm:block" fill="none">
    {/* 1–3: payment is made, processed, and enters settlement */}
    <FlowNode x={28} y={60} w={132} step="01" title="CUSTOMER PAYMENT" sub="via any payment channel" />
    <path d="M160 82 H 252" stroke={A} />
    <Head x={254} y={82} dir="right" color={A} />
    <FlowNode x={254} y={60} w={132} step="02" title="PROCESSED" sub="payment successful" />
    <path d="M386 82 H 478" stroke={A} />
    <Head x={480} y={82} dir="right" color={A} />
    <FlowNode x={480} y={60} w={132} step="03" title="SETTLEMENT" sub="amount determined" />

    {/* 4–5: funds settle into the merchant wallet (instantly, where applicable) */}
    <path d="M546 104 V 206 H 402" stroke={A} strokeWidth={1.5} />
    <Head x={400} y={206} dir="left" color={A} />
    <text x={474} y={196} fill={A} style={sans} textAnchor="middle">
      Instant settlement
    </text>
    <text x={474} y={224} fill={T} style={{ ...sans, fontSize: 9 }} textAnchor="middle">
      where applicable
    </text>

    <FlowNode x={240} y={176} w={160} h={60} step="04" title="MERCHANT WALLET" sub="settled funds available" strong />

    {/* 6: automated payouts on the merchant's configured schedule */}
    <path d="M240 206 H 152" stroke={L2} strokeDasharray="4 4" />
    <Head x={150} y={206} dir="left" color={L2} />
    <text x={196} y={196} fill={T} style={sans} textAnchor="middle">
      Scheduled payout
    </text>
    {[0, 1, 2, 3].map((i) => (
      <circle key={i} cx={172 + i * 16} cy={221} r={2} fill={i === 3 ? A : L2} />
    ))}
    <FlowNode x={28} y={184} w={120} step="05" title="PAYOUT" sub="to the merchant" />

    {/* 7: every record is reconciled */}
    <path d="M320 236 V 290" stroke={L} strokeDasharray="2 4" />
    <rect x={28} y={290} width={584} height={56} rx={10} stroke={L} fill="rgb(10 10 10 / 0.5)" />
    <text x={44} y={314} fill={A} style={mono}>
      06 · RECONCILIATION
    </text>
    <text x={44} y={330} fill={T} style={sans}>
      every record matches
    </text>
    {["Transaction", "Settlement", "Wallet", "Payout"].map((label, i) => (
      <g key={label}>
        <rect x={220 + i * 98} y={306} width={82} height={24} rx={12} stroke={L2} />
        <text x={261 + i * 98} y={321} fill="rgb(245 245 240 / 0.8)" style={sans} textAnchor="middle">
          {label}
        </text>
        {i < 3 && (
          <text x={310 + i * 98} y={322} fill={A} style={mono} textAnchor="middle">
            =
          </text>
        )}
      </g>
    ))}
  </svg>
);

/* Same story, stacked vertically so labels stay legible on phones. */
const SettlementTall = () => (
  <svg viewBox="0 0 320 440" className="h-full w-full sm:hidden" fill="none">
    <FlowNode x={60} y={16} w={200} h={38} step="" title="CUSTOMER PAYMENT" sub="via any payment channel" />
    <path d="M160 54 V 70" stroke={A} />
    <Head x={160} y={76} dir="down" color={A} />
    <FlowNode x={60} y={76} w={200} h={38} step="" title="PROCESSED" sub="payment successful" />
    <path d="M160 114 V 130" stroke={A} />
    <Head x={160} y={136} dir="down" color={A} />
    <FlowNode x={60} y={136} w={200} h={38} step="" title="SETTLEMENT" sub="amount determined" />

    <path d="M160 174 V 208" stroke={A} strokeWidth={1.5} />
    <Head x={160} y={214} dir="down" color={A} />
    <text x={172} y={192} fill={A} style={sans}>
      Instant settlement
    </text>
    <text x={172} y={205} fill={T} style={{ ...sans, fontSize: 9 }}>
      where applicable
    </text>

    <FlowNode x={60} y={214} w={200} h={48} step="" title="MERCHANT WALLET" sub="settled funds available" strong />

    <path d="M160 262 V 292" stroke={L2} strokeDasharray="4 4" />
    <Head x={160} y={298} dir="down" color={L2} />
    <text x={172} y={280} fill={T} style={sans}>
      Scheduled payout
    </text>
    {[0, 1, 2, 3].map((i) => (
      <circle key={i} cx={175 + i * 12} cy={290} r={1.8} fill={i === 3 ? A : L2} />
    ))}
    <FlowNode x={60} y={298} w={200} h={38} step="" title="PAYOUT" sub="to the merchant" />

    <rect x={24} y={352} width={272} height={44} rx={10} stroke={L} fill="rgb(10 10 10 / 0.5)" />
    <text x={38} y={370} fill={A} style={mono}>
      RECONCILIATION
    </text>
    <text x={38} y={386} fill={T} style={{ ...sans, fontSize: 9 }}>
      transaction = settlement = wallet = payout
    </text>
  </svg>
);

const Settlement = () => (
  <>
    <SettlementWide />
    <SettlementTall />
  </>
);

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

const abstracts = { ledger: Ledger, settlement: Settlement, savings: Savings, bot: Bot, estate: Estate };

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
      visual.kind === "abstract" && visual.variant === "settlement" && "max-sm:aspect-[8/11]",
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
        <span className="text-meta absolute right-4 bottom-4 rounded-full border border-line bg-ink/70 px-2.5 py-1 text-[0.6875rem] text-dim backdrop-blur">
          Illustration · product is private
        </span>
      </>
    )}
  </div>
);
