interface BotanicalProps {
  className?: string;
}

export function FloralSprig({ className = "w-32 h-48" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 160 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main Stem */}
      <path
        d="M80 230C82 170 95 110 130 50"
        stroke="#8A986C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M88 160C65 140 45 105 50 65"
        stroke="#8A986C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M105 115C125 100 145 95 155 80"
        stroke="#8A986C"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M65 110C45 95 30 70 25 50"
        stroke="#8A986C"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M75 180C60 175 52 160 58 150C68 152 76 165 75 180Z"
        fill="#A8B58A"
        opacity="0.85"
      />
      <path
        d="M92 140C108 135 116 120 110 110C100 112 92 125 92 140Z"
        fill="#8A986C"
        opacity="0.85"
      />
      <path
        d="M58 130C42 125 36 110 42 100C52 102 60 115 58 130Z"
        fill="#A8B58A"
        opacity="0.85"
      />
      <path
        d="M115 85C130 80 138 68 132 58C122 60 115 72 115 85Z"
        fill="#8A986C"
        opacity="0.85"
      />
      <path
        d="M70 85C85 80 92 68 86 58C76 60 70 72 70 85Z"
        fill="#A8B58A"
        opacity="0.85"
      />

      {/* Soft Pink Flowers */}
      {/* Flower 1 - Top Right */}
      <g transform="translate(130, 45)">
        <circle cx="0" cy="-8" r="6" fill="#F7C8D3" />
        <circle cx="7" cy="-2" r="6" fill="#F7C8D3" />
        <circle cx="5" cy="6" r="6" fill="#F7C8D3" />
        <circle cx="-5" cy="6" r="6" fill="#F7C8D3" />
        <circle cx="-7" cy="-2" r="6" fill="#F7C8D3" />
        <circle cx="0" cy="0" r="3.5" fill="#D8C29A" />
      </g>

      {/* Flower 2 - Upper Left */}
      <g transform="translate(50, 60)">
        <circle cx="0" cy="-7" r="5" fill="#F7C8D3" opacity="0.9" />
        <circle cx="6" cy="-2" r="5" fill="#F7C8D3" opacity="0.9" />
        <circle cx="4" cy="5" r="5" fill="#F7C8D3" opacity="0.9" />
        <circle cx="-4" cy="5" r="5" fill="#F7C8D3" opacity="0.9" />
        <circle cx="-6" cy="-2" r="5" fill="#F7C8D3" opacity="0.9" />
        <circle cx="0" cy="0" r="3" fill="#D8C29A" />
      </g>

      {/* Flower 3 - Bud Far Left */}
      <g transform="translate(25, 48)">
        <ellipse cx="0" cy="0" rx="4" ry="6" fill="#B46A72" opacity="0.8" />
        <path d="M-3 4C-1 8 2 8 4 4" stroke="#8A986C" strokeWidth="1.5" />
      </g>

      {/* Flower 4 - Branch Right */}
      <g transform="translate(155, 78)">
        <circle cx="0" cy="-6" r="4.5" fill="#F7C8D3" />
        <circle cx="5" cy="-2" r="4.5" fill="#F7C8D3" />
        <circle cx="3" cy="5" r="4.5" fill="#F7C8D3" />
        <circle cx="-3" cy="5" r="4.5" fill="#F7C8D3" />
        <circle cx="-5" cy="-2" r="4.5" fill="#F7C8D3" />
        <circle cx="0" cy="0" r="2.5" fill="#D8C29A" />
      </g>
    </svg>
  );
}

export function LeafMotif({ className = "w-12 h-12" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 50C20 35 30 20 50 10C40 25 35 40 10 50Z"
        fill="#A8B58A"
        opacity="0.8"
      />
      <path
        d="M10 50C28 32 40 22 50 10"
        stroke="#6D7F49"
        strokeWidth="1.5"
      />
      <path
        d="M25 35C30 30 35 31 38 31"
        stroke="#6D7F49"
        strokeWidth="1"
      />
      <path
        d="M33 27C38 23 42 24 45 23"
        stroke="#6D7F49"
        strokeWidth="1"
      />
    </svg>
  );
}

export function EstSeal({ className = "w-20 h-20" }: BotanicalProps) {
  return (
    <div className={`relative flex items-center justify-center rounded-full border border-dashed border-[#D8C29A] p-2 bg-[#FFF7E6]/90 shadow-sm ${className}`}>
      <div className="flex flex-col items-center justify-center text-center">
        <LeafMotif className="w-5 h-5 text-[#8A986C] mb-0.5" />
        <span className="text-[9px] tracking-widest uppercase font-semibold text-[#6D7F49]">EST.</span>
        <span className="font-editorial text-sm font-bold text-[#2D3A47] leading-none">2010</span>
      </div>
    </div>
  );
}

export function WavyDivider({ className = "w-full h-8 text-[#A8B58A]" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 1200 60"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 30C200 10 400 50 600 30C800 10 1000 50 1200 30V60H0V30Z"
        fill="currentColor"
      />
    </svg>
  );
}
