# 360linkunify
experimental sciprt that unified search by ProQuest(SerialsSolutions) 360 Link API.
360LinkのXML APIを使って、リンクリゾルバの横断検索？のようなことをしてみる実験です。

## How to
*Clone repository or "zip" downloads
*click 360linkapiUnify.html (any browser)
*Reload by applying a query or submit by filling in the ISSN to form.
*OR Please try to reload (F5) by connecting the OpenURL query.It works as a simple link resolver.
*ダウンロードして、ブラウザ（firefoxで確認済み）で以下のような感じでOpenURLをつなげてみてください。

\file:///hogehoge/360linkapiUnify.html?ctx_ver=Z39.88-2003&ctx_enc=info:ofi/enc:UTF-8&rft_id=info:doi/10.1016%2fj.dss.2015.03.008&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rft.aulast=Lu&rft.aufirst=J.&rft.issn=01679236&rft.isbn=&rft.volume=74&rft.issue=&rft.date=2015&rft.spage=12&rft.epage=32&rft.pages=12-32&rft.artnum=&rft.title=Decision+Support+Systems&rft.atitle=Recommender+system+application+developments%3a+A+survey&rfr_id=info:sid/Elsevier:Scopus\

## Usage
*If you want to add or modify your search target, modify the "portal" of 360linkunify.js

## Feature
*The behavior that Unordered display order is by design^^;
*In order to avoid cross-domain, we use a jquery.xdomainajax.old.js.This library use yahoo api.
*I  really wanted to unified search, including SFX, etc., but it was easy to use is 360 API of, is a unified search of only 360 link.
