import type { Frontmatter } from "../types/MDX";
export const formattedDate = (date?: string) => {
  // @ts-ignore
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
