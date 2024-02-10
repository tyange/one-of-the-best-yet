import Container from "../Container/Container";
import LogoBox from "../LogoBox/LogoBox";

import { preventDragOver } from "~/utils/preventDragOver";

import "./MainGrid.css";

export default function MainGrid() {
  return (
    <main class="flex justify-center items-center" onDragOver={preventDragOver}>
      <div id="main-grid" class="w-full h-screen grid">
        <Container areaName="header">header</Container>
        <Container areaName="introduction">introduction</Container>
        <Container areaName="career">career</Container>
        <Container areaName="portfolio">portfolio</Container>
        <LogoBox areaName="logo-box" />
        <Container areaName="footer">footer</Container>
      </div>
    </main>
  );
}
