import { JSX } from "solid-js";

interface ContainerProps {
  children: JSX.Element;
  areaName: string;
}

export default function Container({ children, areaName }: ContainerProps) {
  return (
    <div
      class="w-full h-full flex items-center justify-center border"
      style={{ "grid-area": areaName }}
    >
      <div class="w-full h-full">{children}</div>
    </div>
  );
}
