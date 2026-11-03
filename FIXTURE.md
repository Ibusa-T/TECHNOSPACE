# FIXTURE: 業務オートメーション・DX 専用セクション

## 概要
`index.html` のサービスセクション「業務オートメーション・DX」カードを、専用の全幅セクションとして昇格させたデザイン案。

- **対象ファイル:** `dev/index.html`
- **使用画像:** `./static/img/dx_service.jpg`（背景）
- **見出しテキスト:** カードの `<h3>` をそのまま使用
- **説明文:** カードの `<div>` テキストをそのまま使用

---

## 1. 追加セクション HTML

サービスセクション閉じタグ直後・会社案内セクションの前に挿入する。

```html
<!-- セクション「業務オートメーション・DX」 -->
<section id="company-dx" style="box-sizing: border-box; position: relative; width: 100%; min-height: 480px; overflow: hidden; border-top: 1px solid rgba(212, 175, 55, 0.35); border-bottom: 1px solid rgba(212, 175, 55, 0.35);">

  <!-- 背景画像レイヤー -->
  <div style="box-sizing: border-box; position: absolute; inset: 0; background-image: url('./static/img/dx_service.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 0;"></div>

  <!-- オーバーレイ（可読性確保 + ブランドカラー） -->
  <div style="box-sizing: border-box; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10, 11, 14, 0.88) 0%, rgba(10, 11, 14, 0.72) 50%, rgba(20, 15, 5, 0.82) 100%); z-index: 1;"></div>

  <!-- コンテンツ -->
  <div style="box-sizing: border-box; position: relative; z-index: 2; max-width: 1440px; margin: 0 auto; padding: 7rem 2rem; display: flex; flex-direction: column; align-items: center;">

    <!-- セクションラベル（英字） -->
    <p style="box-sizing: border-box; margin: 0 0 1rem 0; padding: 0; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.2em; color: #d4af37; text-transform: uppercase; text-align: center;">Business Automation &amp; Digital Transformation</p>

    <!-- メイン見出し（カードh3テキストをそのまま使用） -->
    <h2 style="box-sizing: border-box; margin: 0 0 1.5rem 0; padding: 0 0 1.1rem 0; font-family: 'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; color: #f3e5ab; letter-spacing: 0.08em; text-align: center; position: relative;">
      業務オートメーション・DX
      <span style="box-sizing: border-box; display: block; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #d4af37, transparent);"></span>
    </h2>

    <!-- 説明文（カードのdivテキストをそのまま使用） -->
    <p style="box-sizing: border-box; margin: 0 auto 3rem; padding: 0; max-width: 680px; font-size: 1.12rem; color: #c0c0c8; line-height: 1.9; text-align: center; letter-spacing: 0.04em;">
      煩雑化した業務フローと人手不足の問題をデジタルトランスフォーメーションで解決。現場のコンサルティング・開発一手に担います。
    </p>

    <!-- CTAボタン -->
    <a class="dx-cta" href="#company-qa" style="box-sizing: border-box; margin: 0; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; padding: 1rem 2.6rem; background: linear-gradient(135deg, #d4af37 0%, #aa820a 100%); color: #0a0a0c; font-size: 1.02rem; font-weight: 700; letter-spacing: 0.1em; border-radius: 6px; box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4); transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);">
      DX導入のご相談はこちら
    </a>

  </div>
</section>
```

---

## 2. `<style>` ブロックへの追加

既存の `<style>` ブロック内（`#company-qa input[type="submit"]:hover` の後など）に追加する。

```css
/* DX セクション CTAボタン hover */
.dx-cta:hover {
  color: #0a0a0c !important;
  transform: translateY(-2px) !important;
  background: linear-gradient(135deg, #f3e5ab 0%, #d4af37 100%) !important;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.45) !important;
}

/* DX セクション モバイル対応 */
@media (max-width: 960px) {
  #company-dx > div:last-child {
    padding: 4rem 1.5rem !important;
  }
}
```

---

## 3. ナビゲーション追加（任意）

`<ul id="header-items">` 内の既存 `<li>` の後ろに追加する。

```html
<li class="header-item" style="box-sizing: border-box; margin: 0; padding: 0; position: relative; font-size: 1rem; font-weight: 500; color: #e2e2e8; letter-spacing: 0.06em; list-style: none;">
  <a class="header-item" href="#company-dx" style="box-sizing: border-box; margin: 0; position: relative; font-size: 1rem; font-weight: 500; letter-spacing: 0.06em; list-style: none; text-decoration: none; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); display: inline-block; padding: 0.4rem 0; color: inherit;">DX・自動化</a>
</li>
```

---

## 4. サービスグリッドの既存カード処理

`main#company-service` 内の「業務オートメーション・DX」カード（4枚目 `<div>`）は専用セクション昇格に伴い **削除**する。

削除対象（`index.html` の339〜351行目）:

```html
<!-- 項目　「業務オートメーション化・DX化を入れる」-->
<div style="...">
  <h3 ...>業務オートメーション・DX</h3>
  <img src="./static/img/dx_service.jpg" ...>
  <div ...>煩雑化した業務フロー...</div>
</div>
```

削除後、サービスグリッドは3列3アイテムで完結する。

---

## 5. マーケター視点からの提案

| #   | 提案                                          | 理由                                                          |
| --- | ------------------------------------------- | ----------------------------------------------------------- |
| 1   | **CTAを独立セクション内に配置（実装済み）**                   | DXは「何から始めればいいか分からない」層が多く、課題感が顕在化した直後の接触ポイントで相談CTA訴求が最も効果が出る |
| 2   | **英字キャプション「Business Automation…」を追加（実装済み）** | サービスの専門性と格式を視覚的に付加。欧文フォントの細さがゴールド×和文見出しのコントラストをさらに際立てる      |
| 3   | **ナビに「DX・自動化」を追加（任意）**                      | DX起点で検索してランディングしたユーザーが即座に目的セクションへ遷移できる。内部リンク強化でSEOにも寄与      |
| 4   | **サービスグリッドから削除（推奨）**                        | 専用セクションとの重複をなくし、サービス概覧3列を均等に保つ。情報の階層が整理されてユーザーの認知負荷が下がる     |

[制約]
- *この成果物を使用所です。これを使用してコーディングができます。*



