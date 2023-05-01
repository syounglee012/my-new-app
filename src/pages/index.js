import Image from "next/image";
import { Inter } from "next/font/google";
import About from "./about/About";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import styled from "styled-components";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Navigation />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0a192f;
`;
