import { LitElement} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../../store.js';
export class ReduxClass extends connect(store)(LitElement){

}