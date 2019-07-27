const initalState = {
    login: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const Login = (state = initalState, action) => {
    switch(action.type) {
        case 'GET_LOGIN_FULFILLED': 
        if (typeof action.payload.data === 'object') {
            for (let a = 0; a < Object.keys(action.payload.data).length; a++) {
                localStorage.setItem(Object.keys(action.payload.data)[a], Object.values(action.payload.data)[a])
            }
        }
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                login: action.payload.data
            }
        case 'GET_LOGIN_PENDING':
            
            return {
               ...state,
               isLoading: true,
               isFulFilled: false,
               isRejected:false
            }
        case 'GET_LOGIN_REJECTED':
            
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                        
            }
                default:
                    return state
    }
}
export default Login