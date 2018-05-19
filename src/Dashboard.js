import React from 'react';
import Cat from './components/Cat';
import Dog from './components/Dog';

import './Dashboard.css';

export default class Dashboard extends React.Component {
    render() {
        // console.log('these are Dashboards props:', this.props);
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