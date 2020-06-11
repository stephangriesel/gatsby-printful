import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import BackgroundSection from '../components/Globals/BackgroundSection';

import Products from '../components/Home/Products'


const ShopPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shop"
      styleClass="about-background"
    /> */}
    <Products />
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
}
`

export default ShopPage
