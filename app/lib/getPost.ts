import type { MDX, PostData } from "../types/MDX";
import { baseName } from "./path-utils";

const allPosts = import.meta.glob<MDX>("../content/blog/*.md", {
  eager: true,
});

const posts = Object.entries(allPosts).filter(
    ([_, module]) =>  module.frontmatter?.published || module.frontmatter?.draft 
  ).map(([path, post]) => {
    const entryName = baseName(path);
    const { frontmatter } = post;
    const { default: Component } = post;
    return {
      entryName,
      frontmatter,
      Component 
  }}
  )

export const getPosts = () => {
  if (!import.meta.env.PROD) {  
    console.log(posts)
  }
  return posts
}

/* export const getPosts = ():PostData[] => {
  console.log(posts)
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
}; */

export const getPostEntryName = (entryName: string) => {
  const posts = getPosts();
  const post = posts.find((post) => post.entryName === entryName);
  return post;
};
