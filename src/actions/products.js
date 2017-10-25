

export function getProducts(products) {

    return {
        type: "GET_PRODUCTS",
        products

    };
}


export function fetchProducts() {

    return (dispatch)=>{
      fetch("http://localhost:8000/products")

      .then((res) => {
        if(res.status === 200) {
          return res.json();
        }

        else return { error: 'there was an error with response' }
        })

        .then((res) => {

            dispatch( getProducts(res) )
      });
    }
}
