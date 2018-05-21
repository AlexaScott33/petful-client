import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cats => ({
    type: FETCH_CAT_SUCCESS,
    cats
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error
});

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    console.log('making fetch request to get cat');
    fetch(`${API_BASE_URL}/api/cat`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(cats => {
        dispatch(fetchCatSuccess(cats));
    }).catch(err => {
        dispatch(fetchCatError(err));
    });
};

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
    type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cats => ({
    type: ADOPT_CAT_SUCCESS,
    cats
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
    type: ADOPT_CAT_ERROR,
    error
});

export const adoptCat = () => dispatch => {
    dispatch(adoptCatRequest());
    console.log('adopting cat!');
    fetch(`${API_BASE_URL}/api/cat`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log('this is the res', res);
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        // // console.log('dispatching fetchCat after adopt');
        return Promise.resolve(res);
    })
    .then((cats) => {
        console.log('dispatching adoptCatSuccess');
        dispatch(adoptCatSuccess(cats));
    })
    .then(() => {
        console.log('dispatching fetchCat after adopt');
        dispatch(fetchCat());
    }).catch(err => {
        dispatch(adoptCatError(err));
    });
};