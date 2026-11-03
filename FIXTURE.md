# FIXTURE:フッターメニュー仕様書

## 概要
`dev/index.html` のフッターエリア（`<footer>`）に、既存のヘッダーメニューソースコードを流用したフッターナビゲーションメニューを追加する仕様書。

- **対象ファイル:** `dev/index.html`
- **仕様規約:**
  1. 既存のヘッダーメニューソースコードを利用すること
  2. 流用の際、`header` から始まる接頭辞（`header-menu`, `header-items`, `header-item`）をすべて `footer-` という接頭辞（`footer-menu`, `footer-items`, `footer-item`）に変更すること（`<nav>` の `id` も重複回避のため `id="footer-menu"`、クラスは `class="footer-menu"` とする）
  3. `aria-label="メインナビゲーション"` は `aria-label="フッターナビゲーション"` に変更すること

---

## 1. フッターエリア HTML（`<footer>` の置き換え）

`dev/index.html` の既存 `<footer>`（471行目付近）を以下のコードに置き換える。
ヘッダーメニューのソースコードをベースに、`header-` 接頭辞を `footer-` に変更し、フッター中央揃え用に `justify-content: center; flex-wrap: wrap;` と下部余白 `margin: 0 0 1.25rem 0;` を設定している。

```html
  <!-- フッター -->
  <footer style="box-sizing: border-box; margin: 0; text-align: center; padding: 2.5rem 1rem; background: #060608; border-top: 1px solid rgba(212, 175, 55, 0.35); color: #8e8e99;">
    <nav id="footer-menu" class="footer-menu" aria-label="フッターナビゲーション" style="box-sizing: border-box; margin: 0 0 1.25rem 0; padding: 0; font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;">
      <ul id="footer-items" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem 2.5rem; list-style: none; margin: 0; padding: 0;">
        <li class="footer-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="footer-item" href="#company-service" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">サービス</a></li>
        <li class="footer-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="footer-item" href="#company-dx" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">DX・自動化</a></li>
        <li class="footer-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="footer-item" href="#company-info" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">会社案内</a></li>
        <li class="footer-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;"><a class="footer-item" href="#company-qa" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">お問い合わせ</a></li>
      </ul>
    </nav>
    <small style="box-sizing: border-box; margin: 0; padding: 0; color: #c0c0c8; font-size: 0.9rem; letter-spacing: 0.08em;">@Copyright2026</small>
  </footer>
```

---

## 2. `<style>` ブロックへのホバー演出・擬似要素の追加

ヘッダーメニュー（`.header-item`）と同様のゴールド下線アニメーションおよびホバー色変化を `.footer-item` にも適用するため、`<style>` 内の該当セレクタに `.footer-item` を追加する。

```css
    .header-item::after,
    .footer-item::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--gold-primary), var(--gold-light));
      transition: width 0.3s ease;
    }
```

```css
    /* 擬似クラス (:hover / :focus) */
    a:hover,
    .header-item:hover,
    .header-item a:hover,
    .footer-item:hover,
    .footer-item a:hover {
      color: var(--gold-primary) !important;
    }

    .header-item:hover::after,
    .footer-item:hover::after {
      width: 100%;
    }
```
