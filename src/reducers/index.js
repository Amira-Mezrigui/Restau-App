import menuReducer from './menuReducer'
import cardReducer from './cardReducer'
import formReducer from './formReducer'

import {combineReducers} from 'redux'
const allReducers = combineReducers({
    menu: menuReducer,
    card:cardReducer,
    user:formReducer
  });
  
  export default allReducers;