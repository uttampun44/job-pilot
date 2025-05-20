import { cn } from "./ui/lib/utils";

const bgColors = [
  "bg-blue-300 text-blue-800",
  "bg-green-300 text-green-800",
  "bg-yellow-300 text-yellow-800",
  "bg-purple-300 text-purple-800",
  "bg-pink-300 text-pink-800",
  "bg-red-300 text-red-800",
  "bg-indigo-300 text-indigo-800",
];

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