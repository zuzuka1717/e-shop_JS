import {BASE_URL} from '../api.js';
import { ui } from './UI.js';
import {getProductsById} from '../components/getProducts.js'


class ProductsFromCategory {
  getProductsFromCategory(value){
    fetch(`${BASE_URL}/category/${value}`)
    .then(res =>res.json())
    .then(data => {
      ui.createUI(data);
      let productCard = document.querySelectorAll('.products-item');
      productCard.forEach((product) => product.addEventListener('click', () => 
      getProductsById(product.id)));
    })
    .catch((err) => console.log('error', err))
  };  
}

let productsFromCategory= new ProductsFromCategory();

export {productsFromCategory}