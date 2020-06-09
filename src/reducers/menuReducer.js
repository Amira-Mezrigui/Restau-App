import {GET_MENU} from '../actions/types'


const initialMenu=[]
export default function menuReducer(state=initialMenu,action){
    if(action.type ==GET_MENU){
        return action.payload
    } 
    return state
}

