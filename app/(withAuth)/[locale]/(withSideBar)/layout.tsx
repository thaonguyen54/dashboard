import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import AppSideBar from "./_components/sidebar";
import DashboardHeading from "./_components/header";
import { cookies } from "next/headers";
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";

const withNavLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  const messages: AbstractIntlMessages = useMessages();
  return (
    <div className="bg-bg-dashboard">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSideBar />
        <div className="flex flex-col w-full min-h-screen">
          <NextIntlClientProvider messages={messages as AbstractIntlMessages}>
            <DashboardHeading />
            {children}
          </NextIntlClientProvider>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default withNavLayout;
