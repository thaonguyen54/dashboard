import React from "react";
import Image from "next/image";
import {AbstractIntlMessages, NextIntlClientProvider, useMessages} from 'next-intl';

import LanguagueSelector from "../../_components/LanguageSelector";
import ThemeToggle from "../../_components/ThemeToggle";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const messages: AbstractIntlMessages = useMessages();
  
  return (
    <div className="flex w-full min-h-screen justify-around">
      <div className="w-[50%] min-h-screen flex flex-col items-center justify-around p-8">
        <NextIntlClientProvider messages={messages.Index as AbstractIntlMessages}>
          <ThemeToggle width="293" height="40"/>
            {children}
          <LanguagueSelector/>
        </NextIntlClientProvider>
      </div>
      <div className="flex flex-col justify-end w-[50%] min-h-screen bg-black rounded-l-[20px] ">
        <div className=" min-h-screen">
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
