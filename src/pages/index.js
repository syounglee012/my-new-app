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
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);

  const HandleAboutScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  const HandleExperienceScroll = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };
  const HandleProjectScroll = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === experienceRef.current) {
            setExperienceVisible(true);
            observer.unobserve(entry.target);
          } else if (entry.target === projectRef.current) {
            setProjectVisible(true);
            observer.unobserve(entry.target);
          }
        }
      });
    });

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

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
      <span className={experienceVisible ? "transition" : ""}>
        <Experience />
      </span>
      <div ref={projectRef} />
      <span className={projectVisible ? "transition" : ""}>
        <Project />
      </span>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .transition {
    animation: fadeIn 2s ease-in-out forwards; /* Animation properties */
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
