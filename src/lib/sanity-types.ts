// Tipi TypeScript per i dati Sanity

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface PortableTextBlock {
  _type: 'block';
  children: Array<{
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
  style?: string;
  markDefs?: any[];
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  description: string;
  pubDate: string;
  heroImage?: SanityImage;
  body?: PortableTextBlock[];
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  country: string;
  duration: string;
  heroImage?: SanityImage;
  body?: PortableTextBlock[];
}

export interface Page {
  _id: string;
  title: string;
  slug: string;
  description: string;
  body?: PortableTextBlock[];
}

