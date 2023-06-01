import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

export default function Hamburger({
  HandleAboutScroll,
  HandleExperienceScroll,
  HandleProjectScroll,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef(null);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeRef.current && !closeRef.current.contains(event.target)) {
        return setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeRef]);

  return (
    <Container ref={closeRef}>
      <h4
        className="logo"
        onClick={() => (window.location.href = "https://www.samlee.tech")}
      >
        SL
      </h4>
      <input
        type="checkbox"
        className={"check"}
        aria-labelledby="checkbox"
        checked={isOpen}
        onClick={() => handleClick()}
        onChange={() => handleClick()}
      />
      <div className="ham-menu">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className={`menu-items`}>
        <li onClick={() => HandleAboutScroll()}>About</li>
        <li onClick={() => HandleExperienceScroll()}>Work Experience</li>
        <li onClick={() => HandleProjectScroll()}>Project</li>
        <li
          onClick={() =>
            (window.location.href = `mailto: swe.samlee@gmail.com`)
          }
        >
          Contact
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ::after,
  ::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .logo {
    position: absolute;
    width: fit-content;
    top: 16px;
    left: 16px;
    font-size: 1.5rem;
    padding: 0.3rem;
    background-color: #0a192f;
    color: #ffda63;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }

  .menu-items {
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 1rem 26rem;
    list-style: none;
    opacity: 0;
    background-color: #ffda63;
    transform: translateY(-5%);
    transition: transform 1s ease-in-out, opacity 1s;
    pointer-events: none;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 850px) {
      display: grid;
      padding: 1rem 0rem;
    }
  }

  .menu-items li {
    width: fit-content;
    min-width: 180px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
    font-size: 20px;
    color: #0a192f;
    padding: 0.5rem;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }

  .menu-items li :hover {
    color: rgb(174, 174, 174);
  }

  .menu-items li :active {
    color: rgb(174, 174, 174);
  }

  .check {
    position: absolute;
    top: 0;
    right: 10px;
    height: 3rem;
    width: 3rem;
    opacity: 0;
    z-index: 3;
  }

  .check:hover {
    cursor: pointer;
  }

  .check:checked ~ .menu-items {
    pointer-events: all;
    transform: translateY(0%);
    opacity: 1;
  }

  .ham-menu {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 7px;
    right: 10px;
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffda63;
    cursor: pointer;
  }

  .ham-menu .line {
    background-color: black;
    border-radius: 1rem;
    width: 19px;
    height: 2px;
  }

  .ham-menu .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .ham-menu .line2 {
    transition: opacity 0.4s ease-in-out;
  }

  .ham-menu .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .check:checked ~ .ham-menu .line1 {
    display: block;
    transform: rotate(43deg);
  }

  .check:checked ~ .ham-menu .line2 {
    opacity: 0;
  }

  .check:checked ~ .ham-menu .line3 {
    display: block;
    transform: rotate(-43deg);
  }
`;
