import React from "react";
import styled from "styled-components";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";

export default function About() {
  return (
    <Container>
      <Wrap>
        <p className="hi">Hi, my name is</p>
        <h1>Sam Lee.</h1>
        <h2>I create things for the web.</h2>
        <span className="top-p">
          I&#39;m a software engineer based in the beautiful city of&nbsp;
          <p className="p-colored"> Seattle, WA.</p>
        </span>

        <p className="last-part">
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
        </p>
        <BottomWrap>
          <button
            className="button"
            onClick={() => window.open("files/resume.pdf")}
          >
            Resume
          </button>
          <div />

          <span
            onClick={() =>
              window.open("https://www.linkedin.com/in/webdevsamlee/")
            }
          >
            <CiLinkedin size={28} className="icon" />
          </span>
          <span onClick={() => window.open("https://github.com/syounglee012")}>
            <VscGithub size={25} className="icon" />
          </span>
          <span
            onClick={() =>
              (window.location.href = `mailto: swe.samlee@gmail.com`)
            }
          >
            <HiOutlineMail size={28} className="icon" />
          </span>
        </BottomWrap>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #ccd6f6;
`;

const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20rem 20px;
  text-align: left;
  .top-p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.7;
    display: inline-block;
  }
  .p-colored {
    color: #ffda63;
    display: inline-block;
  }
  .last-part {
    margin-bottom: 2rem;
    font-size: 18px;
    line-height: 1.5;
    opacity: 0.7;
  }
  .hi {
    color: #ffda63;
    margin-bottom: 10px;
    font-size: 18px;
  }
  h1 {
    font-size: 60px;
    margin: 0;
  }
  h2 {
    font-size: 50px;
    margin-bottom: 30px;
    margin-top: 0;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 10rem 20px 5rem;

    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 40px;
    }
  }
`;

const BottomWrap = styled.div`
  width: 100%;
  display: flex;
  div {
    width: 100%;
    max-width: 600px;
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
`;
