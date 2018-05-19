import React from 'react';

export default class Dog extends React.Component {
    render() {
        return (
            <div>
                <div className="col-6">
                    <section className="pet-dog">
                        <header>
                            <h2>{this.props.dog[0].name}</h2>
                            <img src={this.props.dog[0].imageURL} alt={this.props.dog[0].imageDescription}></img>
                        </header>
                    

                        <main>
                            <h3>More about {this.props.dog[0].name}</h3>
                            <dl>
                                <dt>Sex</dt>
                                <dd>{this.props.dog[0].sex}</dd>
                                <dt>Age</dt>
                                <dd>{this.props.dog[0].age}</dd>
                                <dt>Breed</dt>
                                <dd>{this.props.dog[0].breed}</dd>
                                <dt>Story</dt>
                                <dd>{this.props.dog[0].story}</dd>
                            </dl>
                        </main>

                        <button onClick={this.props.onAdoptPet}>Adopt</button>
                    </section>
                </div>
            </div>
        );
    }
}