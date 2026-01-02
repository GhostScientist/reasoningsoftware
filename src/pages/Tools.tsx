import { useEffect } from 'react';

const tools = [
  {
    name: 'Trace Viewer',
    description: 'Visualize reasoning traces and branching patterns.',
    status: 'coming soon',
  },
  {
    name: 'Prompt Perturbation Kit',
    description: 'Systematically vary prompts and compare outputs.',
    status: 'coming soon',
  },
  {
    name: 'Eval Harness',
    description: 'Run repeatable local experiments and export datasets.',
    status: 'coming soon',
  },
];

export function Tools() {
  useEffect(() => {
    document.title = 'Tools | reasoning.software';
  }, []);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-mono text-lg font-semibold tracking-tight mb-2">
          Tools
        </h1>
        <p className="text-muted-foreground">
          Software for reasoning research and experimentation.
        </p>
      </header>

      <ul className="space-y-6">
        {tools.map((tool) => (
          <li
            key={tool.name}
            className="pb-6 border-b border-border last:border-b-0"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="font-medium">{tool.name}</h2>
              <span className="font-mono text-xs text-muted-foreground">
                {tool.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{tool.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
