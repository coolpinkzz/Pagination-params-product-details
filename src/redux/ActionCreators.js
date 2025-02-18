import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './ActionTypes'
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const alldata = response.data
                // console.log(alldata)
                dispatch(fetchUserSuccess(alldata))

            })
            .catch(error => {

                dispatch(fetchUserFailure(error.message))
            })
    }
}