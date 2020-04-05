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
                        {/* Categories
                        Items */}
                        <div className="row">
                            {/* coffee items array in state, loop through array */}
                            {this.state.coffeeItems.map(({ node }) => {
                                return (

                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                        <div><Img fixed={node.image.fixed} /></div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0">{node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                        </div>
                                    </div>

                                )
                            })}
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
