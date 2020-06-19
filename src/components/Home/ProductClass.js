import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

export default class ProductClass extends Component {
    constructor(props) {
        super(props)
        console.log("<< TEST PRODUCTS >>")
        console.log(props.products)
        this.state = {
            products: props.products.edges,
            allProducts: props.products.edges
        }
    }
    render() {
        if (this.state.products.length > 0) {
            return (
                <section className="py-5">
                    <div className="container">
                        <Title title="Our Products" />
                        <div className="row">
                            {this.state.allProducts.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                        <div>
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-6">{node.title}</h6>
                                                <h6 className="mb-6">{node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.title}</small>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )
        }
        else {
            return (<section className="py-5">
                <div className="container">
                    <Title title="Our Products" />
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center">
                            <h1>No products to display</h1>
                        </div>
                    </div>
                </div>
            </section>)
        }
    }
}
