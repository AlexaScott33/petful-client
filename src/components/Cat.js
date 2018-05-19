import React from 'react';

export default class Cat extends React.Component {
    render() {
        console.log('these are Cats props:', this.props.onAdoptPet); 
        return (
            <div>
                <div className="col-6">
                    <section className="pet-cat">
                        <header>
                            <h2>{this.props.cat[0].name}</h2>
                            <img src={this.props.cat[0].imageURL} alt={this.props.cat[0].imageDescription}></img>
                        </header>
                    

                        <main>
                            <h3>More about {this.props.cat[0].name}</h3>
                            <dl>
                                <dt>Sex</dt>
                                <dd>{this.props.cat[0].sex}</dd>
                                <dt>Age</dt>
                                <dd>{this.props.cat[0].age}</dd>
                                <dt>Breed</dt>
                                <dd>{this.props.cat[0].breed}</dd>
                                <dt>Story</dt>
                                <dd>{this.props.cat[0].story}</dd>
                            </dl>
                        </main>

                        <button onClick={this.props.onAdoptPet}>Adopt</button>
                    </section>
                </div>
            </div>
        );
    }
}