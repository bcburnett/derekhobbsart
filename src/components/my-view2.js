/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

class MyView2 extends connect(store)(PageViewElement) {
  static get properties() {
    return {

    };
  }

  render() {
    return html`
<style type="text/css">
    p{ 
      font-family: "Roboto","Arial", sans-serif; 
      font-size: 12pt;
      padding:10px;
  }

  img{
    max-width:200px;
    height:auto;
      padding:18px;
      float: none;
      display:block;
      margin:auto;
      border-radius:50%;
      shape-outside: circle(50%);
  }

  section{
    width: 100%;
    margin: auto;
  }
  @media(min-width: 500px){  
img{
  float: left;
  width:300px;
}
  section{
    width: 80vw;
    margin: auto;
  }

p{
  font-size: 18pt;
}

  }
	</style>
      <section>
<img src="images/Derek.webp"/>
          <p> 
Hi I’m Derek Hobbs, I was born in New London, CT. and I am  now
a Madison, WI based artist, living with my wife and 3 beautiful children. I
am always discovering, always experimenting and never settling. 
</p>

<p >
I am mainly self taught, but draw from my diverse educational background, including, study of Graphic Design at Madison College, and my degrees in Natural Resources and Web Software Development to inform the way I work.
</p>

<p >
My work is underpinned by my love of God, nature, the environment and the human condition. 
</p>

<p>
Some of my series such as Alaskan Landscape, and Endangered Animals, border on realistic representation and a more crude realistic approach caring less about the details to probe more of the essence of the subject. 
</p>

<p >	
Working in acrylic, oil, and mixed media, I bring my ideas and emotions to life on canvas and wood panel. I am influenced by many sources, including, my kids, music, The Great Masters, and life; its like putting everything into a coffee or tea fueled blender, to tap my subconscious where effulgent creations manifest themselves into this world.
</p>

<p >
My artwork has been featured in collaborative art shows at Madison’s Art. In, various local coffee shops and at the Alicia Ashman Library in Middleton, WI. While living in Indiana, I displayed my work at local coffee shops and a local pottery shop called the Artist Within. While there I created a street art piece along the Greenway. During my time in Fayetteville, NC I created a mural of a beach theme for a local Beach Bingo business. Growing up in CT, I worked under John DeNardis, an artist who builds custom store front displays for F.A.O. Schwarz in NYC. In the 90’s I worked as a stenciler work for the Garde Arts Theater renovation project. My work has been shown at the local Hygienic Art Gallery during their annual everyone is an artist shows. 
</p>
  </section>
    `;
  }

  constructor(){
    super();
    window.scrollTo(0,0);
  }


}

window.customElements.define('my-view2', MyView2);
