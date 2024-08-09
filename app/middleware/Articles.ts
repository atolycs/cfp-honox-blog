
import { createMiddleware } from "hono/factory"

export const middleware = createMiddleware(async (c, next) => {
  c.set('hoge', () => {
    console.log("fuga")
  })

  await next();
})
