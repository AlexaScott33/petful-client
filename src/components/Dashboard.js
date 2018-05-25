import React from 'react';
import Popup from "reactjs-popup";
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
                <div className="header-box">
                <Popup trigger={<button className="popup-button"> What is Petful?</button>} position="bottom left">
                        <div className="popup-box">
                            <p><strong>Petful</strong> allows you to adopt either a cat or dog.</p>
                            <p> The adoption process is based on a first come, first serve. The animals available  to adopt are the ones that have been in the shelter the longest.</p>
                            <p> View the details about each pet and adopt one today!</p>
                        </div>
                    </Popup>
                    <h1>Petful</h1>
                </div>
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