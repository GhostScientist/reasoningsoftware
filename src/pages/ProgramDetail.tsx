import { Suspense, lazy, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ComponentType } from 'react';
import type React from 'react';
import { getProgramBySlug } from '@/content/programs';
import { CapabilityMatrix } from '@/components/research/CapabilityMatrix';
import { RoadmapTrack } from '@/components/research/RoadmapTrack';

const mdxModules = import.meta.glob<{ default: ComponentType }>(
  '/src/content/programs/*.mdx'
);
const mdxComponentsBySlug = Object.entries(mdxModules).reduce<
  Record<string, React.LazyExoticComponent<ComponentType>>
>((accumulator, [path, loader]) => {
  const slug = path.split('/').pop()?.replace('.mdx', '');
  if (!slug) return accumulator;
  accumulator[slug] = lazy(loader);
  return accumulator;
}, {});

const readingPathBySlug: Record<string, { label: string; id: string }[]> = {
  semanticwiki: [
    { label: 'Why this exists', id: 'why-this-exists' },
    { label: 'Product surface', id: 'product-surface' },
    { label: 'System architecture', id: 'system-architecture' },
    { label: 'Evaluation strategy', id: 'evaluation-strategy' },
  ],
  'the-knowledge-department': [
    { label: 'Why TKD', id: 'why-tkd' },
    { label: 'Layer model', id: 'product-layer-and-research-layer' },
    { label: 'Custodians', id: 'custodian-model' },
    { label: 'Reward hacking', id: 'reward-hacking-taxonomy' },
  ],
};

function getModuleKey(slug: string): string {
  return `/src/content/programs/${slug}.mdx`;
}

export function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;
  const moduleLoader = slug ? mdxModules[getModuleKey(slug)] : undefined;
  const Content = slug ? mdxComponentsBySlug[slug] : undefined;

  const readingPath = useMemo(() => {
    if (!slug) return [];
    return readingPathBySlug[slug] ?? [];
  }, [slug]);

  useEffect(() => {
    if (program) {
      document.title = `${program.title} | Research | reasoning.software`;
    }
  }, [program]);

  if (!program || !slug || !moduleLoader) {
    return (
      <div className="space-y-6">
        <p className="text-muted-foreground">Research program not found.</p>
        <Link
          to="/research"
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to research
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <Link
          to="/research"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Research
        </Link>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span>{program.status}</span>
            <span>Updated {program.updated}</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">
            {program.title}
          </h1>
          <p className="text-lg text-muted-foreground">{program.byline}</p>
          <p className="max-w-3xl leading-relaxed text-foreground/90">{program.summary}</p>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <div className="rounded-lg border border-border bg-card/80 p-5">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Reading Path
            </h2>
            <ul className="space-y-2">
              {readingPath.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card/80 p-5">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Product and Research Angles
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <section className="space-y-2">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="space-y-1">
                  {program.productAngles.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="space-y-2">
                <h3 className="text-sm font-medium">Research</h3>
                <ul className="space-y-1">
                  {program.researchAngles.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <CapabilityMatrix title="Capability Profile" capabilities={program.capabilities} />
          <RoadmapTrack phases={program.roadmap} />
        </div>
      </section>

      <section className="space-y-4 rounded-lg border border-border bg-card/80 p-5">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Key Signals
        </h2>
        <dl className="grid gap-4 sm:grid-cols-3">
          {program.metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="text-sm leading-relaxed">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-6">
        {Content ? (
          <div className="space-y-4">
            <Suspense
              fallback={
                <p className="text-sm text-muted-foreground">Loading program content...</p>
              }
            >
              <Content />
            </Suspense>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Loading program content...</p>
        )}
      </section>

      <footer className="space-y-3 border-t border-border pt-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          External Links
        </h2>
        <ul className="flex flex-wrap gap-4">
          {program.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs underline decoration-dotted underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
