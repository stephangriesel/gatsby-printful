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
                        <div className="row mb-5">
                            <div className="col">
                                <h1>There are products in array</h1>
                            </div>
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
