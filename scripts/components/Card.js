import {productsDOM} from '../DOM.js';
import { showTotalProducts } from './ShowTotalProducts.js';


class CardUI {

  createCardUI(product) {
    productsDOM.innerHTML = '';
    productsDOM.innerHTML = `
    <div class='product-card'>
    <a class='main-page-link' href='/'>Main page</a>
    <div class='product-title'>${product.title}</div>
    <div class='product-description'>${product.description}</div>
    <img class='product-image' src=${product.image} alt='product-image' >
    <div class='product-price-container'>
    <div class='product-price'>${product.price}$</div>
    <div class='basket-buttons-container'>
    <button class='add-product basket-button'>Add</button>
    <button class='delete-product basket-button'>Delete</button>
    </div>
    </div>
    </div>
    `
  

let addProducts = document.querySelector('.add-product');


addProducts.addEventListener('click', () => {
let currentProduct = JSON.parse(localStorage.getItem(product.id));



if (currentProduct) {
  localStorage.setItem(product.id, JSON.stringify({title: product.title, count: currentProduct.count += 1, image: product.image, price: product.price}));
} else {
  let count = 0;
  localStorage.setItem(product.id, JSON.stringify({title: product.title, count: count += 1, image: product.image, price: product.price}));
}

showTotalProducts();

});



let deleteProducts = document.querySelector('.delete-product');


deleteProducts.addEventListener('click', () => {
  let currentProduct = JSON.parse(localStorage.getItem(product.id));
  if (currentProduct.count > 0) {
localStorage.setItem(product.id, JSON.stringify({title: product.title, count: currentProduct.count -= 1}));
  }

  if (currentProduct.count < 1) {
    localStorage.removeItem(product.id)
  }

  showTotalProducts();

});




}
}

let cardUI = new CardUI();

export {cardUI}