// import {
//     FETCH_CAT_REQUEST,
//     FETCH_CAT_SUCCESS,
//     FETCH_CAT_ERROR,
//     ADOPT_CAT_ERROR,
//     ADOPT_CAT_SUCCESS,
//     ADOPT_CAT_ERROR
// } from '../actions/cat';

const initialState = {
    cats: [{
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
      }],
    loading: false,
    error: null
}

export default function catsReducer(state=initialState, action) {
    return state;
}