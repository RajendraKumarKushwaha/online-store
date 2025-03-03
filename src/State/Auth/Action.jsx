import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"



const registerRequest= () =>({type:REGISTER_REQUEST})
const registerSucess= (user) =>({type:REGISTER_SUCCESS, payload:user})
const registerFailure= (error) =>({type:REGISTER_FAILURE, payload:error})

export const register=(userData)=>async(dispatch)=>{
    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user)
        dispatch(registerSucess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
        
    }

}

const loginRequest= () =>({type:LOGIN_REQUEST})
const loginSucess= (user) =>({type:LOGIN_SUCCESS, payload:user})
const loginFailure= (error) =>({type:LOGIN_FAILURE, payload:error})

export const login=(userData)=>async(dispatch)=>{
    dispatch(loginRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        const user = response.data;
        
        if(user.jwt){
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user)
        dispatch(loginSucess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }

}

const getUserRequest= () =>({type:GET_USER_REQUEST})
const getUserSucess= (user) =>({type:GET_USER_SUCCESS, payload:user})
const getUserFailure= (error) =>({type:GET_USER_FAILURE, payload:error})

export const getUser=()=>async(dispatch)=>{
    dispatch(getUserRequest())

    try {
        const token = localStorage.getItem("jwt");

        if (!token) {
            throw new Error("No token found. Please log in.");
        }
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const user = response.data;
        console.log("user ", user)
        dispatch(getUserSucess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
        
    }

}


export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT, payload:null});
    localStorage.clear()

}