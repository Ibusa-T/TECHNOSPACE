
# サービスセクション改修

## タスクルール定義
## 本LP開発プロジェクトの定義は以下

## メンバ構成
# ============================
*フロンエンドのみの開発はマルチモーダルを生かしたGeminiのみの編成とする*
#### リーダー補佐・QA
```bash
# 7. サブリーダニキ (Antigravity Gemini #3 - Gemini 4 Argon)
agy --conversation=ad8a0429-452a-4575-8175-4baeda22d212

# 8. QAニキ (Antigravity Gemini #4)
agy --conversation=0c2d2810-bafd-4e0c-8ed6-a3c6c06cf9c3
```
#### コーダー
```bash
# 5. コーダーニキB (Antigravity Gemini #1)
agy --conversation=c9e0f486-33c5-49b8-9f9e-3645baec43b2

# 6. コーダーニキA (Antigravity Gemini #2)
agy --conversation=fc2c30b9-e024-4b5d-a30d-8eac848567b2
```
# ===========================



## タスク詳細

*現行*
*サービスセクションにはDXと製品紹介のコンテンツがある*

*新規追加仕様*
- *Web制作事業をスタートさせるのでWeb制作事業紹介コンテンツを用意する*

*事業内容*
- *主にホームページ・LPの作成から運用までを代行*
- *既存ホームページの運用のみの請負も可*

## サービスセクションは新たにサブセクションを持つセクションとして定義

```
サービスセクション
    Web制作事業サブセクション
    現行の製品紹介サブセクション
    現行のDXサブセクション
```


## お問い合わせフォームの項目追加

*お問い合わせ内容に「Web制作・ホームページ作成・運用の相談」を追加*

*動的UX*
*Web制作事業サブセクションのページ内リンクを押下したときお問い合わせフォームセレクトボックス「Web制作・ホームページ作成・運用の相談」を選択した状態でお問い合わせフォームへ画面フォーカスする*

*背景デザイン*
- *背景画像を今後挿入*

*コードベース・Web制作セクション*
```html
  <!-- セクション「Web制」 -->
  <section id="web-contents-create" style="box-sizing: border-box; position: relative; width: 100%; min-height: 480px; overflow: hidden; border-top: 1px solid rgba(212, 175, 55, 0.35); border-bottom: 1px solid rgba(212, 175, 55, 0.35);">
    <!-- 背景画像レイヤー -->
    <div id="web-contents-create-bg-layer" style="box-sizing: border-box; position: absolute; inset: 0; background-image: url('./static/img/web_contents_create_service.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 0; filter: brightness(0.7); transition: filter 0.6s ease;"></div>

    <!-- オーバーレイ（可読性確保 + ブランドカラー） -->
    <div style="box-sizing: border-box; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10, 11, 14, 0.88) 0%, rgba(10, 11, 14, 0.72) 50%, rgba(20, 15, 5, 0.82) 100%); z-index: 1;"></div>
    <!-- コンテンツ -->
    <div style="box-sizing: border-box; position: relative; z-index: 2; max-width: 1440px; margin: 0 auto; padding: 7rem 2rem; display: flex; flex-direction: column; align-items: center;">

      <!-- セクションラベル（英字） -->
      <p style="box-sizing: border-box; margin: 0 0 1rem 0; padding: 0; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.2em; color: #d4af37; text-transform: uppercase; text-align: center;">Web Content Create</p>
      <!-- メイン見出し（カードh3テキストをそのまま使用） -->
      <h2 style="box-sizing: border-box; margin: 0 0 1.5rem 0; padding: 0 0 1.1rem 0; font-family: 'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; color: #f3e5ab; letter-spacing: 0.08em; text-align: center; position: relative;">
        Web制作・HPサイト・LPサイト
        <span style="box-sizing: border-box; display: block; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #d4af37, transparent);"></span>
      </h2>
      <!-- 説明文（カードのdivテキストをそのまま使用） -->
      <p style="box-sizing: border-box; margin: 0 auto 3rem; padding: 0; max-width: 680px; font-size: 1.12rem; color: #c0c0c8; line-height: 1.9; text-align: center; letter-spacing: 0.04em;">
      </p>
      <!-- CTAボタン -->
      <a class="web-contents-create-cta" href="#company-qa" style="box-sizing: border-box; margin: 0; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; padding: 1rem 2.6rem; background: linear-gradient(135deg, #d4af37 0%, #aa820a 100%); color: #0a0a0c; font-size: 1.02rem; font-weight: 700; letter-spacing: 0.1em; border-radius: 6px; box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4); transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);">
        Webコンテンツ制作・運用のご相談
      </a>
    </div>
  </section>
```


*コードベース・お問い合わせフォーム*
*「業務自動化に関するご質問・ご相談」の上に以下のマークダウンを追加配置*
```html
            <option value="web-content-create" style="box-sizing: border-box; background: #141418; color: #e2e2e8;">Web制作・ホームページ作成・運用の相談</option>
```

*改修コード抜粋*
```html
<label for="order" style="box-sizing: border-box; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.98rem; font-weight: 600; color: #f3e5ab; letter-spacing: 0.04em;">
          お問い合わせ項目
          <select name="order-items" id="order" style="box-sizing: border-box; margin: 0; width: 100%; padding: 1rem 1.2rem; background: #141418; border: 1px solid rgba(192, 192, 200, 0.18); border-radius: 6px; color: #e2e2e8; font-size: 1rem; font-weight: 400; font-family: inherit; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); outline: none;">
            <option value="automation" style="box-sizing: border-box; background: #141418; color: #e2e2e8;">業務自動化に関するご質問・ご相談</option>
            <option value="quotation"  style="box-sizing: border-box; background: #141418; color: #e2e2e8;">お見積もりの相談</option>
            <option value="materials"  style="box-sizing: border-box; background: #141418; color: #e2e2e8;">取り扱い製品に関するご質問・ご相談</option>
            <option value="other"      style="box-sizing: border-box; background: #141418; color: #e2e2e8;">その他のサービスに関するご質問・ご相談</option>
          </select>
        </label>
```



[制約]
*サブリーダニキ は以下仕様を見て使用権を詳細なアーティファクトに落とし込むこと*
*アーティファクトはオーケストレータの承認が必要*
*コーダーニキB ・コーダーニキAにアーティファクトをもとにコーディング業務を割り振ること*


## テスト業務

*対象者*
- *QAニキ*

## テスト仕様
- *リグレッションテストとする*
- **






# FIXTURE:データ移行計画書
## 概要
`dev/index.html` 内にインライン定義されている `<style>` タグ内のCSS（67〜274行目）および `<script>` タグ内の動的イベント管理用JavaScript（455〜551行目）を、それぞれ外部ファイル（`static/css/index.css`・`static/js/index.js`）へ分離・移行する計画書。

- **対象ファイル:** `C:\Users\User\myapp\dev\index.html`
- **新規作成ディレクトリ・ファイル:**
  - `C:\Users\User\myapp\dev\static\css\index.css`
  - `C:\Users\User\myapp\dev\static\js\index.js`
- **制約:**
  - `static` 直下に新規ディレクトリ（`css`, `js`）を作成して配置すること。

---

## 1. CSSデータの移行（`static/css/index.css` の新規作成）

`dev/index.html` の 67〜274行目の `<style> ... </style>` 内のCSSコードを抽出し、`C:\Users\User\myapp\dev\static\css\index.css` として保存する。

### `static/css/index.css` の内容
```css
/* タグインライン(style属性)では記述できない擬似要素・擬似クラス・状態クラス・メディアクエリのみ定義 */
:root {
  --bg-card-hover: #22222a;
  --gold-primary: #d4af37;
  --gold-light: #f3e5ab;
  --silver-muted: #8e8e99;
  --border-gold: rgba(212, 175, 55, 0.35);
  --border-silver: rgba(192, 192, 200, 0.18);
  --shadow-gold: 0 12px 32px -5px rgba(212, 175, 55, 0.18);
}

/* 擬似要素 */
header::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: none;
  z-index: -1;
}

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

.section-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
}

#company-info .info-items::before {
  content: "◆";
  color: var(--gold-primary);
  font-size: 0.9rem;
}

#company-qa textarea::placeholder {
  color: var(--silver-muted);
}

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

.hero-cta:hover {
  color: #0a0a0c !important;
  transform: translateY(-2px) !important;
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold-primary) 100%) !important;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.45) !important;
}

main#company-service > div:hover {
  transform: translateY(-6px) !important;
  background: var(--bg-card-hover) !important;
  border-color: var(--border-gold) !important;
  box-shadow: var(--shadow-gold) !important;
}

#company-qa select:focus,
#company-qa textarea:focus {
  border-color: var(--gold-primary) !important;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2) !important;
}

#company-qa input[type="submit"]:hover {
  transform: translateY(-2px) !important;
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold-primary) 100%) !important;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.45) !important;
}

/* DX セクション CTAボタン hover */
.dx-cta:hover {
  color: #0a0a0c !important;
  transform: translateY(-2px) !important;
  background: linear-gradient(135deg, #f3e5ab 0%, #d4af37 100%) !important;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.45) !important;
}

/* JS連動の状態クラス (.is-open) */
#menu-toggle.is-open {
  transform: rotate(180deg) !important;
  border-color: var(--gold-light) !important;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.35) !important;
}

#menu-toggle.is-open span:nth-child(1) {
  transform: translateY(10px) rotate(45deg) !important;
}

#menu-toggle.is-open span:nth-child(2) {
  opacity: 0 !important;
}

#menu-toggle.is-open span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg) !important;
}

.menu-backdrop.is-open {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

/* モバイル・タブレットレスポンシブ: スライド＆回転メニュー */
@media (max-width: 960px) {
  header {
    padding: 1rem 1.5rem !important;
    font-size: 1.15rem !important;
  }

  .mobile-controls,
  #menu-toggle {
    display: flex !important;
  }

  .slide-menu.header-menu {
    position: fixed !important;
    top: 0 !important;
    right: -100vw !important;
    width: min(80vw, 320px) !important;
    height: 100vh !important;
    background: #141418 !important;
    border-left: 1px solid var(--border-gold) !important;
    padding: 5.5rem 2rem 2rem !important;
    transform: rotate(-4deg) !important;
    transform-origin: top right !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transition: right 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, visibility 0.35s ease !important;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8) !important;
    z-index: 1050 !important;
  }

  .slide-menu.header-menu.is-open {
    right: 0 !important;
    transform: rotate(0deg) !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  .header-menu #header-items {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 1.25rem !important;
  }

  .header-item {
    font-size: 1.15rem !important;
    width: 100% !important;
    border-bottom: 1px solid var(--border-silver) !important;
  }

  .header-item a {
    display: block !important;
    width: 100% !important;
    padding: 0.75rem 0 !important;
    border-bottom: none !important;
  }

  main#company-service {
    grid-template-columns: 1fr !important;
    max-width: 520px !important;
    padding: 1rem 0 2.5rem !important;
  }

  main#company-service > div {
    padding: 1.5rem 1.25rem !important;
  }

  #company-info,
  #company-qa {
    padding: 2rem 1.5rem !important;
  }

  /* DX セクション モバイル対応 */
  #company-dx > div:last-child {
    padding: 4rem 1.5rem !important;
  }
}
```

---

## 2. JavaScriptデータの移行（`static/js/index.js` の新規作成）

`dev/index.html` の 455〜551行目の `<script> ... </script>` 内のJavaScriptコードを抽出し、`C:\Users\User\myapp\dev\static\js\index.js` として保存する。

### `static/js/index.js` の内容
```javascript
// 画像未配置時に420x420のスタイリッシュなSVGプレースホルダーを描画
function applyPlaceholderImage(imgEl) {
  if (!imgEl || imgEl.dataset.fallbackApplied === 'true') return;
  imgEl.dataset.fallbackApplied = 'true';
  const title = imgEl.getAttribute('data-placeholder-title') || imgEl.getAttribute('alt') || 'IMAGE';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a1a22"/>
        <stop offset="100%" stop-color="#0d0d12"/>
      </linearGradient>
    </defs>
    <rect width="420" height="420" fill="url(#bg)"/>
    <rect x="16" y="16" width="388" height="388" rx="8" fill="none" stroke="#d4af37" stroke-opacity="0.35" stroke-dasharray="6 6"/>
    <circle cx="210" cy="175" r="42" fill="none" stroke="#d4af37" stroke-opacity="0.55" stroke-width="2"/>
    <path d="M192 175h36M210 157v36" stroke="#d4af37" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round"/>
    <text x="210" y="255" text-anchor="middle" fill="#d4af37" font-family="sans-serif" font-size="20" font-weight="bold" letter-spacing="2">${title}</text>
    <text x="210" y="285" text-anchor="middle" fill="#8e8e99" font-family="sans-serif" font-size="13" letter-spacing="1">420 × 420 Image Area</text>
  </svg>`;
  imgEl.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

let isMenuListenerAttached = false;

function validateTestMaxLength() {
  const test = document.getElementById('test_max_length');
  if (!test) return;
  if (test.value.length > 1 || Number(test.value) > 1) {
    throw Error('eeeeee');
  }
}

function setMenuOpenState(isOpen) {
  const menuToggle = document.getElementById('menu-toggle');
  const slideMenu = document.getElementById('slide-menu') || document.querySelector('.slide-menu');
  const backdrop = document.getElementById('menu-backdrop');
  if (!menuToggle || !slideMenu) return;

  menuToggle.classList.toggle('is-open', isOpen);
  slideMenu.classList.toggle('is-open', isOpen);
  if (backdrop) {
    backdrop.classList.toggle('is-open', isOpen);
  }
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
}

function menuEvent() {
  const menuToggle = document.getElementById('menu-toggle');
  const slideMenu = document.getElementById('slide-menu') || document.querySelector('.slide-menu');
  if (!menuToggle || !slideMenu) return;

  // menuEvent() 直接呼び出し時にも入力値検証を実行
  validateTestMaxLength();

  if (!isMenuListenerAttached) {
    menuToggle.addEventListener('click', () => {
      // ボタンとメニューの両方にクラスをトグル（交互に付け外し）する
      const willOpen = !menuToggle.classList.contains('is-open');
      setMenuOpenState(willOpen);
      validateTestMaxLength();
    });
    isMenuListenerAttached = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  menuEvent();

  const backdrop = document.getElementById('menu-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => setMenuOpenState(false));
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setMenuOpenState(false);
    }
  });

  // ナビゲーションおよびCTAリンクのスムーズスクロール＆モバイルメニュー自動クローズ
  const anchorLinks = document.querySelectorAll('a[href^="#"], .header-item a, .footer-item a');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const rawHref = link.getAttribute('href') || '';
      const targetId = rawHref.startsWith('#') ? rawHref.slice(1) : rawHref;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpenState(false);
    });
  });
});
```

---

## 3. `dev/index.html` の変更（外部ファイルの読み込みへ置換）

1. `<head>` 内の `<style> ... </style>`（67〜274行目）を削除し、以下の `<link>` タグに置き換える：
   ```html
   <link rel="stylesheet" href="./static/css/index.css">
   ```
2. `</body>` 直前の `<script> ... </script>`（455〜551行目）を削除し、以下の `<script>` タグに置き換える：
   ```html
   <script src="./static/js/index.js"></script>
   ```

---

# FIXTURE:お問い合わせ仕様・UX向上仕様書

## 概要

`dev/index.html` のフロントエンドUX改善、お問い合わせフォーム改修、および `dev/qa_form.py` のDB設計を実施する。

- **対象ファイル:**
  - `C:\Users\User\myapp\dev\index.html`
  - `C:\Users\User\myapp\dev\static\js\index.js`
- **新規作成ファイル:**
  - `C:\Users\User\myapp\dev\static\img\dx_service.svg`
  - `C:\Users\User\myapp\dev\qa_form.py`
- **制約:**
  - LPサイト上への問い合わせ履歴・QAボットセクションの実装は今回スコープ外
  - スタイリングは現行デザイン（ゴールド／シルバー配色）を踏襲すること

---

## 1. フロントエンドUX向上

### 1-1. CTAボタンテキスト変更

#### DXセクション CTAボタン（`index.html` 180行目）

|      | 変更前            | 変更後                   |
| ---- | -------------- | --------------------- |
| テキスト | `DX導入のご相談はこちら` | `業務自動化などに関連するご相談はこちら` |

```html
<!-- 変更後 -->
<a class="dx-cta" href="#company-qa" style="box-sizing: border-box; margin: 0; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; padding: 1rem 2.6rem; background: linear-gradient(135deg, #d4af37 0%, #aa820a 100%); color: #0a0a0c; font-size: 1.02rem; font-weight: 700; letter-spacing: 0.1em; border-radius: 6px; box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4); transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);">
  業務自動化などに関連するご相談はこちら
</a>
```

#### ヒーローセクション CTAボタン（`index.html` 103行目）

|      | 変更前               | 変更後                |
| ---- | ----------------- | ------------------ |
| テキスト | `無料お見積もり・ご相談はこちら` | `サービスについてのご質問はこちら` |

```html
<!-- 変更後 -->
<a class="hero-cta" href="#company-qa" style="box-sizing: border-box; margin: 0; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.95rem 2.4rem; background: linear-gradient(135deg, #d4af37 0%, #aa820a 100%); color: #0a0a0c; font-size: 1.02rem; font-weight: 700; letter-spacing: 0.08em; border-radius: 6px; box-shadow: 0 4px 18px rgba(212, 175, 55, 0.3); transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);">サービスについてのご質問はこちら</a>
```

---

### 1-2. サービスセクション「お見積もりはこちら」ボタン追加

`main#company-service`（グリッドコンテナ）の **閉じタグ直前**に配置する。

```html
<a href="#company-qa" id="service-estimate-btn" style="box-sizing: border-box; margin: 2rem auto 0; text-decoration: none; display: block; text-align: center; color: #d4af37; transition: color 0.3s ease;">
  <h3 style="box-sizing: border-box; margin: 0; padding: 0; font-family: 'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif; font-size: 1.35rem; font-weight: 700; letter-spacing: 0.1em;">お見積もりはこちら</h3>
</a>
```

> `section.section-wrapper` の `padding-bottom` は現行の `4.5rem` を踏襲する。

---

### 1-3. DXセクション スクロール連動 背景輝度変化

#### 前準備：背景画像をSVGラッパーへ変換

新規ファイル `static/img/dx_service.svg` を作成し、既存の `dx_service.jpg` を `<image>` 要素で内包する。

```xml
<!-- static/img/dx_service.svg -->
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 1920 1080"
     preserveAspectRatio="xMidYMid slice"
     width="100%" height="100%">
  <image href="./dx_service.jpg"
         x="0" y="0"
         width="1920" height="1080"
         preserveAspectRatio="xMidYMid slice"/>
</svg>
```

`index.html` の背景レイヤー div を `dx_service.jpg` → `dx_service.svg` に差し替える。

```html
<!-- 変更後（index.html 156行目付近） -->
<div id="dx-bg-layer" style="box-sizing: border-box; position: absolute; inset: 0; background-image: url('./static/img/dx_service.svg'); background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 0; filter: brightness(0.7); transition: filter 0.6s ease;"></div>
```

#### JavaScript実装（`static/js/index.js` に追記）

`DOMContentLoaded` リスナー内に以下を追加する。

```javascript
// DXセクション スクロール連動 背景輝度変化
const dx = document.querySelector('#company-dx');
const dxBgLayer = document.getElementById('dx-bg-layer');

if (dx && dxBgLayer) {
  // DXセクションの絶対位置（画面上端からの距離）
  let sx_abs = dx.getBoundingClientRect().top + window.scrollY;
  let schroll_current = window.scrollY;

  window.addEventListener('scroll', () => {
  //スクロールの現在位置を更新する。
    schroll_current = window.scrollY;
    // ビューポート中央がDXセクション内に入ったとき輝度を上昇
    const viewCenter = schroll_current + window.innerHeight * 0.5;
    const dxBottom = sx_abs + dx.offsetHeight;
    if (viewCenter >= sx_abs && viewCenter <= dxBottom) {
      dxBgLayer.style.filter = 'brightness(1.15)';
    } else {
      dxBgLayer.style.filter = 'brightness(0.7)';
    }
  });
}
```

---

## 2. お問い合わせセレクトボックス改修

### 2-1. 選択肢テキスト・value変更

現行と変更後の対応表：

| 現行テキスト    | 現行value     | 変更後テキスト             | 変更後value     |
| --------- | ----------- | ------------------- | ------------ |
| 業務自動化の相談  | `example`   | 業務自動化に関するご質問・ご相談    | `automation` |
| お見積もりの相談  | `quotation` | お見積もりの相談（変更なし）      | `quotation`  |
| 製品資料の取り寄せ | `materials` | 取り扱い製品に関するご質問・ご相談   | `materials`  |
| その他       | `example`   | その他のサービスに関するご質問・ご相談 | `other`      |

```html
<!-- 変更後 select（index.html 212行目付近） -->
<select name="order-items" id="order" style="box-sizing: border-box; margin: 0; width: 100%; padding: 1rem 1.2rem; background: #141418; border: 1px solid rgba(192, 192, 200, 0.18); border-radius: 6px; color: #e2e2e8; font-size: 1rem; font-weight: 400; font-family: inherit; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); outline: none;">
  <option value="automation" style="box-sizing: border-box; background: #141418; color: #e2e2e8;">業務自動化に関するご質問・ご相談</option>
  <option value="quotation"  style="box-sizing: border-box; background: #141418; color: #e2e2e8;">お見積もりの相談</option>
  <option value="materials"  style="box-sizing: border-box; background: #141418; color: #e2e2e8;">取り扱い製品に関するご質問・ご相談</option>
  <option value="other"      style="box-sizing: border-box; background: #141418; color: #e2e2e8;">その他のサービスに関するご質問・ご相談</option>
</select>
```

---

### 2-2. ボタン押下 → セレクト自動選択 → スムーズスクロール

各CTAボタンにJSでクリックイベントを追加し、`#order` の value を設定してから `#company-qa` へスクロールする。

#### 実装方針

`index.html` の各 `<a>` タグの `href="#company-qa"` を維持しつつ、`index.js` のスムーズスクロール処理（既存の `anchorLinks` ループ）の前に専用ハンドラーを登録する。

```javascript
// static/js/index.js に追記（DOMContentLoaded 内）
function jumpToQaWithCategory(value) {
  const selectEl = document.getElementById('order');
  if (selectEl) selectEl.value = value;
  const target = document.getElementById('company-qa');
  //お問い合わせにジャンプ
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

// ヒーローCTA → 「その他のサービスに関するご質問・ご相談」
const heroCta = document.querySelector('a.hero-cta');
if (heroCta) {
  heroCta.addEventListener('click', (e) => {
    e.preventDefault();
    jumpToQaWithCategory('other');
  });
}

// サービスセクション「お見積もりはこちら」→ 「取り扱い製品に関するご質問・ご相談」
const serviceEstimateBtn = document.getElementById('service-estimate-btn');
if (serviceEstimateBtn) {
  serviceEstimateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    jumpToQaWithCategory('materials');
  });
}

// DX CTA → 「業務自動化に関するご質問・ご相談」
const dxCta = document.querySelector('a.dx-cta');
if (dxCta) {
  dxCta.addEventListener('click', (e) => {
    e.preventDefault();
    jumpToQaWithCategory('automation');
  });
}
```

---

## 3. フォームバリデーション（テキストエリア）

### 3-1. HTML属性追加

`#qa-field` に `minlength`・`maxlength` 属性を追加する。

```html
<textarea
  id="qa-field"
  name="qa-field-detail"
  rows="5"
  cols="30"
  minlength="15"
  maxlength="300"
  placeholder="導入をご検討中の機器や、現在のオフィス環境のお悩みをご記入ください"
  style="box-sizing: border-box; margin: 0; width: 100%; padding: 1rem 1.2rem; background: #141418; border: 1px solid rgba(192, 192, 200, 0.18); border-radius: 6px; color: #e2e2e8; font-size: 1rem; font-weight: 400; font-family: inherit; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); outline: none;"
></textarea>
```

### 3-2. JSバリデーション（`static/js/index.js` に追記）

フォームの `submit` イベントでチェックを行い、エラー時はラベルのテキストと色を切り替える。ブラウザのデフォルト送信は `e.preventDefault()` で制御する。

```javascript
// static/js/index.js に追記（DOMContentLoaded 内）
const qaForm = document.querySelector('#company-qa form');
const qaFieldLabel = document.querySelector('label[for="qa-field"]');
const qaField = document.getElementById('qa-field');

const QA_LABEL_NORMAL = 'お問い合わせ内容詳細';
const QA_LABEL_ERROR  = 'お問い合わせは15文字以上300文字以内で入力してください';

if (qaForm && qaFieldLabel && qaField) {
  qaForm.addEventListener('submit', (e) => {
    const len = qaField.value.trim().length;
    const firstChild = qaFieldLabel.firstChild;

    if (len === 0 || len < 15 || len > 300) {
      e.preventDefault();
      // ラベル先頭テキストノードを切り替え
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        firstChild.textContent = QA_LABEL_ERROR;
      }
      qaFieldLabel.style.color = 'red';
    } else {
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        firstChild.textContent = QA_LABEL_NORMAL;
      }
      qaFieldLabel.style.color = '#f3e5ab';
    }
  });
}
```

**正常時ラベル（参考）:**
```html
<label for="qa-field" style="... color: #f3e5ab; ...">
  お問い合わせ内容詳細
  <textarea ...></textarea>
</label>
```

**エラー時ラベル（参考）:**
```html
<label for="qa-field" style="... color: red; ...">
  お問い合わせは15文字以上300文字以内で入力してください
  <textarea ...></textarea>
</label>
```

---

## 4. お問い合わせフォーム 新規入力フィールド追加

### 4-1. フィールド定義

| フィールド | 必須  | バリデーション | 文字数    | 規定値 | 表示条件         |
| ----- | --- | ------- | ------ | --- | ------------ |
| お名前   | 任意  | ブラウザ    | 1〜15文字 | 未入力 | 常に表示         |
| 所属会社  | 任意  | 対象外     | 1〜20文字 | 未入力 | お名前入力後に動的表示  |
| 所属部署  | 任意  | 対象外     | 1〜20文字 | 未入力 | 所属会社入力後に動的表示 |

### 4-2. HTML（セレクトボックスとテキストエリアの間に挿入）

```html
<!-- お名前 -->
<label for="guest-name" style="box-sizing: border-box; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.98rem; font-weight: 600; color: #f3e5ab; letter-spacing: 0.04em;">
  お名前（任意）
  <input
    type="text"
    id="guest-name"
    name="guest-name"
    placeholder="お名前"
    minlength="1"
    maxlength="15"
    style="box-sizing: border-box; margin: 0; width: 100%; padding: 1rem 1.2rem; background: #141418; border: 1px solid rgba(192, 192, 200, 0.18); border-radius: 6px; color: #e2e2e8; font-size: 1rem; font-family: inherit; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); outline: none;"
  >
</label>

<!-- 所属会社（お名前入力後に表示） -->
<label for="guest-company" id="label-company" style="box-sizing: border-box; margin: 0; padding: 0; display: none; flex-direction: column; gap: 0.6rem; font-size: 0.98rem; font-weight: 600; color: #f3e5ab; letter-spacing: 0.04em;">
  所属会社（任意）
  <input
    type="text"
    id="guest-company"
    name="guest-company"
    placeholder="所属会社"
    minlength="1"
    maxlength="20"
    style="box-sizing: border-box; margin: 0; width: 100%; padding: 1rem 1.2rem; background: #141418; border: 1px solid rgba(192, 192, 200, 0.18); border-radius: 6px; color: #e2e2e8; font-size: 1rem; font-family: inherit; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); outline: none;"
  >
</label>

<!-- 所属部署（所属会社入力後に表示） -->
<label for="guest-dept" id="label-dept" style="box-sizing: border-box; margin: 0; padding: 0; display: none; flex-direction: column; gap: 0.6rem; font-size: 0.98rem; font-weight: 600; color: #f3e5ab; letter-spacing: 0.04em;">
  所属部署（任意）
  <input
    type="text"
    id="guest-dept"
    name="guest-dept"
    placeholder="所属部署"
    minlength="1"
    maxlength="20"
    style="box-sizing: border-box; margin: 0; width: 100%; padding: 1rem 1.2rem; background: #141418; border: 1px solid rgba(192, 192, 200, 0.18); border-radius: 6px; color: #e2e2e8; font-size: 1rem; font-family: inherit; transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1); outline: none;"
  >
</label>
```

### 4-3. 動的表示JS（`static/js/index.js` に追記）

```javascript
// static/js/index.js に追記（DOMContentLoaded 内）
const guestName    = document.getElementById('guest-name');
const labelCompany = document.getElementById('label-company');
const guestCompany = document.getElementById('guest-company');
const labelDept    = document.getElementById('label-dept');

if (guestName && labelCompany) {
  guestName.addEventListener('input', () => {
    labelCompany.style.display = guestName.value.trim().length > 0 ? 'flex' : 'none';
    if (guestName.value.trim().length === 0 && labelDept) {
      labelDept.style.display = 'none';
    }
  });
}

if (guestCompany && labelDept) {
  guestCompany.addEventListener('input', () => {
    labelDept.style.display = guestCompany.value.trim().length > 0 ? 'flex' : 'none';
  });
}
```

### 4-4. 規定値挿入（送信時・`static/js/index.js` のsubmitハンドラー内に追記）

```javascript
// qaForm submitハンドラー内（バリデーション通過後）に追記
const nameEl    = document.getElementById('guest-name');
const companyEl = document.getElementById('guest-company');
const deptEl    = document.getElementById('guest-dept');

if (nameEl    && nameEl.value.trim() === '')    nameEl.value    = '未入力';
if (companyEl && companyEl.value.trim() === '') companyEl.value = '未入力';
if (deptEl    && deptEl.value.trim() === '')    deptEl.value    = '未入力';
```

---

## 5. DB設計（`dev/qa_form.py`）

### 5-1. ファイル概要

- **対象ファイル:** `C:\Users\User\myapp\dev\qa_form.py`（新規作成）
- **使用ライブラリ:** Python標準ライブラリ `sqlite3`
- **DBファイル:** `qa_form.db`（同ディレクトリ）

### 5-2. ER図

```text
[問い合わせ内容テーブル]           [訪問者テーブル]                [問い合わせ分類テーブル]
 QA_CONTENTS                     QA_GUEST                          QA_CLASS
+------------------+        +--------------------------+     +------------------+
| qa_id CHAR(8) PK |<------>| qa_id CHAR(8) FK         |     | class_id INT PK  |
| qa_item VARCHAR  |        |guest_session_id CHAR(8)PK|<--->| qa_id CHAR(8) FK |
| qa_detail TEXT   |        | guest_name VARCHAR(15)   |     | qa_item TEXT     |
+------------------+        | company  VARCHAR(20)     |     | dept VARCHAR(20) |
                            | dept     VARCHAR(20)     |     | company VARCHAR  |
                            | status   TEXT            |     +------------------+
                            +--------------------------+
```

### 5-3. テーブル定義

#### `QA_CONTENTS`（問い合わせ内容テーブル）

| カラム       | 型          | 制約          | 備考                  |
| --------- | ---------- | ----------- | ------------------- |
| qa_id     | CHAR(8)    | PRIMARY KEY | 問い合わせ詳細から生成した8桁ハッシュ |
| qa_item   | VARCHAR(8) | NOT NULL    | 空白文字トリム後に挿入         |
| qa_detail | TEXT       | NOT NULL    | 文字数制限なし             |

#### `QA_GUEST`（訪問者テーブル）

| カラム              | 型           | 制約                       | 備考                     |
| ---------------- | ----------- | ------------------------ | ---------------------- |
| guest_session_id | CHAR(8)     | PRIMARY KEY              | 8桁ハッシュ                 |
| qa_id            | CHAR(8)     | NOT NULL, FK→QA_CONTENTS | 8桁ハッシュ                 |
| guest_name       | VARCHAR(15) | NOT NULL                 | 空白文字トリム後に挿入            |
| company          | VARCHAR(20) | NOT NULL                 | 値「未記入」または文字列。空白トリム後に挿入 |
| dept             | VARCHAR(20) | NOT NULL                 | 値「未記入」または文字列。空白トリム後に挿入 |
| status           | TEXT        | NOT NULL DEFAULT 'OPEN'  | 'OPEN' / 'CLOSE'       |

#### `QA_CLASS`（問い合わせ分類テーブル）

| カラム      | 型           | 制約                        | 備考  |
| -------- | ----------- | ------------------------- | --- |
| class_id | INTEGER     | PRIMARY KEY AUTOINCREMENT |     |
| qa_id    | CHAR(8)     | NOT NULL, FK→QA_CONTENTS  |     |
| qa_item  | TEXT        | NOT NULL                  |     |
| dept     | VARCHAR(20) |                           |     |
| company  | VARCHAR(20) |                           |     |

### 5-4. `qa_form.py` の内容

```python
import sqlite3
import hashlib


def load_sqlite() -> sqlite3.Connection:
    db = sqlite3.connect('qa_form.db')
    db.enable_load_extension(False)
    db.execute("PRAGMA foreign_keys = ON")
    return db


def generate_qa_id(detail: str) -> str:
    return hashlib.sha256(detail.encode('utf-8')).hexdigest()[:8]


def qa_contents() -> str:
    return """
CREATE TABLE IF NOT EXISTS QA_CONTENTS (
    qa_id    CHAR(8)      PRIMARY KEY,
    qa_item  VARCHAR(8)   NOT NULL,
    qa_detail TEXT        NOT NULL
);
"""


def qa_guest() -> str:
    return """
CREATE TABLE IF NOT EXISTS QA_GUEST (
    guest_session_id  CHAR(8)     PRIMARY KEY,
    qa_id             CHAR(8)     NOT NULL,
    guest_name        VARCHAR(15) NOT NULL,
    company           VARCHAR(20) NOT NULL,
    dept              VARCHAR(20) NOT NULL,
    status            TEXT        NOT NULL DEFAULT 'OPEN',
    FOREIGN KEY (qa_id) REFERENCES QA_CONTENTS(qa_id)
);
"""


def qa_class() -> str:
    return """
CREATE TABLE IF NOT EXISTS QA_CLASS (
    class_id  INTEGER     PRIMARY KEY AUTOINCREMENT,
    qa_id     CHAR(8)     NOT NULL,
    qa_item   TEXT        NOT NULL,
    dept      VARCHAR(20),
    company   VARCHAR(20),
    FOREIGN KEY (qa_id) REFERENCES QA_CONTENTS(qa_id)
);
"""


if __name__ == '__main__':
    db = load_sqlite()
    db.executescript(qa_contents())
    db.executescript(qa_guest())
    db.executescript(qa_class())
    db.commit()
    db.close()
    print('DB initialized: qa_form.db')
```

---

# FIXTURE:design-combined バグ改修仕様書

## 概要

`design-combined` ブランチの `index.html` に対してバグ調査を実施し、JavaScript動的イベントおよびモバイルレスポンシブに関する問題を4件確認した。本仕様書はその改修内容を定義する。

- **対象ファイル:** `C:\Users\User\myapp\dev\index.html`（`design-combined` ブランチ）
- **対象ブランチ:** `design-combined`

---

## Bug 1 — DXスクロールハンドラ: `getBoundingClientRect()` の毎フレーム呼び出し

### 問題

`window.addEventListener('scroll', ...)` のコールバック内で `dx.getBoundingClientRect().top` および `dx.offsetHeight` を毎スクロールイベントごとに呼び出している。`getBoundingClientRect()` はレイアウトリフローを強制するため、スクロール中のパフォーマンス劣化（ジャンク）の原因となる。

```javascript
// 現行（scroll内部で毎回計算）
window.addEventListener('scroll', () => {
  const sx_abs  = dx.getBoundingClientRect().top + window.scrollY; // ← リフロー
  const dxBottom = sx_abs + dx.offsetHeight;                        // ← offsetHeight も毎回
  ...
});
```

### 改修

`sx_abs` と `dxHeight` をリスナー登録前にキャッシュする。

```javascript
// 改修後
const sx_abs  = dx.getBoundingClientRect().top + window.scrollY;
const dxHeight = dx.offsetHeight;

window.addEventListener('scroll', () => {
  const viewCenter = window.scrollY + window.innerHeight * 0.5;
  const dxBottom   = sx_abs + dxHeight;
  dxBgLayer.style.filter = (viewCenter >= sx_abs && viewCenter <= dxBottom)
    ? 'brightness(1.5)'
    : 'brightness(0.7)';
});
```

---

## Bug 2 — DX輝度: ページロード時の初期チェックなし

### 問題

輝度変化のロジックが `scroll` イベント発火時のみ実行される。`#company-dx` アンカーリンクで直接アクセスした場合など、ページロード時点で DX セクションがビューポート内に入っていても `brightness(0.7)` のままとなり、輝度が上昇しない。

### 改修

スクロールリスナー登録後に初期チェックを1回実行する。

```javascript
// リスナー登録後に追記
window.dispatchEvent(new Event('scroll'));
```

---

## Bug 3 — お問い合わせセレクトボックス: `value` 重複

### 問題

`#order` セレクトボックスの「業務自動化の相談」と「その他」の両 `<option>` が同一の `value="example"` を持つ。フォーム送信時にどちらが選択されたか区別できず、2-2で実装したジャンプ処理（`jumpToQaWithCategory`）も正しく機能しない。

| 項目 | 現行 value |
|---|---|
| 業務自動化の相談 | `example` ← 重複 |
| お見積もりの相談 | `quotation` |
| 製品資料の取り寄せ | `materials` |
| その他 | `example` ← 重複 |

### 改修

各 `<option>` の `value` を一意な値に変更する。

```html
<!-- 改修後 -->
<option value="automation" style="box-sizing: border-box; background: #141418; color: #e2e2e8;">業務自動化の相談</option>
<option value="quotation"  style="box-sizing: border-box; background: #141418; color: #e2e2e8;">お見積もりの相談</option>
<option value="materials"  style="box-sizing: border-box; background: #141418; color: #e2e2e8;">製品資料の取り寄せ</option>
<option value="other"      style="box-sizing: border-box; background: #141418; color: #e2e2e8;">その他</option>
```

---

## Bug 4 — 送信ボタン: `min-width: 260px` にモバイル上書きなし

### 問題

`input[type="submit"]` に `min-width: 260px` が inline style で設定されており、メディアクエリに上書きルールがない。375px 未満の端末では余白を圧迫しレイアウトが崩れる可能性がある。

### 改修

`@media (max-width: 960px)` ブロックに以下を追加する。

```css
/* 追加箇所: index.html <style> 内 @media (max-width: 960px) ブロック末尾 */
#company-qa input[type="submit"] {
  min-width: 0 !important;
  width: 100% !important;
}
```

---

## 改修サマリー

| # | 分類 | 重要度 | 対象 | 改修内容 |
|---|---|---|---|---|
| 1 | JS | 中 | scroll ハンドラ | `sx_abs` / `dxHeight` をリスナー外でキャッシュ |
| 2 | JS | 中 | DOMContentLoaded | スクロールリスナー登録後に `dispatchEvent('scroll')` を1回実行 |
| 3 | JS / HTML | 高 | `#order` select | `value="example"` 重複を `automation` / `other` に変更 |
| 4 | CSS | 中 | 送信ボタン | `@media` に `min-width: 0; width: 100%` を追加 |
