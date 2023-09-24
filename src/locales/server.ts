import { createI18nServer } from "next-international/server"
import { dictionaries } from "./dictionaries"

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer(dictionaries)
