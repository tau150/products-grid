import React from 'react';
import ProductItem from './product_item'


const ProductsList = (props) => {
    const productsItems = props.products.map((product) => {
        return <ProductItem key={product.id} product={product} />

            });

              return(
                <div className="container">
                  <div className="row products-list">
                      {productsItems}
                  </div>
                </div>
                )
};

export default ProductsList;
