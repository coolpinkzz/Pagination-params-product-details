import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./ActionTypes"

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.paylaod,
                error: '',


            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.paylaod



            }
        default: return state
    }
}
export default reducer;