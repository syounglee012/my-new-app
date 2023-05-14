import React, { useState, useEffect } from "react";
import styled from "styled-components";
import work from "@/data/work.json";

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <h4>Work Experience</h4>
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
              <h5>{item.position}</h5> <h6> @{item.company}</h6>
              <p>{item.duration}</p>
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
  max-width: 910px;
  height: 90vh;
  color: #ccd6f6;
  margin: 0 auto;
  padding: 2rem;
  align-self: start;

  h4 {
    font-family: "Courier New", Courier, monospace;
    width: 100%;
    font-size: 30px;
    margin-bottom: 3rem;
    margin-top: 0;
    color: #ffda63;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
`;

const ListWrap = styled.div`
  padding: 0 20px;
  text-align: left;

  h5 {
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 0;
    display: inline-block;
  }
  h6 {
    font-size: 20px;
    display: inline-block;
    color: #ffda63;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
  }
  ul li {
    font-size: 20px;
    letter-spacing: 0.8px;
    line-height: 1.6;
    opacity: 0.7;
    font-family: "Times New Roman", Times, serif;
  }
  ul li::before {
    content: "▹";
    color: #ffda63;
    margin-right: 5px;
  }
`;

const ToggleWrap = styled.div`
  width: 100%;
  max-width: 230px;
  display: flex;
  padding-top: 3rem;
`;

const Virtical = styled.div`
  width: 1px;
  height: 100px;
  background-color: #ffffff;
  opacity: 0.3;
`;

const Toggle = styled.div`
  width: 100%;
  margin: 0;

  ul {
    padding: 0 0 0 10px;
    line-height: 2;

    li {
      opacity: 0.7;
      cursor: pointer;
      letter-spacing: 1px;
      list-style: square;
      font-family: "Courier New", Courier, monospace;
    }

    &:hover {
      color: #ffda63;
    }
  }

  .clicked {
    opacity: 1;
    color: #ffda63;
  }
`;
