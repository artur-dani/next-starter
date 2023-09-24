import { dictionaries } from "./dictionaries"
type LocaleKey = keyof typeof dictionaries

export const locales = Object.keys(dictionaries) as LocaleKey[]
export const defaultLocale = "en" as const satisfies keyof typeof dictionaries
