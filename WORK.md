## 11/02 part-5
## =============
[ROLE]
### 以下の要件から画面レイアウト仕様書を作成して
## =============

## *フッターメニューの追加*
*フッターエリアにヘッダー同様のメニューを用意*

[制約]
*ここにオーケストレーションに開発おける工程分担とその詳細を定義する*
*仕様の作成を行うモデル「メインエージェント」*
   - *Gemini Argon High*
   - [仕様規約]
   - *既存のヘッダーメニューソースコードを利用すること*
	*流用の際、headerから始まる接頭辞をfooter-という接頭辞に変更すること*
	*aria-label="メインナビゲーション"は"フッターナビゲーション"に変更*
	*仕様は[dev/FIXTURE.md](dev/FIXTURE.md)にタイトル「`# FIXTURE:フッターメニュー仕様書`」として出すこと*
*サブエージェントから作業完了を受けたらコミット・プッシュを行うこと*	

*実装を行うモデル*
   - *サブエージェント Gemini Flash Lite High*
   - [dev/FIXTURE.md](dev/FIXTURE.md)の`# FIXTURE:フッターメニュー仕様書`の内容を実装すること
   - *実装完了後メインエージェントに作業完了の報告を行うこと*

*既存ソースコード*
```html
    <nav id="slide-menu" class="slide-menu header-menu" aria-label="メインナビゲーション" style="box-sizing: border-box; margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;">
      <ul id="header-items" style="box-sizing: border-box; display: flex; align-items: center; gap: 2.5rem; list-style: none; margin: 0; padding: 0;">
        <li class="header-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="header-item" href="#company-service" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">サービス</a></li>

        <li class="header-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="header-item" href="#company-dx" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">DX・自動化</a></li>

        <li class="header-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="header-item" href="#company-info" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">会社案内</a></li>

        <li class="header-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="header-item" href="#company-qa" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">お問い合わせ</a></li>

      </ul>
    </nav>
```





## 11/02 part-4
## =============
[ROLE]
### 以下の要件から画面レイアウト仕様書を作成して
## =============
## 新セクション追加
*現行のサービスセクションの項目「業務自動化・DX化」の専用セクションを用意する

*現在使用中の画像dx_service.jpgを背景に仕様*
*現行のカードレイアウトのテキストは新そのままセクションの見出しに使用*
*説明文もそのまま使用*

[制約]
*対象ファイル*
*dev/index.html*
 - *仕様書には必ずソースコードのサンプルを置くこと*
- *フォントスタイルやカラーなどは現行のイメージを損ねないスタイリッシュな仕様にすること。*
- *マーケターとしてのしてんからより予定案があればどうぞ*
- *アウトプットは[dev/FIXTURE.md](dev/FIXTURE.md)に出力*


## 11/02 part-3

## バッジを廃止・フォントスタイルを斜体に変更
```html
<span class="hero-badge" style="box-sizing: border-box; margin: 0; display: inline-block; padding: 0.35rem 1.1rem; margin-bottom: 1.25rem; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.12em; color: #f3e5ab; background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 999px;">OFFICE TOTAL SOLUTION</span>
```

[制約]
- *SEO対策の観点から提案があれば行うこと*

## 11/02 part-2
*スタイリングの改修*
- *リファクタリング*
- [dev/index.html](dev/index.html)

*現行*
*HTMLファイル内に`<style>`を呼び出しCSSのコーディングしている*

*改修内容*
*サンプルコードを参考にCSSをすべてタグインラインにリファクタリング*
*サンプルコード*
```html
<h1 style="{....}"> </h1>
```

[制約]
- *まずはすべてのすたいりんぐがタグインラインでリファクタリング可能か調査すること*

## 11/02 part-1
*スタイリングの改修*
- *対象ファイル*
- [dev/index.html](dev/index.html)
    **テクスチャ:** Web全体の背景には、フラットな黒（#000000）ではなく、微細なノイズまたはカーボン調のダークグレー（#0a0b0e）を敷くことで、ゴールドとシルバーの輝きが一層引き立たせてほしい。 
    *セクション「サービス」に複合機・PC、プリンター,ビジネスフォンの画像を作成*
　
　[制約]
　- *今回は作業用意は不要*
　- *Geminiに渡す仕様書の作成があなたのスコープです。
　- *画像はGeminiに作成させるので作成用のプロンプトを用意してください*
　- *## 　2026/10/27 part-1を参考資料に仕様書作成を進めてください*
