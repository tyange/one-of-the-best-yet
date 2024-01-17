import { JSX } from "solid-js";
import { preventDragOver } from "../../utils/preventDragOver";

interface ContainerProps {
  children: JSX.Element;
  areaName: string;
  padding: string;
}

export default function Container({
  children,
  areaName,
  padding,
}: ContainerProps) {
  return (
    <div
      class="w-full h-full flex items-center justify-center"
      style={{ "grid-area": areaName }}
    >
      <div class={`w-full h-full border-2 shadow-md rounded-3xl ${padding}`}>
        {children}
      </div>
    </div>
  );
}
