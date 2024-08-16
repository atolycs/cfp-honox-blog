import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getPosts, getPostEntryName } from "../../lib/getPost";
import { Fragment } from "hono/jsx/jsx-runtime";

export default createRoute(
  ssgParams((c) => {
    const posts = getPosts(c);
    return posts.map((post) => ({
      slug: post.entryName,
    }));
  }),
  async (c) => {
    const slug = c.req.param("slug");
    if (slug === ":slug") {
      return c.notFound();
    }

    const post = getPostEntryName(slug);

    const pageTitle = post?.frontmatter.title;

    return c.render(<Fragment>{post?.Component({})}</Fragment>, {
      title: pageTitle,
      frontmatter: post?.frontmatter,
    });
  },
);
