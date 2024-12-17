import {
  MapPin,
  CloudMoon,
  Waves,
  Droplet,
  WindArrowDown,
  Wind,
} from "lucide-react";

import Image from "next/image";
export default function HomeWeather() {
  return (
    // border-2
    <div className="bg-slate-200 lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-7 rounded-xl  flex flex-col justify-between p-2 lg:m-0 mb-5">
      <div aria-label="location" className="flex items-center gap-2">
        <MapPin size={15} strokeWidth={2} />
        <p className="text-sm uppercase">DhoonShadda Bazar feni, Bangladesh</p>
      </div>
      <div
        aria-label="temperature"
        className="flex justify-around items-center py-1"
      >
        <div className="flex items-center gap-2">
          <span className="text-6xl">28 &#176;C</span>
          <div className="flex flex-col">
            <span className="text-sm">High:32&#176;C</span>
            <span className="text-sm">Low:12&#176;C</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-center">Mid Rain</p>
          <Image src={"/cloudy-night.png"} width={70} height={70} alt="night" />
        </div>
      </div>
      <div
        aria-label="other weather metrics"
        className="flex justify-between pb-1"
      >
        <div>
          <div className="flex items-center gap-1">
            <Waves size={15} />
            <span className="text-xs">Humidity</span>
          </div>
          <p className="font-semibold">30%</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <Droplet size={15} />
            <span className="text-xs">Precipitation</span>
          </div>
          <p className="font-semibold">5.1ml</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <WindArrowDown size={15} />
            <span className="text-xs">Pressure</span>
          </div>
          <p className="font-semibold">450hPa</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <Wind size={15} />
            <span className="text-xs">Wind</span>
          </div>
          <p className="font-semibold">5km/h</p>
        </div>
      </div>
      <div aria-label="future forecast">
        <div className="w-full flex justify-between p-1 bg-white rounded-md my-1">
          <button className="flex-1 bg-slate-200 rounded-md">Hourly</button>
          <button className="flex-1 rounded-md">Weekly</button>
        </div>
        <div className="flex justify-between">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex flex-col justify-center items-center">
              <span className="font-semibold text-sm">Now</span>
              <div className="flex justify-center items-center">
                <CloudMoon size={12} />
                <span className="text-xs">100%</span>
              </div>
              <span className="font-semibold text-sm">19&#176;C</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
