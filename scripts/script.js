import { select, productsCount } from './DOM.js';
import { products } from './components/Products.js';
import { categoryList } from './components/CategoryList.js';
import { productsFromCategory } from './components/ProductsFromCategory.js';
import { showProductsFromBasket } from './components/showProductsFromBasket.js';
import { showTotalProducts } from './components/ShowTotalProducts.js';


  select.addEventListener('change', function() {
    if (select.value === 'all') {
      products.getProducts();
    } else {
      productsFromCategory.getProductsFromCategory(select.value);
    }
  });


  document.addEventListener('DOMContentLoaded', function async() {
    products.getProducts();
    categoryList.getCategories();

    if (localStorage.length) {
      showTotalProducts();
    }
    productsCount.addEventListener('click', () => {
      showProductsFromBasket();
    })

  });