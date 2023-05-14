import React, { useRef, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import About from "./about";
import Experience from "./experience";
import Project from "./project";
import styled from "styled-components";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const HandleAboutScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  const HandleExperienceScroll = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };
  const HandleProjectScroll = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  return (
    <Container>
      <Navigation
        HandleAboutScroll={HandleAboutScroll}
        HandleExperienceScroll={HandleExperienceScroll}
        HandleProjectScroll={HandleProjectScroll}
      />
      <div ref={aboutRef} />
      <span className="transition">
        <About />
      </span>

      <div ref={experienceRef} />

      <Experience />
      <div ref={projectRef} />

      <Project />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .transition {
    transition-delay: 4s;
    transition: 4s ease in;
    animation: fadeIn 3s linear;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
