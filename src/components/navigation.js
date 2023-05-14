import React, { useEffect } from "react";
import styled from "styled-components";
import Hamburger from "./hamburger";

export default function Navigation({
  HandleAboutScroll,
  HandleExperienceScroll,
  HandleProjectScroll,
}) {
  useEffect(() => {
    if (window) {
      let prevScrollPos = window.pageYOffset;
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          document.getElementById("mainNav").classList.remove("nav-hidden");
        } else {
          document.getElementById("mainNav").classList.add("nav-hidden");
        }
        prevScrollPos = currentScrollPos;
      };
    }
  }, []);

  return (
    <Container>
      <nav id="mainNav">
        <Hamburger
          HandleAboutScroll={HandleAboutScroll}
          HandleExperienceScroll={HandleExperienceScroll}
          HandleProjectScroll={HandleProjectScroll}
        />
      </nav>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  #mainNav {
    width: 100%;
    height: 70px;
    top: 0;
    background-color: #ffda63;
    transition: transform 0.3s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.7;
  }

  .nav-hidden {
    transform: translateY(-100%);
  }

  h4 {
    font-size: 30px;
    color: #ffda63;
    z-index: 2;
    /* margin: 0;
    padding: 0; */
  }
`;
