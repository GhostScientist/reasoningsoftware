import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/content/blog';

export function Blog() {
  useEffect(() => {
    document.title = 'Blog | reasoning.software';
  }, []);

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="font-mono text-lg font-semibold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Essays and notes on reasoning, epistemology, and building things that think.
        </p>
      </header>

      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug} className="group">
            <Link
              to={`/blog/${post.slug}`}
              className="block space-y-2 rounded-md px-3 py-3 transition-colors hover:bg-muted"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time className="font-mono text-xs text-muted-foreground">{post.date}</time>
                <span className="font-mono text-xs text-muted-foreground">
                  {post.readingTime}
                </span>
              </div>
              <h2 className="text-lg font-medium group-hover:underline underline-offset-2">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
