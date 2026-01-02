import { useEffect } from 'react';

const links = [
  { name: 'GitHub', url: '#', placeholder: true },
  { name: 'ORCID', url: '#', placeholder: true },
  { name: 'arXiv', url: '#', placeholder: true },
  { name: 'Google Scholar', url: '#', placeholder: true },
];

export function About() {
  useEffect(() => {
    document.title = 'About | reasoning.software';
  }, []);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-mono text-lg font-semibold tracking-tight mb-2">
          About
        </h1>
      </header>

      <section className="space-y-4">
        <p className="leading-relaxed">
          This is an independent research initiative focused on understanding
          how reasoning systems work in practice. The work sits at the
          intersection of machine learning, human-computer interaction, and
          applied AI—with an emphasis on what happens when systems leave the lab
          and encounter real constraints.
        </p>

        <p className="leading-relaxed">
          The approach is empirical and iterative: build small experiments, look
          carefully at what happens, and share what we find. The goal is to
          develop tools and intuitions that help practitioners work more
          effectively with reasoning systems.
        </p>

        <p className="leading-relaxed">
          Questions and collaboration welcome.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Links
        </h2>
        <ul className="flex flex-wrap gap-4 font-mono text-sm">
          {links.map((link) => (
            <li key={link.name}>
              {link.placeholder ? (
                <span className="text-muted-foreground">{link.name}</span>
              ) : (
                <a
                  href={link.url}
                  className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <footer className="pt-8 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          An independent initiative by MadWatch LLC.
        </p>
      </footer>
    </div>
  );
}
