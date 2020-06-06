import React from 'react'
import Contact from '../components/Home/Contact'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <Contact />
            </div>
        </Layout>
    )
}

export default ContactPage;


