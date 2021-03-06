import React from 'react';
import "./Header.css";
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container d-flex flex-column justify-content-around">
            <Navbar />
            <HeaderMain />
            <BusinessInfo/>
        </div>
    );
};

export default Header;