export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'epistemology-and-the-game-of-knowns',
    title: 'Epistemology and the Game of Knowns',
    date: '2026-02-05',
    excerpt:
      'An essay on what thinking is, how knowing shifts, and why epistemology is less a theory of justification than a game of pieces, moves, and constraints — from Plato through Bayes to agentic reasoning systems.',
    readingTime: '25 min',
    tags: ['epistemology', 'thinking', 'reasoning', 'reasoning-systems', 'landscape-review'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
