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

const ListBox = ({ coffeeStatus, menu }) => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://b9b568de-8e10-4ed6-9472-98aa10a75efe.mock.pstmn.io/api/${menu}`)
  //   .then(res => res.json())
  //   .then(data => setData(data[menu]))
  // }, []);

  return (
    <div>
      {data.map((coffee) => {
        for (let key in coffee) {
          return (
            <React.Fragment>
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
    </div>
  );
};

export default ListBox;
