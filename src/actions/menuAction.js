import {GET_MENU} from './types'
import axios from 'axios'

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