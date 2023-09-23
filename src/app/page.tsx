import { Button } from "@/components/ui/button"
import { clientEnv, serverEnv } from "@/env"

export default function Home() {
  return (
    <>
      client: [{clientEnv.NEXT_PUBLIC_PUBLISHABLE_KEY}] <br />
      server: [{serverEnv.DATABASE_URL}] <br />
      <div>
        <Button>Click me</Button>
      </div>
    </>
  )
}
