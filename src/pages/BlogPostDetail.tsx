import { Suspense, lazy, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type React from 'react';
import type { ComponentType } from 'react';
import { getBlogPostBySlug } from '@/content/blog';

const blogModules = import.meta.glob<{ default: ComponentType }>('/src/content/blog/*.mdx');

const blogComponentsBySlug = Object.entries(blogModules).reduce<
  Record<string, React.LazyExoticComponent<ComponentType>>
>((accumulator, [path, loader]) => {
  const slug = path.split('/').pop()?.replace('.mdx', '');
  if (!slug) return accumulator;
  accumulator[slug] = lazy(loader);
  return accumulator;
}, {});

export function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const Content = slug ? blogComponentsBySlug[slug] : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog | reasoning.software`;
    }
  }, [post]);

  if (!post || !Content) {
    return (
      <div className="space-y-6">
        <p className="text-muted-foreground">Post not found.</p>
        <Link
          to="/blog"
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          to="/blog"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Blog
        </Link>
        <div className="space-y-2">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <time className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {post.date}
            </time>
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="space-y-4">
        <Suspense
          fallback={<p className="text-sm text-muted-foreground">Loading post content...</p>}
        >
          <Content />
        </Suspense>
      </section>
    </article>
  );
}
