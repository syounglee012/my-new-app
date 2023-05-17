import React, { useState } from "react";
import styled from "styled-components";
import work from "@/data/work.json";

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <h4>Work Experience</h4>
      <Wrap>
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
  height: 100vh;
  color: #ccd6f6;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10rem 0 0 0;
  h4 {
    font-family: "Courier New", Courier, monospace;
    width: 100%;
    font-size: 30px;
    margin-bottom: 3rem;
    margin-top: 0;
    color: #ffda63;
  }
  @media (max-width: 768px) {
    padding: 8rem 1rem 0 1rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    padding: 0;

    ul li {
      font-size: 16px;
    }
  }
`;

// const ToggleWrap = styled.div`
//   width: 100%;
//   max-width: 230px;
//   display: flex;
//   padding-top: 3rem;

//   @media (max-width: 768px) {
//     max-width: 100%;
//     padding-top: 0;
//   }
// `;

const Toggle = styled.div`
  width: 100%;
  margin: 0;
  max-width: 230px;
  padding-top: 3rem;

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

  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: none;
    margin-bottom: 2rem;
    padding-top: 0;

    &::-webkit-scrollbar {
      display: none;
    }

    ul {
      padding: 0 0 0 40px;
      li {
        width: min-content;
      }
    }
  }
`;
