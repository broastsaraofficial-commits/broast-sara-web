import { NextResponse } from "next/server";

export function proxy(request) {
    const { pathname } = request.nextUrl;

    // Bypass proxy for static files, API routes, sitemaps, and robots.txt
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return;
    }

    const pathnameHasLocale = ["/ar", "/en"].some(
        (locale) => pathname.startsWith(`${locale}/`) || pathname === locale
    );

    if (pathnameHasLocale) return;

    request.nextUrl.pathname = `/ar${pathname}`;
    return NextResponse.rewrite(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next|api|sitemap.xml|robots.txt|.*\\..*).*)',
    ],
};