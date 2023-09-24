import Image from "next/image"
import { Button } from "@/components/ui/button"
import { clientEnv, serverEnv } from "@/env"
import { getCurrentLocale, getI18n, getScopedI18n } from "@/locales/server"

// Uncomment to test Static Generation on this page only
// export function generateStaticParams() {
//   return getStaticParams()
// }

type HomeProps = {
  params: { lang: string }
}

export default async function Home({ params }: HomeProps) {
  // Uncomment to test Static Generation
  // setStaticParamsLocale(params.lang)

  const t = await getI18n()
  const t2 = await getScopedI18n("scope.more")
  const currentLocale = getCurrentLocale()

  return (
    <div className="mt-8 flex min-h-full flex-col items-center justify-center gap-8">
      client: [{clientEnv.NEXT_PUBLIC_PUBLISHABLE_KEY}] <br />
      server: [{serverEnv.DATABASE_URL}] <br />
      <div>
        <Button>Click me</Button>
      </div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <div>
        Language: <span className="font-bold italic">{params.lang}</span>
      </div>
      <div>
        Current locale: <span className="font-bold italic">{currentLocale}</span>
        <br />
        Locale Testing:
        <div>
          <h1>SSR / SSG</h1>
          <p>
            Current locale:
            <span>{currentLocale}</span>
          </p>
          <p>Hello: {t("hello")}</p>
          <p>
            Hello:{" "}
            {t("welcome", {
              name: "John",
            })}
          </p>
          <p>
            Hello (with React components):{" "}
            {t("welcome", {
              name: <strong>John</strong>,
            })}
          </p>
          <p>
            Hello:{" "}
            {t("about.you", {
              age: "23",
              name: "Doe",
            })}
          </p>
          <p>
            Hello (with React components):{" "}
            {t("about.you", {
              age: <strong>23</strong>,
              name: "Doe",
            })}
          </p>
          <p>{t2("test")}</p>
          <p>
            {t2("param", {
              param: "test",
            })}
          </p>
          <p>
            {t2("param", {
              param: <strong>test</strong>,
            })}
          </p>
          <p>{t2("and.more.test", { param: <strong>test prm</strong> })}</p>
          <p>{t("missing.translation.in.de")}</p>
          <p>
            {t("cows", {
              count: 1,
            })}
          </p>
          <p>
            {t("cows", {
              count: 2,
            })}
          </p>
          <p>
            {t2("stars", {
              count: 1,
            })}
          </p>
          <p>
            {t2("stars", {
              count: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
