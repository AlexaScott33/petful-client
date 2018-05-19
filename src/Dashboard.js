import React from 'react';

import './Dashboard.css';

export default class Dashboard extends React.Component {
    
    render() {
        // const catList = this.props.cats.map((cat, index) =>(
        //     <li key={index}>
        //         {cat.name}
        //     </li>
        // ));
        return (
            <div>
                <div className="col-6">
                    <section className="pet-cat">
                        <header>
                            <h2>{this.props.cats[0].name}</h2>
                            <img src={this.props.cats[0].imageURL} alt={this.props.cats[0].imageDescription}></img>
                        </header>
                    

                        <main>
                            <h3>More about {this.props.cats[0].name}</h3>
                            <dl>
                                <dt>Sex</dt>
                                <dd>{this.props.cats[0].sex}</dd>
                                <dt>Age</dt>
                                <dd>{this.props.cats[0].age}</dd>
                                <dt>Breed</dt>
                                <dd>{this.props.cats[0].breed}</dd>
                                <dt>Story</dt>
                                <dd>{this.props.cats[0].story}</dd>
                            </dl>
                        </main>

                        <button>Adopt</button>
                    </section>
                </div>

                <div className="col-6">
                    <section className="pet-dog">
                        <header>
                            <h2>{this.props.dogs[0].name}</h2>
                            <img src={this.props.dogs[0].imageURL} alt={this.props.dogs[0].imageDescription}></img>
                        </header>
                    

                        <main>
                            <h3>More about {this.props.dogs[0].name}</h3>
                            <dl>
                                <dt>Sex</dt>
                                <dd>{this.props.dogs[0].sex}</dd>
                                <dt>Age</dt>
                                <dd>{this.props.dogs[0].age}</dd>
                                <dt>Breed</dt>
                                <dd>{this.props.dogs[0].breed}</dd>
                                <dt>Story</dt>
                                <dd>{this.props.dogs[0].story}</dd>
                            </dl>
                        </main>

                        <button>Adopt</button>
                    </section>
                </div>
            </div>
        );
    }
}