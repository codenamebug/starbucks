import React from 'react';

const SingleGnb = ({Class,Menu}) => {
  return(
    <li className={Class}>
      <a href="">{Menu}</a>
    </li>
  );
}
const multiGnbDummy = [
  {
    id:'gnb__nav05',
    content:[
      {
        title:'스타벅스 리워드',
        subTitle:{
          1:'스타벅스 리워드 소개',
          2:'스타벅스 리워드 소개',
          3:'스타벅스 리워드 소개',
          4:'스타벅스 리워드 소개',
        }
      },
      {
        title:'스타벅스 카드',
        subTitle:{
          1:'스타벅스 카드 소개',
          2:'스타벅스 카드 갤러리',
          3:'스타벅스 등록 및 조회',
          4:'스타벅스 충전 및 이용안내',
          5:'분실신고/환불신청',
          6:'자주 하는 질문'
        }
      },
      {
        title:'스타벅스 e-Gift Card',
        subTitle:{
          1:'스타벅스 e-Gift Card 소개',
          2:'이용안내',
          3:'선물하기',
          4:'자주 하는 질문',
        }
      },
    ]    
  },
  {
    id:'gnb__nav06',
    content:[
      {
        title:'이벤트',
        subTitle:{
          1:'전체',
          2:'스타벅스 카드',
          3:'스타벅스 리워드',
          4:'온라인',
        }
      },     
      {
        title:'뉴스',
        subTitle:{
          1:'전체',
          2:'상품 출시',
          3:'스타벅스와 문화',
          4:'스타벅스 사회공헌',
          5:'스타벅스 카드출시',
        }
      },     
      {
        title:'매장별 이벤트',
        subTitle:{
          1:'일반 매장',
          2:'신규 매장',
        }
      },     
      {
        title:'공지사항',
        subTitle:{
        }
      },     
      {
        title:'월페이퍼',
        subTitle:{
        }
      },     
    ]    
  }
]

const MultiGnb = ({Class,Menu}) => {
  const classFilter = (data) => {
    if(data.id === Class) return true;
  }
  const dummy = multiGnbDummy.filter(classFilter);
  console.log(dummy)
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
          <SingleGnb Class="gnb__nav01" Menu="COFFEE"/>
          <SingleGnb Class="gnb__nav02" Menu="CARD"/>
          <SingleGnb Class="gnb__nav03" Menu="MERCHANDISE"/>
          <SingleGnb Class="gnb__nav04" Menu="FOOD"/>
          <MultiGnb Class="gnb__nav05" Menu="STARBUCKS REWARDS"/>
          <MultiGnb Class="gnb__nav06" Menu="WHAT'S NEW"/>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;