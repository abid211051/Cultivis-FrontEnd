import Link from "next/link";
import {
  Vegan,
  SquareArrowOutUpRight,
  WalletMinimal,
  Users,
  DollarSign,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function HomeCropOverview() {
  return (
    // border-2
    <div className="bg-slate-200 lg:row-start-2 lg:row-span-1 lg:col-start-9 lg:col-span-4 rounded-xl flex flex-col justify-between gap-2">
      <Link
        href={"#"}
        className="flex-1 flex flex-col justify-between gap-3 bg-gradient-to-t from-[#b4cdb4] to-[#e7e7e7] px-2 pt-1 rounded-t-xl"
      >
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center gap-1">
            <Vegan
              size={22}
              strokeWidth={2}
              className="p-[2px] rounded-md bg-white"
            />
            <span className="font-medium text-sm">Field Overview</span>
          </div>
          <div className="flex items-center gap-1 text-blue-700">
            <span className="text-xs">View All</span>
            <SquareArrowOutUpRight size={12} strokeWidth={2} />
          </div>
        </div>
        <span className="text-4xl text-emerald-800 font-medium">GOOD</span>
      </Link>
      <Link href={"#"} className="flex-1 flex flex-col justify-between gap-2">
        <div className="flex items-center gap-1 px-2">
          <WalletMinimal
            size={22}
            strokeWidth={2}
            className="p-[2px] rounded-md bg-white"
          />
          <span className="font-medium text-sm">Expense</span>
        </div>

        <ScrollArea className="px-2">
          <div className="flex items-center text-3xl font-medium">
            <DollarSign size={25} strokeWidth={2} />
            <span>2212033331211</span>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex items-center justify-between gap-1 bg-white p-2 text-blue-700">
          <span className="text-sm">View Finance Report</span>
          <SquareArrowOutUpRight size={12} strokeWidth={2} />
        </div>
      </Link>
      <Link
        href={"#"}
        className="flex-1 flex flex-col justify-center bg-gradient-to-t from-[#b4cdb4] to-[#e7e7e7] items-center rounded-b-xl"
      >
        <div className="flex items-center justify-center gap-2 p-1">
          <Users size={22} strokeWidth={2} className="" />
          <span className="xl:text-2xl">Ask In Community</span>
        </div>
      </Link>
    </div>
  );
}
