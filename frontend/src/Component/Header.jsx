import React from 'react';
import './Header.css'
// import Nav from './Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Inner = () => {
  return(    
    <div className="sub__gnb__wrap__inner">
      <h1 className="logo">
        <a href="/" title="Logo.png">Logo.png</a>
      </h1>
      <nav className="utill__nav">
        <ul>
          <li className="utill__nav01">
            <a href="#">Sign In</a>
          </li>
          <li className="utill__nav02">
            <a href="#">My Starbucks</a>
          </li>
          <li className="utill__nav03">
            <a href="#">Customer Service & Ideas</a>
          </li>
          <li className="utill__nav04">
            <a href="#">Find a Store</a>
          </li>
        </ul>
      </nav>
      <p className="btn__serach">
        <FontAwesomeIcon icon={faSearch} />
      </p>
    </div>
  )
}

const SingleGnb = ({Class,Menu,Url}) => {
  return(
    <li className={Class}>
      <a href={Url}>{Menu}</a>
    </li>
  );
}


const MultiGnb = ({Class,Menu}) => {
  return(
    <li className={Class}>
      <h2>
        <a href="">{Menu}</a>
      </h2>
      <div className="gnb__sub__wrap">
        <div className="gnb__sub"></div>
        <div className="gnb__sub__txbg"></div>
      </div>
    </li>
  );
}

const Nav = () => {
  return (
    <nav id="sub__gnb__nav">
      <div className="sub__gnb__nav__inner">
        <ul>
          <SingleGnb Class="gnb__nav01" Menu="DRINK" Url="./drink"/>
          <SingleGnb Class="gnb__nav02" Menu="CARD" Url="./card"/>
          <SingleGnb Class="gnb__nav03" Menu="MERCHANDISE" Url="./merchandise"/>
          <SingleGnb Class="gnb__nav04" Menu="FOOD" Url="./food"/>
          <MultiGnb Class="gnb__nav05" Menu="STARBUCKS REWARDS" Url="./"/>
          <MultiGnb Class="gnb__nav06" Menu="WHAT'S NEW" Url="./"/>
        </ul>
      </div>
    </nav>
  );
}

const Header = () => {
  return (
    <div id="top__wrap">
      <div id="header__wrap">
        <div id="sub__gnb__wrap">
          <Inner />
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;