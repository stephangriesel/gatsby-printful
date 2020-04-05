import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

class Menu extends Component {
    constructor(props) {
        super(props);
        console.log("<<menu props>>");
        console.log(props.items);
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges
        }
    }

    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Our Menu" />
                        <div className="row mb-5">
                            <div className="col">
                                <h1>Items</h1>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return (<section className="menu py-5">
                <div className="container">
                    <Title title="Our Menu"></Title>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                            <h1>Nothing to display</h1>
                        </div>
                    </div>
                </div>
            </section>)
        }
    }
}

export default Menu
