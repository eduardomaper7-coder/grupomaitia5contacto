type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  children?: React.ReactNode;
};

/** Título de sección: antetítulo dorado + título con palabra destacada */
export default function SectionHeading({ id, eyebrow, title, highlight, children }: Props) {
  return (
    <div data-reveal className="flex items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id} className="section-title mt-2">
          {title} {highlight && <span className="text-gold-metal">{highlight}</span>}
        </h2>
        <div className="mt-3 h-[2px] w-12 rounded-full bg-brand-red" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
