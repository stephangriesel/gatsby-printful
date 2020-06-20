import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import BackgroundSection from '../components/Globals/BackgroundSection';

import Info from '../components/Home/Info'


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    /> */}
    <Info />
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

export default AboutPage
