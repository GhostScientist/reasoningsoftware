import type { ReactNode } from 'react';

interface FramingCalloutProps {
  title: string;
  children: ReactNode;
}

export function FramingCallout({ title, children }: FramingCalloutProps) {
  return (
    <aside className="my-5 space-y-2 rounded-md border border-border bg-muted/45 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="space-y-2 text-sm leading-relaxed text-foreground/90">{children}</div>
    </aside>
  );
}

interface LensSplitProps {
  product: ReactNode;
  research: ReactNode;
}

export function LensSplit({ product, research }: LensSplitProps) {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <section className="space-y-2 rounded-md border border-border p-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Product Lens
        </p>
        <div className="space-y-2 text-sm text-foreground/90">{product}</div>
      </section>
      <section className="space-y-2 rounded-md border border-border p-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Research Lens
        </p>
        <div className="space-y-2 text-sm text-foreground/90">{research}</div>
      </section>
    </div>
  );
}
