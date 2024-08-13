import type { NotFoundHandler } from "hono";
import { BackToTop } from "../islands/backtoTop";

const handler: NotFoundHandler = (c) => {
  c.status(404);
  return c.render(
    <>
      <div className="text-center">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <BackToTop />
      </div>
    </>,
  );
};

export default handler;
