import { MetaProvider, Title } from "@solidjs/meta";

import MainGrid from "~/components/MainGrid/MainGrid";

export default function Home() {
  return (
    <>
      <MetaProvider>
        <Title>태양의 온라인 이력서 | one of the best yet</Title>
      </MetaProvider>
      <MainGrid />
    </>
  );
}
