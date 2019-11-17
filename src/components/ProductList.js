import React from 'react';

import store from '../stores/productStore';
import Product from './Product';

function ProductList() {
  const products = store.products;

  return (
    <>
      <ul>
          {products.map(product => 
            <li key={product.id}>
              <Product product={product}/>
            </li>
          )}
      </ul>
    </>
  );
}

export default ProductList;
