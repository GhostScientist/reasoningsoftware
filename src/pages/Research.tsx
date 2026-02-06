import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { flagshipPrograms } from '@/content/programs';
import { projects } from '@/content/projects';
import type { ProjectStatus, Artifact } from '@/content/types';

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      {status}
    </span>
  );
}

function ArtifactList({ artifacts }: { artifacts: Artifact[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {artifacts.map((artifact) => (
        <li key={artifact.name} className="font-mono text-xs">
          {artifact.url ? (
            <a
              href={artifact.url}
              className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
            >
              {artifact.name}
            </a>
          ) : (
            <span className="text-muted-foreground">
              {artifact.name}{' '}
              <span className="opacity-60">({artifact.status})</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Research() {
  useEffect(() => {
    document.title = 'Research | reasoning.software';
  }, []);

  return (
    <div className="space-y-14">
      <header className="space-y-4">
        <h1 className="font-mono text-lg font-semibold tracking-tight">Research</h1>
        <p className="max-w-3xl text-muted-foreground">
          Program pages combine product execution details with falsifiable research
          hypotheses, evaluation strategy, and failure-mode tracking.
        </p>
      </header>

      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Flagship Programs
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            Narrative + evidence views
          </span>
        </div>
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
                Open Program
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Exploratory Tracks
        </h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="space-y-4 border-b border-border pb-10 last:border-b-0"
            >
              <header className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>
              </header>

              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Question
                  </dt>
                  <dd className="leading-relaxed">{project.question}</dd>
                </div>

                <div>
                  <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Methods
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">{project.methods}</dd>
                </div>

                <div>
                  <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Artifacts
                  </dt>
                  <dd>
                    <ArtifactList artifacts={project.artifacts} />
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Next Step
                  </dt>
                  <dd className="text-muted-foreground">{project.nextStep}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
