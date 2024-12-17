"use client";

import * as React from "react";
import {
  BrainCircuit,
  Home,
  ClipboardList,
  Wallet2,
  Users,
  Rss,
  MessageCircleQuestion,
  Map,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Abed",
    email: "abed@gmail.com",
    avatar: "/farmhub.png",
  },
  teams: [
    {
      name: "Farmhub",
      logo: "/min.webp",
      plan: "System",
    },
  ],
  navMain: [
    {
      name: "Ask Quo",
      url: "#",
      icon: BrainCircuit,
    },
    {
      name: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      name: "My Field",
      url: "#",
      icon: Map,
    },
    {
      name: "Task",
      url: "#",
      icon: ClipboardList,
    },
    {
      name: "Expense",
      url: "#",
      icon: Wallet2,
    },
    {
      name: "Community",
      url: "#",
      icon: Users,
    },
    {
      name: "News",
      url: "#",
      icon: Rss,
    },
  ],
  projects: [
    {
      name: "Feedback",
      url: "#",
      icon: MessageCircleQuestion,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
