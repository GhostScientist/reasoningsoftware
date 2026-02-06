import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { flagshipPrograms } from '@/content/programs';

export function Research() {
  useEffect(() => {
    document.title = 'Research | reasoning.software';
  }, []);

  return (
    <div className="space-y-14">
      <header className="space-y-4">
        <h1 className="font-mono text-lg font-semibold tracking-tight">Research</h1>
        <p className="max-w-3xl text-muted-foreground">
          These are the projects I'm actively working on. Each one has a product
          side and a research side—I try to keep both visible so the reasoning
          behind decisions stays traceable.
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Current Work
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {flagshipPrograms.map((program) => (
            <article
              key={program.slug}
              className="group space-y-4 rounded-lg border border-border bg-card/80 p-5 transition-colors hover:border-foreground/30"
            >
              <header className="space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {program.status}
                </div>
                <h3 className="text-lg font-medium text-balance">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.byline}</p>
              </header>
              <p className="text-sm leading-relaxed text-foreground/90">{program.summary}</p>
              <dl className="grid gap-2 sm:grid-cols-3">
                {program.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      {metric.label}
                    </dt>
                    <dd className="text-xs">{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to={`/research/${program.slug}`}
                className="inline-block font-mono text-xs uppercase tracking-[0.1em] underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                Open Project
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
