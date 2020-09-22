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
        );
    }
}
