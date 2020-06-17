import {GET_DISHE} from './types'
import {ADD_DISHE} from './types'
import {REMOVE_DISHE} from './types'
import {EDIT_DISHE} from './types'
import axios from 'axios'

// GET REQUEST , get card
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
  // ADD REQUEST , add a dishe in card
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
  
   // Delete REQUEST , remove from card
   export const removeCard =(payload) =>({
    type:REMOVE_DISHE,
    payload
});

export function removeFromCard(res) {
    return (dispatch) =>
      axios.delete("http://localhost:3000/card/"+res)
      .then((res) =>
        dispatch(removeCard(res.data),window.location.reload(true))
        
      );
  }
  
    // update quantity of dishe in card
    export const editQ =(payload) =>({
      type:EDIT_DISHE,
      payload
  });
  
  export function editQuantity(id,res) {
      return (dispatch) =>
        axios.patch("http://localhost:3000/card/"+id,res)
        .then((res) =>
          dispatch(editQ(res.data),window.location.reload(true))
          
        );
    } 