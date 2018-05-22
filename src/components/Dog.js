import React from 'react';

import './Dog.css';

export default class Dog extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="dog-column">
                    <section className="pet-dog">
                        <header>
                            <h2>{this.props.dog.name}</h2>
                            <img src={this.props.dog.imageURL} alt={this.props.dog.imageDescription}></img>
                        </header>
                    

                        <main>
                            <h3>More about {this.props.dog.name}</h3>
                            <dl>
                                <dt>Sex:</dt>
                                <dd>{this.props.dog.sex}</dd>
                                <dt>Age:</dt>
                                <dd>{this.props.dog.age}</dd>
                                <dt>Breed:</dt>
                                <dd>{this.props.dog.breed}</dd>
                                <dt>Story:</dt>
                                <dd>{this.props.dog.story}</dd>
                            </dl>
                        </main>

                        <button onClick={this.props.onAdoptPet}>Adopt</button>
                    </section>
                </div>
            </div>
        );
    }
}