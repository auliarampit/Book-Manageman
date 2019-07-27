
const initialState = {
    bookList: [],
    listPinjam: [],
    isLoading: false,
    isFulFilled: false,
    isRejected: false
};

const book = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOK_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'GET_BOOK_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'GET_BOOK_FULFILLED':
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    bookList: action.payload.data,
                }

                case 'GET_PINJAM_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'GET_PINJAM_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'GET_PINJAM_FULFILLED':
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    listPinjam: action.payload.data,
                }
  
        case 'POST_BOOK_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'POST_BOOK_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'POST_BOOK_FULFILLED':
                state.bookList.push(action.payload.data)
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                }

                case 'POST_PINJAM_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'POST_PINJAM_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'POST_PINJAM_FULFILLED':
                state.bookList.push(action.payload.data)
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                }

            case 'DELETE_BOOK_PENDING':
                return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'DELETE_BOOK_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'DELETE_BOOK_FULFILLED':
                console.log(action.payload.data)
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    bookList: state.bookList.filter(book => book.idBook !== action.payload.data.result.idBook)

                }

            case 'UPDATE_BOOK_PENDING':
                return{
                ...state,
                isLoading: true,
                isFulFilled: false,
                isRejected: false,
            };
            case 'UPDATE_BOOK_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
            };
            case 'UPDATE_BOOK_FULFILLED':
                    console.log(action.payload.data)
                const ayoUpdate = state.bookList.filter(item => {; return (  Number (item.idBook) !== Number
                    (action.payload.data.result.idBook))})
                return{
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    bookList: ayoUpdate

                }

                // case 'UPDATE_PINJAM_PENDING':
                //     return{
                //     ...state,
                //     isLoading: true,
                //     isFulFilled: false,
                //     isRejected: false,
                // };
                // case 'UPDATE_PINJAM_REJECTED':
                //     return{
                //         ...state,
                //         isLoading: false,
                //         isRejected: true,
                // };
                // case 'UPDATE_PINJAM_FULFILLED':
                //     // const ayoUpdate = state.bookList.filter(item => {return (Number (item.idBook) !== Number
                //     //     (action.payload.data.result.idBook))})
                //     const update = state.listPinjam.map(list => 
                //         (listPinjam.idBook == action.payload.data.listPinjam[0].idBook) ? 
                //             action.payload.data.listPinjam[0] : list)
                //     return{
                //         ...state,
                //         isLoading: false,
                //         isFulFilled: true,
                //         listPinjam: update
                //     }

            default:
                return state;
    }
};

export default book;