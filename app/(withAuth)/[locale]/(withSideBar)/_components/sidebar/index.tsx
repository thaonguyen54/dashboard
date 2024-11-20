"use client"
import React, { useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeToggle from "@/app/_components/ThemeToggle";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import TaskIcon from "@/app/_components/Icons/TaskIcon";
import Link from "next/link";
import DashboardIcon from "@/app/_components/Icons/DashboardIcon";
import WifiIcon from "@/app/_components/Icons/WifiIcon";
import ScheduleIcon from "@/app/_components/Icons/ScheduleIcon";

type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
  url: string;
}

const SIDEBAR_ITEMS: SidebarItemProps[] = [
  { icon: <DashboardIcon width="24" height="24" />, text: "Dashboard", url: '/dashboard' },
  { icon: <TaskIcon width="24" height="24" />, text: "Task", url: '/task'  },
  { icon: <WifiIcon width="24" height="24" />, text: "Projects", url: '/project'  },
  { icon: <ScheduleIcon width="24" height="24" />, text: "Schedule", url: '/schedule'  },
]

const AppSideBar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const [itemClicked, setIsClicked] = useState<SidebarItemProps>(
    SIDEBAR_ITEMS.find((item) => item.text === "Dashboard") || SIDEBAR_ITEMS[0]
  );

  const {open, setOpen} = useSidebar();
  
  const COLLAPSE_CONTENT = {
    true: {
      file: "digital-image.png",
      arrow: <ChevronLeft className="w-4 h-4" />,
    },
    false: {
      file: "Logo.png",
      arrow: <ChevronRight className="w-4 h-4" />,
    }
  }

  const handleSidebarToggle = () => {
    setOpen(!open);
  }

  const TOGGLE_COLLAPSE_SIZE = {
    true: {
      width: "234px",
      height: "44px"
    },
    false: {
      width: "48px",
      height: "48px"
    }
  }

  return (
    <Sidebar collapsible="icon" {...props} className="flex h-full py-2 px-1 group-data-[side=left]:border-r-0">
      <div className="p-1 flex flex-col flex-grow w-full h-full rounded-lg bg-main-opposition ">
        <div>
          <SidebarHeader className="border-b-2">
            <div className={`flex ${!open && 'flex-col gap-3'} justify-between items-center p-1 pb-6`}>
              <Image
              //Refactor size
                className="w-[120px] h-[32px]"
                src={`/images/${COLLAPSE_CONTENT[`${open}`].file}`}
                width={100}
                height={32}
                alt="Digital Fortress"
              />
              <div onClick={handleSidebarToggle} className="bg-bg-chevron text-text-chevron w-8 h-8 rounded-2xl flex items-center justify-center cursor-pointer">
                {COLLAPSE_CONTENT[`${open}`].arrow}
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent className="pt-8">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {SIDEBAR_ITEMS.map((item) => (
                    <SidebarMenuItem className="flex justify-center items-center" key={item.text}>
                      <SidebarMenuButton onClick={() => {setIsClicked(item)}} className={`hover:bg-custom-green font-semibold ${itemClicked.text === item.text ? 'bg-custom-green' : ""}`} asChild>
                        <Link href={item.url} className="py-5">
                            {item.icon}
                            <span className={`text-sm ${itemClicked.text === item.text ? 'text-primary-dark' : "text-secondary-grey-dark"}`}>{item.text}</span>
                        </Link>
                      </SidebarMenuButton>
                      {
                        item.text === 'Schedule' &&
                        <SidebarMenuBadge className="flex items-center ml-2 mt-1.5">
                          <button className="p-1 w-7 h-7 text-black bg-custom-green rounded-xl">  
                            2
                          </button>
                        </SidebarMenuBadge> 
                      }
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
        <div className="flex-grow"></div>
        <SidebarFooter className="flex justify-center items-center">
          <ThemeToggle width={`${TOGGLE_COLLAPSE_SIZE[`${open}`].width}`} height={`${TOGGLE_COLLAPSE_SIZE[`${open}`].height}`} isCollapsed={open}/>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
};

export default AppSideBar;

