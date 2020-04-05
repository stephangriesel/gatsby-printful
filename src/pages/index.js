import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection';

import Info from '../components/Home/Info'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Koffie Kaskenades"
      styleClass="default-background"
    />
    <Info />
  </Layout >
);

export const query = graphql`
{
  img:file(relativePath:{
    eq:"default-bg.jpg"
  }){
    childImageSharp{
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCoffeeItem{
    edges{
      node{
        id
        title
        price
        category
        image {
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        description {
          description
        }
      }
    }
  }
}
`

export default IndexPage
