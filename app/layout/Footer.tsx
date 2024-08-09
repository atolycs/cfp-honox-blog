import type { FC } from "hono/jsx";
import { css } from "hono/css";

const footerStyle = css`
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer class={footerStyle}>
      <p> Copyright {year} Atolycs</p>
    </footer>
  );
};
