import { html } from 'lit-element';
import { PageViewElement } from '../page-view-element.js';
import gallery from './gallery-reducer.js';
import { store } from '../../store.js';
import './bcb-card';
import './bcb-gallery';
import './gallery-modal1';
store.addReducers({gallery});

class DhArtGallery extends PageViewElement {

    firstUpdated(){
        super.firstUpdated();
        var card = this.shadowRoot.querySelector('bcb-card')

card.addEventListener('bcbcard', e => {
  setTimeout(() => window.scrollTo(0, this.shadowRoot.querySelector('bcb-grid').getBoundingClientRect().top + window.pageYOffset), 0)
})
    }

  render() {
    return html`
    <gallery-modal></gallery-modal>
    <bcb-card></bcb-card>
    <bcb-grid></bcb-grid>
    `;}
}

window.customElements.define('dh-art-gallery', DhArtGallery);
