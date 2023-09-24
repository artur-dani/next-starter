import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Starter",
  description: "Next.js starter template with TypeScript, Tailwind CSS, and ESLint",
}

type RootLayoutProps = {
  children: React.ReactNode
  params: { lang: string }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
