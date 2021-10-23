import React from "react";
import styled from "styled-components";
import "../App.css";

const FlexColumn = styled.div`
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  vertical-align: top;
  transition: transform 1.5s;
  transform: scale(1);

  &:hover {
    transition: transform 1.5s;
    transform: scale(1.1);
  }
`;

const Lable = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 54px;
  text-align: center;
`;

const ListImg = ({ name, src }) => {
  return (
    <div>
      <FlexColumn>
        <a href={""}>
          <Img src={src}></Img>
        </a>
      </FlexColumn>
      <Lable>{name}</Lable>
    </div>
  );
};

export default ListImg;
