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
import SimpleReactLightbox from "simple-react-lightbox";
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

const Layout = ({ children }) =>

  <>
    <SimpleReactLightbox>
      <Toolbar />
      <SideDrawer />
      {/* <Navbar /> */}
      <div className="wrapper">
        {children}

        <Footer />
      </div>
    </SimpleReactLightbox>
  </>


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
