/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* jshint esversion: 6 */
import {connect} from 'pwa-helpers/connect-mixin.js';
import {LitElement, html, css } from 'lit-element';
import {changeGallery} from './gallery-actions';
import {store} from '../../store.js';

export class BcbCard extends connect(store)(LitElement) {

    static get properties() {
        return {
            cardData: Array,
        }
    }

  static get styles() {
    return css`
        :host{
            margin-top:20px;
        }
        .grid{
        display:grid;
        grid-template-columns: auto auto auto;
        grid-gap:20px;
        width: 75vw;
        margin: auto;
        margin-top:20px;
        justify-content: center;
        align-items: center;
        }
        .card{
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: auto;
        height:100%;
        text-align: center;
        width:90%;
        padding:15px;
        margin-bottom:1vh;
        transition: all 500ms cubic-bezier(0.395, 0.060, 0.425, 1.195);
        cursor: pointer;
        background-size: 90% ;
        justify-content: center;
        align-items: center;
        }
        .card:active {
            cursor: grabbing;
        }

        p{
            margin-bottom: 20px;
        }
        h1{
            font-size: 1hw;
            height: fit-content;
            margin-top:0;
        }
        img{
            width: 90% ;
            margin: auto;
            margin-bottom:0;
        }

        @media(max-width: 500px){
        h1 {
            font-size: 1 rem;
            margin-top:0;
        }
        .grid {
            display: flex;
            flex-direction: column;
            grid-gap: 20px;
            justify-content: center;
            align-items: center;
        }
        }

            `;
  }

  render() {
    const loadGallery = (i,s) => {
      store.dispatch(changeGallery(i,s.text))
      this.dispatchEvent(new CustomEvent("bcbcard"))
    }
    return html` 
            <div class="grid">
            ${this.cardData.map((s, i) => s.text ? html`
            <div class="card"
            id=${"id"+ i}
            @click = "${()=>loadGallery(i,s)}">
            <img src="${s.background}" />
            <h4 > ${s.text} </h4>
            </div>` : html`<div > </div>`)} 
            </div> `;
  }

  stateChanged(state) {
      if(!state.gallery)return;
      const app = state.gallery;
      console.log(app)
      if (this.cardData === app.galleryData) return
      this.cardData = app.galleryData;
  }

}
customElements.define('bcb-card', BcbCard);