import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNoteBySlug } from '@/content/notes';

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
        {note.content.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
