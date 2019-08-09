import axios from 'axios'

export const register = (data) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/login/post`, data)
    }
}

export const login = (data) => {
    return {
        type: 'GET_LOGIN',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/login/login`,data)
    }
}