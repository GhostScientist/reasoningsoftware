export type ProjectStatus = 'Active' | 'Idea' | 'Paused' | 'Complete';

export interface Artifact {
  name: string;
  status: 'available' | 'soon' | 'planned';
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  question: string;
  methods: string;
  artifacts: Artifact[];
  nextStep: string;
}

export type PaperStatus = 'Draft' | 'In progress' | 'Planned' | 'Published';

export interface Paper {
  slug: string;
  title: string;
  year: number;
  status: PaperStatus;
  abstract: string;
  links: {
    pdf?: string;
    arxiv?: string;
    bibtex?: string;
  };
  artifacts: string[];
}

export interface NoteImage {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export type NoteContentItem = string | NoteImage;

export interface Note {
  slug: string;
  title: string;
  date: string;
  content: NoteContentItem[];
  externalLink?: {
    url: string;
    label: string;
  };
}
