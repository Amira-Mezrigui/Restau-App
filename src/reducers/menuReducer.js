import {GET_MENU} from '../actions/types'
import {ADD_MENU} from '../actions/types'
import {REMOVE_MENU} from '../actions/types'

const initialMenu=[]
export default function menuReducer(state=initialMenu,action){
    if(action.type ==GET_MENU){
        return action.payload
    } 
    if(action.type ==ADD_MENU){
        return [...state,action.payload]
    }
    if(action.type ==REMOVE_MENU){
        return [...state,action.payload]
    } 
    else
    return state
}
