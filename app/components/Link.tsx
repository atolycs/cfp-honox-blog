import type { FC } from "hono/jsx";

type Props = {
  href: string;
  children?: string;
  className?: string;
  key?: string | number;
  description?: string;
};

export const Link: FC<Props> = ({ href, className, description, children }) => {
  return (
    <a href={href} rel="noreferrer">
      <span className={className} title={description}>
        {children}
      </span>
    </a>
  );
};
