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
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: auto;
        text-align: center;
        width:90%;
        padding:15px;
        margin-bottom:1vh;
        transition: all 500ms cubic-bezier(0.395, 0.060, 0.425, 1.195);
        cursor: pointer;
        background-size: 90% ;
        justify-content: center;
        align-items: center;

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
        top: -1rem;
        font-size:1.5rem;
        background-color: tan;
        margin:auto;
        margin-top:-10px;
        max-width: 400px;
      }
      img {
        width: 300px;
        margin-bottom:0;
        padding-bottom:0;
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
    store.dispatch(displayModal(true));
  }

}

customElements.define('gallery-card',GalleryCard);
