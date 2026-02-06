import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { flagshipPrograms } from '@/content/programs';

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
          A lab notebook for working through ideas about reasoning
          systems—how they work, where they break, and what to build next.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I use this site to think out loud: documenting experiments,
          logging what I find, and sharing notes along the way.
        </p>
      </header>

      <section className="space-y-4">
        <p className="leading-relaxed">
          This is where I collect my ongoing work on reasoning—across
          language models, interfaces, and real-world deployment. Nothing
          here is finished or authoritative. It's a working notebook, and
          the entries reflect wherever I happen to be in the process.
        </p>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          What I'm working on
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {flagshipPrograms.map((program) => (
            <article
              key={program.slug}
              className="space-y-2 rounded-md border border-border bg-card/70 p-4"
            >
              <h3 className="font-medium">{program.title}</h3>
              <p className="text-sm text-muted-foreground">{program.byline}</p>
              <Link
                to={`/research/${program.slug}`}
                className="font-mono text-xs uppercase tracking-[0.1em] underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                Open project page
              </Link>
            </article>
          ))}
        </div>
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
              to="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog →
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
