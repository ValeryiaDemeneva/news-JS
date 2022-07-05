interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface SourcesResponse {
    sources: Source[];
    status: string;
}
