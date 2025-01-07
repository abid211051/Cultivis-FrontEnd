"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Define a type for a navigation item
type NavItem = {
  name: string;
  url: string; // URL or link associated with the item
  icon?: React.ComponentType; // Optional React component for icons
};

// Define props for the NavMain component
type NavMainProps = {
  items: NavItem[];
};

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#109c6d]">Tabs</SidebarGroupLabel>
      <SidebarMenu className="flex flex-col gap-3">
        {items.map((item) => (
          <SidebarMenuItem key={item.name} className="group/collapsible">
            <SidebarMenuButton
              tooltip={item.name}
              className={`${item.name === "Ask Quo" ? "text-yellow-300" : ""}`}
            >
              {item.icon && <item.icon />}
              <span>{item.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
