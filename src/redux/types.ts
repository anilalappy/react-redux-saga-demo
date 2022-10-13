export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED"
export const GET_USERS_FAILED = "GET_USERS_FAILED"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"

export const DELETE_USER_REQUESTED = "DELETE_USER_REQUESTED"
export const DELETE_USER_FAILED = "DELETE_USER_FAILED"
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS"

export const ADD_USER_REQUESTED = "ADD_USER_REQUESTED"
export const ADD_USER_FAILED = "ADD_USER_FAILED"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"

export const GET_USER_REQUESTED = "GET_USER_REQUESTED"
export const GET_USER_FAILED = "GET_USER_FAILED"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"

export const UPDATE_USER_REQUESTED = "UPDATE_USER_REQUESTED"
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"


export type User = {
    id?:number;
    name:string;
    username:string;
    email:string;
    address?:UserAddress;
}
export type UserAddress = {
    city:string;
    zipcode:string
}
