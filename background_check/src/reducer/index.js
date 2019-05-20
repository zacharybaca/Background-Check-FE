import { 
    REGISTER, 
    LOGIN, 
    FETCH_CAND_START, 
    FETCH_CAND_SUCCESS, 
    FETCH_CAND_FAILURE,
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAILURE, 
    // UPDATE,
    // DELETE,
} from '../actions';

const initialState = {
    users: [],
    candidates: [],
    inRegister: false,
    fetchingData: false,
    // updatingData: false,
    // deletingData: false,
    loggingIn: false,
    err: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: 
            return {
                ...state,
                inRegister: true,
                ...action.payload
            };
        case LOGIN:
            return {
                ...state,
                loggingIn: true,
                err: ''
            };
        case FETCH_START:
            return {
                ...state,
                err: '',
                fetchingData: true
            };
        case FETCH_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                err: '',
                fetchingData: false,
                users: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                err: action.payload,
                fetchingData: false
            };    
        case FETCH_CAND_START:
            return {
                ...state,
                err: '',
                fetchingData: true
            };  
        case FETCH_CAND_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                err: '',
                fetchingData: false,
                candidates: action.payload,
            }; 
        case FETCH_CAND_FAILURE:
            return {
                ...state,
                err: action.payload,
                fetchingData: false
            }; 
        default:
            return state;
    }    
};

export default rootReducer;