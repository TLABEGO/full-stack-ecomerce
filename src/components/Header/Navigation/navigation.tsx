import React from 'react';
import {Link} from "react-router-dom";

import {ROUTE} from "../../../constants/route";

import './navigation.css';

export const Navigation: React.FC = () => {
    return (
        <div className="header-nav-container">
            <div className="nav-items-left">
                <Link className="nav-item shopname" to={ROUTE.HOME} >Samloryx</Link>
                <Link className="nav-item" to={ROUTE.PRODUCTS} >Products</Link>
            </div>
            <div className="nav-items-right">
                <i className="fa fa-shopping-cart"></i>
            </div>
        </div>
    )
};
