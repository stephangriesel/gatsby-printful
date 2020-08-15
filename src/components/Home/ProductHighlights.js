import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getLatestProducts = graphql`
{
  latestProducts: allContentfulHighlightProduct{
      edges{
        node{
          id
          title
          price
          image{
            fluid(maxHeight:450){
                src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function LatestProducts() {
    return (
        <StaticQuery query={getLatestProducts} render={data => {
            return (
                <section>
                    <section className="py-5">
                        <div className="container">
                            <Title title="Latest Products" />
                            <div className="row">
                                {data.latestProducts.edges.map(({ node: product }) => {
                                    return <Product key={product.id} product={product} />
                                })}
                            </div>
                        </div>
                    </section>
                </section>

            )
        }} />
    );
}

