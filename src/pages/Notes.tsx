import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { notes } from '@/content/notes';

export function Notes() {
  useEffect(() => {
    document.title = 'Notes | reasoning.software';
  }, []);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-mono text-lg font-semibold tracking-tight mb-2">
          Notes
        </h1>
        <p className="text-muted-foreground">
          Short observations and working notes from ongoing research.
        </p>
      </header>

      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.slug} className="group">
            <Link
              to={`/notes/${note.slug}`}
              className="block py-3 -mx-3 px-3 hover:bg-muted rounded transition-colors"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-sm text-muted-foreground">
                  {note.date}
                </span>
                <span className="group-hover:underline underline-offset-2">
                  {note.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
