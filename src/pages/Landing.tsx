import { useEffect } from 'react';

export function Landing() {
  useEffect(() => {
    document.title = 'reasoning.software';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center">
        <img
          src="/reasoning-software.png"
          alt="reasoning.software logo"
          className="w-96 h-96 mx-auto mb-8"
        />
        <h1 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          reasoning.software
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
          A lab notebook about reasoning systems—how models think, where they
          break, and what's worth building next.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Things I'm currently exploring: world modeling, long-horizon reasoning,
          embodied intelligence, human-computer interfaces, and applied AI.
          Experiments, notes, and open questions.
        </p>

        <p className="font-mono text-sm text-muted-foreground">
          More to come.
        </p>
      </div>
    </div>
  );
}
