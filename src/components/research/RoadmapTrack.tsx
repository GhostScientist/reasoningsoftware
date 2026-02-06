import type { ProgramRoadmapPhase } from '@/content/programs';

interface RoadmapTrackProps {
  phases: ProgramRoadmapPhase[];
}

function statusClass(status: ProgramRoadmapPhase['status']) {
  if (status === 'Current') return 'bg-foreground text-background';
  if (status === 'Complete') return 'bg-muted text-foreground';
  return 'border border-border text-muted-foreground';
}

export function RoadmapTrack({ phases }: RoadmapTrackProps) {
  return (
    <section className="space-y-4 rounded-lg border border-border bg-card/80 p-5">
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Roadmap
      </h2>

      <ol className="space-y-4">
        {phases.map((phase, index) => (
          <li key={phase.phase} className="relative pl-7">
            {index < phases.length - 1 && (
              <span
                className="absolute left-[9px] top-6 h-full w-px bg-border"
                aria-hidden
              />
            )}
            <span
              className={`absolute left-0 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] ${statusClass(
                phase.status
              )}`}
            >
              {index + 1}
            </span>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{phase.phase}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {phase.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{phase.focus}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
