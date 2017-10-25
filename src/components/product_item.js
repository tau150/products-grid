import React, {Component} from 'react';
import bagIconWhite from "../assets/images/bag-icon-white.png";
import coin from "../assets/images/coin.png";
import ProductMask from "./product_mask";
import { connect } from 'react-redux';




class ProductItem extends Component  {


render(){

  if (this.props.product.discount) {
    this.discountMessage = `${ this.props.product.discount }% OFF en `
  }

  if (this.props.available_money >= this.props.product.price) {
    this.swap_icon = (
      <div className='container-bag-product'>
        <img src={bagIconWhite} className='available_product' alt=""/>
      </div>
    )

  }else{
    this.swap_icon = (
      <div className='container-money-left-product'>
        <p>TE FALTAN <span><img className='img-fluid coin-img' src={coin} alt=""/></span> { this.props.product.price - this.props.available_money}</p>
      </div>
    )
  }

  let available=false;

  if( this.props.available_money >= this.props.product.price ){
    available=true;
  }


  return(

      <div className="col-12 col-sm-12 col-md-6 col-lg-3" >
        <div className='container-product'>
         <div className='container-img-product'>
            { available ? <ProductMask product={this.props.product} /> : null }
            <img className='img-fluid img-product' src={this.props.product.src} alt=""/>
           </div>
            { this.swap_icon}
            <h6>  {this.discountMessage}  {this.props.product.name} </h6>
            <p className='category'> {this.props.product.category } </p>
        </div>
      </div>

  )

}


}


const mapStateToProps= (state)=>{

  return {
    available_money: state.user.available_money

  }

}



export default  connect(mapStateToProps ) (ProductItem);
