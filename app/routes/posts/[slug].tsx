import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import type { Context } from "hono"


export default createRoute(async (c: Context) => {
    return c.render("this is test")
})