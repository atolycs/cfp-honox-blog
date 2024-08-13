import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getPosts, getPostEntryName } from "../../lib/getPost";

export default createRoute(
  ssgParams(() => {
    const posts = getPosts();
    console.log(posts);
    return posts.map((post) => ({
      slug: post.entryName,
    }));
  }),
  async (c) => {
    const slug = c.req.param("slug");
    console.log(slug);
    if (slug === ":slug") {
      return c.notFound();
    }

    const post = getPostEntryName(slug);

    const pageTitle = post?.frontmatter.title;

    return c.render(<article>{post?.Component({})}</article>, {
      title: pageTitle,
    });
  },
);
