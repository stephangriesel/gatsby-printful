import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import BackgroundSection from '../components/Globals/BackgroundSection';

import ProductClass from '../components/Home/ProductClass'


const ShopPage = ({ data }) => (
    <Layout>
        <SEO title="Shop" />
        {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shop"
      styleClass="about-background"
    /> */}
        <ProductClass products={data.product} />
    </Layout >
);

export const query = graphql`
{
  img:file(relativePath:{
    eq:"aboutus.jpg"
  }){
    childImageSharp{
      fluid(quality:100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  product:allContentfulHappyProduct {
    edges {
      node {
        id
        title
        category
        price
        image {
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default ShopPage
