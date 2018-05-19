import React from 'react';
import { connect } from 'react-redux';
import Cat from './Cat';
import Dog from './Dog';
import { fetchCat } from '../actions/cat';
import { fetchDog } from '../actions/dog';


import './Dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
        // const catList = this.props.cats.map((cat, index) =>(
        //     <li key={index}>
        //         {cat.name}
        //     </li>
        // ));
        return (
            <div>
                <Cat cat={this.props.cats} onAdoptPet={() => console.log('Cat Adopt button clicked!')}/>
                <Dog dog={this.props.dogs} onAdoptPet={() => console.log('Dog Adopt button clicked!')}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cats: state.catsReducer.cats,
    dogs: state.dogsReducer.dogs
});

export default connect(mapStateToProps)(Dashboard);