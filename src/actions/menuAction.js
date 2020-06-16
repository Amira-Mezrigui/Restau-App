import {GET_MENU} from './types'
import {ADD_MENU} from './types'
import {REMOVE_MENU} from './types'
import {EDIT_MENU} from './types'
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

export function addToApi(a) {
    return (dispatch) =>
      axios.post("http://localhost:3000/menu",a)
      .then((res) =>
        dispatch(addMenu(res.data))
        
      );
  }
  
   // Delete REQUEST 
   export const removeMenu =(payload) =>({
    type:REMOVE_MENU,
    payload
});

export function removeFromApi(res) {
    return (dispatch) =>
      axios.delete("http://localhost:3000/menu/"+res)
      .then((res) =>
        dispatch(removeMenu(res.data))
        
      );
  }
    // EDIT REQUEST 
    export const editMenu =(payload) =>({
      type:EDIT_MENU,
      payload
  });
  
  export function editToApi(id,res) {
      return (dispatch) =>
        axios.patch("http://localhost:3000/menu/"+id,res)
        .then((res) =>
          dispatch(editMenu(res.data),window.location.reload(true))
          
        );
    }