export default function Introduction() {
  return (
    <div class="p-10 w-full">
      <div class="flex flex-col gap-3 w-full mb-5">
        <div>
          <span class="text-2xl font-semibold italic">유태양</span>
        </div>
        <div>
          <a href="mailto:usun16@gmail.com">usun16@gmail.com</a>
        </div>
        <div>
          <ul class="flex gap-2">
            <li>
              <a href="https://github.com/tyange" class="w-6 h-6 block">
                <img
                  src="/images/logo/github.svg"
                  alt="github logo"
                  class="w-full h-full"
                />
              </a>
            </li>
            <li>
              <a href="https://velog.io/@tyange/posts" class="w-6 h-6 block">
                <img
                  src="/images/logo/velog-logo.png"
                  alt="velog logo"
                  class="w-full h-full"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
