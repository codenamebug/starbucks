import React from 'react';
import './Header.css'
import Inner from './Inner';
import Nav from './Nav';



const Header = () => {
  return (
    <div id="header__wrap">
      <div id="sub__gnb__wrap">
        <Inner />
        <Nav />
      </div>
    </div>
  );
};

export default Header;