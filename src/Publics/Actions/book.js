import axios from "axios";

export const getBook = () => {
    return {
        type: 'GET_BOOK',
        payload: axios.get(`http://192.168.6.104:8082/nameBook` ,{
            headers: {
                authorization: 'x-header',
                
            }
        }),
    };
};

export const getPinjam = (idBook) => {
    return {
        type: 'GET_PINJAM',
        payload: axios.get(`http://192.168.6.104:8082/Pinjam/${idBook}`, {
            headers: {
                authorization: 'x-header'
            }
        })

    };
};

export const postBook = (data) => {
    return {
        type: 'POST_BOOK',
        payload: axios.post(`http://192.168.6.104:8082/nameBook`,data, {
            headers: {
                authorization: 'x-header'
            }
        })
    }
}

export const postPinjam = (data) => {
    return {
        type: 'POST_PINJAM',
        payload: axios.post(`http://192.168.6.104:8082/Pinjam/post`,data),
    }
}

export const deleteBook = (idBook, token, iduser) => {
    console.log(idBook,token,iduser)
    return {
        type: 'DELETE_BOOK',
        payload: axios.delete(`http://192.168.6.104:8082/nameBook/${idBook}`,null,{
            headers: {
                authorization: 'x-header',
                'x-control-user': iduser,
                'x-access-token': `bearer ${token}`
            },
        })
    }
}

export const updateBook = (data,id) => {
    return {
        type: 'UPDATE_BOOK',
        payload: axios.patch(`http://192.168.6.104:8082/nameBook/${id}`,data)
    }
}

export const patchPinjam = (idPinjam, idBook) => {
    console.log(idPinjam, idBook)
    return {
        type: 'UPDATE_PINJAM',
        payload: axios.patch(`http://192.168.6.104:8082/Pinjam/${idPinjam}`,{idBook:idBook})
    }
}