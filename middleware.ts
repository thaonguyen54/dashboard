import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const initMiddleware = createMiddleware(routing);

const localeMiddleware = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    const languageSwitch = request.nextUrl.searchParams.get('lang-switch');
    const locale = request.cookies.get('NEXT_LOCALE')?.value || '';

    if (languageSwitch == null) {
        return NextResponse.next();
    }

    if (locale != languageSwitch || languageSwitch == null) {
        const newPathname = pathname.split('/').filter(Boolean).map(segment => segment === locale ? languageSwitch : segment).join('/')
        const redirectURL = new URL(`/${newPathname}`, request.nextUrl.origin)
        return NextResponse.redirect(redirectURL);
    }

    return NextResponse.next();
}

const middleware = (request: NextRequest) => {
    const authResponse = localeMiddleware(request);
    if (authResponse.status == 307) {
        return authResponse;
    }

    return initMiddleware(request);
}

export default middleware;

export const config = {
    // Match only internationalized pathnames
    matcher: ['/login', '/register', '/(en|vi)/:path*']
};