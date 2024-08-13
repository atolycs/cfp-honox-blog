import type { JSX } from "hono/jsx/jsx-runtime";
import type { FC } from "hono/jsx";
import { css } from "hono/css";
import { Link } from "../islands/Link";
import { SITE } from "../config/site_config";

type Props = {
  children?: JSX.Element;
};

export const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-10 border-zinc-200 border-b py-3 backdrop-blue">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4">
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
      </div>
    </header>
  );
};
