import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'disagreement-as-signal',
    title: 'Disagreement as Signal',
    status: 'Active',
    question:
      'When two strong models disagree, what does that reveal about uncertainty and failure modes?',
    methods:
      'Prompt suites, controlled perturbations, qualitative clustering of disagreement patterns.',
    artifacts: [
      { name: 'Code', status: 'soon' },
      { name: 'Dataset', status: 'soon' },
      { name: 'Figures', status: 'soon' },
    ],
    nextStep: 'Implement disagreement metrics and a first visualization.',
  },
  {
    slug: 'compression-hurts-reasoning',
    title: 'Compression Hurts Reasoning',
    status: 'Idea',
    question:
      'Which reasoning capabilities degrade first under quantization, smaller context windows, or constrained decoding?',
    methods:
      'A/B evaluation harness across constraints, systematic error taxonomy development.',
    artifacts: [
      { name: 'Eval harness', status: 'planned' },
      { name: 'Write-up', status: 'planned' },
    ],
    nextStep: 'Define task set and scoring rubric.',
  },
  {
    slug: 'human-in-the-loop-interfaces',
    title: 'Human-in-the-loop Interfaces',
    status: 'Active',
    question:
      'Which interface patterns improve human and AI reasoning together?',
    methods:
      'Prototype interface patterns and measure decision quality and time to resolution.',
    artifacts: [
      { name: 'Prototype', status: 'soon' },
      { name: 'Notes', status: 'soon' },
    ],
    nextStep: 'Build a minimal interface prototype for study.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
