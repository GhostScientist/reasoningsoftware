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
