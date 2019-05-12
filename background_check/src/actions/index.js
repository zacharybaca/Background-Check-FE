import axios from 'axios';


// ALL COMPONENTS
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


const URL = `https://background-check.herokuapp.com`;

// const id = `:id`;

export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get(`${URL}/`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })   
        })
        .catch(err => {
            console.log(err.res);
            dispatch({ type: FETCH_FAILURE, payload: err.res });
        }); 
};

export const getUser = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get(`${URL}/users`)
        .then(res => 
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
};


