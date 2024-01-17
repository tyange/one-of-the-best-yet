import { createSignal } from "solid-js";

import Logo from "./Logo/Logo";

interface LogoBoxProps {
  areaName: string;
}

export default function LogoBox({ areaName }: LogoBoxProps) {
  const [isDrag, setIsDarg] = createSignal(false);
  const [prevPositionX, setPrevPositionX] = createSignal(0);
  const [prevPositionY, setPrevPositionY] = createSignal(0);
  const [draggingNode, setDraggingNode] = createSignal<HTMLImageElement | null>(
    null
  );

  const dragStart = (e: DragEvent) => {
    setPrevPositionX(e.clientX);
    setPrevPositionY(e.clientY);
    setDraggingNode(e.target as HTMLImageElement);
    setIsDarg(true);
  };

  const drag = (e: DragEvent) => {
    const dragging = isDrag();
    const prevPosX = prevPositionX();
    const prevPosY = prevPositionY();
    const targetNode = draggingNode();

    if (!dragging || !targetNode) return;

    const differPosX = prevPosX - e.clientX;
    const differPosY = prevPosY - e.clientY;

    setPrevPositionX(e.clientX);
    setPrevPositionY(e.clientY);

    console.log(e.clientX);

    let left = targetNode.offsetLeft - differPosX;
    let top = targetNode.offsetTop - differPosY;

    if (left < 0) {
      left = 0;
    } else if (left > 200) {
      left = 200;
    }

    if (top < 0) {
      top = 0;
    } else if (top > 275) {
      top = 275;
    }

    targetNode.style.left = left + "px";
    targetNode.style.top = top + "px";
  };

  const dragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const dragEnd = (e: DragEvent) => {
    setIsDarg(false);
    setPrevPositionX(0);
    setPrevPositionY(0);
    setDraggingNode(null);
  };

  return (
    <div class="relative" style={{ "grid-area": areaName }}>
      <Logo
        src="/images/logo/react-original.svg"
        position="left-10 top-7"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/vuejs-original.svg"
        position="right-10 top-9"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/solidjs.svg"
        position="top-28 left-24"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/flutter-logo.svg"
        position="bottom-11 right-5"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/tailwindcss-plain.svg"
        position="top-32 right-6"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/angular_gradient.png"
        position="top-24 left-3"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/typescript.png"
        position="bottom-24 left-20"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
      <Logo
        src="/images/logo/golang.png"
        position="bottom-10 left-10"
        dragStart={dragStart}
        drag={drag}
        dragOver={dragOver}
        dragEnd={dragEnd}
      />
    </div>
  );
}
