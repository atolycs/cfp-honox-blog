import { jsxRenderer } from "hono/jsx-renderer";
import { formattedDate } from "../../lib/date";

import { AfterProfile } from "../../components/afterProfile";
import { BackToTop } from "../../islands/backtoTop";

export default jsxRenderer(({ children, Layout, title, frontmatter }) => {
  return (
    <Layout title={title}>
      <div className="gird grid-cols-1 gap-28 py-4 md:py-8">
        <section className="grid grid-cols-1 justify-items-center gap-2 md:gap-4">
          <h1 className="font-semibold text-xl md:text-3xl">{title}</h1>
          <time className={"flex justify-center text-gray-600 text-base"}>
            {formattedDate(frontmatter?.date)}
          </time>
        </section>

        <article className={"markdown"}>{children}</article>
        <AfterProfile />
        <BackToTop />
      </div>
    </Layout>
  );
});

/*
html {
    @apply text-slate-800
}

.markdown {
    @apply break-words box-border;
}

.markdown > * + * {
    @apply mt-2 mb-2;

}

.markdown time {
    @apply mt-0 mb-2;
}

.markdown li + li {
    @apply mt-1;
}

.markdown li > p + p {
    @apply mt-6;
}

.markdown strong {
    @apply font-bold;
}

.markdown strong a {
    @apply font-bold hover:underline;
}

.markdown p {
    @apply text-base leading-7 my-4;
}

.markdown blockquote > p {
    @apply text-sm;
}

.markdown h1 {
    @apply text-4xl font-bold mt-8 mb-4;
}


.markdown table {
    @apply text-base border-gray-600;
}

.markdown th {
    @apply border py-1 px-3;
}

.markdown td {
    @apply border py-1 px-3;
}





*/
