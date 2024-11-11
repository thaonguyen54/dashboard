import React from "react";
import Image from "next/image";
import {NextIntlClientProvider, useMessages} from 'next-intl';

import LanguagueSelector from "../../components/LanguageSelector";
import ThemeToggle from "../../components/ThemeToggle";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const messages = useMessages();
  const { THEME, LANGUAGE } = messages.Index as any
  
  return (
    <div className="flex w-full min-h-screen justify-around">
      <div className="w-[50%] min-h-screen flex flex-col items-center justify-around p-8">
        <NextIntlClientProvider messages={THEME} >
          <ThemeToggle width="293" height="40"/>
        </NextIntlClientProvider>
        {children}
        <NextIntlClientProvider messages={LANGUAGE} >
          <LanguagueSelector/>
        </NextIntlClientProvider>
      </div>
      <div className="w-[50%] bg-black rounded-l-[20px]">
        <Image
          className="w-full rounded-l-[20px] object-cover"
          src={"/images/login-img.png"}
          width={1000}
          height={150}
          alt="login-image"
        />
      </div>
    </div>
  );
}
