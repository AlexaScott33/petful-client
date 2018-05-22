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
    console.log('making fetch request to get dog');
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

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dogs => ({
    type: ADOPT_DOG_SUCCESS,
    dogs
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
    type: ADOPT_DOG_ERROR,
    error
});

export const adoptDog = () => dispatch => {
    dispatch(adoptDogRequest());
    console.log('adopting dog!');
    fetch(`${API_BASE_URL}/api/dog`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return Promise.resolve(res);
    })
    .then((dogs) => {
        console.log('dispatching adoptDogSuccess');
        dispatch(adoptDogSuccess(dogs));
    })
    .then(() => {
        console.log('dispatching fetchDog after adopt');
        dispatch(fetchDog());
    }).catch(err => {
        dispatch(adoptDogError(err));
    });
};