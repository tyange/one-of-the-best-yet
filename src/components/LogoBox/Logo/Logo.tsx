interface LogoProps {
  src: string;
}

export default function Logo({ src }: LogoProps) {
  return <img src={src} class="w-10 h-10" />;
}
