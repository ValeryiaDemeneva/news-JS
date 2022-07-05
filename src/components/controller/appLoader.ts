import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '34c97d7264bd416db02977d8737c10af', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
