import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { Locale } from './types/globals/Locale';

const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'vi'];

const localeMiddleware = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/');

    if (LOCALES.includes(segments[1])) {
        return NextResponse.next();
    } else {
        segments[1] = DEFAULT_LOCALE;
        const newPathname = segments.join('/');
        const urlString =  new URL(`${request.nextUrl.origin}${newPathname}`).toString();
        return NextResponse.redirect(urlString);
    }
}

const middleware = (request: NextRequest) => {
    const locale = (request.cookies.get('NEXT_LOCALE')?.value) || DEFAULT_LOCALE;
    routing.defaultLocale = locale as Locale;

    const localeResponse = localeMiddleware(request);
    if (localeResponse.status == 307) {
        return localeResponse;
    }

    const handleI18nRouting = createMiddleware(routing);
    return handleI18nRouting(request);
}

export default middleware;

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)']
};