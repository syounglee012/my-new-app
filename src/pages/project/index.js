import React, { useState } from "react";
import styled from "styled-components";
import project from "@/data/project.json";
import Image from "next/image";
import zero from "../../../public/images/triumph.png";
import { MdWebAsset } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { MdOndemandVideo } from "react-icons/md";

export default function Project() {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <h4>Project</h4>
      <Wrap>
        {project.map((item) =>
          selected === item.id ? (
            <ListWrap key={item.id}>
              <Image
                src={item.image === "triumph" ? zero : ""}
                alt={item.title}
                className="project-image"
                width={550}
                height={500}
              />

              <BottomWrap>
                <h5> {item.title}</h5>
                <div />

                <span
                  onClick={() =>
                    window.open(`${item?.website ? item.website : item.video}`)
                  }
                >
                  {item?.website ? (
                    <MdWebAsset size={28} className="icon" />
                  ) : (
                    <MdOndemandVideo size={28} className="icon" />
                  )}
                </span>
                <span
                  onClick={() =>
                    window.open(`${item?.github ? item.github : ""}`)
                  }
                >
                  <VscGithub
                    size={25}
                    className={item?.github ? "icon" : "none"}
                  />
                </span>
              </BottomWrap>
              <p>{item.period}</p>

              <ul className="framwork">
                {item.framework.map((framework) => (
                  <li key={framework}>{framework}</li>
                ))}
              </ul>

              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </ListWrap>
          ) : null
        )}

        <ToggleWrap>
          <Virtical />
          <Toggle>
            {project.map((item) => (
              <ul key={item.id}>
                <li
                  className={selected === item.id ? "clicked" : null}
                  onClick={() => setSelected(item.id)}
                >
                  {item.title}
                </li>
              </ul>
            ))}
          </Toggle>
        </ToggleWrap>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 910px;
  height: 100%;
  color: #ccd6f6;
  margin: 0 auto;
  padding: 2rem;
  align-self: start;
  h4 {
    font-family: "Courier New", Courier, monospace;
    width: 100%;
    font-size: 30px;
    margin: 0 0 3rem 0;
    padding-right: 7rem;
    color: #ffda63;
    text-align: right;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BottomWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    max-width: 300px;
    height: 1px;
    background-color: #ffda63;
    opacity: 0.3;
    margin: 1rem;
  }
  span {
    width: fit-content;
    height: fit-content;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      color: #ffda63;
    }
  }

  .none {
    display: none;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0 20px;
  text-align: left;
  display: flex;
  flex-direction: column;

  .project-image {
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 22px;
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
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.7;
    opacity: 0.7;
    font-family: "Times New Roman", Times, serif;
  }
  ul li::before {
    content: "▹";
    color: #ffda63;
    margin-right: 5px;
  }

  .framwork {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    li {
      color: #ffda63;
      font-family: "Times New Roman", Times, serif;
    }
    li::before {
      content: "";
    }
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
  height: 300px;
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
