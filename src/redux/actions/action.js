import { REGISTER_START,REGISTER_SUCCESS,REGISTER_FAILED,GOOGLE_LOGIN_START,GOOGLE_LOGIN_SUCCESS,GOOGLE_LOGIN_FAILED,LOGOUT_START,LOGOUT_SUCCESS,LOGOUT_FAILED,SET_USER } from "./actionTypes"
import { app,db } from "../../firebase";
import { getDatabase, ref, set,onValue } from "firebase/database";

export const loadData=()=>{
    console.log(db);
    return{
        type: "default"
    }
}
export const registerStart=()=>{
    console.log(app);
    return{
        type: REGISTER_START
    }
}

export const registerSuccess=()=>{
    return {
        type:REGISTER_SUCCESS
    }
}

export const registerFailed=()=>{
    return {
        type:REGISTER_FAILED
    }
}
