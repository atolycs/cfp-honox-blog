import type { FC } from "hono/jsx";
import { css } from "hono/css";

import { getPosts } from "../lib/getPost"

const className = css`
  font-family: sans-serif;
`;

export default function Top() {
  return (
    <>
      <div class="border-b border-blue-200 mt-10">
        <h1 class="text-2xl font-semibold pb-1">Welcome to hono</h1>
      </div>
      <div class="mt-5">
        <p class="font-medium">Honox Blog</p>
      </div>
      <Posts />
    </>
  );
}

const Posts: FC = () => {
/*   const posts = import.meta.glob<{
    frontmatter: {
      title: string;
      date: string;
      published: boolean;
    };
  }>("../content/blog/*.md", { eager: true });

  const entries = Object.entries(posts).filter(
    ([_, post]) => post.frontmatter.published,
  ); */

  const entries = getPosts()


  console.log(entries)
  return (
    <div class="mt-16">
      <ul class="mt-10">
        {
          entries.map((post) => {
            <li>
              <a link={`posts/${post.entryName}`}>
              {post?.frontmatter.title}
            </a>
          </li>
          })
        }
      </ul>
    </div>
  );
};
