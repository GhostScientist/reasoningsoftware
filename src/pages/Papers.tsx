import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { papers } from '@/content/papers';
import type { PaperStatus } from '@/content/types';

function StatusBadge({ status }: { status: PaperStatus }) {
  return (
    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      [{status}]
    </span>
  );
}

export function Papers() {
  useEffect(() => {
    document.title = 'Papers | reasoning.software';
  }, []);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-mono text-lg font-semibold tracking-tight mb-2">
          Papers
        </h1>
        <p className="text-muted-foreground">
          Research papers in various stages of development.
        </p>
      </header>

      <ul className="space-y-4">
        {papers.map((paper) => (
          <li key={paper.slug} className="group">
            <Link
              to={`/papers/${paper.slug}`}
              className="block py-3 -mx-3 px-3 hover:bg-muted rounded transition-colors"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-sm text-muted-foreground">
                  {paper.year}
                </span>
                <StatusBadge status={paper.status} />
                <span className="font-medium group-hover:underline underline-offset-2">
                  {paper.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
