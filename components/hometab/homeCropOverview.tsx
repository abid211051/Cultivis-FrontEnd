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
    <div className="row-start-2 row-span-1 col-start-9 col-span-4 rounded-xl border-2 flex flex-col  justify-between gap-2">
      <Link
        href={"#"}
        className="flex-1 flex flex-col justify-between gap-3 bg-gradient-to-t from-[#b4cdb4] to-[#e7e7e7] p-1 rounded-t-md"
      >
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-1">
            <Vegan
              size={22}
              strokeWidth={2}
              className="border-2 p-[1px] rounded-md"
            />
            <span className="font-medium text-sm">Field Overview</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs">View All</span>
            <SquareArrowOutUpRight size={12} strokeWidth={2} />
          </div>
        </div>
        <span className="text-4xl text-emerald-800 font-medium">GOOD</span>
      </Link>
      <Link href={"#"} className="flex-1 flex flex-col justify-between gap-2">
        <div className="flex items-center gap-1">
          <WalletMinimal
            size={22}
            strokeWidth={2}
            className="border-2 p-[3px] rounded-md"
          />
          <span className="font-medium text-sm">Expense</span>
        </div>

        <ScrollArea>
          <div className="flex items-center text-3xl font-medium">
            <DollarSign size={27} strokeWidth={2} />
            <span>2212033331211</span>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex items-center justify-between gap-1 bg-slate-200 p-2">
          <span className="text-sm">View Finance Report</span>
          <SquareArrowOutUpRight size={12} strokeWidth={2} />
        </div>
      </Link>
      <Link
        href={"#"}
        className="flex-1 flex flex-col justify-center bg-gradient-to-t from-[#b4cdb4] to-[#e7e7e7] items-center rounded-b-md"
      >
        <div className="flex items-center justify-center gap-2 p-1">
          <Users size={22} strokeWidth={2} />
          <span className="xl:text-2xl">Ask In Community</span>
        </div>
      </Link>
    </div>
  );
}
