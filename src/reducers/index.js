import menuReducer from './menuReducer'
import cardReducer from './cardReducer'

import {combineReducers} from 'redux'
const allReducers = combineReducers({
    menu: menuReducer,
    card:cardReducer
  });
  
  export default allReducers;