import { ArticlesResponse } from '../../typescript/ArticlesResponse';
import { SourcesResponse } from '../../typescript/SourcesResponse';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesResponse) {
        if (data.status === 'ok') {
            const values = data?.articles || [];
            this.news.draw(values);
        }
    }

    drawSources(data: SourcesResponse) {
        if (data.status === 'ok') {
            const values = data?.sources || [];
            this.sources.draw(values);
        }
    }
}

export default AppView;
