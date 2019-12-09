/*jshint esversion: 6 */
import {
  CHANGE_GALLERY,
  CURRENT_CARD,
  DISPLAY_MODAL
} from './gallery-actions.js';

import { store } from '../../store.js';
import { artData } from './art-data.js';
import { galleryData } from './gallery-data.js';

  const INITIAL_STATE ={
  gallery: 'none',
  card:{},
  showModal:false,
  title: '',
  galleryData,
  artData,
  uuid: JSON.parse(localStorage.getItem("store")) ||  uuidv1(),
};
console.log(INITIAL_STATE);
export const gallery = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CHANGE_GALLERY:
      return{
        ...state,
        gallery: action.gallery,
        title:action.title,
      }

    case CURRENT_CARD:
        return{
          ...state,
          card: action.card,
        }

    case DISPLAY_MODAL:
        return{
          ...state,
          showModal: action.b,
        }

    default:
      return state;
  }
};

export default gallery;
