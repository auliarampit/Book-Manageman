import axios from "axios";

export const getBook = () => {
    return {
        type: 'GET_BOOK',
        payload: axios.get(`https://library-backend-ar.herokuapp.com/nameBook` ,{
            headers: {
                authorization: 'x-header',
                
            }
        }),
    };
};

export const getPinjam = (idBook) => {
    return {
        type: 'GET_PINJAM',
        payload: axios.get(`https://library-backend-ar.herokuapp.com/Pinjam/${idBook}`, {
            headers: {
                authorization: 'x-header'
            }
        })

    };
};

export const Pinjam = (idCard) => {
    return {
        type: 'PINJAM',
        payload: axios.get(`https://library-backend-ar.herokuapp.com/Pinjam/?idCard=${idCard}`, {
            headers: {
                authorization: 'x-header'
            }
        })

    };
};

export const postBook = (formData) => {
    return {
        type: 'POST_BOOK',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/nameBook`,formData, {
            headers: {
                authorization: 'x-header',
                'x-control-user' : localStorage.iduser,
                'x-access-token' : `bearer ${localStorage.token}`,
                
            }
        })
    }
}

export const postPinjam = (data) => {
    return {
        type: 'POST_PINJAM',
        payload: axios.post(`https://library-backend-ar.herokuapp.com/Pinjam/post`,data),
    }
}

export const deleteBook = (idBook, token, iduser) => {
    console.log(idBook,token,iduser)
    return {
        type: 'DELETE_BOOK',
        payload: axios.delete(`https://library-backend-ar.herokuapp.com/nameBook/${idBook}`,null,{
            headers: {
                authorization: 'x-header',
                'x-control-user': localStorage.iduser,
                'x-access-token': `bearer ${localStorage}`
            },
        })
    }
}

export const updateBook = (data,id) => {
    return {
        type: 'UPDATE_BOOK',
        payload: axios.patch(`https://library-backend-ar.herokuapp.com/nameBook/${id}`,data, {
            headers: {
                authorization: 'x-header',
                'x-control-user' : localStorage.iduser,
                'x-access-token' : `bearer ${localStorage.token}`
            }
        })
    }
}

export const patchPinjam = (idPinjam, idBook) => {
    console.log(idPinjam, idBook)
    return {
        type: 'UPDATE_PINJAM',
        payload: axios.patch(`https://library-backend-ar.herokuapp.com/Pinjam/${idPinjam}`,{idBook:idBook})
    }
}