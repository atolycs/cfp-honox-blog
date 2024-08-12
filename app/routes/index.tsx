import { createRoute } from "honox/factory";
import { getPosts } from "../lib/getPost";
import { PostList } from "../islands/PostList";
import { Fragment } from "hono/jsx/jsx-runtime";

export default createRoute((c) => {
  const entries = getPosts();
  console.log(entries);
  return c.render(
    <div class="border-b border-blue-200 mt-10">
      <h1 class="text-2xl font-semibold pb-1">Welcome to hono</h1>
      <div class="mt-5">
        <p class="font-medium">Honox Blog</p>
      </div>
      <div class="mt-16">
        <ul class="mt-10">
          {entries.map((post) => {
            return (
              <li>
                <Fragment key={post.entryName}>
                  <PostList
                    title={post.frontmatter.title}
                    entryName={post.entryName}
                  />
                </Fragment>
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    { title: "this is test!" },
  );
});
