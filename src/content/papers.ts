import type { Paper } from './types';

export const papers: Paper[] = [];

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}
