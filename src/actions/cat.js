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