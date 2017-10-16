import React from 'react';
import mainLogo from "../assets/images/aerolab.png";
import headerBg from "../assets/images/header-bg.png";

const Header = () => {

    return(
      <div className="row">
        <div className="col-md-12 header-container">
          <img className ='main-logo'  src={mainLogo} alt="" />
          <img className ='header-bg' src={headerBg} alt=""/>
          <h1>Colección Primavera / Verano 2017</h1>
        </div>
      </div>
    )


}


export default Header;
