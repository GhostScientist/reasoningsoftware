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
    slug: 'epistemology-and-reasoning-systems-landscape-review',
    title: 'Landscape Review: Epistemology and Reasoning Systems',
    date: '2026-02-06',
    excerpt:
      'A source-linked crash course on historical schools of epistemology and how their core questions map onto modern reasoning-system design.',
    readingTime: '20 min',
    tags: ['landscape-review', 'epistemology', 'history', 'reasoning-systems'],
  },
  {
    slug: 'epistemology-and-the-game-of-knowns',
    title: 'Epistemology and the Game of Knowns',
    date: '2026-02-05',
    excerpt:
      'A stream-of-consciousness essay on what thinking is, how knowing shifts, and why certainty behaves more like a negotiation than a possession.',
    readingTime: '8 min',
    tags: ['epistemology', 'thinking', 'reasoning'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
