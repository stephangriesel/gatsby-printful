import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection';

import Info from '../components/Home/Info'
import Articles from '../components/Home/Articles'


const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Articles"
      styleClass="about-background"
    />
    <Info />
    <Articles />
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

export default ArticlesPage
