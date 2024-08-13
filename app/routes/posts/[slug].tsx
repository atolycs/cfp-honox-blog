import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getPosts, getPostEntryName } from "../../lib/getPost";
import { BackToTop } from "../../islands/backtoTop";

export default createRoute(
  ssgParams(() => {
    const posts = getPosts();
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

    return c.render(
      <>
        {post?.Component({})}
        <BackToTop />
      </>,
      {
        title: pageTitle,
      },
    );
  },
);
