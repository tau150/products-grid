

const user = (state= {username:'Santi',   available_money: 2132}, action) =>{


    switch(action.type){

      case "GET_USER":

         return state;


      default:
          return state;
    }


  return state;
}


export default user;
