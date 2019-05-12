import { 
    
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAILURE, 

} from '../actions';

const initialState = {
    users: [],
    fetchingData: false,
    err: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       
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
          
        default:
            return state;
    }    
};

export default rootReducer;