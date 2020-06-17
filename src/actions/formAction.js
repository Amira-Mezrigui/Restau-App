import {GET_USER} from './types'
import {ADD_USER} from './types'

import axios from 'axios'

// GET REQUEST , get list of users
export const getUser =(payload) =>({
    type:GET_USER,
    payload
});

export function getUserFromApi() {
    return (dispatch) =>
      axios.get("http://localhost:3000/profile")
      .then((res) =>
        dispatch(getUser(res.data))
        
      );
  }
  // ADD REQUEST , add a dishe in card
  export const addToCard =(payload) =>({
    type:ADD_USER,
    payload
});


export function addUserToApi(a) {
    return (dispatch) =>
      axios.post("http://localhost:3000/profile",a)
      .then((res) =>
        dispatch(addUser(res.data),window.location.reload(true))
        
      );
  }
