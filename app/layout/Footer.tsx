import type { FC } from "hono/jsx";
import { css } from "hono/css";

import { TechInfo } from "../islands/techinfo";

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex justify-center items-center my-6">
        <span> Copyright {year} Atolycs</span>
      </footer>
      <footer className="flex justify-center">
        <TechInfo />
      </footer>
    </>
  );
};
