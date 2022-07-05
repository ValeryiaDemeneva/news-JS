import { ArticlesResponse } from '../../typescript/ArticlesResponse';
import { SourcesResponse } from '../../typescript/SourcesResponse';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document?.querySelector('.sources')?.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: ArticlesResponse) => {
                this.view.drawNews(data);
            })
        );
        this.controller.getSources((data: SourcesResponse) => {
            this.view.drawSources(data);
        });
    }
}

export default App;
