import ProjectItem from "../ProjectItem/ProjectItem";

export default function Portfolio() {
  return (
    <div class="p-10">
      <ul>
        <li class="divide-y">
          <ProjectItem
            padding="pb-5"
            title="both_of_us"
            date="23년 3월 ~ 현재"
            description="100일, 1년 단위 기념일을 알려주는 앱"
            techStack="Flutter, Firebase"
            links={[
              { name: "Github", url: "https://github.com/tyange/both_of_us" },
              {
                name: "App Store",
                url: "https://apps.apple.com/kr/app/%EB%91%98%EC%9D%B4%EC%84%9C/id6474128449",
              },
              {
                name: "Web App",
                url: "https://both-of-us.firebaseapp.com/",
              },
            ]}
          />
          <ProjectItem
            padding="py-5"
            title="to-be-published"
            date="22년 6월 ~ 현재"
            description="선별된 출판사의 출간예정도서를 확인할 수 있는 웹 앱"
            techStack="Vue, tailwindcss, pinia, vee-validate"
            links={[
              {
                name: "Github",
                url: "https://github.com/tyange/to-be-published",
              },
              {
                name: "Web App",
                url: "https://to-be-published.vercel.app/",
              },
            ]}
          />
          <div class=""></div>
        </li>
      </ul>
    </div>
  );
}
