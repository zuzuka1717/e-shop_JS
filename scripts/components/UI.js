import { productsDOM } from '../DOM.js';

class UI {
  createUI(data) {
    productsDOM.innerHTML = '';
    data.forEach(item => productsDOM.innerHTML += 
    `
    <div class='products-item' id=${item.id}>
    <h4 class = 'products-title'>${item.title}</h4>
    <img class = 'products-photo' src = ${item.image} alt = 'products-photo'}>
    <div class = 'products-price'><span>Price:</span> ${item.price}$ </div>
    <a href = '#/card/${item.id}' class='show-more'> Show more </a>
    </div>
    `
  )}
}

let ui = new UI();

export {ui}