import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'
import { SRLWrapper } from "simple-react-lightbox";
// import { node } from 'prop-types';

const options = {
    settings: {
        autoplaySpeed: 3000,
        disableKeyboardControls: true,
        disablePanzoom: false,
        disableWheelControls: true,
        hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.6,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(151,151,151,0.9)',
        slideAnimationType: 'fade',
        slideSpringValues: [300, 200],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear'
    },
    caption: {
        captionAlignment: 'start',
        captionColor: '#FFFFFF',
        captionContainerPadding: '0',
        captionFontFamily: 'inherit',
        captionFontSize: 'inherit',
        captionFontStyle: 'inherit',
        captionFontWeight: 'inherit',
        captionTextTransform: 'inherit',
        showCaption: true
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '5px',
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: true,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        showThumbnails: false,
        thumbnailsAlignment: 'center',
        thumbnailsContainerBackgroundColor: 'transparent',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '1px',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px']
    },
    progressBar: {
        backgroundColor: '#f2f2f2',
        fillColor: '#000000',
        height: '3px',
        showProgressBar: true
    }
}

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
                            <div className="col-10 mx-auto text-center mt-5">
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
                                    <div key={node.id} className="col-12 col-md-4 my-3 d-flex mx-auto">
                                        <div className="prd-item-shop m-3 mx-auto fade-in p-5 rounded border">
                                            <div className="mx-auto">
                                                <h6 className="mb-6 text-center">{node.title}</h6>
                                            </div>
                                            <div className="mx-auto">
                                                <SRLWrapper options={options}>
                                                    <Img className="prd-img" fixed={node.image.fixed} style={{ maxHeight: `200px`, marginBottom: `0.45rem` }} />
                                                </SRLWrapper>
                                            </div>
                                            <p className="text-muted mx-auto">
                                                <small>{node.title}</small>
                                            </p>

                                            <p className="mb-6 text-center">
                                                {node.description.description}
                                            </p>

                                            <div className="mx-auto">
                                                <h6>R{node.price}</h6>
                                            </div>
                                            <div className="mx-auto">
                                                <button
                                                    className="btn btn-grey mt-3 text-capitalize snipcart-add-item"
                                                    data-item-id={node.id}
                                                    data-item-name={node.title}
                                                    data-item-price={node.price}
                                                    data-item-image={node.image.fixed.src}
                                                    data-item-url="https://hindernis.netlify.app/shop"
                                                >Add</button>
                                            </div>

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
