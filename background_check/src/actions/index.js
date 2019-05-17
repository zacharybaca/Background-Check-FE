import axios from 'axios';


// REGISTER
export const REGISTER = 'REGISTER';
// LOGIN
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// ALL COMPONENTS
export const FETCH_CAND_START = 'FETCH_CAND_START';
export const FETCH_CAND_SUCCESS = 'FETCH_CAND_SUCCESS';
export const FETCH_CAND_FAILURE = 'FETCH_CAND_FAILURE';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


const URL = `https://background-check.herokuapp.com`;
// const URL = `http://localhost:3001`;
// const BG = `https://api.accuratebackground.com/v3`;

// const id = `:id`;

export const register = user => dispatch => {
    dispatch({ type: REGISTER });
    axios
        .post(`${URL}/register`, user)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
};

export const login = info => dispatch => {
    dispatch({ type: LOGIN });
    axios
        .post(`${URL}/login`, info)
        .then(res => {
            localStorage.setItem('token', res.data.token);//sends token to local storage
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.res });
        });
};

export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get(`${URL}/users`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })   
        })
        .catch(err => {
            console.log(err.res);
            dispatch({ type: FETCH_FAILURE, payload: err.res });
        }); 
};

export const getCandidate = () => dispatch => {
    dispatch({ type: FETCH_CAND_START });
    axios
        .get(`${URL}/candidates`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_CAND_SUCCESS, payload: res.data })   
        })
        .catch(err => {
            console.log(err.res);
            dispatch({ type: FETCH_CAND_FAILURE, payload: err.res });
        }); 
};

export const postCandidate = (candidates) => dispatch => {
    dispatch({ type: FETCH_CAND_START });
    axios
        .get(`${URL}/candidates`, candidates)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_CAND_SUCCESS, payload: res.data })   
        })
        .catch(err => {
            console.log(err.res);
            dispatch({ type: FETCH_CAND_FAILURE, payload: err.res });
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


