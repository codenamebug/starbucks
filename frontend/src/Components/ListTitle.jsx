import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 1rem;
  background-color: #f4f4f2;
`;

const Title = styled.a`
  color: #222;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 18px;
  text-decoration: none;
  display: block;
  float: left;
`;

const Icon = styled.i`
  // display: block;
  // float: left;
  // width: 45px;
  // height: 18px;
  // margin-left: 15px;
  display: block;
  float: left;
  width: 45px;
  height: 18px;
  margin-left: 15px;
`;

const Img = styled.img`
  vertical-align: top;
  max-width: 100%;
  position: relative;
  top: -9px;
`;

const Span = styled.span`
  font-size: 0.8rem;
  display: block;
  float: left;
  margin-left: 5px;
  color: #444444;
  letter-spacing: -1px;
`;

const ListTitle = () => {
  return (
    <Box>
      <Title href={""}>콜드 브루 커피{""}</Title>
      <Icon>
        <Img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"></Img>
      </Icon>
      <Span>디카페인 에스프레소 샷 추가{""}</Span>
    </Box>
  );
};

export default ListTitle;
