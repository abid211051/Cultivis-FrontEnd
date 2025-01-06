"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Define a type for a project item
type ProjectItem = {
  name: string; // Project name
  title?: string; // Optional tooltip title
  icon?: React.ComponentType; // Optional icon as a React component
};

// Define props for the NavProjects component
type NavProjectsProps = {
  projects: ProjectItem[];
};

export function NavProjects({ projects }: NavProjectsProps) {
  // const { isMobile } = useSidebar();

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#109c6d]">Tools</SidebarGroupLabel>
        <SidebarMenu>
          {projects.map((item) => (
            <SidebarMenuItem key={item.name} className="group/collapsible">
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
