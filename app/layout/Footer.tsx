import type { FC } from "hono/jsx";
import { css } from "hono/css";


export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center my-6">
      <p> Copyright {year} Atolycs</p>
    </footer>
  );
};
