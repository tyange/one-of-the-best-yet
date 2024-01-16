import "./MainGrid.css";

export default function MainGrid() {
  return (
    <main class="flex justify-center items-center">
      <div
        id="main-grid"
        class="grid grid-cols-4 w-screen lg:w-[1000px] h-screen py-20"
      >
        <div
          class="border border-t-2 border-l-2"
          style={{ "grid-area": "header" }}
        >
          1
        </div>
        <div class="border border-r-2" style={{ "grid-area": "portfolio" }}>
          2
        </div>
        <div class="border border-t-2" style={{ "grid-area": "introduction" }}>
          introduction
        </div>
        <div class="border border-l-2" style={{ "grid-area": "career" }}>
          career
        </div>
        <div class="border" style={{ "grid-area": "skills" }}>
          skills
        </div>
        <div
          class="three border border-b-2 border-l-2"
          style={{ "grid-area": "three" }}
        >
          3
        </div>
        <div
          class="four border border-r-2 border-b-2"
          style={{ "grid-area": "four" }}
        >
          4
        </div>
      </div>
    </main>
  );
}
