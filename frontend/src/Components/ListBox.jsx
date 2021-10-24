import React, { useEffect, useState } from "react";
import ListImg from "./ListImg";
import ListTitle from "./ListTitle";
import styled from "styled-components";
import dummyData from "../data/dummyData.js";

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  // display: flex;
  // justify-content: space-between;
  // flex-wrap: wrap;
`;

const ListBox = () => {
  const [data, setData] = useState(dummyData.coffees);

  useEffect(() => {
    console.log("fetch");
  }, []);

  return (
    <React.Fragment>
      {data.map((coffee, idx) => {
        for (let key in coffee) {
          return (
            <React.Fragment key={idx + 1}>
              <ListTitle title={key} />
              <FlexBox>
                {coffee[key].map((obj) => (
                  <ListImg name={obj.name} src={obj.image} key={obj.id} />
                ))}
              </FlexBox>
            </React.Fragment>
          );
        }
      })}
    </React.Fragment>
  );
};

export default ListBox;
