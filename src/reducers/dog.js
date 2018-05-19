// import {
//     FETCH_DOG_REQUEST,
//     FETCH_DOG_ERROR,
//     FETCH_DOG_SUCCESS,
//     ADOPT_DOG_ERROR,
//     ADOPT_DOG_REQUEST,
//     ADOPT_DOG_SUCCESS
// } from '../actions/dog';

const initialState = {
    dogs: [{
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away'
      }],
    loading: false,
    error: null
}

export default function dogsReducer(state=initialState, action) {
    return state;
}