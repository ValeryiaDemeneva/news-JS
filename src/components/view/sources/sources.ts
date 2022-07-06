import { Source } from './../../../typescript/SourcesResponse';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item-name');
            sourceItem?.setAttribute('data-source-id', item.id || '');
            const sourceItemName = sourceClone.querySelector<HTMLElement>('.source__item');
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }

            fragment.append(sourceClone);
        });

        const sourcesWrapper = document.querySelector<HTMLElement>('.sources');
        if (sourcesWrapper) {
            sourcesWrapper.innerHTML = '';
            sourcesWrapper.append(fragment);
        }
    }
}

export default Sources;
