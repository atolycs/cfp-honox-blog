import type { Context } from "hono";
import type { MDX, PostData } from "../types/MDX";
import { baseName } from "./path-utils";

const allPosts = import.meta.glob<MDX>("../content/blog/*.md", {
  eager: true,
});

const posts: PostData[] = Object.entries(allPosts)
  .filter(
    ([_, module]) =>
      module.frontmatter?.published ||
      (import.meta.url && module.frontmatter?.draft),
  )
  .map(([path, post]) => {
    const entryName = baseName(path);
    const { frontmatter } = post;
    const { default: Component } = post;
    return {
      entryName,
      frontmatter,
      Component,
    };
  });

const postMap = (c: string | undefined) => {
  if (
    import.meta.env.PROD &&
    (c?.includes("localhost") || c?.match(/[^?]+.cfp-honox-blog.pages.dev/))
  ) {
    const posts = Object.entries(allPosts)
      .filter(
        ([_, module]) =>
          module.frontmatter?.published || module.frontmatter?.draft,
      )
      .map(([path, post]) => {
        const entryName = baseName(path);
        const { frontmatter } = post;
        const { default: Component } = post;
        return {
          entryName,
          frontmatter,
          Component,
        };
      });
    return posts;
  }

  if (!import.meta.env.PROD) {
    const posts = Object.entries(allPosts).map(([path, post]) => {
      const entryName = baseName(path);
      const { frontmatter } = post;
      const { default: Component } = post;
      return {
        entryName,
        frontmatter,
        Component,
      };
    });
    return posts;
  }

  const posts = Object.entries(allPosts)
    .filter(
      ([_, module]) =>
        module.frontmatter?.published && !module.frontmatter?.draft,
    )
    .map(([path, post]) => {
      const entryName = baseName(path);
      const { frontmatter } = post;
      const { default: Component } = post;
      return {
        entryName,
        frontmatter,
        Component,
      };
    });
  return posts;
};

export const getPosts = (c: Context) => {
  const posts = postMap(c.req.header("host"));
  if (!import.meta.env.PROD) {
    console.log(posts);
  }
  console.log(import.meta.env.BASE_URL);
  console.log(import.meta.url);
  console.log(import.meta.env.PROD);
  console.log(import.meta.env.MODE);
  return posts;
};

export const getPostEntryName = (c: Context, entryName: string) => {
  const posts = getPosts(c);
  const post = posts.find((post) => post.entryName === entryName);
  return post;
};
