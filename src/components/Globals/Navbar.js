import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo_small.png'
import '../css/navbar.css';
import { FaShoppingCart } from 'react-icons/fa'

export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: "/",
                text: "home"
            },
            {
                id: 2,
                path: "/about",
                text: "about"
            },
            {
                id: 3,
                path: "/about",
                text: "company"
            },
            {
                id: 4,
                path: "/contact",
                text: "contact"
            },
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({
            navbarOpen: false, css: "collapse navbar-collapse"
        }) : this.setState({
            navbarOpen: true,
            css: 'collapse navbar-collapse show'
        })
    };

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" class="logo" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto" >
                        {
                            this.state.links.map(link => {
                                return (
                                    <li key={link.id} className="nav-item">
                                        <Link to={link.path} className="nav-link text-capitalize">
                                            {link.text}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                        <li className="nav-item ml-sm-5 cart-icon">
                            <button className="snipcart-checkout"><FaShoppingCart /></button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
