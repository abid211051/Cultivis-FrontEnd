import { Rss, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
export default function HomeNews() {
  return (
    <div className="row-start-2 row-span-1 col-start-1 col-span-8 rounded-xl border-2 flex flex-col gap-2 lg:m-0 mb-5 p-2">
      <div className="flex justify-between  items-center">
        <div className="flex items-center gap-2 rounded-tl-md">
          <Rss size={22} strokeWidth={2} className="rounded-md border-[3px]" />
          <span className="font-medium text-sm">News</span>
        </div>
        <Link
          href={"#"}
          className="flex items-center justify-between gap-2 p-2 bg-slate-200 rounded-md"
        >
          <span className="text-xs">View All</span>
          <SquareArrowOutUpRight size={12} strokeWidth={2} />
        </Link>
      </div>

      <ScrollArea className="lg:h-full h-[300px] rounded-b-md">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-1.5 mb-3 bg-slate-200 rounded-md"
          >
            <Image
              src={"/Screenshot 2024-09-09 144240.png"}
              width={100}
              height={40}
              alt="img"
              className="w-auto h-[80px] rounded-l-md"
            />
            <div className="flex flex-col gap-1">
              <p className="text-xs">Warning</p>
              <p className="line-clamp-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laudantium. Recusandae dolorum repellat totam. Placeat
                ratione commodi deleniti sint iste? Lorem ipsum dolor sit amet
                con
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
