import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPaperBySlug } from '@/content/papers';

export function PaperDetail() {
  const { slug } = useParams<{ slug: string }>();
  const paper = slug ? getPaperBySlug(slug) : undefined;

  useEffect(() => {
    if (paper) {
      document.title = `${paper.title} | reasoning.software`;
    }
  }, [paper]);

  if (!paper) {
    return (
      <div className="space-y-6">
        <p className="text-muted-foreground">Paper not found.</p>
        <Link
          to="/papers"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to papers
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          to="/papers"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Papers
        </Link>

        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted-foreground">
              {paper.year}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              [{paper.status}]
            </span>
          </div>
          <h1 className="text-xl font-medium">{paper.title}</h1>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Abstract
        </h2>
        <p className="leading-relaxed">{paper.abstract}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Links
        </h2>
        <ul className="flex flex-wrap gap-4 font-mono text-sm">
          {paper.links.pdf ? (
            <li>
              <a
                href={paper.links.pdf}
                className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
              >
                PDF
              </a>
            </li>
          ) : (
            <li className="text-muted-foreground">PDF (coming)</li>
          )}
          {paper.links.arxiv ? (
            <li>
              <a
                href={paper.links.arxiv}
                className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
              >
                arXiv
              </a>
            </li>
          ) : (
            <li className="text-muted-foreground">arXiv (planned)</li>
          )}
          {paper.links.bibtex ? (
            <li>
              <a
                href={paper.links.bibtex}
                className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
              >
                BibTeX
              </a>
            </li>
          ) : (
            <li className="text-muted-foreground">BibTeX (planned)</li>
          )}
        </ul>
      </section>

      {paper.artifacts.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Associated Projects
          </h2>
          <ul className="space-y-1 font-mono text-sm">
            {paper.artifacts.map((artifact) => (
              <li key={artifact} className="text-muted-foreground">
                {artifact}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
