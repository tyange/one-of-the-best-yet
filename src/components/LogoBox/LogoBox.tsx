import Logo from "./Logo/Logo";

interface LogoBoxProps {
  areaName: string;
}

export default function LogoBox({ areaName }: LogoBoxProps) {
  return (
    <div class="p-10">
      <p class="text-xl mb-7">좋아하고 자주 쓰는 기술들</p>
      <div
        class="grid grid-cols-3 items-center justify-items-center md:justify-items-start h-80"
        style={{ "grid-area": areaName }}
      >
        <Logo src="/images/logo/react-original.svg" />
        <Logo src="/images/logo/vuejs-original.svg" />
        <Logo src="/images/logo/solidjs.svg" />
        <Logo src="/images/logo/flutter-logo.svg" />
        <Logo src="/images/logo/tailwindcss-plain.svg" />
        <Logo src="/images/logo/angular_gradient.png" />
        <Logo src="/images/logo/typescript.png" />
        <Logo src="/images/logo/golang.png" />
      </div>
    </div>
  );
}
