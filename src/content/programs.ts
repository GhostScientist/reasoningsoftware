export type RoadmapStatus = 'Current' | 'Planned' | 'Complete';

export interface ProgramCapability {
  label: string;
  score: number;
}

export interface ProgramRoadmapPhase {
  phase: string;
  focus: string;
  status: RoadmapStatus;
}

export interface ProgramMetric {
  label: string;
  value: string;
}

export interface ProgramLink {
  label: string;
  url: string;
}

export interface Program {
  slug: string;
  title: string;
  byline: string;
  status: string;
  updated: string;
  summary: string;
  productAngles: string[];
  researchAngles: string[];
  capabilities: ProgramCapability[];
  roadmap: ProgramRoadmapPhase[];
  metrics: ProgramMetric[];
  links: ProgramLink[];
}

export const flagshipPrograms: Program[] = [
  {
    slug: 'semanticwiki',
    title: 'SemanticWiki',
    byline: 'Architectural documentation with source-code traceability',
    status: 'Active product and applied research',
    updated: '2026-02-05',
    summary:
      'SemanticWiki pairs autonomous codebase understanding with precise, line-linked documentation generation for engineering teams.',
    productAngles: [
      'CLI-first workflow for architecture wiki generation',
      'Static site output with fast search and dark mode',
      'Traceability guarantees from concept to file:line implementation',
    ],
    researchAngles: [
      'RAG retrieval quality under large codebase entropy',
      'Agentic planning reliability for long documentation runs',
      'Evaluation harness for traceability precision and broken-link drift',
    ],
    capabilities: [
      { label: 'Code Traceability', score: 95 },
      { label: 'Autonomous Exploration', score: 88 },
      { label: 'Docs UX Quality', score: 84 },
      { label: 'Reproducible Runs', score: 79 },
      { label: 'Research Instrumentation', score: 82 },
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        focus: 'Codebase digestion and architecture wiki generation',
        status: 'Complete',
      },
      {
        phase: 'Phase 2',
        focus: 'Robust link verification and traceability confidence scoring',
        status: 'Current',
      },
      {
        phase: 'Phase 3',
        focus: 'Comparative studies across retrieval and planning strategies',
        status: 'Planned',
      },
    ],
    metrics: [
      { label: 'Primary Interface', value: 'CLI' },
      { label: 'Core Retrieval', value: 'FAISS + MiniLM' },
      { label: 'Output Surface', value: 'Static Wiki' },
    ],
    links: [
      {
        label: 'npm package',
        url: 'https://www.npmjs.com/package/semanticwiki',
      },
      {
        label: 'Build an Agent Workshop',
        url: 'https://buildanagentworkshop.com/',
      },
    ],
  },
  {
    slug: 'the-knowledge-department',
    title: 'The Knowledge Department',
    byline: 'Knowledge governance for organizational AI agents',
    status: 'Research platform in architectural planning',
    updated: '2026-02-05',
    summary:
      'TKD studies how specialized custodians can safely maintain shared organizational knowledge while preventing reward hacking.',
    productAngles: [
      'Self-hosted service for knowledge assertions and provenance',
      'Governed API boundaries for agent writes and retrieval',
      'Audit-first design for contradiction and staleness handling',
    ],
    researchAngles: [
      'Prompt-policy versus RL policy performance under identical rewards',
      'Failure taxonomy for reward hacking in knowledge curation',
      'Benchmark-driven evaluation in realistic, time-varying organizations',
    ],
    capabilities: [
      { label: 'Governance Design', score: 93 },
      { label: 'Evaluation Rigor', score: 90 },
      { label: 'Operational Safety', score: 87 },
      { label: 'Policy Learning Depth', score: 76 },
      { label: 'Benchmark Reusability', score: 89 },
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        focus: 'Architecture and evaluation framework design',
        status: 'Current',
      },
      {
        phase: 'Phase 2',
        focus: 'Watership simulation implementation and baseline evaluations',
        status: 'Planned',
      },
      {
        phase: 'Phase 3',
        focus: 'Policy optimization studies and benchmark publication',
        status: 'Planned',
      },
    ],
    metrics: [
      { label: 'Primary Goal', value: 'Trustworthy knowledge operations' },
      { label: 'Evaluation Env', value: 'Watership Group' },
      { label: 'Agent Topology', value: 'Specialized custodians' },
    ],
    links: [
      {
        label: 'Project site',
        url: 'https://theknowledgedepartment.com/',
      },
      {
        label: 'Research preview',
        url: 'https://theknowledgedepartment.com/#waitlist',
      },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return flagshipPrograms.find((program) => program.slug === slug);
}
