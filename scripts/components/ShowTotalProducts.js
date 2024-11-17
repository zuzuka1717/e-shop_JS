import {productsCount} from '../DOM.js';


const showTotalProducts = () => {
  let totalProducts = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let productData = JSON.parse(localStorage.getItem(id));
    totalProducts += +productData.count; 
    productsCount.innerHTML = totalProducts;
  }
};


export {showTotalProducts};