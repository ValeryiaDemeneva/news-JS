export type Language = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';

export type Category = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';

export interface Source {
    category: Category;
    country: string;
    description: string;
    id: string | null;
    language: Language;
    name: string;
    url: string;
}

export interface SourcesResponse {
    sources: Source[];
    status: string;
}

export type ArticleSourses = Pick<Source, 'id' | 'name'>;
