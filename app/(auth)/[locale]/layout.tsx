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
      <div className="relative w-[50%] h-screen bg-black rounded-l-[20px]">
        <Image
          className="w-full h-screen rounded-l-[20px] object-cover"
          src={"/images/login-img.png"}
          width={1000}
          height={150}
          alt="login-image"
        />
        <p className="absolute left-24 bottom-36 right-72 text-white text-3xl font-medium p-2 rounded">
          Digital Fortress has been a game-changer for our content creation process.
          <br />
          <br />
          The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
        </p>
        <div className="absolute bottom-12 left-24 ml-2">
          <p className="font-medium text-white">Lily Alisson</p>
          <p className="text-custom-green">CMO at Digital Fortress</p>
        </div>
      </div>
    </div>
  );
}
