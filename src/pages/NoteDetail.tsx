import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNoteBySlug } from '@/content/notes';
import type { NoteContentItem } from '@/content/types';

export function NoteDetail() {
  const { slug } = useParams<{ slug: string }>();
  const note = slug ? getNoteBySlug(slug) : undefined;

  useEffect(() => {
    if (note) {
      document.title = `${note.title} | reasoning.software`;
    }
  }, [note]);

  if (!note) {
    return (
      <div className="space-y-6">
        <p className="text-muted-foreground">Note not found.</p>
        <Link
          to="/notes"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to notes
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          to="/notes"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Notes
        </Link>

        <div className="space-y-2">
          <time className="font-mono text-sm text-muted-foreground">
            {note.date}
          </time>
          <h1 className="text-xl font-medium">{note.title}</h1>
        </div>
      </header>

      <div className="space-y-4">
        {note.content.map((item: NoteContentItem, index: number) => {
          if (typeof item === 'string') {
            return (
              <p key={index} className="leading-relaxed">
                {item}
              </p>
            );
          }
          if (item.type === 'image') {
            return (
              <figure key={index} className="my-6">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full rounded-lg border border-border"
                />
                {item.caption && (
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>

      {note.externalLink && (
        <div className="pt-4 border-t border-border">
          <a
            href={note.externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {note.externalLink.label} →
          </a>
        </div>
      )}
    </article>
  );
}
