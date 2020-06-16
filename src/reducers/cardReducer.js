import {GET_DISHE} from '../actions/types'
import {ADD_DISHE} from '../actions/types'
import {REMOVE_DISHE} from '../actions/types'
import {EDIT_DISHE} from '../actions/types'

const initialMenu=[]
export default function menuReducer(state=initialMenu,action){
    if(action.type ==GET_DISHE){
        return action.payload
    } 
    if(action.type ==ADD_DISHE){
        return [...state,action.payload]
    }
    if(action.type ==REMOVE_DISHE){
        return [...state,action.payload]
    } 
    if(action.type ==EDIT_DISHE){
        return [...state,action.payload]
    }
    else
    return state
}
