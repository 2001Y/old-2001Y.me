---
title: "Hello ヒューゴ！"
description: "初めてのヒューゴ"
date: "2018-12-01"
categories:
  - "Web"
  - "Other"
tags:
  - "tag"
  - "hugo"
  - "blog"
img: https://unsplash.it/500/300/?random
---

こんにちは。あなたのブラウザでこれを読んでいるなら、良い仕事です！ファイル `content / post / hello-hugo.md`は
Hugoによって完全なHTML文書に変換されました。それはかなり上品ではないですか？

<!--more-->

セクション
---------

ここには簡単なタイトルセクションがあり、必要な情報を置くことができます。

必要に応じてインラインHTMLを使用できますが、実際にはMarkdownが行うことはできません。

マークダウンとオフを示す
-------------------------

フルチートシートが見つかりました[ここ]（https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet）
[Google]（https://google.com/）を介して送信されます。

しかし、スタイリングにはいくつかの簡単な例があります。私は**それを十分に強調することはできません。
[links]（https://google.com/）または `inline code`ブロックを作成するのはとても簡単です。

```
There are some *easy* examples for styling, though. I can't **emphasize** that enough.
Creating [links](https://google.com/) or `inline code` blocks are very straightforward.
```

楽しみのためのフロントマター
--------------------

これはこの投稿のメタデータです。 `content / post / hello-hugo.md`マークダウンファイルの一番上にあります。

```
---
title: "Hello Hugo!"
description: "Saying 'Hello' from Hugo"
date: "2014-09-01"
categories:
  - "example"
  - "hello"
tags:
  - "example"
  - "hugo"
  - "blog"
---
```

'Front Matter'と呼ばれるこのセクションでは、このファイルの内容についてHugoに伝えています：アイテムの `title`、
`description`、および` date`が投稿されました。この例では、カスタムビットを2つ追加しました。 `categories`と
この例では、 `tags`セクションがコンテンツの索引付け/グループ化に使用されています。それが意味することについてもっと学びます。
この例のコードを調べ、Hugo [documentation]（http://gohugo.io/overview/introduction）を読んでください。
