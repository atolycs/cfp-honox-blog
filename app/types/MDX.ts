import type { JSX } from "hono/jsx/jsx-runtime";
import type { MDXProps } from "mdx/types";

export type Frontmatter = {
  title: string;
  date: string;
  description?: string;
  published?: boolean;
  draft?: boolean;
  author?: string;
};

export type PostData = {
  entryName: string;
  frontmatter: Frontmatter;
  Component: (props: MDXProps) => JSX.Element;
};

export type MDX = {
  frontmatter: Frontmatter;
  default: (props: MDXProps) => JSX.Element;
};
