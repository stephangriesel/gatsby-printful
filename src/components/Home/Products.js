import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'
import styles from '../css/parallax.module.css';

const getProducts = graphql`
{
    products:allContentfulHappyProduct{
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

export default function Products() {
  return (
    <StaticQuery query={getProducts} render={data => {
      return (
        <section className={styles.contentAreaProduct}>
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

