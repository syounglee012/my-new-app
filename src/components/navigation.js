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
        if (prevScrollPos > currentScrollPos || window.pageYOffset < 1) {
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
    animation: fadeIn 3s ease-in-out forwards; /* Animation properties */
    position: fixed;
    left: 0;
    z-index: 1;
    opacity: 0.2;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
