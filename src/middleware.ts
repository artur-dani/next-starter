import { NextRequest } from "next/server"
import { createI18nMiddleware } from "next-international/middleware"
import { defaultLocale, locales } from "./locales"

const i18nMiddleware = createI18nMiddleware({
  defaultLocale,
  locales,
  urlMappingStrategy: "rewriteDefault",
})

export function middleware(request: NextRequest) {
  return i18nMiddleware(request)
}

export const config = {
  // do not localize next.js paths and svg images
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\.svg).*)"],
}
