import React from "react";
import styled from "styled-components";
import project from "@/data/project.json";

export default function Project() {
  return (
    <Container>
      <h4>Projects</h4>
      <Wrap>
        {project.map((item) => (
          <Box key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.period}</p>
            <p>{item.website}</p>
            {item.framework.map((framework) => (
              <li key={framework}>{framework}</li>
            ))}
            <ul>
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: #ccd6f6;
  h4 {
    width: 100%;
    font-size: 30px;
    margin-bottom: 3rem;
    margin-top: 0;
    padding-left: 58rem;
    color: #ffda63;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 0 auto;
  text-align: left;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  max-width: 500px;
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
    display: none;
    li {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;
