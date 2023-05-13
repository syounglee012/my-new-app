import React, { useState, useEffect } from "react";
import styled from "styled-components";
import work from "@/data/work.json";

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <h4>Work Experiences</h4>
      <Wrap>
        <ToggleWrap>
          <Virtical />
          <Toggle>
            {work.map((item) => (
              <ul key={item.id}>
                <li
                  className={selected === item.id ? "clicked" : null}
                  onClick={() => setSelected(item.id)}
                >
                  {item.company}
                </li>
              </ul>
            ))}
          </Toggle>
        </ToggleWrap>

        {work.map((item) =>
          selected === item.id ? (
            <ListWrap key={item.id}>
              <h5>{item.company}</h5>
              <p>{item.position}</p>
              <p>{item.duration}</p>
              <p>{item.location}</p>
              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </ListWrap>
          ) : null
        )}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #ccd6f6;
  h4 {
    width: 100%;
    font-size: 30px;
    margin-bottom: 3rem;
    margin-top: 0;
    padding-left: 10rem;
    color: #64ffda;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  align-self: start;
`;

const ListWrap = styled.div`
  padding: 0 20px;
  text-align: left;

  h5 {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 0;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
  }
  ul {
    li {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

const ToggleWrap = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  padding-top: 3rem;
`;

const Toggle = styled.div`
  width: 100%;
  margin: 0;

  ul {
    padding: 0 0 0 10px;
    li {
      cursor: pointer;

      &:hover {
        color: #64ffda;
      }
    }

    .clicked {
      color: #64ffda;
    }
  }
`;

const Virtical = styled.div`
  width: 1px;
  height: 300px;
  background-color: #ffffff;
`;
