+++
title = "Another ヒューゴ Post"
description = "ここから始まるヒューゴ"
date = "2018-12-10"
categories = [ "Apple", "Camera" ]
tags = [
    "example",
    "hugo",
    "toml"
]
+++

更新テスト

私たちがカバーすべき素晴らしいHugoの機能の1つ：柔軟な設定とフロントマテリアルフォーマット！このエントリには正面があります
最後に `yaml`を使ったのとは違って、` toml`の問題です。 `json`も利用できます。

<!--more-->

TOML, YAML, JSON --- Oh my!
-------------------------

このエントリーで使用される `toml`のフロントマター：

```
+++
title = "Another Hugo Post"
description = "Nothing special, but one post is boring."
date = "2014-09-02"
categories = [ "example", "configuration" ]
tags = [
    "example",
    "hugo",
    "toml"
]
+++
```

この柔軟性は、サイトのグローバル構成ファイルにも適用されます。あなたは好きなフォーマットを自由に使うことができます::単純に
`config.yaml`、` config.toml`、 `config.json`のようなファイル名をつけて、あなたの好奇心を引きます。

JSONの例
------------

このエントリの正面は「json」でどのように見えますか？これは簡単に実証できます：

```
{
    "title": "Another Hugo Post",
    "description": "Nothing special, but one post is boring.",
    "date": "2014-09-02",
    "categories": [ "example", "configuration" ],
    "tags": [
        "example",
        "hugo",
        "toml"
    ],
}
```
