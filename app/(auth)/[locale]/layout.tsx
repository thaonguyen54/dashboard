import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {AbstractIntlMessages, NextIntlClientProvider, useMessages} from 'next-intl';

import LanguagueSelector from "../../_components/LanguageSelector";
import ThemeToggle from "../../_components/ThemeToggle";
import { isTokenExpired } from "@/app/utils/validateJWT";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("at")?.value;

  if (accessToken && !isTokenExpired(accessToken)) {
    redirect("/dashboard"); // Redirect to dashboard if user logged
  }
  
  const messages: AbstractIntlMessages = useMessages();
  
  return (
    <div className="flex w-full min-h-screen justify-around">
      <div className="w-[50%] min-h-screen flex flex-col items-center justify-around p-8">
        <NextIntlClientProvider messages={messages as AbstractIntlMessages}>
          <ThemeToggle width="293px" height="40px" isCollapsed={true}/>
            {children}
          <LanguagueSelector/>
        </NextIntlClientProvider>
      </div>
      <div className="flex flex-col justify-end w-[50%] min-h-screen bg-black rounded-l-[20px] bg-digitalFortress">
        <div className="items-end pr-44 ml-6 mb-6">
          <p className=" text-white text-3xl font-medium p-2 rounded">
            Digital Fortress has been a game-changer for our content creation process.
            <br />
            <br />
            The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
          </p>
          <div className="ml-2">
            <p className="font-medium text-white">Lily Alisson</p>
            <p className="text-custom-green">CMO at Digital Fortress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
