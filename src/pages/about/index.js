import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <Wrap>
        <p>Hi, my name is</p>
        <h1>Sam Lee.</h1>
        <h2>I create things for the web.</h2>
        <p>
          I&#39;m a software engineer based in the beautiful city of Seattle,
          WA. I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
        </p>
        <button className="button">Get In Touch</button>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  color: #ccd6f6;
`;

const Wrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20rem 20px;
  text-align: left;
  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
  }
  h1 {
    font-size: 60px;
    margin: 0;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 30px;
    margin-top: 0;
  }
`;
