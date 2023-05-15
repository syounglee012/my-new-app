import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p>Built by Sam Lee with</p> <span>&emsp;&#9829;</span>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #0a192f;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    letter-spacing: 1px;
    color: #ccd6f6;
    opacity: 0.6;
    display: inline-block;
  }
  span {
    color: #ffda63;
    font-size: 14px;
  }
`;
