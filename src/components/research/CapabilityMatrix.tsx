import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { ProgramCapability } from '@/content/programs';

interface CapabilityMatrixProps {
  title: string;
  capabilities: ProgramCapability[];
}

export function CapabilityMatrix({ title, capabilities }: CapabilityMatrixProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="space-y-4 rounded-lg border border-border bg-card/80 p-5">
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h2>
      <ul className="space-y-3">
        {capabilities.map((capability, index) => (
          <li key={capability.label} className="space-y-1">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm">{capability.label}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {capability.score}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-foreground/80"
                style={
                  prefersReducedMotion
                    ? { width: `${capability.score}%` }
                    : {
                        width: `${capability.score}%`,
                        animation: `capability-enter 0.5s ease-out ${index * 0.08}s both`,
                      }
                }
              />
            </div>
          </li>
        ))}
      </ul>
      <style>
        {`
          @keyframes capability-enter {
            from {
              transform: scaleX(0);
              transform-origin: left;
            }
            to {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        `}
      </style>
    </section>
  );
}
