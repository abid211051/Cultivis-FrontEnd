import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import HomeWeather from "@/components/hometab/homeWeather";
import HomeTask from "@/components/hometab/homeTask";
import HomeNews from "@/components/hometab/homeNews";
import HomeCropOverview from "@/components/hometab/homeCropOverview";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="lg:h-screen bg-[#d9dede]">
        <header className="lg:h-[5%] h-[40px] flex items-center">
          <SidebarTrigger className="ml-2" />
        </header>
        <div className="h-[95%] grid lg:grid-rows-2 lg:grid-cols-12 grid-cols-1 xl:gap-5 gap-3 py-3 xl:py-5 xl:px-5 lg:px-3 px-2">
          <HomeWeather />
          <HomeTask />
          <HomeNews />
          <HomeCropOverview />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
