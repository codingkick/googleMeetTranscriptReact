import { REGISTER_START,REGISTER_SUCCESS,REGISTER_FAILED,GOOGLE_LOGIN_START,GOOGLE_LOGIN_SUCCESS,GOOGLE_LOGIN_FAILED,LOGOUT_START,LOGOUT_SUCCESS,LOGOUT_FAILED,SET_USER } from "../actions/actionTypes"

const initialState = {
    email:"test1@gmail.com",
    loading:false,
    error:false
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case GOOGLE_LOGIN_START:
        case REGISTER_START:
            return {...state,loading:true}
        case GOOGLE_LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {...state,loading:false,error:false,email:action.payload.email}
        case GOOGLE_LOGIN_FAILED:
        case REGISTER_FAILED:
            return {...state,loading:false,error:true,email:null}
        case LOGOUT_FAILED:
            return {...state,email:null}
        case LOGOUT_START:
            return {...state,loading:true}
        case LOGOUT_SUCCESS:
            return {...state,loading:false,email:null}
        case SET_USER:
            return {...state,email:action.payload.email}
        default:
            return state;
    }
}