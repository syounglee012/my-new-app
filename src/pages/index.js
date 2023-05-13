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
    <>
      <About />
      <Experience />
      <Project />
    </>
  );
}
