interface ArticleSources {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSources;
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
