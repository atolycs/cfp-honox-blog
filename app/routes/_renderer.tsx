import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { SITE, LOCALE } from "../config/site_config";

import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export default jsxRenderer(({ children, title }) => {
  title = title ? `${title} - ${SITE.title}` : SITE.title;

  return (
    <html lang={LOCALE.lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="/app/client.ts" async />
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/app/style.css" />
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
        <Style />
      </head>
      <body className="flex flex-col items-center mb-2 mx-2">
        <Header />
        <main className="max-w-[780px] w-screen px-6 mt-6">
          <article>{children}</article>
        </main>
        <Footer />
      </body>
    </html>
  );
});
