/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import './bootstrap.min.css';
import "./layout.css"
import Navbar from './Globals/Navbar';
import Footer from './Globals/Footer';

import styles from './css/parallax.module.css';

const Layout = ({ children }) =>

  <>
    <Navbar />
    <div className={styles.sectionWrapper}>
      {children}
      <Footer />
    </div>
  </>


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
