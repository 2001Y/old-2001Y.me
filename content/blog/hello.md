+++
title = "はじまり"
description = "Hugoで1からブログを作る。"
date = "2019-10-22"
categories = ["Other"]
tags = [ "Blog","HTML","CSS","JavaScript","Hugo","Netlify"]
img = "hello-tmb"
draft = false
+++

## Hello, World!

初めまして？、[2001Y](https://twitter.com/y20010920t) です。

新たにブログを作り直しました！
どうにも納得のいくブログを作れず、1から作り直すことにしました。以前のブログについては全てまとめる予定です。

テーマも完成していませんが、完成するのを待っていてはいつになってもはじまる気がしなかったので、記事を書きながらテーマを作っていく予定です。

## Hugoで作成することに
今まではLivedoorやBloggerなどのCMSを使ってきましたが、今回はHugoを利用することにしました。

CMSなどはWebのみで完結する反面、ファイルの扱いに困っていました。そこで、サーバーを用意してのサイト構成を実現しようと思いました。（過去に何度も失敗あり笑）

ブログの有名どころとしてWordPressがあります。何度かトライしたのですが、PHPの動くサーバーはランニングコストが高いため、 *静的サイトジェネレーター* を利用することにしました。[Hugo](https://goHugo.io/) はHTMLとCSSやJSだけで簡単にブログが作成できます。

サーバーとして [Netlify](https://www.netlify.com/) を利用し、Googleドメインにて独自ドメインを取得しました。

## ブログを作成するにあたって
今回は完全オリジナルのブログ作成が可能になったため、高速化に取り組みました。

### Pjax - シームレスなページ遷移

ずっと夢だったPjax（[Barba.js](https://barba.js.org/)）に手を出しました！

PjaxはJSのAjaxを使うことで、読み込み時間のないシームレスなページ遷移が可能になります。今回は構造を完全に自分で決められるため、Pjaxを導入しやすくなるため、この機会に導入することにしました。

### WebP - JPEGもPNGも高圧縮

GoogleChromeが対応したWebPを採用しました！

自前のサーバーに画像を保存することになり、圧縮やリサイズなど（今の所Glupを使用）が自由に行えるようになったので導入しました。

### HTTPS2, ServerPush など

Netlifyは無料で使えるにも関わらず、SSLも使え、非常に高速化に取り組んでいます。同時読み込みが可能なHTTPS2や、ServerPushにも対応し、WebFontなどの大きなファイルも扱いやすくなりました。

NetlifyはCDNも内蔵していますが、日本ではCloudflareの方が早かったので今の所、Cloudflareを使用しています。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/Cloudflare?ref_src=twsrc%5Etfw">@Cloudflare</a> vs <a href="https://twitter.com/Netlify?ref_src=twsrc%5Etfw">@Netlify</a> at Japan<br><br>日本ではサーバーは <a href="https://twitter.com/hashtag/Netlify?src=hash&amp;ref_src=twsrc%5Etfw">#Netlify</a> を使っていても、CDNは <a href="https://twitter.com/hashtag/Cloudflare?src=hash&amp;ref_src=twsrc%5Etfw">#Cloudflare</a> を使った方が高速（多分） <a href="https://t.co/hD2vPDPr1O">pic.twitter.com/hD2vPDPr1O</a></p>&mdash; 2001Y (@Y20010920T) <a href="https://twitter.com/Y20010920T/status/1071364550283354112?ref_src=twsrc%5Etfw">December 8, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

その他、Hugoを選んだ理由など、それぞれの導入方法も含め、メモのために記事にしていきたいと思います。

## 最後に

初めての独自ドメイン、初めてのNetlify,Hugo,Gulpだったりと、初めてなことばかりです！

AMP対応、いやその前にそもそもテーマが完成していないので、順々に作っていけたらなと思っています。でも、今までのものをなくすのではなく、また新たな「はじまり」になればいいなぁ〜と思います。