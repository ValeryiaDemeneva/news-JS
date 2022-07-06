import { SourcesResponse } from './../../typescript/SourcesResponse';
import { ArticlesResponse } from './../../typescript/ArticlesResponse';

export type ApiKey = {
    [sources: string]: string;
};
export type ArticlesResponseHandler = (data: ArticlesResponse) => void;
export type SourcesResponseHandler = (data: SourcesResponse) => void;
export type ResponseHandler = ArticlesResponseHandler | SourcesResponseHandler;
class Loader {
    baseLink: string;
    options: ApiKey;
    constructor(baseLink: string, options: ApiKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: ApiKey },
        callback: ResponseHandler = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: ApiKey | object, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: ResponseHandler, options: ApiKey = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
