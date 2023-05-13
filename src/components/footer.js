import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <div>Footer</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: yellow;
  position: absolute;
  bottom: 0;
`;
