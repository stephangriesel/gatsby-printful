import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getProducts = graphql`
{
  product: allContentfulListProduct {
    edges {
      node {
        id
        title
        category
        price
        description {
          description
        }
        image {
          fluid(maxHeight: 450){
            src
          }
        }
      }
    }
  }
}
`

export default function Products() {
  return (
    <StaticQuery query={getProducts} render={data => {
      return (
        <section className="fade-in">
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
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

