import {GET_DISHE} from './types'
import {ADD_DISHE} from './types'
import {REMOVE_DISHE} from './types'
import axios from 'axios'

// GET REQUEST , get menu
export const getToCard =(payload) =>({
    type:GET_DISHE,
    payload
});

export function getFromApi() {
    return (dispatch) =>
      axios.get("http://localhost:3000/card")
      .then((res) =>
        dispatch(getToCard(res.data))
        
      );
  }
  // ADD REQUEST 
  export const addToCard =(payload) =>({
    type:ADD_DISHE,
    payload
});


export function addCardToApi(a) {
    return (dispatch) =>
      axios.post("http://localhost:3000/card",a)
      .then((res) =>
        dispatch(addToCard(res.data),window.location.reload(true))
        
      );
  }
  
   // Delete REQUEST 
   export const removeCard =(payload) =>({
    type:REMOVE_DISHE,
    payload
});

export function removeFromCard(res) {
    return (dispatch) =>
      axios.delete("http://localhost:3000/myMenu/"+res)
      .then((res) =>
        dispatch(removeCard(res.data),window.location.reload(true))
        
      );
  }
  /*
    // EDIT REQUEST 
    export const editMenu =(payload) =>({
      type:EDIT_DISHE,
      payload
  });
  
  export function editToApi(id,res) {
      return (dispatch) =>
        axios.patch("http://localhost:3000/myMenu/"+id,res)
        .then((res) =>
          dispatch(editMenu(res.data),window.location.reload(true))
          
        );
    } */