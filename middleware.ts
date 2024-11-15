import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

import type { NextRequest } from 'next/server';
import type { Locale } from './types/globals/Locale';

const DEFAULT_LOCALE = 'en';

const middleware = (request: NextRequest) => {
    const locale = (request.cookies.get('NEXT_LOCALE')?.value) || DEFAULT_LOCALE;
    routing.defaultLocale = locale as Locale;

    const handleI18nRouting = createMiddleware(routing);
    return handleI18nRouting(request);
}

export default middleware;

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
};