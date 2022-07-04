import React from 'react';

import {ShopQuality} from "../../components/ShopQuality/shopQuality";

import './home.css';
import BestSeller from "../BestSeller/BestSeller";
import Partners from "../../components/Partners/Partners";

class Home extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <div className="cover-image" />
                <ShopQuality />
                <BestSeller />
                <Partners />
            </div>
        );
    }
}

export default Home;