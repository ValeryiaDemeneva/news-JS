interface ArticleSources {
    id: string;
    name: string;
}

interface Article {
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
