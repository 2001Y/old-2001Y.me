+++
title = "はじまり"
description = "Hugoで0からブログを作る"
date = "2019-06-03"
categories = ["Other"]
tags = [ "Hugo","Netlify","Blog" ]
img = "hello-tmb"

+++

はじめまして、2001Y（[@Y2001090T](//twitter.com/Y20010920T)）です。

また、新たにブログを作り直しました。今まで何度も作り直してきましたが、どうも納得のいくブログを作れず、作り直すことにしました。かなり前から作成していたのですが、どうにも完成しそうにないので途中までできたところで記事を書き始めたいと思います。過去のブログについては一覧を作成するつもりです。

## はじめてのHugo
{{< img "use-service" >}}

今まではLivedoorやBloggerなどのCMSを使ってきましたが、今回は1からデザインするためにHugoを利用しました。また、サーバーにNetlifyを利用するにあたり、Googleドメインで初めて独自ドメインを取得しました。

## ブログを作成するにあたって

やっとテーマから自作することになったので、前々から気になっていた高速化に取り組みました。

### Pjax・WebP・Lazyloadに対応！

[barba.js](https://barba.js.org)を利用しPjaxでシームレスなページ遷移が可能になりました。また、画像はGulpを用いて必要なサイズにトリミング、圧縮し、WebPに対応しました。CMSを利用していると導入が非常に面倒だったLazyloadにも対応し、LightBoxも自作してみました。

ServiceWorkerによるPjaxを自作してみたかったのですが、今のところできていません。

### HTTPS2/ServerPushに対応！

サーバーをNetlify、CDNをCloudflareにすることでHTTPS2に対応しました。HTTPS2に対応することでServerPushを導入し、全面的にWebFontを導入しました。

### Cloudflare・Stylusを導入

NetlifyもCDNが使われているはずなのですが、日本ではCloudflareの方が早かったです...

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/Cloudflare?ref_src=twsrc%5Etfw">@Cloudflare</a> vs <a href="https://twitter.com/Netlify?ref_src=twsrc%5Etfw">@Netlify</a> at Japan<br><br>日本ではサーバーは <a href="https://twitter.com/hashtag/Netlify?src=hash&amp;ref_src=twsrc%5Etfw">#Netlify</a> を使っていても、CDNは <a href="https://twitter.com/hashtag/Cloudflare?src=hash&amp;ref_src=twsrc%5Etfw">#Cloudflare</a> を使った方が高速（多分） <a href="https://t.co/hD2vPDPr1O">pic.twitter.com/hD2vPDPr1O</a></p>&mdash; 2001Y (@Y20010920T) <a href="https://twitter.com/Y20010920T/status/1071364550283354112?ref_src=twsrc%5Etfw">December 8, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 最後に

AMPの対応もできてないしスマホ表示なども全然完成していないので、少しづつ調整していければと思います。あと、barba.jsのv2が出てるみたいで...びっくり...

{{< qr url="https://2001y.me" >}}