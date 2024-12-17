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
      <SidebarInset className="h-screen py-3 lg:px-3 px-2">
        {/* shrink-0 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 */}
        <header className="h-[5%]">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="h-[95%] lg:grid grid-rows-2 grid-cols-12 gap-3">
          <HomeWeather />
          <HomeTask />
          <HomeNews />
          <HomeCropOverview />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
