import { ArticleSourses } from './SourcesResponse';

export interface Article {
    source: ArticleSourses;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
