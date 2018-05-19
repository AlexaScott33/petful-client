import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dogs => ({
    type: FETCH_DOG_SUCCESS,
    dogs
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error
});

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    fetch(`${API_BASE_URL}/api/dog`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(dogs => {
        dispatch(fetchDogSuccess(dogs));
    }).catch(err => {
        dispatch(fetchDogError(err));
    });
};