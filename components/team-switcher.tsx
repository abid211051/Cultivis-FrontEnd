"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";

import { Orbitron } from "next/font/google";

// Type definitions for team
interface Team {
  name: string;
  logo: string;
  plan: string;
}

interface TeamSwitcherProps {
  teams: Team[];
}

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  // const { isMobile } = useSidebar();
  const [activeTeam] = React.useState<Team>(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem className="group/collapsible">
        <SidebarMenuButton
          tooltip={activeTeam.name}
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Image
            src={`${activeTeam.logo}`}
            width={35}
            height={35}
            alt={activeTeam.name}
            className="rounded-lg"
          />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span
              className={`${orbitron.className} text-xl  truncate font-semibold`}
            >
              {activeTeam.name}
            </span>
            <span className="truncate text-xs text-[#ffb055]">
              {activeTeam.plan}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
