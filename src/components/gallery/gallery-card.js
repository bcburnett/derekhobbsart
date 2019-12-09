/* eslint-disable require-jsdoc */
/*jshint esversion:6 */
import {LitElement, html, css} from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js';
import {currentCard, displayModal} from './gallery-actions.js'
import { store } from '../../store.js';

export class GalleryCard extends connect(store) (LitElement) {
  static get properties(){
    return {
      obj: {
        type: Object,
        reflect: true,
        attribute: true
      }
    };
  }

  static get styles() {
    return css`
    
    .card{
          display: inline-block;
          margin: 0;
          width: 100%;
          padding-bottom: 20px;
          text-align: center;
      }
      .card:active{
        cursor: grabbing;
      }
       .card:hover{
        cursor: pointer;
      }

      div{
        margin:auto;
      }
      h1{
        position: relative;
        top: -1rem;
        font-size:1.5rem;
        background-color: tan;
        margin:auto;
        width: 90%;
      }
      img {
        width:90%;
        margin-bottom:0;
        padding-bottom:0;
      }
      @media (max-width: 800px) {
        h1{
          font-size:1rem;
      }
    }
      @media (max-width: 1300px) {
        h1{
          font-size:1.5rem;
        }
      }
    `;
  }


  render() {
    return this.obj.text ?
              html`
        <div class="card"
             id=${'id'+this.obj.i}
             @click=${() => this.showModal(this.obj)}>
          <img
            src="${this.obj.background}"
          />
          <h1>${this.obj.text}</h1>

        </div>
       ` : html`<div ></div>`;
  }

  showModal(s){
    store.dispatch(currentCard(s));
    store.dispatch(displayModal('true'));
  }

}

customElements.define('gallery-card',GalleryCard);
