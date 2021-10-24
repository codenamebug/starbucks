import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import theme1 from "../Images/theme1.jpg";
import theme2 from "../Images/theme2.jpg";
import theme3 from "../Images/theme3.jpg";
import theme4 from "../Images/theme4.png";
import ListBox from '../Components/ListBox'

const FilterBox = ({menu}) => {
  const [clickedCategory, setClickedCategory] = useState(true);
  const [clickedTheme, setClickedTheme] = useState(false);

  const [isAll, setIsAll] = useState(false);
  const [isEsspresso, setIsEsspresso] = useState(false);
  const [isColdBrew, setIsColdBrew] = useState(false);

  const coffeeStatus = { all: isAll, esspresso: isEsspresso, coldBrew: isColdBrew };

  const handleButtons = (e) => {
    const target = e.target.textContent;
    if (target === "카테고리") {
      setClickedCategory(true);
      setClickedTheme(false);
    } else {
      setClickedTheme(true);
      setClickedCategory(false);
    }
  };

  const handleAll = () => {
    setIsAll(!isAll);
    setIsEsspresso(false);
    setIsColdBrew(false);
  }

  const handleEsspresso = () => {
    setIsEsspresso(!isEsspresso);
    setIsAll(false);
  }

  const handleColdBrew = () => {
    setIsColdBrew(!isColdBrew);
    setIsAll(false);
  }




  return (
    <>
    <section className="filterBox">
      <div className="filterBox__wrapper">
        <div className="title__and__button">
          <h1>분류 보기</h1>
          <button>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        {/* <div className="border"></div> */}
        <div className="button__wrapper">
          <button
            onClick={handleButtons}
            className={`category ${clickedCategory ? "active" : "unactive"}`}
          >
            카테고리
          </button>
          <button
            onClick={handleButtons}
            className={`theme ${clickedTheme ? "active" : "unactive"}`}
          >
            테마
          </button>
        </div>
        <div
          className="category__wrapper"
          style={clickedCategory ? { display: "flex" } : { display: "none" }}
        >
          <button className="item" onClick={handleAll}>
            <div className={isAll ? 'item__checkbox__focus' : 'item__checkbox'}></div>
            <span className="item__name">all</span>
          </button>
          <button className="item" onClick={handleEsspresso}>
            <div className={isEsspresso ? 'item__checkbox__focus' : 'item__checkbox'}></div>
            <span className="item__name">esspresso</span>
          </button>
          <button className="item" onClick={handleColdBrew}>
            <div className={isColdBrew ? 'item__checkbox__focus' : 'item__checkbox'}></div>
            <span className="item__name">coldBrew</span>
          </button>
          
          {/* <button className="item">
            <div className="item__checkbox"></div>
            <span className="item__name">플라스틱 텀블러</span>
          </button>
          <button className="item">
            <div className="item__checkbox"></div>
            <span className="item__name">스테인리스 텀블러</span>
          </button>
          <button className="item">
            <div className="item__checkbox"></div>
            <span className="item__name">보온병</span>
          </button>
          <button className="item">
            <div className="item__checkbox"></div>
            <span className="item__name">액세서리</span>
          </button>
          <button className="item">
            <div className="item__checkbox"></div>
            <span className="item__name">커피 용품</span>
          </button>
          <button className="item">
            <div className="item__checkbox"></div>
            <span className="item__name">패키지 티(티바나)</span>
          </button> */}
        </div>
        <div
          className="theme__wrapper"
          style={clickedTheme ? { display: "flex" } : { display: "none" }}
        >
          <img src={theme1} alt="theme1" />
          <img src={theme2} alt="theme2" />
          <img src={theme3} alt="theme3" />
          <img src={theme4} alt="theme4" />
        </div>
      </div>
    </section>
    <ListBox coffeeStatus={coffeeStatus} menu={menu}/>
    </>
  );
};

export default FilterBox;
