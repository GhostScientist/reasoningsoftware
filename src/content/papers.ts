import type { Paper } from './types';

export const papers: Paper[] = [
  {
    slug: 'reasoning-traces-in-the-wild',
    title: 'Reasoning Traces in the Wild',
    year: 2026,
    status: 'In progress',
    abstract:
      'This paper examines how reasoning traces from frontier language models behave when deployed outside of controlled benchmarks. We collect and analyze traces from real-world applications, categorizing failure modes and identifying patterns that correlate with task success. Our findings suggest that trace quality varies significantly across domains, and that certain structural features of traces predict downstream errors before they manifest in final outputs. We propose a lightweight taxonomy for trace analysis and discuss implications for monitoring deployed reasoning systems.',
    links: {},
    artifacts: ['Disagreement as Signal'],
  },
  {
    slug: 'disagreement-metrics-for-everyday-models',
    title: 'Disagreement Metrics for Everyday Models',
    year: 2026,
    status: 'Planned',
    abstract:
      'When multiple language models are queried on the same task, their disagreements carry information. This paper develops a set of metrics for characterizing model disagreement that go beyond simple accuracy comparisons. We introduce measures for semantic divergence, confidence calibration gaps, and reasoning path similarity. Preliminary experiments on a suite of reasoning tasks show that disagreement patterns can serve as early indicators of task difficulty and potential failure modes. The goal is to provide practitioners with tools for understanding when model ensembles are likely to fail.',
    links: {},
    artifacts: [],
  },
];

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}
