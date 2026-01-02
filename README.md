# reasoning.software

Independent applied research on reasoning systems—human, machine, and hybrid.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Dev Mode Flag

The site has two modes:

- **Landing only**: Shows a simple one-page stake in the ground (default for production)
- **Full site**: Shows all pages and navigation

To enable full site mode during development, create a `.env.local` file:

```bash
VITE_DEV_MODE=true
```

When `VITE_DEV_MODE` is not set or set to `false`, only the landing page is visible.

## Adding Content

### Adding a Research Project

Edit `src/content/projects.ts`:

```typescript
{
  slug: 'your-project-slug',
  title: 'Project Title',
  status: 'Active', // 'Active' | 'Idea' | 'Paused' | 'Complete'
  question: 'The research question you are exploring.',
  methods: 'Brief description of methods used.',
  artifacts: [
    { name: 'Code', status: 'soon' }, // 'available' | 'soon' | 'planned'
    { name: 'Paper', status: 'planned', url: 'https://...' },
  ],
  nextStep: 'What you plan to do next.',
}
```

### Adding a Paper

Edit `src/content/papers.ts`:

```typescript
{
  slug: 'your-paper-slug',
  title: 'Paper Title',
  year: 2026,
  status: 'In progress', // 'Draft' | 'In progress' | 'Planned' | 'Published'
  abstract: 'A 3-5 sentence abstract describing the paper.',
  links: {
    pdf: 'https://...',
    arxiv: 'https://...',
    bibtex: 'https://...',
  },
  artifacts: ['Related Project Name'],
}
```

### Adding a Note

Edit `src/content/notes.ts`:

```typescript
{
  slug: 'your-note-slug',
  title: 'Note Title',
  date: '2026-01-15',
  content: [
    'First paragraph.',
    'Second paragraph.',
    'Third paragraph.',
  ],
}
```

## Project Structure

```
src/
├── App.tsx                 # Main app with routing
├── index.css              # Global styles and theme
├── config/
│   └── flags.ts           # Dev mode flags
├── content/
│   ├── types.ts           # TypeScript types for content
│   ├── projects.ts        # Research projects data
│   ├── papers.ts          # Papers data
│   └── notes.ts           # Notes data
├── hooks/
│   ├── useTheme.ts        # Theme toggle with localStorage
│   └── useReducedMotion.ts # Motion preferences
├── components/
│   ├── layout/
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   ├── NavRail.tsx    # Navigation rail/bottom bar
│   │   └── Footer.tsx     # Site footer
│   └── ThemeToggle.tsx    # Theme toggle button
├── pages/
│   ├── Landing.tsx        # Simple landing page
│   ├── Home.tsx           # Full site home
│   ├── Research.tsx       # Research projects list
│   ├── Papers.tsx         # Papers list
│   ├── PaperDetail.tsx    # Single paper view
│   ├── Tools.tsx          # Tools list
│   ├── Notes.tsx          # Notes list
│   ├── NoteDetail.tsx     # Single note view
│   └── About.tsx          # About page
└── visualizations/
    ├── Sparkline.tsx      # Line chart component
    └── BarChart.tsx       # Bar chart component
```

## Theme

The site supports two themes:

- **Paper**: White background, black text (light mode)
- **Inked**: Black background, white text (dark mode)

Theme preference is saved to localStorage and respects `prefers-color-scheme` as the default.

## Accessibility

- Skip to content link
- Keyboard navigable with visible focus states
- Good contrast in both themes
- Respects `prefers-reduced-motion`

## Tech Stack

- [Vite](https://vitejs.dev/) - Build tool
- [React 19](https://react.dev/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - Component primitives
- [React Router](https://reactrouter.com/) - Routing
- [IBM Plex](https://www.ibm.com/plex/) - Typography

## License

An independent initiative by MadWatch LLC.
