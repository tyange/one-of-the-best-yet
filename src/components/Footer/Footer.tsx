export default function Footer() {
  return (
    <div class="flex justify-end p-10">
      <footer class="flex gap-2 items-center text-xs">
        <span>ⓒ</span>
        <span>tyange</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
