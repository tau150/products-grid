import React, {Component} from 'react';
import upIcon from "../assets/images/up-icon.png";
import downIcon from "../assets/images/down-icon.png";
import bagIcon from "../assets/images/bag-icon.png";
import circle from "../assets/images/circle.png";
import ProductsList from "./products_list"



class Grid extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      available_money: 1330

    }

    this.sortUp.bind(this)
  }


  componentWillMount() {

  fetch("http://localhost:8000/products")

	.then((res) => {
    if(res.status === 200) return res.json();
    else return { error: 'there was an error with response' }
    })
    .then((products) => {
        this.setState({ products: products })

  })
}


sortUp(){
  let sortedUpProducts =   this.state.products.sort(function(a, b){
     var keyA = a.price
     var keyB = b.price
     // Compare the 2 dates
     if(keyA < keyB) return -1;
     if(keyA > keyB) return 1;
     return 0;
  });
  this.setState({
    products: sortedUpProducts
  })
}


sortDown(){
  let sortedDownProducts =   this.state.products.sort(function(a, b){
     var keyA = a.price
     var keyB = b.price
     // Compare the 2 dates
     if(keyB < keyA) return -1;
     if(keyB > keyA) return 1;
     return 0;
  });
  this.setState({
    products: sortedDownProducts
  })
}


  render(){

    return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 container-header-grid">
          <div>
            <h3 className="productos-number">{ this.state.products.length} productos</h3>
          </div>
          <div>
            <img className ='grid-icon'  src={upIcon} onClick={this.sortUp.bind(this)} alt="" />
            <img className ='grid-icon'  src={downIcon} onClick={this.sortDown.bind(this)} alt="" />
            <img className ='grid-icon'  src={bagIcon} alt="" />
          </div>
        </div>
      </div>
      <ProductsList products={this.state.products} available_money= {this.state.available_money} />
    </div>
    )
  }
}


export default Grid
