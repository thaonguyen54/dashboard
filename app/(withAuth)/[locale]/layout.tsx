import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { isTokenExpired } from "@/app/utils/validateJWT";

import {AbstractIntlMessages, NextIntlClientProvider, useMessages} from 'next-intl';

const withAuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const cookieStore = cookies();
  // const accessToken = cookieStore.get("at")?.value;  

  // if (!accessToken || isTokenExpired(accessToken)) {
  //   redirect("/login"); // Redirect to login page if no access token
  // }

  const messages: AbstractIntlMessages = useMessages();

  return (
    <div suppressHydrationWarning>
      <NextIntlClientProvider messages={messages as AbstractIntlMessages}>
          {children}
      </NextIntlClientProvider>
    </div>
  )
};

export default withAuthLayout;
