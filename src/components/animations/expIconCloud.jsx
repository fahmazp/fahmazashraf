import { IconCloud } from "@/components/magicui/icon-cloud"

const slugs = [
  "javascript",
  "react",
  "mongodb",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "jsonwebtokens",
  "figma",
  "git",
  "github",
  "php",
  "tailwindcss",
  "visualstudiocode",
  "shadcnui",
  "postman"
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
