import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import client from "honox/vite/client";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";

import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
      build: {
        rollupOptions: {
          input: ["./app/style.css", "./app/styles/markdown.css"],
          output: {
            assetFileNames: "static/css/[name].[ext]",
          },
        },
      },
    };
  }

  return {
    build: {
      emptyOutDir: false,
    },

    plugins: [
      honox(),
      pages(),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkGfm,
          remarkAlert,
          remarkParse,
        ],
        rehypePlugins: [rehypeHighlight],
      }),
      ssg({ entry }),
    ],
  };
});
