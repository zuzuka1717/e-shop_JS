import {BASE_URL} from '../api.js';
import {ui} from './UI.js'
import {getProductsById} from '../components/getProducts.js'


class Products {
  getProducts = async () => {
    try {
    const result = await fetch(BASE_URL);
    const data = await result.json();
    ui.createUI(data)
    let productCard = document.querySelectorAll('.products-item');
    productCard.forEach((product) => product.addEventListener('click', () => 
    getProductsById(product.id)));
    } catch (err) {
      console.log(err);
    }
  };
}


let products = new Products();

export { products }