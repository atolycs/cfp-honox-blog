import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const robotsTxt = ["User-agent: *", "Allow: /"].join("\n");

  return c.text(robotsTxt, 200);
});
