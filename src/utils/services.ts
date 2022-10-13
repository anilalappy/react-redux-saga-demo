import axios from "axios";
import { BASE_URL } from "./constants";

export const getRequest = (endPoint:string) => {
    return axios.get(`${BASE_URL}${endPoint}`)
        .then(res => res.data)
        .catch(err => {
            throw err.response.data
        }) 
}
export const postRequest = (params:any) => {
    return axios.post(`${BASE_URL}${params.endPoint}`,params.user)
        .then(res => res.data)
        .catch(err => {
            throw err.response.data
        }) 
}
export const putRequest = (payload:any) => {
    return axios.put(`${BASE_URL}${payload.endPoint}/${JSON.parse(payload.param).id}`,payload.param)
        .then(res => res.data)
        .catch(err => {
            throw err.response.data
        }) 
}
export const deleteRequest = (params:any) => {
    return axios.delete(`${BASE_URL}${params.endPoint}/${params.id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            throw err.response.data
        }) 
}

