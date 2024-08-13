import type { FC } from "hono/jsx";
import { Link } from "../components/Link";

export const TechInfo: FC = () => {
  return (
    <span>
      Powered by{" "}
      <Link href="https://hono.dev" className="hover:underline">
        Hono
      </Link>{" "}
      and{" "}
      <Link href="https://pages.cloudflare.com/" className="hover:underline">
        Cloudflare Pages
      </Link>
    </span>
  );
};
