import type { FC } from "hono/jsx";
import { css } from "hono/css";

import { baseName } from "../util/tools";

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
  const posts = import.meta.glob<{
    frontmatter: {
      title: string;
      date: string;
      published: boolean;
    };
  }>("../content/blog/*.md", { eager: true });

  const entries = Object.entries(posts).filter(
    ([_, post]) => post.frontmatter.published,
  );

  return (
    <div class="mt-16">
      <ul class="mt-10">
        {entries.map(([id, module]) => (
          <li id={id} class="text-lg mt-2 md:mt-1">
            <span class="tabular-nums tnum">
              {new Date(module.frontmatter.date).toLocaleDateString()}:
            </span>
            <br class="block md:hidden" />
            <span id="debug">
              {baseName(`posts/${id}`)}
            </span>
            <a
              href={`posts/${baseName(id.replace(/\.md$/, ""))}`}
              class="text-blue-600 underline"
            >
              {module.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
