import Image from "next/image";
import { Inter } from "next/font/google";
import About from "./about";
import Experience from "./experience";
import Project from "./project";
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
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0a192f;
`;
