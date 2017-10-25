

const products = (state= {products:[]}, action) =>{
  switch(action.type){

    case "GET_PRODUCTS":

       return {...state, products: action.products}

    default:
        return state;
  }


}

export default products;
