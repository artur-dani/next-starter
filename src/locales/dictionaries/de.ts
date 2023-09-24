export default {
  hello: "Hallo",
  welcome: "Hallo {name}!",
  about: {
    you: "Hallo {name}! Du bist {age} Jahre alt",
  },
  scope: {
    test: "Ein Scope",
    more: {
      test: "Ein Scope",
      param: "Ein Scope mit {param}",
      and: {
        more: {
          test: "Ein Scope tief verschachtelt mit {param}",
        },
      },
      "stars#one": "1 Stern auf GitHub",
      "stars#other": "{count} Sterne auf GitHub",
    },
  },
  "cows#one": "Eine Kuh",
  "cows#other": "{count} Kühe",
} as const
