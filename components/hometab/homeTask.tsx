"use client";

import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  setYear,
} from "date-fns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { SquareArrowOutUpRight, ClipboardList } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

// interface Day {
//   date: Date;
// }

export default function HomeTask() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDays, setSelectedDays] = useState<Date[]>(
    getMonthDays(currentDate)
  );

  // Utility: Generate Days for the Month
  function getMonthDays(date: Date): Date[] {
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  }

  // Handle Month Change
  const handleMonthChange = (value: string) => {
    const newMonth = new Date(
      currentDate.getFullYear(),
      parseInt(value),
      currentDate.getDate()
    );
    setCurrentDate(newMonth);
    setSelectedDays(getMonthDays(newMonth));
  };

  // Handle Year Change
  const handleYearChange = (value: string) => {
    const newYear = setYear(currentDate, parseInt(value));
    setCurrentDate(newYear);
    setSelectedDays(getMonthDays(newYear));
  };

  // Generate Month Options
  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: format(new Date(2023, i, 1), "MMMM"),
  }));

  const years = Array.from({ length: 11 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <div
      // border-2
      className="bg-slate-200 lg:row-start-1 lg:row-span-1 py-2 lg:col-start-8 lg:col-span-5 rounded-xl  flex flex-col gap-2 lg:m-0 mb-5"
      aria-label="Quick Task view section"
    >
      <div className="flex justify-between items-center  px-2">
        <div className="flex items-center gap-2 rounded-tl-md">
          <ClipboardList
            size={22}
            strokeWidth={2}
            className="rounded-md p-[2px] bg-white"
          />
          <span className="font-medium text-sm">Tasks</span>
        </div>
        <Link
          href={"#"}
          className="flex items-center justify-between gap-2 p-2 bg-white rounded-md text-blue-700"
        >
          <span className="text-xs">View All</span>
          <SquareArrowOutUpRight size={12} strokeWidth={2} />
        </Link>
      </div>
      <div className="px-3">
        <div className="flex gap-1 border-b-2 border-white">
          <Select
            onValueChange={(e) => handleMonthChange(e)}
            value={`${currentDate.getMonth()}`}
          >
            <SelectTrigger className="w-[80px] px-1 border-r-2 border-white">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                {months.map((month) => (
                  <SelectItem key={month.value} value={`${month.value}`}>
                    {month.label.substring(0, 3)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => handleYearChange(e)}
            value={`${currentDate.getFullYear()}`}
          >
            <SelectTrigger className="w-[80px] px-1">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                {years.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Carousel className="max-w-full border-b-2 border-white">
        <CarouselContent>
          {selectedDays.map((day, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col basis-1/5 lg:basis-1/5 items-center"
            >
              <span className="text-xs text-gray-700">
                {format(day, "EEE")}
              </span>
              <span className="text-sm font-semibold ">{format(day, "d")}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ScrollArea className="w-full lg:h-auto h-[200px] rounded-b-md px-2">
        {Array.from({ length: 24 }, (_, i) =>
          i % 2 != 0 ? (
            <div key={i} className="mb-2 grid grid-cols-6 gap-2">
              <div className="col-span-1 flex flex-col justify-end items-end">
                <span className="text-xs">
                  {i < 10 ? "0" + i + ":" + "00" : i + ":" + "00"}
                </span>
              </div>
              <div className="col-span-5 border-b-2 border-white border-dashed">
                <div className="flex items-start p-2 bg-white mb-1 rounded-md gap-1">
                  <span className="text-left line-clamp-4 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi ut possimus rerum a corrupti ducimus similique,
                    doloribus accusantium debitis laboriosam?
                  </span>
                  <input type="checkbox" className="cursor-pointer" />
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="mb-2 grid grid-cols-6 gap-2">
              <div className="col-span-1 flex flex-col justify-end items-end">
                <span className="text-xs">
                  {i < 10 ? "0" + i + ":" + "00" : i + ":" + "00"}
                </span>
              </div>
              <div className="col-span-5 border-b-2 border-white border-dashed"></div>
            </div>
          )
        )}
      </ScrollArea>
    </div>
  );
}
