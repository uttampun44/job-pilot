import { bgColors } from "@/data/bgcolors";
import { cn } from "./ui/lib/utils";

export default function TagsBatch({ tags }: { tags: string[] }) {
  return (
    <div className={cn("flex flex-wrap gap-x-2")}>
      {tags.map((tag: string, index: number) => (
        <span
          key={index}
          className={cn(`inline-block mr-1 mb-1 rounded-full px-2 py-1 ${bgColors[index % bgColors.length]}`)}
        >
          {tag.trim()}
        </span>
      ))}   
    </div>
  );
}