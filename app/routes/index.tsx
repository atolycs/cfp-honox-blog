import { createRoute } from "honox/factory";
import { getPosts } from "../lib/getPost";
import { PostList } from "../components/PostList";
import { Fragment } from "hono/jsx/jsx-runtime";

import { SITE } from "../config/site_config";

export default createRoute((c) => {
  const entries = getPosts();
  return c.render(
    <div class="border-b border-blue-200 mt-10">
      <div class="mt-5">
        <p className="font-medium">{SITE.description}</p>
      </div>
      <div class="mt-16">
        <ul class="mt-10">
          {entries.map((post) => {
              return (
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                <li>
                  <Fragment key={post.entryName}>
                    <PostList
                      title={post.frontmatter.title}
                      entryName={post.entryName}
                      frontmatter={post.frontmatter} 
                    />
                  </Fragment>
                </li>
              );
          })}
        </ul>
      </div>
    </div>,
  );
});
