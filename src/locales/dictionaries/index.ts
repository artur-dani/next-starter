export const dictionaries = {
  en: () => import("./en"),
  de: () => import("./de"),
} as const
