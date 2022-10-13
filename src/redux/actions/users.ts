import { User } from './../types';
import * as type from "../types";

export function getUsers(users:User[]){
    return {
        type:type.GET_USERS_REQUESTED,
        payload:users
    }
}
export function deleteUser(user:any,users:any){
    return {
        type:type.DELETE_USER_REQUESTED,
        user,
        users
    }
}

export function addUser(user:any,users:any){
    return {
        type:type.ADD_USER_REQUESTED,
        user,
        users
    }
}
export function updateUser(user:any){
    return {
        type:type.UPDATE_USER_REQUESTED,
        user
    }
}
export function getUserDetail(id:number){
   
    return {
        type:type.GET_USER_REQUESTED,
        id
    }
}
