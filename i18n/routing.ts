import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'vi'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);