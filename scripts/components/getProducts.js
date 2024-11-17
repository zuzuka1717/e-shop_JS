import {BASE_URL} from '../api.js';
import { cardUI } from './Card.js';


const getProductsById = async (id) => {
  let res = await fetch(BASE_URL + `/${id}`);
  let product = await res.json();
  cardUI.createCardUI(product);
};


export {getProductsById}
