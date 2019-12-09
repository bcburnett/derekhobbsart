/*jshint esversion: 6 */
export const CHANGE_GALLERY = 'CHANGE_GALLERY';
export const CURRENT_CARD = 'CURRENT_CARD';
export const DISPLAY_MODAL = 'DISPLAY_MODAL';


/**
 * 
 * @param {number} gallery 
 * @param {string} title 
 */
export const changeGallery = (gallery,title) => {
  return {
    type: CHANGE_GALLERY,
    gallery,
    title
  };
};

/**
 * 
 * @param {Object} card 
 */
export const currentCard = (card) => {
  return {
    type: CURRENT_CARD,
    card,
  };
};

/**
 * 
 * @param {string} b 
 */
  export const displayModal = (b) => {
    return {
      type: DISPLAY_MODAL,
       b,
    };
  };

