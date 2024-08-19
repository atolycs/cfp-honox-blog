---
title: ブログの設定が大体終わったので解説作ってみた
date: 2024-08-19T00:44:33.579Z
slug: blog-tech-comment
draft: true
published: false
---

大方、ブログの構築作業が終わったので、解説してみる。

# 構成は?

* フレームワーク: HonoX
* ホスト: Cloudflare Pages
* コード管理: Github
* デプロイ: Github Action

もともと、自分の技術ネタのアウトプット先を考えていたが、
技術屋としては、自分が考えていることを自分の中で留めておくのはどうかと思い、
Webの技術にも触れてみたいことから、今回ブログを構築することにした。

構成については、[HonoX](https://github.com/honojs/honox.git)を使用した。

yusukebeさんが公開しているサンプルや、HonoXでブログを構築した方の記事やコードを参考に、
自分なりのコードを書いてみた。

結果、多少コードは汚くなったが、自分なりの妥協点は見つけられたと思う。



# 一番苦労した箇所は?

ブログを置く場所。
特に、自分としては`app/routes/`の配下に置くのは抵抗があった。

このため、別のところでまとめられないかなと思い、コードを組み合わせた。
特に、mr04vvさんのコードはとても参考になった。

ルーティングが動的生成されているが、どうやって別フォルダにある記事情報を参照しているかが、参考になった。

また、Cloudflare PagesにはProdcutionブランチ以外のブランチがPushされたら、
それをPreviewブランチとしてホストする機能があり、
これを記事下書き用(閲覧者には見えない形)として運用できないか、仕組みを考えた。

結果、以下のコードの通り、`context`のリクエストヘッダーにある`host`を参照し、
`*.<Cloudflare Pages上でのプロジェクト名>.pages.dev`が含まれていれば、Previewブランチとし、下書き記事を表示する仕組みを作った。

```javascript title="app/lib/getPosts.ts"
const postMap = (c: string | undefined) => {
  if (
    import.meta.env.PROD &&
    (c?.includes("localhost") || 
     c?.match(/[^?]+.<Cloudflare Pages上でのプロジェクト名>.pages.dev/))
  ) {
    const posts = Object.entries(allPosts)
      .filter(
        ([_, module]) =>
          module.frontmatter?.published || module.frontmatter?.draft,
      )
      .map(([path, post]) => {
        const entryName = baseName(path);
        const { frontmatter } = post;
        const { default: Component } = post;
        return {
          entryName,
          frontmatter,
          Component,
        };
      });
    return posts;
  }

  if (!import.meta.env.PROD) {
    const posts = Object.entries(allPosts).map(([path, post]) => {
      const entryName = baseName(path);
      const { frontmatter } = post;
      const { default: Component } = post;
      return {
        entryName,
        frontmatter,
        Component,
      };
    });
    return posts;
  }

  const posts = Object.entries(allPosts)
    .filter(
      ([_, module]) =>
        module.frontmatter?.published && !module.frontmatter?.draft,
    )
    .map(([path, post]) => {
      const entryName = baseName(path);
      const { frontmatter } = post;
      const { default: Component } = post;
      return {
        entryName,
        frontmatter,
        Component,
      };
    });
  return posts;
};

```

これでプレビュー表示ができるようになった。

# 最後に

初めての試みだったが、まずは形が整ってよかったと思う。
これから、様々なメモを追加できれば良いと思う。
