import Container from "../Container/Container";
import LogoBox from "../LogoBox/LogoBox";

import { preventDragOver } from "~/utils/preventDragOver";

import "./MainGrid.css";

export default function MainGrid() {
  return (
    <main class="flex justify-center items-center" onDragOver={preventDragOver}>
      <div
        id="main-grid"
        class="grid grid-cols-4 grid-rows-12 w-screen lg:w-[1000px] h-screen py-20 gap-3"
      >
        <Container areaName="header" padding="p-3">
          header
        </Container>
        <Container areaName="introduction" padding="p-3">
          introduction
        </Container>
        <Container areaName="career" padding="p-3">
          career
        </Container>
        <LogoBox areaName="logo-box" />
        <Container areaName="skills" padding="p-3">
          skills
        </Container>
        <Container areaName="portfolio" padding="p-3">
          portfolio
        </Container>
        <Container areaName="footer" padding="p-3">
          footer
        </Container>
      </div>
    </main>
  );
}
