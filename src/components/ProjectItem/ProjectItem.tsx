import { Link } from "../../types/Link";

type ProjectItemProps = {
  padding: string;
  title: string;
  date: string;
  description: string;
  techStack: string;
  links: Link[];
};

export default function ProjectItem({
  padding,
  title,
  date,
  description,
  techStack,
  links,
}: ProjectItemProps) {
  const linksClass = (length: number, index: number) => {
    const baseClass = "text-blue-600 visited:text-purple-600";

    if (index === 0) {
      return baseClass + " " + "pr-2";
    }

    if (length - 1 !== index) {
      return baseClass + " " + "px-2";
    }

    return baseClass + " " + "pl-2";
  };

  return (
    <div class={`flex flex-col gap-3 pb-5 ${padding}`}>
      <div class="flex justify-between items-end">
        <span class="text-xl font-medium mr-10">{title}</span>
        <span class="text-xs">{date}</span>
      </div>
      <div class="py-3">
        <span>{description}</span>
      </div>
      <div>
        <span class="text-sm">{techStack}</span>
      </div>
      <div class="flex justify-end">
        {links.map((link, index) => (
          <>
            <a href={link.url} class={linksClass(links.length, index)}>
              {link.name}
            </a>
            {links.length - 1 !== index && <span>/</span>}
          </>
        ))}
      </div>
    </div>
  );
}
