import { useEffect } from 'react';
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
              className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
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
    <div className="space-y-12">
      <header>
        <h1 className="font-mono text-lg font-semibold tracking-tight mb-2">
          Research
        </h1>
        <p className="text-muted-foreground">
          Current projects and areas of inquiry.
        </p>
      </header>

      <div className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="space-y-4 pb-10 border-b border-border last:border-b-0"
          >
            <header className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-medium">{project.title}</h2>
                <StatusBadge status={project.status} />
              </div>
            </header>

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Question
                </dt>
                <dd className="leading-relaxed">{project.question}</dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Methods
                </dt>
                <dd className="leading-relaxed text-muted-foreground">
                  {project.methods}
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Artifacts
                </dt>
                <dd>
                  <ArtifactList artifacts={project.artifacts} />
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Next step
                </dt>
                <dd className="text-muted-foreground">{project.nextStep}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
