import React from 'react';

import { Link } from 'react-router-dom';

function Product({ product }) {

  return (
      <Link to={`/products/${product.id}`}>
        {product.name} {product.price}원
        <img
          src={product.imageUrl}
          alt=""
          width="20%"
        />
      </Link>
  );
}

export default Product;
