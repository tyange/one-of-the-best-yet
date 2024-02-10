import { JSX } from "solid-js";

interface ContainerProps {
  children: JSX.Element;
  areaName: string;
}

export default function Container({ children, areaName }: ContainerProps) {
  return (
    <div
      class="flex items-center justify-center"
      style={{ "grid-area": areaName }}
    >
      <div class="w-full h-full">{children}</div>
    </div>
  );
}
