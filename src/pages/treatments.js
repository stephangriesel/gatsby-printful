import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import BackgroundSection from '../components/Globals/BackgroundSection';

// import Info from '../components/Home/Info'

import Menu from '../components/Home/Menu'


const TreatmentsPage = ({ data }) => (
  <Layout>
    <SEO title="Treatments" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Treatments"
      styleClass="about-background"
    /> */}
    <Menu items={data.menu} />
  </Layout >
);

export const query = graphql`
{
  img:file(relativePath:{
    eq:"default-bg.jpg"
  }){
    childImageSharp{
      fluid(quality:100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulHappyItem{
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
        description 
      }
    }
  }
}
`

export default TreatmentsPage
