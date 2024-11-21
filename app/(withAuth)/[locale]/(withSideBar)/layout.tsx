import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'
import AppSideBar from './_components/sidebar';
import DashboardHeading from './_components/header';
import { cookies } from 'next/headers';

const withNavLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
 const cookieStore = cookies()
const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  
  return (
    <div className='bg-bg-dashboard'> 
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSideBar/>
        <div className='flex flex-col w-full min-h-screen'>
          <DashboardHeading/>
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
};

export default withNavLayout;