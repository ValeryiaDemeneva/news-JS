import { ArticlesResponse } from '../../typescript/ArticlesResponse';
import { SourcesResponse } from '../../typescript/SourcesResponse';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document?.querySelector('.sources')?.addEventListener('click', (e: Event) => {
            this.controller.getNews(e, (res: ArticlesResponse) => {
                console.log('a');
                this.view.drawNews(res);
            });
        });

        this.controller.getSources((res: SourcesResponse) => this.view.drawSources(res));
    }
}

export default App;
