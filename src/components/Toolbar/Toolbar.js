import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton />
            </div>
            <div className="toolbar__logo"><a href="/">Logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Menu Item</a></li>
                    <li><a href="/">Menu Item</a> </li>
                    <li><a href="/">Menu Item</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;