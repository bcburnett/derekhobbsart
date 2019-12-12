/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* jshint esversion: 6 */

import { LitElement, html, unsafeCSS } from 'lit-element';
import './gallery-card.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import {currentCard, displayModal} from './gallery-actions.js'
// This element is connected to the Redux store.
import { store } from '../../store.js';

export class BcbGrid extends connect(store)(LitElement) {


  static get properties() {
    return {
      gallery: {
        type: String,
        reflect: true,
        attribute: true
      },
      title: String,
      cardData: Array
    }
  }
  static get styles() {
    return [unsafeCSS/*css*/`
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
        h4{
          margin-left: 40%;
        }
        h5{
            height: fit-content;
            margin-top:0;
        }
        img{
            width: 90% ;
            margin: auto;
            margin-bottom:0;
        }

        @media(max-width: 500px){
        h5 {
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
    `]
  }

  constructor(){
    super();
    this.gallery = '0';
  }


  render() {
    console.log(this)
    if(this.gallery ==="none") return
    return html`
    <div class="container">
    <h4>${this.title}</h4>
    <div class="grid">
      ${this.cardData[this.gallery].map((s) =>{
        return html`
        
        <div class="card"
             @click=${() => this.showModal(s)}>
          <img
            src="${s.background}"
          />
          <h5>${s.text}</h5>

        </div>
        
        `
         })}
    </div>
    </div>`;
  }
  showModal(s){
    store.dispatch(currentCard(s));
    store.dispatch(displayModal(true));
  }

  stateChanged(state) {
    console.log(state)
    const app = state.gallery;
  if(this.gallery !== app.gallery) this.gallery = app.gallery;
  if(this.title !== app.title) this.title = app.title;
  if(this.cardData !== app.artData) this.cardData = app.artData
}


}

customElements.define('bcb-grid', BcbGrid);
