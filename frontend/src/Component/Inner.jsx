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

export default Inner;