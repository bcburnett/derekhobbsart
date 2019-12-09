/* eslint-disable require-jsdoc */
import { html, css } from 'lit-element/lit-element.js'
import { ReduxClass } from './reduxclass.js'
import { displayModal, currentCard } from './gallery-actions';
import { store } from '../../store.js';


export class GalleryModal extends ReduxClass {
  static get properties() {
    return {
      obj: {
        type: Object,
        reflect: true,
        attribute: true
      },
      title: String,
      image: String,
      html: Object,
      etsy: String,
      instagram: String,
      modal: Object,
      span: Object,
    }
  }

  static get styles() {
    return css`
    .myModal{
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    .flex{
      display:flex;
      flex-direction:row;
    }

    /* The Modal (background) */
.modal {
  display: none;
  /*Hiddenbydefault*/position: fixed;
  /*Stayinplace*/z-index: 100;
  /*Sitontop*/left: 0;
  top: 0;
  width: 100%;
  /*Fullwidth*/height: 100%;
  /*Fullheight*/overflow: auto;
  /*Enablescrollifneeded*/background-color: rgb(0,0,0);
  /*Fallbackcolor*/background-color: rgba(0,0,0,0.4);
  /*Blackw/opacity*/opacity:1;
  transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 20px auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.back{
  float:left;
}

.foreward{
  float: right;
}

img{
  max-width:60vw;
  height: min-content;
}

@media (max-width: 800px) {
  .flex{
    flex-direction:column;
  }

  img{
    width: 90%;
    margin:auto;
  }
}

    `
  }

  showCard(card) {
    if (!card || Object.entries(card).length === 0) return;
    this.title = card.text;
    this.image = card.background;
    this.html = html(card.link.strings, ...card.link.values);
    this.etsy = card.etsy;
    this.instagram = card.instagram;
  }

  show() {
    this.modal.style.display = "block";
  }

  hide() {
    this.modal.style.display = 'none'
  }

  back() {
    const len = (this.artData[this.gallery].length - 1)
    const index = (this.card.i == 0) ? len : this.card.i - 1
    store.dispatch( currentCard(this.artData[this.gallery][index]))
  }

  foreward() {
    const len = (this.artData[this.gallery].length - 1)
    const index = (this.card.i == len) ? 0 : this.card.i + 1
    store.dispatch( currentCard(this.artData[this.gallery][index]))
  }

  firstUpdated() {
    this.modal = this.shadowRoot.querySelector('#myModal')
    this.span = this.shadowRoot.querySelector('#close')
    this.modal.style.display = 'none'
  }

  render() {
    return html`
      <!-- The Modal -->
  <div id="myModal" class="modal" >
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" id="close" @click="${() => store.dispatch(displayModal('false'))}">&times;</span>
      <br>
  <div class="myModal">
        <button @click="${() => this.back()}" class="back">&lt; Previous</button>
        <button @click="${() => this.foreward()}" class="foreward">Next &gt;</button>
    <h1>${this.title}</h1>
    <div class="flex">
      <img src="${this.image}" alt="">
      <h3>
        ${this.html} 
        <br />
          <a href="${this.etsy}"
          target="blank"
          style="margin-bottom:20px;">${this.etsy ? 'View at Etsy' : ''}</a>
        <br>
          <a href="${this.instagram}"
            target="blank"
            style="margin-bottom:20px;">${this.instagram ? 'View at Instagram' : ''}</a>
          <br>
            ${this.etsy || this.instagram ? 'Opens in new page.' : ''}
            <br>
              &nbsp;
      </h3>
    </div>
  </div>
      </div>
  
  </div>
    `
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    const app = state.gallery
    console.log(app);
    if (this.artData !== app.artData) this.artData = app.artData;
    if (this.gallery !== app.gallery) this.gallery = app.gallery;
    if (this.card !== app.card) {
      this.card = app.card;
      this.showCard(this.card);
    }
    if (!app.card || Object.entries(app.card).length === 0) return;

    if (this.showModal !== app.showModal) {
      this.showModal = app.showModal;
      if (app.showModal === 'true') {
        this.showCard(app.card);
        this.show()
        return
      }
      if (app.showModal === 'false') this.hide();
    }

  }

}

customElements.define('gallery-modal', GalleryModal)
