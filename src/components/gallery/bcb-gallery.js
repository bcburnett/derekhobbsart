/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* jshint esversion: 6 */

import { LitElement, html, css } from 'lit-element';
import './gallery-card.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
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
    return [css`
      .container{
        margin:auto;
        text-align:center;
      }
      .grid{
        column-width: 350px;
        width: 80%;
      }
      .card{
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          background-color: beige;
          display: inline-block;
          margin: 0 0 1em;
          width: 100%;
          overflow:hidden;
        border:2px solid black;
        border-radius: 10px;
      }
      .card:active{
        cursor: grabbing;
      }


      div{
        margin:auto;
        
      }
      h1{
        font-size:1hw;
        margin:auto;
      }
      img {
        width:90%;
        margin-top:20px;
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
    <h1>${this.title}</h1>
    <div class="grid">
      ${this.cardData[this.gallery].map((s,i) =>{
        return html`<gallery-card obj="${JSON.stringify({...s})}" id=${'id'+i}></gallery-card>`
         })}
    </div>
    </div>`;
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
