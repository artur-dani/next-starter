import { clientEnv, serverEnv } from "@/env"

export default function Home() {
  return (
    <main className="mt-0 flex min-h-screen flex-col items-center justify-between pt-5">
      client: [{clientEnv.NEXT_PUBLIC_PUBLISHABLE_KEY}] <br />
      server: [{serverEnv.DATABASE_URL}] <br />
    </main>
  )
}
