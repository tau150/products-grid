import { combineReducers } from 'redux';
import products  from './products_reducer'
import user  from './user_reducer'


const reducers = combineReducers({
  products,
  user
});

export default reducers;
