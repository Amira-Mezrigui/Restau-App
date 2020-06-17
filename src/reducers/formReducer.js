import {GET_USER} from '../actions/types'
import {ADD_USER} from '../actions/types'


const initialUser=[]
export default function formReducer(state=initialUser,action){
    if(action.type ==GET_USER){
        return action.payload
    } 
    if(action.type ==ADD_USER){
        return [...state,action.payload]
    }
    else
    return state
}