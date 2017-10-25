// assets
import upIcon from "../assets/images/up-icon.png";
import downIcon from "../assets/images/down-icon.png";
import bagIcon from "../assets/images/bag-icon.png";
///


import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductsList from "../components/products_list";
import { fetchProducts } from '../actions/products';



class Grid extends Component{

  constructor (props) {
    super(props);

    this.state = {
      criteria: 'id',
      up: true
    }
  }

  componentWillMount(){
    this.props.fetchProducts();
  }



  sortListBy = (products, criteria) => {
    if( this.state.up ){
      return products.sort( (a, b) => a[criteria] > b[criteria])
    }else{
      return products.sort( (a, b) => a[criteria] < b[criteria])
    }

  }


  render(){

    const {products} = this.props
    const {criteria} = this.state

    if(!products.length) return null;

    const sortedProducts = this.sortListBy(products, criteria)


    return(

      <div className="container">
        <div className="row">
          <div className="col-md-12 container-header-grid">
            <div>
              <h3 className="productos-number"> { this.props.products.length } productos</h3>
            </div>
            <div>
            <img className ='grid-icon'  src={upIcon}  onClick={ () => this.setState({ criteria: 'price', up: true })} alt="" />
            <img className ='grid-icon'  src={downIcon} onClick={ ()=> this.setState({ criteria: 'price', up: false})} alt="" />
            <img className ='grid-icon'  src={bagIcon} alt="" />
            </div>
          </div>
        </div>

        <ProductsList products= { sortedProducts } />
      </div>
      )
  }

}

const mapStateToProps= (state)=>{

  return {
    products: state.products.products
  }
}

const mapDispatchToProps = (dispatch) => {
      return bindActionCreators(
        {
          fetchProducts: fetchProducts,
        }, dispatch);

  };


export default connect(mapStateToProps, mapDispatchToProps )(Grid);
