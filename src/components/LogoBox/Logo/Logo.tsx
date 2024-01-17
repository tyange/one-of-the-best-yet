import { Accessor } from "solid-js";

interface LogoProps {
  src: string;
  position: string;
  dragStart: (e: DragEvent) => void;
  drag: (e: DragEvent) => void;
  dragOver: (e: DragEvent) => void;
  dragEnd: (e: DragEvent) => void;
}

export default function Logo({
  src,
  position,
  dragStart,
  drag,
  dragOver,
  dragEnd,
}: LogoProps) {
  return (
    <img
      class={`absolute w-10 h-10 ${position}`}
      src={src}
      draggable
      onDragStart={dragStart}
      onDrag={drag}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    />
  );
}
