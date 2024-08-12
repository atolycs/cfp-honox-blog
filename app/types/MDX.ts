
import type { JSX } from "hono/jsx/jsx-runtime"
import type { MDXProps } from "mdx/types"

export type Frontmatter = {
    title: string;
    date: string;
    description?: string;
}

export type MDX = {
    frontmatter: Frontmatter;
    default: (props: MDXProps) => JSX.Element;
}