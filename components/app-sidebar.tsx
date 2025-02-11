"use client";

import { User, Timer, Book, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function AppSidebar() {
  const { theme, toggleTheme } = useTheme();

  const items = [
    { title: "Profil", url: "#", icon: User },
    { title: "Absences / Retards", url: "#", icon: Timer },
    { title: "Réservations", url: "#", icon: Book },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={toggleTheme}>
                  <Button aria-label="Bouton pour changer le thème de la page">
                    {theme === "dark" ? <Sun /> : <Moon />}
                    <span>
                      {theme === "dark" ? "Mode clair" : "Mode sombre"}
                    </span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
