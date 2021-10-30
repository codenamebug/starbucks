import React from "react";
import ListImg from "./ListImg";
import ListTitle from "./ListTitle";
import styled from "styled-components";

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  // display: flex;
  // justify-content: space-between;
  // flex-wrap: wrap;
`;

const ListBox = ({ data, menu }) => {
  return (
    <React.Fragment>
      {data.map((category, idx) => {
        return (
          <React.Fragment key={idx + 1}>
            <ListTitle title={category.type} />
            <FlexBox>
              {category.products.map((item) => (
                <ListImg name={item.name} src={item.image} key={item.id} />
              ))}
            </FlexBox>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default ListBox;
