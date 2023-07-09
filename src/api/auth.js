import axios from 'axios'
import {storeToRefs} from "pinia";
import {useUserStore} from "../stores/user";
const token = localStorage.getItem('token')
const instance =  axios.create({
    baseURL: 'http://spoti/api/',
    withCredentials: true,
    headers:{
        Accept:'application/json',

    }
})
export default instance
