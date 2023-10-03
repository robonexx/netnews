export interface guardianNewsType {
  id: string;
  sectionName?: string;
  webTitle: string;
  webUrl: string;
  fields: {
    trailText: string;
    thumbnail: string;
  }
  bodyText?: string;
  webPublicationDate?: string | undefined;
  params?: string;
}

export interface newsType {
  source: {
    id: string;
    name: string;
  };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt?: string | undefined;
  content?: string;
  params?: string;
}

export type NewsItem = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
  }
  
  export type Pagination = {
    count: number;
    limit: number;
    offset: number;
    total: number;
  }
  
  export type DummyNewsResponse = {
    pagination: Pagination;
    data: NewsItem[];
}
  
export interface NavItemProps {
  title: string;
  path: string;
  id: number;
  img: StaticImageData;
  i: number;
  closeMobileMenu: () => void;
}