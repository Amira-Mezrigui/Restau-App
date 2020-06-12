import {GET_MENU} from './types'
import {ADD_MENU} from './types'
import axios from 'axios'
// GET REQUEST , get menu
export const getMenu =(payload) =>({
    type:GET_MENU,
    payload
});

export function getMenuFromApi() {
    return (dispatch) =>
      axios.get("http://localhost:3000/menu")
      .then((res) =>
        dispatch(getMenu(res.data))
        
      );
  }
  // ADD REQUEST 
  export const addMenu =(payload) =>({
    type:ADD_MENU,
    payload
});

export function addToApi(res) {
    return (dispatch) =>
      axios.post("http://localhost:3000/menu",res)
      .then((res) =>
        dispatch(addMenu(res.data))
        
      );
  }