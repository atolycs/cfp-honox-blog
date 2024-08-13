import type { MDX } from "../types/MDX";
import { baseName } from "./path-utils";

const posts = import.meta.glob<MDX>("../content/blog/*.md", {
  eager: true,
});

export const getPosts = () => {
  const postData = Object.entries(posts).map(([path, post]) => {
    const entryName = baseName(path);
    const { frontmatter } = post;
    const { default: Component } = post;
    return {
      entryName,
      frontmatter,
      Component,
    };
  });

  return postData;
};

export const getPostEntryName = (entryName: string) => {
  const posts = getPosts();
  const post = posts.find((post) => post.entryName === entryName);
  return post;
};
