import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  useEffect(() => {
    document.title = 'reasoning.software';
  }, []);

  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="font-mono text-xl md:text-2xl font-semibold tracking-tight">
          reasoning.software
        </h1>

        <p className="text-lg leading-relaxed">
          Independent applied research on reasoning systems—human, machine, and
          hybrid.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Experiments, papers, tools, and field notes focused on clarity,
          failure modes, and real-world deployment.
        </p>
      </header>

      <section className="space-y-4">
        <p className="leading-relaxed">
          reasoning.software is a living research notebook and lab bench. It
          collects applied experiments and artifacts about how reasoning works
          and how it breaks down—across models, interfaces, and real-world
          constraints.
        </p>

        <p className="leading-relaxed">
          The emphasis is on clear questions, reproducible methods, and
          visualizations that help reveal what's happening rather than obscuring
          it.
        </p>
      </section>

      <nav className="pt-4 border-t border-border">
        <ul className="flex flex-wrap gap-4 font-mono text-sm">
          <li>
            <Link
              to="/research"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Research →
            </Link>
          </li>
          <li>
            <Link
              to="/papers"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Papers →
            </Link>
          </li>
          <li>
            <Link
              to="/notes"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Notes →
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
