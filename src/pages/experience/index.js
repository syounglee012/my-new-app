import React from "react";
import styled from "styled-components";
import work from "@/data/work.json";

export default function Experience() {
  return (
    <Container>
      <Wrap>
        <h4>Work Experiences</h4>
        {work.map((item) => (
          <div key={item.id}>
            <h5>{item.company}</h5>
            <p>{item.position}</p>
            <p>{item.duration}</p>
            <p>{item.location}</p>
            <ul>
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  color: #ccd6f6;
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: left;
  h4 {
    font-size: 30px;
    margin-bottom: 30px;
    margin-top: 0;
  }
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
