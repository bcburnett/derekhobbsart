/* eslint-disable require-jsdoc */
import {LitElement, html, css} from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from './store.js';

export class BcbHero extends connect(store)( LitElement) {
  static get properties(){
    return {
      
    }
  }
static get styles() {
    return [css`

`]
}
  constructor(){
    super()

  }

  render(){
    return html`
	<h1>bcb-hero</h1>
    `
  }

}

customElements.define('bcb-hero',BcbHero)
