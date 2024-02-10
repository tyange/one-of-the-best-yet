import Container from "../Container/Container";
import LogoBox from "../LogoBox/LogoBox";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";

import { preventDragOver } from "~/utils/preventDragOver";

import "./MainGrid.css";

export default function MainGrid() {
  return (
    <main class="flex justify-center items-center" onDragOver={preventDragOver}>
      <div id="main-grid" class="w-full h-screen grid">
        <Container areaName="introduction">
          <Introduction />
        </Container>
        <Container areaName="career">career</Container>
        <Container areaName="portfolio">portfolio</Container>
        <LogoBox areaName="logo-box" />
        <Container areaName="footer">footer</Container>
      </div>
    </main>
  );
}
