import React from 'react';
import { connect } from 'react-redux';
import Cat from './Cat';
import Dog from './Dog';
import { fetchCat, adoptCat } from '../actions/cat';
import { fetchDog, adoptDog } from '../actions/dog';


import './Dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
        return (
            <div>
                <h1>Petful</h1>
                <Cat cat={this.props.cats} onAdoptPet={() => this.props.dispatch(adoptCat())}/>
                <Dog dog={this.props.dogs} onAdoptPet={() => this.props.dispatch(adoptDog())}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cats: state.catsReducer.cats,
    dogs: state.dogsReducer.dogs
});

export default connect(mapStateToProps)(Dashboard);