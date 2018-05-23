import React from 'react';

import './Cat.css';

export default class Cat extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="cat-column">
                    <section className="pet-cat">
                        <header role="banner">
                            <h2>{this.props.cat.name}</h2>
                            <img src={this.props.cat.imageURL} alt={this.props.cat.imageDescription}></img>
                        </header>
                    
                        <main role="main">
                            <h3>More about {this.props.cat.name}</h3>
                            <dl>
                                <dt>Sex:</dt>
                                <dd>{this.props.cat.sex}</dd>
                                <dt>Age:</dt>
                                <dd>{this.props.cat.age}</dd>
                                <dt>Breed:</dt>
                                <dd>{this.props.cat.breed}</dd>
                                <dt>Story:</dt>
                                <dd>{this.props.cat.story}</dd>
                            </dl>
                        </main>

                        <button onClick={this.props.onAdoptPet}>Adopt</button>
                    </section>
                </div>
            </div>
        );
    }
}