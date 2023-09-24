import { createI18nClient } from "next-international/client"
import { dictionaries } from "./dictionaries"

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, defineLocale, useCurrentLocale } =
  createI18nClient(dictionaries)
