import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, title }) => {
  return (
    <Layout title={title}>
      <div className="gird grid-cols-1 gap-28 py-4 md:py-8">
        <section className="grid grid-cols-1 justify-items-center gap-2 md:gap-4">
          <h1 className="font-semibold text-xl md:text-3xl">{title}</h1>
        </section>

        <div className="prose prose-zinc d m-auto mt-5 max-w-4xl text-sm text-zinc-700 leading-7 prose-code:mx-1">
          {children}
        </div>
      </div>
    </Layout>
  );
});
