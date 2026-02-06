import { useEffect } from 'react';

const links = [
  { name: 'GitHub', url: 'https://github.com/ghostscientist' },
  { name: 'ORCID', url: 'https://orcid.org/0009-0000-2040-908X' },
  { name: 'arXiv', url: 'https://arxiv.org/a/ghostscientist.html' },
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
          I'm an independent researcher and engineer interested in how reasoning
          works—in language models, in software systems, and in the messy
          overlap between humans and machines.
        </p>

        <p className="leading-relaxed">
          This site is my lab notebook. I use it to document what I'm building,
          log experiments, and work through ideas in the open. Nothing here
          should be read as settled or authoritative—it's an honest record of
          an ongoing process.
        </p>

        <p className="leading-relaxed">
          The projects I'm currently focused on involve codebase understanding,
          knowledge governance for AI agents, and the practical failure modes
          of deployed reasoning systems. I tend to work at the intersection
          of building things and studying how they behave.
        </p>

        <p className="leading-relaxed">
          If any of this is interesting to you, feel free to reach out.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Links
        </h2>
        <ul className="flex flex-wrap gap-4 font-mono text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
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
