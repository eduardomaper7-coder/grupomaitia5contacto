/** Silueta decorativa del Teide con palmeras. Puramente ornamental. */
export default function TeideSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 160"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="teide-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a0a0c" />
          <stop offset="1" stopColor="#070707" />
        </linearGradient>
        <linearGradient id="teide-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d9161f" stopOpacity="0" />
          <stop offset=".5" stopColor="#d9161f" stopOpacity=".9" />
          <stop offset="1" stopColor="#d9161f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Montaña */}
      <path
        d="M0 160 L0 140 C80 132 150 120 220 104 C290 88 330 66 368 44 L384 34 C392 30 408 30 416 34 L432 44 C470 66 510 88 580 104 C650 120 720 132 800 140 L800 160 Z"
        fill="url(#teide-fill)"
      />
      <path
        d="M0 140 C80 132 150 120 220 104 C290 88 330 66 368 44 L384 34 C392 30 408 30 416 34 L432 44 C470 66 510 88 580 104 C650 120 720 132 800 140"
        fill="none"
        stroke="url(#teide-rim)"
        strokeWidth="1.2"
      />
      {/* Palmeras */}
      <g fill="#050505">
        <path d="M86 160 C88 140 90 124 94 110 L97 110 C94 126 92 142 92 160Z" />
        <path d="M95 110 C84 102 70 102 60 108 C72 104 84 106 95 112Z M95 110 C104 98 118 96 130 100 C118 100 106 104 96 112Z M95 110 C90 96 80 90 70 90 C80 94 88 102 94 112Z M95 110 C102 104 114 106 122 114 C112 108 104 108 96 112Z M95 110 C88 104 76 108 70 116 C78 110 88 108 95 112Z" />
        <path d="M700 160 C701 138 704 120 709 104 L712 104 C708 120 706 140 706 160Z" />
        <path d="M710 104 C698 96 682 96 672 102 C686 98 698 100 710 106Z M710 104 C720 92 736 90 748 94 C734 94 722 98 711 106Z M710 104 C704 90 692 84 682 84 C694 88 702 96 709 106Z M710 104 C718 98 730 100 738 108 C728 102 718 102 711 106Z" />
        <path d="M742 160 C743 146 745 134 748 124 L750 124 C748 134 747 146 747 160Z" />
        <path d="M749 124 C741 118 730 118 723 122 C733 120 741 121 749 126Z M749 124 C756 116 767 114 775 117 C766 117 757 120 750 126Z M749 124 C745 114 737 110 730 110 C738 113 744 118 748 126Z" />
      </g>
    </svg>
  );
}
