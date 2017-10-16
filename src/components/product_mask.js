import React from 'react';
import coin from "../assets/images/coin.png";

const ProductMask = (props) => {

    return(
    
      <div className='container-mask'>
            <p> <span><img className='img-fluid coin-img' src={coin} alt=""/></span> { props.product.price}</p>
            <a href="#">CANJEAR AHORA</a>
      </div>
    )

}

export default ProductMask
