import React from 'react'
import Contact from '../components/Home/Contact'
import Layout from '../components/layout'
import SEO from '../components/seo'

// import BackgroundSection from '../components/Globals/BackgroundSection';

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    /> */}
    <Contact />
  </Layout>
);

export const query = graphql`
    {
      img:file(relativePath:{
        eq:"contactus.jpg"
      }){
        childImageSharp{
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    `

export default ContactPage;


