import type { IconName } from "@/lib/content";

/**
 * Flat illustrations for the solution pages: the same family and palette as
 * the homepage "Our solutions" icons (pale tile, brand green, deep green,
 * ink accents), one per concept.
 */
const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const stroke = {
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<IconName, React.ReactNode> = {
  // ownership: a stack of coins
  coins: (
    <>
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <ellipse cx="26" cy="34" rx="14" ry="5" fill={IL.dark} />
      <ellipse cx="26" cy="28" rx="14" ry="5" fill={IL.green} />
      <ellipse cx="26" cy="22" rx="14" ry="5" fill={IL.pale} />
      <path
        d="M26 14v8M22 18h8"
        stroke={IL.ink}
        strokeWidth="2.4"
        {...stroke}
      />
    </>
  ),
  // pay-as-you-go: recurring cycle
  cycle: (
    <>
      <rect x="18" y="3" width="24" height="24" rx="7" fill={IL.pale} />
      <circle
        cx="22"
        cy="26"
        r="17"
        fill="none"
        stroke={IL.green}
        strokeWidth="7"
        strokeDasharray="82 20"
        strokeLinecap="round"
        transform="rotate(20 22 26)"
      />
      <path d="M22 9 L30 13 L22 17Z" fill={IL.dark} />
      <circle cx="22" cy="26" r="3.5" fill={IL.ink} />
    </>
  ),
  // instalments
  calendar: (
    <>
      <rect x="6" y="8" width="36" height="32" rx="6" fill={IL.pale} />
      <rect x="6" y="16" width="36" height="9" fill={IL.green} />
      <circle cx="15" cy="33" r="3" fill={IL.dark} />
      <circle cx="24" cy="33" r="3" fill={IL.dark} />
      <circle cx="33" cy="33" r="3" fill={IL.dark} />
      <path d="M14 5v8M34 5v8" stroke={IL.ink} strokeWidth="3" {...stroke} />
    </>
  ),
  // grid / transmission tower
  tower: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <path
        d="M24 6 L36 42 M24 6 L12 42 M17 24 H31 M14 34 H34"
        stroke={IL.green}
        strokeWidth="3"
        {...stroke}
      />
      <circle cx="24" cy="6" r="4" fill={IL.ink} />
    </>
  ),
  // partnership: two linked marks
  partners: (
    <>
      <rect x="4" y="10" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="18" cy="24" r="12" fill={IL.green} />
      <circle cx="32" cy="24" r="12" fill={IL.dark} opacity="0.9" />
      <circle cx="25" cy="24" r="5" fill="#fff" />
    </>
  ),
  // storage
  battery: (
    <>
      <rect x="6" y="12" width="32" height="24" rx="5" fill={IL.pale} />
      <rect x="40" y="20" width="4" height="8" rx="1.5" fill={IL.dark} />
      <rect x="10" y="16" width="24" height="16" rx="2.5" fill={IL.green} />
      <path d="M24 18 L18 26 H23 L21 30 L28 22 H23Z" fill={IL.ink} />
    </>
  ),
  // full lifecycle loop
  loop: (
    <>
      <rect x="3" y="3" width="22" height="22" rx="7" fill={IL.pale} />
      <circle
        cx="27"
        cy="27"
        r="17"
        fill="none"
        stroke={IL.green}
        strokeWidth="7"
        strokeDasharray="80 20"
        strokeLinecap="round"
        transform="rotate(-45 27 27)"
      />
      <path d="M27 27 L36 20 L38 29Z" fill={IL.dark} />
      <circle cx="27" cy="27" r="4" fill={IL.ink} />
    </>
  ),
  // returns trending up
  trend: (
    <>
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <circle cx="26" cy="24" r="18" fill={IL.green} />
      <path
        d="M15 26 L21 20 L25 24 L33 16"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        {...stroke}
      />
      <circle cx="33" cy="16" r="3.2" fill={IL.ink} />
    </>
  ),
  // cost coming down
  cost: (
    <>
      <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
      <rect x="9" y="26" width="7" height="16" rx="2" fill={IL.dark} />
      <rect x="20.5" y="18" width="7" height="24" rx="2" fill={IL.green} />
      <rect x="32" y="10" width="7" height="32" rx="2" fill={IL.pale} />
      <path
        d="M10 12 L20 20 L27 15 L39 24"
        stroke={IL.ink}
        strokeWidth="2.6"
        {...stroke}
      />
      <path
        d="M32 24 L39 24 L39 17"
        stroke={IL.ink}
        strokeWidth="2.6"
        {...stroke}
      />
    </>
  ),
  // balance sheet
  scale: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <path d="M24 8 V40" stroke={IL.ink} strokeWidth="3" {...stroke} />
      <path d="M8 40 H40" stroke={IL.ink} strokeWidth="3" {...stroke} />
      <path d="M24 14 L12 14 L6 26 H18Z" fill={IL.green} />
      <path d="M24 14 L36 14 L42 26 H30Z" fill={IL.dark} />
    </>
  ),
  // meter
  gauge: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="24" cy="27" r="20" fill={IL.green} />
      <path
        d="M8 32A18 18 0 0 1 40 32"
        stroke="#fff"
        strokeWidth="4"
        fill="none"
        {...stroke}
      />
      <path d="M24 27 34 16" stroke={IL.ink} strokeWidth="3.5" {...stroke} />
      <circle cx="24" cy="27" r="4" fill={IL.dark} />
    </>
  ),
  // safe, protected
  shield: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <path
        d="M26 7 L41 12 V24 C41 34 34 41 26 44 C18 41 11 34 11 24 V12 Z"
        fill={IL.green}
      />
      <path
        d="M19 25 l5 5 10-11"
        stroke="#fff"
        strokeWidth="3.2"
        fill="none"
        {...stroke}
      />
    </>
  ),
  // hard terrain
  mountain: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <path d="M4 42 L19 14 L30 32 L35 24 L45 42 Z" fill={IL.dark} />
      <path d="M20 42 L31 21 L45 42 Z" fill={IL.green} />
      <circle cx="37" cy="12" r="4.5" fill={IL.ink} />
    </>
  ),
  // balance of system: stacked blocks
  blocks: (
    <>
      <rect x="4" y="4" width="22" height="22" rx="6" fill={IL.pale} />
      <rect x="6" y="26" width="17" height="16" rx="3" fill={IL.green} />
      <rect x="25" y="26" width="17" height="16" rx="3" fill={IL.dark} />
      <rect
        x="15"
        y="9"
        width="18"
        height="15"
        rx="3"
        fill="#fff"
        stroke={IL.dark}
        strokeWidth="2.4"
      />
    </>
  ),
  // breakdown
  pie: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="26" cy="26" r="17" fill={IL.green} />
      <path d="M26 26 L26 9 A17 17 0 0 1 43 26 Z" fill={IL.dark} />
      <circle cx="26" cy="26" r="3.2" fill={IL.ink} />
    </>
  ),
  // right-sized
  target: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="26" cy="26" r="18" fill={IL.green} />
      <circle cx="26" cy="26" r="12" fill="#fff" />
      <circle cx="26" cy="26" r="6.5" fill={IL.dark} />
      <circle cx="26" cy="26" r="2.2" fill={IL.ink} />
    </>
  ),
  // measurable plan
  checklist: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <rect x="12" y="8" width="28" height="36" rx="5" fill={IL.green} />
      <path
        d="M18 19l3 3 5-6M18 31l3 3 5-6"
        stroke="#fff"
        strokeWidth="2.6"
        fill="none"
        {...stroke}
      />
      <path
        d="M30 20h5M30 32h5"
        stroke={IL.ink}
        strokeWidth="2.6"
        {...stroke}
      />
    </>
  ),
  // paperwork / data
  doc: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <rect x="12" y="7" width="26" height="36" rx="5" fill={IL.green} />
      <path
        d="M18 17h14M18 25h14M18 33h8"
        stroke="#fff"
        strokeWidth="3"
        {...stroke}
      />
      <circle cx="36" cy="38" r="6" fill={IL.dark} />
    </>
  ),
  // comparison bars
  bars: (
    <>
      <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
      <rect x="8" y="24" width="9" height="18" rx="2.5" fill={IL.dark} />
      <rect x="19.5" y="14" width="9" height="28" rx="2.5" fill={IL.green} />
      <rect
        x="31"
        y="20"
        width="9"
        height="22"
        rx="2.5"
        fill={IL.dark}
        opacity="0.75"
      />
      <path d="M6 42 H42" stroke={IL.ink} strokeWidth="2.4" {...stroke} />
    </>
  ),
  // cash in, cash out
  cashflow: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="25" cy="24" r="12" fill={IL.green} />
      <path
        d="M8 16 H34 L28 10 M40 34 H14 L20 40"
        stroke={IL.ink}
        strokeWidth="3"
        fill="none"
        {...stroke}
      />
    </>
  ),
  // depreciation / tax
  percent: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="26" cy="25" r="18" fill={IL.green} />
      <circle
        cx="19"
        cy="17.5"
        r="3.6"
        stroke="#fff"
        strokeWidth="2.8"
        fill="none"
      />
      <circle
        cx="33"
        cy="32.5"
        r="3.6"
        stroke="#fff"
        strokeWidth="2.8"
        fill="none"
      />
      <path d="M33 15 L19 35" stroke="#fff" strokeWidth="3" {...stroke} />
    </>
  ),
  // rooftop plant
  roof: (
    <>
      <rect x="4" y="4" width="22" height="22" rx="6" fill={IL.pale} />
      <rect x="8" y="26" width="34" height="16" rx="2" fill={IL.dark} />
      <path d="M5 26 L15 10 H44 L38 26 Z" fill={IL.green} />
      <path
        d="M17 10 L12 26 M26 10 L22 26 M35 10 L32 26 M10 18 H41"
        stroke="#fff"
        strokeWidth="1.8"
        {...stroke}
      />
    </>
  ),
  // ground-mounted plant
  land: (
    <>
      <rect x="4" y="4" width="22" height="22" rx="6" fill={IL.pale} />
      <rect x="4" y="38" width="40" height="5" rx="2" fill={IL.dark} />
      <path d="M7 36 L14 21 H26 L19 36 Z" fill={IL.green} />
      <path d="M24 36 L31 21 H43 L36 36 Z" fill={IL.green} />
      <path
        d="M17 36 V40 M33 36 V40"
        stroke={IL.ink}
        strokeWidth="2.6"
        {...stroke}
      />
    </>
  ),
  // electrical works
  plug: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <rect x="14" y="16" width="22" height="16" rx="5" fill={IL.green} />
      <path
        d="M20 8 V16 M30 8 V16"
        stroke={IL.ink}
        strokeWidth="3.4"
        {...stroke}
      />
      <path d="M25 32 V42" stroke={IL.dark} strokeWidth="4" {...stroke} />
    </>
  ),
  // monitoring / SCADA
  monitor: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <rect x="6" y="9" width="36" height="25" rx="4" fill={IL.dark} />
      <path
        d="M12 28 L19 20 L25 24 L36 14"
        stroke={IL.green}
        strokeWidth="3"
        fill="none"
        {...stroke}
      />
      <path
        d="M17 41 H31 M24 34 V41"
        stroke={IL.ink}
        strokeWidth="3"
        {...stroke}
      />
    </>
  ),
  // solar potential
  sun: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="26" cy="25" r="10" fill={IL.green} />
      <path
        d="M26 6 V10 M26 40 V44 M7 25 H11 M41 25 H45 M12.5 11.5 L15.3 14.3 M36.7 35.7 L39.5 38.5 M39.5 11.5 L36.7 14.3 M15.3 35.7 L12.5 38.5"
        stroke={IL.dark}
        strokeWidth="2.8"
        {...stroke}
      />
    </>
  ),
  // solar + storage
  sunbattery: (
    <>
      <rect x="4" y="4" width="22" height="22" rx="6" fill={IL.pale} />
      <circle cx="17" cy="17" r="8" fill={IL.green} />
      <rect x="17" y="24" width="25" height="17" rx="4" fill={IL.dark} />
      <rect x="42" y="30" width="3" height="6" rx="1.2" fill={IL.dark} />
      <path d="M31 26 L25 33 H30 L28 38 L35 31 H30Z" fill={IL.green} />
    </>
  ),
};

export function SolutionIcon({
  name,
  className = "h-full w-full",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
