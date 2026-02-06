/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import type React from 'react';
import type { MDXComponents } from 'mdx/types';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function StyledAnchor({ href = '', children, ...rest }: AnchorProps) {
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link
        to={href}
        className="underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground/75"
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground/75"
      {...rest}
    >
      {children}
    </a>
  );
}

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-semibold tracking-tight text-balance">{children}</h1>
  ),
  h2: ({ id, children }) => (
    <h2
      id={id}
      className="mt-10 scroll-mt-24 border-t border-border pt-6 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => <h3 className="mt-6 text-lg font-medium">{children}</h3>,
  p: ({ children }) => (
    <p className="leading-relaxed text-[15px] text-foreground/90">{children}</p>
  ),
  a: StyledAnchor,
  ul: ({ children }) => <ul className="list-disc space-y-2 pl-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal space-y-3 pl-5">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed text-[15px] text-foreground/90">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-foreground/30 bg-muted/40 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full min-w-[540px] border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted/55 font-mono text-xs uppercase tracking-wide text-muted-foreground">
      {children}
    </thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-border align-top">{children}</tr>,
  th: ({ children }) => <th className="px-3 py-2 font-medium">{children}</th>,
  td: ({ children }) => <td className="px-3 py-2 leading-relaxed">{children}</td>,
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px]">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-md border border-border bg-muted/40 p-3 font-mono text-xs">
      {children}
    </pre>
  ),
};
