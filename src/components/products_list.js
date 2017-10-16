import React from 'react';
import ProductItem from './product_item'

const ProductsList = (props) => {

const ProductsList = props.products.map((product)=>{
  return <ProductItem product={product} key={product.id} available_money={props.available_money} />
})

    return(
      <div className="row products-list">
              {ProductsList}
      </div>
    )

}


export default ProductsList
