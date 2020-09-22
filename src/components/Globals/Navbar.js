import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
import '../css/navbar.css';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';

export default class Navbar extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    // navbarHandler = () => {
    //     this.state.navbarOpen ? this.setState({
    //         navbarOpen: false, css: "collapse navbar-collapse"
    //     }) : this.setState({
    //         navbarOpen: true,
    //         css: 'collapse navbar-collapse show'
    //     })
    // };

    render() {
        let sideDrawer;
        let backDrop;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;
            backDrop = <BackDrop />
        }
        return (
            <div>
                <Toolbar />
                {sideDrawer}
                {backDrop}
            </div>
            // <nav className="navbar navbar-expand-sm navbar-light bg-light">
            //     <Link to="/" className="navbar-brand fade-in">
            //         <div className="logo-wrapper brand">
            //             <h1>Printful Demo</h1>
            //             {/* <img className="logo" src={logo} alt="logo" /> */}
            //         </div>
            //     </Link>
            //     <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className={this.state.css}>
            //         <ul className="navbar-nav mx-auto fade-in" >
            //             {/* {
            //                 this.state.links.map(link => {
            //                     return (
            //                         <li key={link.id} className="nav-item">
            //                             <Link to={link.path} className="nav-link text-uppercase">
            //                                 {link.text}
            //                             </Link>
            //                         </li>
            //                     );
            //                 })
            //             } */}
            //             <li className="nav-item ml-sm-5 cart-icon toggle">
            //                 <button className="snipcart-checkout" aria-label="shopping cart button"><span className="bag"><FaShoppingCart /></span></button>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
        );
    }
}
