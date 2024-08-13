import type { FC } from "hono/jsx";

type Props = {
  href: string;
  children?: string;
  className?: string;
};

export const Link: FC<Props> = ({ href, children, className }) => {
  return (
    <a href={href} rel="noreferrer">
      <span className={className}>{children}</span>
    </a>
  );
};
