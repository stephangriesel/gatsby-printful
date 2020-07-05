import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'
import { node } from 'prop-types';

const getProductCategories = products => {
    let tempProducts = products.map(products => {
        return products.node.category;
    });
    // create object
    let tempCategories = new Set(tempProducts);
    // change to array
    let categories = Array.from(tempCategories);
    categories = ["All", ...categories]
    return categories;
}

export default class ProductClass extends Component {
    constructor(props) {
        super(props)
        console.log("<< TEST PRODUCTS >>")
        console.log(props.products)
        this.state = {
            products: props.products.edges,
            allProducts: props.products.edges,
            productCategories: getProductCategories(props.products.edges)
        }
    }

    handleProducts = (category) => {
        let tempProducts = [...this.state.products]
        if (category === "All") {
            this.setState(() => {
                return {
                    allProducts: tempProducts
                }
            })
        }
        else {
            let products = tempProducts.filter(({ node }) => node.category === category);
            this.setState(() => {
                return { allProducts: products }
            })
        }
    }
    render() {
        console.log("<< TEST PRODUCT CATEGORIES >>")
        console.log(this.state.productCategories);
        if (this.state.products.length > 0) {
            return (
                <section className="py-5">
                    <div className="container">
                        {/* <Title title="Our Products" /> */}
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.productCategories.map((category, index) => {
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className="btn btn-grey text-capitalize m-1" onClick={() => {
                                                this.handleProducts(category);
                                            }}>{category}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="row mx-auto">
                            {this.state.allProducts.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-9 col-md-3 my-3 d-flex mx-auto bg-dark rounded border">
                                        <div className="prd-item-shop m-3 mx-auto fade-in">
                                            <div className="mx-auto">
                                                <h6 className="mb-6 text-center">{node.title}</h6>
                                            </div>
                                            <div className="mx-auto">
                                                <Img className="rounded-circle" fixed={node.image.fixed} />
                                            </div>
                                            <p className="text-muted mx-auto">
                                                <small>{node.title}</small>
                                            </p>
                                            <p className="mx-auto">
                                                <p className="mb-6 text-center">
                                                    {node.description.description}
                                                </p>
                                            </p>
                                            <div className="mx-auto">
                                                <h6>R{node.price}</h6>
                                            </div>
                                            <button
                                                className="btn btn-grey mt-3 text-capitalize snipcart-add-item"
                                                data-item-id={node.id}
                                                data-item-name={node.title}
                                                data-item-price={node.price}
                                                data-item-image={node.image.fixed.src}
                                                data-item-url="https://happyskin.netlify.app"
                                            >Add</button>

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
