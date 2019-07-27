import axios from 'axios'

export const register = (data) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post(`http://192.168.6.104:8082/login/post`, data)
    }
}

export const login = (data) => {
    return {
        type: 'GET_LOGIN',
        payload: axios.post(`http://192.168.6.104:8082/login/login`,data)
    }
}