import type { Context } from "hono";
import type { MDX, PostData } from "../types/MDX";
import { baseName } from "./path-utils";

const allPosts = import.meta.glob<MDX>("../content/blog/*.md", {
  eager: true,
});

const posts = Object.entries(allPosts)
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

const postMap = (c: Context) => {
  console.log(c.req.header("host"));
  if (
    import.meta.env.PROD &&
    (c.req.header("host")?.includes("localhost") ||
      c.req.header("host")?.match(/[^?]+.cfp-honox-blog.pages.dev/))
  ) {
    console.log("Production Preview mode");
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
  } else if (import.meta.env.DEV) {
    console.log("Development mode");
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
  } else {
    console.log("Production mode");
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
  }
  //return posts
};

export const getPosts = (c: Context) => {
  const posts = postMap(c);
  if (!import.meta.env.PROD) {
    console.log(posts);
  }
  console.log(import.meta.env.BASE_URL);
  console.log(import.meta.url);
  console.log(import.meta.env.PROD);
  console.log(import.meta.env.MODE);
  return posts;
};

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
