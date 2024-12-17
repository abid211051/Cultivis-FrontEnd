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
      className="row-start-1 row-span-1 col-start-8 col-span-5 rounded-xl border-2 flex flex-col gap-2 lg:m-0 mb-5"
      aria-label="Quick Task view section"
    >
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-2 rounded-tl-md">
          <ClipboardList
            size={22}
            strokeWidth={2}
            className="rounded-md border-[3px]"
          />
          <span className="font-medium text-sm">Tasks</span>
        </div>
        <Link
          href={"#"}
          className="flex items-center justify-between gap-2 p-2 bg-slate-200 rounded-md"
        >
          <span className="text-xs">View All</span>
          <SquareArrowOutUpRight size={12} strokeWidth={2} />
        </Link>
      </div>
      <div className="mb-4 px-3">
        <div className="flex items-center justify-between border-b-2">
          <Select
            onValueChange={(e) => handleMonthChange(e)}
            value={`${currentDate.getMonth()}`}
          >
            <SelectTrigger className="w-[80px] px-1">
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

      <Carousel className="w-full border-b-[1px]">
        <CarouselContent className="flex justify-between items-center">
          {selectedDays.map((day, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 flex flex-col items-center border-b-[1px] active:bg-green-800"
            >
              <span className="text-xs text-gray-500">
                {format(day, "EEE")}
              </span>
              <span className="text-sm font-semibold">{format(day, "d")}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
