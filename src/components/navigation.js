import React, { useEffect } from "react";
import styled from "styled-components";

export default function Navigation() {
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
        <h4>SL</h4>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  #mainNav {
    width: 100%;
    height: 100px;
    top: 0;
    background-color: #000;
    transition: transform 0.3s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0.7;
  }

  .nav-hidden {
    transform: translateY(-100%);
  }

  h4 {
    font-size: 30px;
    color: #64ffda;
    /* margin: 0;
    padding: 0; */
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
`;
