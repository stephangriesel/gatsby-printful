import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { FaShoppingCart } from 'react-icons/fa';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">Logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/shop">Shop</a> </li>
                    <li><a href="/contact">Contact</a> </li>
                    <li>
                        <button className="snipcart-checkout" aria-label="shopping cart button"><span className="bag"><FaShoppingCart /></span></button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;