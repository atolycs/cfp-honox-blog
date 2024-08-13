import type { JSX } from "hono/jsx/jsx-runtime";
import type { FC } from "hono/jsx";
import { css } from "hono/css";
import { Link } from "../components/Link";
import { SITE } from "../config/site_config";

type Props = {
  children?: JSX.Element;
};

export const Header = (props: Props) => {
  return (
    <header className="text-center border-b px-4 mx-2 max-md:px-2 w-full h-16 tracking-widest flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold">
        {SITE.title}
      </Link>
      <div className="flex justify-items-center gap-4">
        <Link href="/about" className="text-lg font-semibold">
          About
        </Link>
        <Link href="/posts" className="text-lg font-semibold">
          Posts
        </Link>
      </div>
    </header>
  );
};
