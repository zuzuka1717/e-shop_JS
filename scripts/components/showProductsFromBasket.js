import { productsDOM } from '../DOM.js';

const showProductsFromBasket = () => {
  productsDOM.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let productData = JSON.parse(localStorage.getItem(id));
    productsDOM.innerHTML += 
    `<div class='products-item' id=${id}>
    <div class='products-title'>${productData.title}</div>
    <div><img class='products-photo' src=${productData.image} alt='product item'></div>
    <div class='products-price'>${productData.price}$</div>
    <div>Total: ${productData.count}</div>
    <a href='#/card/${id}' class='show-more'>Show more</a>
    </div>`
  }
}

export {showProductsFromBasket};