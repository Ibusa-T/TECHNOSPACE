
# サービスセクション改修

## タスクルール定義
## 本LP開発プロジェクトの定義は以下

## メンバ構成
# ============================
*フロンエンドのみの開発はマルチモーダルを生かしたGeminiのみの編成とする*
[Role]
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


[tools]
- agentknockを使用して相互連携を図る
# ===========================



## 画面仕様

*対象者*
- *コーダーニキA*
- *コーダニキB*

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
    　　　Web制作事業
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


*作業対象者は作業者同士で相互レビューをすること*

## テスト業務
*以下対象者に対し依頼すること*
- *QAニキ*

## テスト仕様
- *リグレッションテストとする*

- *ヘッダー*
   - *見出しテキストのフォントカラー配置の正誤*
   　　　- *モバイルレスポンシブ*
   - *モバイルレスポンシブのサイドメニュー表示の有無*
   - *ヘッダリンクのクリック動作*
      - *クリックしたリンクによってフォーカスするセクションが切り替え*
　- *CTAボタン押下時のお問い合わせフォームのセレクトボックス表示*

*サービスセクション*
   - *各セクションのコンポーネント配置・フォントカラー・スタイル・アニメーション* 
   　　　- *モバイルレスポンシブ*
   - *各サービスのCTAボタン*
     - *押下時のお問い合わせフォームのセレクトボックス表示*
*懸念されるサイバー攻撃*
   *XSS・XSF*


*お問い合わせセクション*
- *見出しテキストのフォントカラー配置の正誤*
   　　　- *モバイルレスポンシブ*
- *別セクションからのジャンプ後のセレクトボックス表示*

-  *バリデーションテスト*
  - *お問い合わせ内容入力フィールドの文字列入力チェック*
    *懸念されるサイバーセキリュティ攻撃*
	  - *SQLインジェクション*
	  - *パストラバーサル*

- *エビデンスをサブリーダーにスクリーンショットで共有すること*
- *サブリーダーはエビデンス確認後問題なしを判断・オーケストレータの承認は不要*

[制約]
*サブリーダニキ は以下仕様を見て使用権を詳細なアーティファクトに落とし込むこと*
    - *アーティファクトの前提情報で以下を共有すること*
    - *タスク担当メンバー*
*アーティファクトはオーケストレータの承認が必要*




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

| #   | 分類        | 重要度 | 対象               | 改修内容                                             |
| --- | --------- | --- | ---------------- | ------------------------------------------------ |
| 1   | JS        | 中   | scroll ハンドラ      | `sx_abs` / `dxHeight` をリスナー外でキャッシュ               |
| 2   | JS        | 中   | DOMContentLoaded | スクロールリスナー登録後に `dispatchEvent('scroll')` を1回実行    |
| 3   | JS / HTML | 高   | `#order` select  | `value="example"` 重複を `automation` / `other` に変更 |
| 4   | CSS       | 中   | 送信ボタン            | `@media` に `min-width: 0; width: 100%` を追加       |

---

# FIXTURE:TECHNOSPACE LP AIO・LLMO対策 方針案・事前確認事項

- **策定日**: 2026-11-15
- **策定メンバー**: QAニキ（`gemini-target`）中心 / コーダーニキA（`coder-a`）・コーダーニキB（`coder-b`）協力 / サブリーダニキ（`subleader-argon`）とりまとめ
- **対象ファイル**: `index.html`, `static/css/index.css`, `static/js/index.js`, `qa_form.py`, `aq_form.py.py` ほか公開構成一式
- **ステータス**: **事前確認事項（10項目）回答確定・実装フェーズ進行中**（コーダーニキA・Bへ実装委任、QAニキにて検証）
- **基本原則**: 未確認の事業事実（URL・郵便番号・営業時間・対応エリア・取扱メーカー・実績等）を推測で補完しない（ゼロ・ハルシネーション）。

---

## 1. チーム調停済み 統合方針サマリー

### 1.1 技術・設計の調停ポイント

1. **`#test_max_length`（`index.html` L83）および `validateTestMaxLength()`（`static/js/index.js` L65-71）**
   - **推奨方針**: 本番DOM/JSから除去し、検証は Playwright 等の自動テスト側へ移管する（`Error('eeeeee')` の意図的 throw による計測ノイズやクローラ・支援技術への干渉を回避）。
   - **フォールバック（検証用途で残置が必要な場合）**: インライン `onClick="menuEvent()"` の分離と `aria-hidden="true" tabindex="-1" autocomplete="off"` の付与で非公開要素化する。
2. **タグ直書きCSS運用（`WORK.md` L344）と外部CSS集約の扱い**
   - **Phase 1〜2**: 既存のインラインスタイル運用＋最小限の `static/css/index.css` 追記（例: `<dd style="margin: 0;">`、`input[type="text"]:focus` 等）を維持し、編集前後の `getComputedStyle` 突合による **1px単位のビジュアル維持** を最優先する。
   - **Phase 3（後続分離）**: 厳格な CSP（`style-src` 制限）や Text-to-HTML 比向上のための外部CSS全面統合は別フェーズへ分離する。
3. **問い合わせフォーム（`index.html` L245）および DBスクリプト（`qa_form.py` / `aq_form.py.py`）**
   - AIO/LLMO対策のスコープ内では、`action="javascript:alert('ここを押すとメールが届く')"` の `javascript:` スキームを排除し、安全なスタブ動作と電話導線（`tel:0936921761`）の整理に留める。
   - 実メール送信や SQLite 永続化改修（`qa_form.py` の `qa_id` 8文字ハッシュ衝突リスクや `qa_item VARCHAR(8)` 制約の見直し等）はバックエンド実装フェーズへ分離する。
   - 構文エラー状態で残存している `aq_form.py.py` の削除・退避は事前確認事項 #8 で確定する。
4. **公開ディレクトリの分離（全員一致の推奨事項）**
   - 現在の `TECHNOSPACE` ルートには非公開ファイル（`WORK.md`, `FIXTURE.md`, `TEAMS.md`, `qa_form.py`, `aq_form.py.py`, `.obsidian/`）が同居している。`robots.txt` はアクセス制御ではないため、本番公開時は公開アセット（`index.html`, `static/`, `robots.txt`, `sitemap.xml`, `llms.txt`）を専用出力ディレクトリへ分離する運用を推奨する。

### 1.2 フェーズ構成・QA検証基準

- **Phase 0（本シート確定・公開資材整理）**: 下記「2. 実装前の事前確認事項（10項目）」の回答確定、不要/破損スクリプト整理方針決定。
- **Phase 1（基盤・クローラ・HTML構造修復・1px維持）**:
  - 確認済み本番URLに基づく `<link rel="canonical">`・OGP・`<title>`（改行除去と社名/Web制作反映）・`<meta name="description">` 整理
  - 見出し階層正常化（`index.html` L81 と L106 の重複 `<h1>` 解消、L107 `<h1>` 内 `<h2>` の解消、L110 リード文 `<h2>` の `<p>` 化。見た目はスタイル維持で1px保証）
  - `web_contents_create_service.jpg`（L123）の404解消、製品カードの破線枠・代替テキスト整理
  - `robots.txt` / `sitemap.xml` / `llms.txt` の整備
- **Phase 2（構造化データ・LLMO本文拡充・FAQ整備）**:
  - JSON-LD 拡充（`LocalBusiness` の詳細・`Service` 説明文・一次事実に基づく対応エリア/営業時間・`FAQPage`）
  - 会社情報（`<ul id="company-info">`）の意味的整理（`<dl>` 化等＋見た目維持）
  - 一次情報に基づくサービス詳細・FAQセクション（`WORK.md` L30 のQ&A事例計画を含む）の実装
- **Phase 3（後続分離スコープ）**: 外部CSS全面統合・CSP厳格化、問い合わせ送信/SQLiteバックエンド改修。
- **QA検証基準（実装後にQAニキがPlaywright等で実施）**:
  - 見出しツリー検証（`<h1>` 単一・見出しレベル飛びなし）、JSON-LD 構文検証
  - デスクトップ・960px前後・モバイル各ビューでの1pxレイアウト維持・コンソールエラーゼロ・HTTP 404ゼロ確認
  - JS無効相当（静的HTML抽出）での主要ビジネス情報・サービス・FAQの可読性確認

---

## 2. 実装前の事前確認事項（10項目）

各項目の **`> **ご回答**:`** に直接ご記入いただくか、チャットで番号（例: `1: https://...`, `2: ...`）にてご回答ください。

### 項目1. 本番公開ドメイン / canonical URL
- **背景**: `<link rel="canonical">`、OGP（`og:url` 等）、JSON-LD の `@id` / `url`、`sitemap.xml`、`llms.txt` に正確な本番URLが必要です。
- **確認したいこと**: 本番公開予定の URL（`https://...`）をご指定ください。未定の場合は、確定するまで架空ドメインを埋め込まず、相対パス運用＋プレースホルダ保留とします。

> **ご回答**: [https://technospace.onrender.com/](https://technospace.onrender.com/)
が現在Google Chrome公開のためにindex登録しているURLになるのでしばらくはこれを使用してください
---

### 項目2. 正式な社名表記（スペース有無）と郵便番号
- **背景**: `index.html` L81 では `合資会社 テクノスペース` となっています。検索エンジン・AIのエンティティ認識では正式表記の一貫性と完全な住所（現在 `北九州市八幡西区大浦1-12-26` のみ）が重要です。
- **確認したいこと**:
  1. 社名表記の統一先: `A: 合資会社 テクノスペース（スペースあり）` / `B: 合資会社テクノスペース（スペースなし）`
  2. `北九州市八幡西区大浦1-12-26` の郵便番号（`〒807-xxxx` 等）

> **ご回答**: 1. 正式名称は「合資会社テクノスペース」なので、ヘッダの見出しをはじめとする該当箇所は要改修 / 2. 〒==**807-0874**==

---

### 項目3. 営業時間・定休日・実際の対応エリア
- **背景**: ローカル検索・AI検索で「どこで・いつ・どこまで対応している会社か」を正確に引用させるため、一次情報として確定する必要があります。
- **確認したいこと**:
  1. 営業時間・定休日（例: 平日 9:00〜18:00、土日祝休 など / 非公開にしたい項目があればその旨）
  2. 対応エリア（例: オフィス機器導入・保守は北九州市・周辺地域中心／福岡県全域、Web制作・DX自動化は全国オンライン対応可 など）

> **ご回答**: 1. 営業時間・定休日 [平日 9:00〜17:00 ] / 2. 対応エリア [北九州市内・Web制作・DX自動化は全国オンライン対応可]

---

### 項目4. 公開可能な連絡先・外部リンク（`sameAs`）
- **背景**: 現在 LP 上では電話番号 `093-692-1761` と代表者・創業者 `福田 智` が公開されています。JSON-LD の `sameAs` や問い合わせ欄に載せてよい公式アカウント・連絡先のみ反映します。
- **確認したいこと**: 代表メールアドレス、FAX番号、Google ビジネスプロフィールURL、公式SNS等で **Web公開してよいもの** があればご記載ください（現行通り電話番号のみ維持でも構いません）。

> **ご回答**: （現状は電話番号のみ、今後拡充予定）

---

### 項目5. 会社情報の項目追加・コピーライト表記・リード文の太さ
- **背景**: `index.html` L325 の `@Copyright2026` は非標準表記です。また L110 のリード文は現在 `<h2>` でマークアップされているため太字表示になっています。
- **確認したいこと**:
  1. 会社情報欄（L225-238）に、確認できた営業時間・対応エリア・主な事業内容等の行を追加してよいか（`推奨: 追加する`）
  2. フッターの `@Copyright2026` を `© 2026 合資会社テクノスペース`（項目2の社名統一に合わせる）等へ正規化してよいか（`推奨: 正規化する`）
  3. リード文（L110）を `<p>` へ修正する際、文字の太さは現行の太字（`font-weight: 700` 相当）で1px/見た目維持するか、通常の本文太さ（`400`〜`500`）へ調整するか（`推奨: 1px・見た目維持のため700相当`）

> **ご回答**: 1. [ 追加してOK ] / 2. [正規化してOK ] / 3. [ 1px・見た目維持のため700相当]

---

### 項目6. サービス詳細・FAQ（よくある質問）に載せる一次事実
- **背景**: 現行の JSON-LD（`index.html` L35-69）には `Service` の名称のみで説明文がなく、`WORK.md` L30 で計画されていた Q&A事例セクションも未実装です。LLMOで最も効果が大きい領域ですが、事実に基づかない文章は作成できません。
- **確認したいこと**（公開可能な範囲でご回答ください）:
  1. オフィス機器の導入形態（リース / 買取 / 保守契約の有無）と、掲載可能な取扱メーカー・機器カテゴリ
  2. 主な対象業種・導入事例の傾向（例: 中小オフィス・クリニック・店舗など）
  3. 相談・見積・現地調査の無料対応可否と対象条件
  4. 実際に顧客からよく受ける質問と回答（3〜5件程度）

> **ご回答**:
> 1. 導入形態・メーカー: 顧客の回答待ち
> 2. 対象業種・傾向: 顧客の回答待ち
> 3. 無料相談・現地調査条件: 可
> 4. FAQ候補（Q&A）: 今後拡充

---

### 項目7. 画像アセット（404解消・破線枠・OGP画像）の扱い
- **背景**: `index.html` L123 で存在しない `./static/img/web_contents_create_service.jpg` を参照しており HTTP 404 が発生しています。また製品画像（L158-159 / L171-172 / L184-185）に `border: 1px dashed` が常時付いており、OGP共有用画像（推奨 `1200x630`）も未設定です。
- **確認したいこと**:
  1. `web_contents_create_service.jpg` は今後画像を配置予定か、あるいは 404 参照を削除して CSS グラデーション背景のみにするか（`推奨: 参照を削除してCSS背景のみ`）
  2. 製品カードの画像に付いている `border: 1px dashed` を削除してよいか（`推奨: 削除する` ※エラー時のみ `applyPlaceholderImage` が代替表示）
  3. OGP画像（`1200x630` 等）を用意・追加予定があるか（無ければ未設定または既存素材からの生成要否をご指定ください）

> **ご回答**: 1. [ 参照を削除してCSS背景でしばらく対応] / 2. [削除してOK ] / 3. [ 追加予定あり、現在画像デザインを考案中]

---

### 項目8. レガシーコード・安全対策の整理（`#test_max_length` / `aq_form.py.py` / フォーム）
- **背景**: `index.html` L83 に検証用入力欄 `#test_max_length` と `onClick="menuEvent()"` があり、`static/js/index.js` L65-71 の `validateTestMaxLength()` が `Error('eeeeee')` を throw する実装が残っています。また構文エラー状態の `aq_form.py.py` が同居し、`index.html` L245 には `action="javascript:alert('ここを押すとメールが届く')"` が設定されています。
- **確認したいこと**:
  1. `#test_max_length`（HTML）および `validateTestMaxLength()`（JS）を本番コードから削除し、検証用途は Playwright 等のテスト側へ移してよいか（`推奨: 削除する`）
  2. 構文エラー状態の残置ファイル `aq_form.py.py` を削除または別フォルダへ退避してよいか（`推奨: 削除または退避`）
  3. AIO/LLMOフェーズ中の `<form>` は `javascript:` スキームを外した安全なスタブ動作＋電話CTA（`tel:0936921761`）の整理に留め、実際の送信処理・SQLite（`qa_form.py`）改修は別フェーズへ分離してよいか（`推奨: 分離する`）

> **ご回答**: 1. [ テストコードへ移行・不要ならテストコードからも削除して良い] / 2. [ 新たにフォルダを作成して退避・フォルダ名「ｄａｔａ」] / 3. [ 実際にフォームボタン押下時のイベント発生は別フェーズ移行してＯＫ]

---

### 項目9. AIクローラ制御ポリシー（`llms.txt`・`robots.txt`）と公開ディレクトリ分離
- **背景**: AI検索での引用（RAG/SearchBot）と、モデル学習用クロール（TrainingBot）は `robots.txt` で分けて制御できます。またリポジトリ直下には設計メモ等が同居しています。
- **確認したいこと**:
  1. AIクローラへの基本方針:
     - `A（推奨）`: 検索引用系ボット（`OAI-SearchBot`, `PerplexityBot` 等）は **許可**、モデル学習系ボット（`GPTBot`, `Google-Extended`, `ClaudeBot` 等）は **拒否（Disallow）**
     - `B`: AIクローラも **原則すべて許可**（露出最大化優先）
     - `C`: その他（個別に指定）
  2. `llms.txt` の配置を許可するか（`推奨: 許可する`）
  3. 本番デプロイ時は公開対象ファイル（`index.html`, `static/`, `robots.txt`, `sitemap.xml`, `llms.txt`）のみを別ディレクトリへ分離出力する前提で進めてよいか（`推奨: 分離する`）

> **ご回答**: 1. [ 推奨案の「Ａ」を採用] / 2. [許可 ] / 3. [承認 ]

---

### 項目10. Phase 1〜2 のCSS編集方針（段階リファクタリング）
- **背景**: `WORK.md` L344 の「タグ直書きスタイル運用」と、AIO/LLMO・CSP観点での「外部CSS統合」には段階的なトレードオフがあります。
- **確認したいこと**: Phase 1〜2 では既存のインラインスタイル運用＋最小限の `static/css/index.css` 追記によって **1pxデザイン維持とAIO/LLMO効果の早期反映** を優先し、外部CSSへの全面統合は Phase 3 へ分離する方針でよろしいでしょうか（`推奨: 段階分離する`）。

> **ご回答**: （推奨通りでよい）

---

## 3. 確定実装仕様（ご回答反映済み・コーダーニキA/B & QAニキ実装指示書）

上記10項目のご回答に基づき、以下の通り役割分担とファイル完全分離（競合ゼロ）で実装・検証を進める。

### 3.1 確定した一次情報（ハルシネーション厳禁・全ファイル共通）
- **正式社名**: `合資会社テクノスペース`（半角スペースなしに統一）
- **公開URL（canonical / OGP / JSON-LD / sitemap / llms.txt）**: `https://technospace.onrender.com/`
- **所在地**: `〒807-0874 福岡県北九州市八幡西区大浦1-12-26`
- **電話番号**: `093-692-1761`（公開連絡先は現状電話番号のみ、`sameAs` は未設定）
- **代表者（創業者）**: `福田 智`
- **営業時間**: `平日 9:00〜17:00`
- **対応エリア**: オフィス機器導入・サポートは `北九州市内`、Web制作・DX自動化は `全国オンライン対応可`
- **無料相談・現地調査**: `対応可`
- **未確定事項（記載禁止）**: 具体的な取扱メーカー名・リース料率・特定業種の導入社数等は顧客回答待ちのため一切推測記載しない。OGP画像はデザイン考案中のため存在しない画像URLを設定しない。

### 3.2 コーダーニキB（`coder-b`）担当スコープ（JS・クローラ基盤・データ退避）
1. **`static/js/index.js` の改修**:
   - `validateTestMaxLength()` 関数（L65-71）および `menuEvent()` 内の呼び出し（L94, L101）を削除。
   - お問い合わせ `<form>` の `submit` イベント（L206-234）にて、バリデーション通過時（`else` ブロック）にも `e.preventDefault()` を入れ、`javascript:` スキーム無しで安全に規定値（`未入力`）補完まで完了させる（実送信イベント処理は別フェーズへ分離）。
2. **`robots.txt` の新規作成（`TECHNOSPACE/robots.txt`）**:
   - 検索エンジン・AI検索引用ボット（`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Applebot`）を `Allow: /`。
   - AI学習用クローラ（`GPTBot`, `Google-Extended`, `ClaudeBot`, `anthropic-ai`, `CCBot`, `Bytespider`）を `Disallow: /`。
   - `Sitemap: https://technospace.onrender.com/sitemap.xml` を明記。
3. **`sitemap.xml` の新規作成（`TECHNOSPACE/sitemap.xml`）**:
   - `<loc>https://technospace.onrender.com/</loc>` を収録。
4. **`llms.txt` の新規作成（`TECHNOSPACE/llms.txt`）**:
   - 上記 3.1 の確定一次情報、提供サービス3事業（Web制作・HP/LPサイト制作・運用保守／オフィス機器・ソリューション導入（複合機・ビジネスフォン・PC・プリンター）／業務オートメーション・DX）、よくある質問（対応エリア・営業時間・無料相談/現地調査・既存HP運用請負）を構造化 Markdown で記述。
5. **レガシーファイル退避**:
   - `TECHNOSPACE/data/` フォルダを新規作成し、`aq_form.py.py` を `TECHNOSPACE/data/aq_form.py.py` へ移動（退避）する。

### 3.3 コーダーニキA（`coder-a`）担当スコープ（`index.html`・`static/css/index.css`）
1. **`<head>` メタタグ & JSON-LD 拡充（`index.html` L3-76）**:
   - `<title>`: `合資会社テクノスペース | 北九州市のオフィス機器導入・Web制作・業務自動化（DX）`（1行化）
   - `<meta name="description">`: 3.1 の確定一次情報を含む約110〜130文字の説明文へ拡充。
   - `<link rel="canonical" href="https://technospace.onrender.com/">` および OGP基本タグ（`og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:locale`, `twitter:card`）を追加。
   - `<meta name="google-site-verification" ...>`（L75）はそのまま維持。
   - JSON-LD: `name` を `"合資会社テクノスペース"`、`url` を `"https://technospace.onrender.com/"`、`address.postalCode` を `"807-0874"` に更新し、`openingHoursSpecification`（Monday-Friday `09:00`-`17:00`）、`areaServed`、各 `Service` の `description`、および新設 FAQ と完全同期した `FAQPage` を定義。
2. **見出し階層正常化・1px維持・レガシー入力削除（`index.html` L80-112）**:
   - L81 ヘッダー社名: `合資会社テクノスペース`（スペースなし）へ変更し、タグを `<h1>` から `<div>`（または `<p>`）へ変更（変更前の `getComputedStyle` のフォントサイズ・太さ・行高をインライン指定して1px維持）。
   - L83 `input#test_max_length`: 削除。
   - L106-109 ヒーロー見出し: ページ唯一の `<h1>` として維持し、L107 内の `<h2>OFFICE TOTAL SOLUTION</h2>` は `<h2>` タグを外して親 `<span class="hero-fadein">` 側のインラインスタイルで変更前の描画サイズ・余白を1px維持。
   - L110 ヒーローリード文: `<h2>` から `<p>` へ変更し、`font-weight: 700` をインライン指定して1px維持。
   - `<main>` ランドマーク: `#menu-backdrop` 直後〜`</footer>` 直前までを `<main style="box-sizing: border-box; display: block; margin: 0; padding: 0;">` で囲む。
3. **サービスセクション改修（`index.html` L115-220）**:
   - L123 `#web-contents-create-bg-layer`: 存在しない `url('./static/img/web_contents_create_service.jpg'), ` を削除し、CSSグラデーション背景のみにする（HTTP 404解消）。
   - 見出し階層整理（インラインスタイル完全維持で見た目変化0px）: `#company-service` 内のサブセクション見出し（L131 Web制作、L148 オフィス機器、L206 業務オートメーション・DX）を `<h3>`、製品カード見出し（L151 複合機、L164 ビジネスフォン、L177 PC・プリンター）を `<h4>`、L190 `#service-estimate-btn` 内の `<h3>導入のご相談はこちら</h3>` を `<span>` に整理。
   - 製品画像 3枚（L159, L172, L185）: インライン `style` から `border: 1px dashed rgba(212, 175, 55, 0.35);` を削除し、`alt` 属性を具体化。
4. **会社概要 `<dl>` 化・一次情報反映 & FAQセクション新設 & フォーム/フッター正規化**:
   - `#company-info` を `<dl>`（各行 `<div class="info-items"><dt class="info-label">...</dt><dd class="info-value" style="box-sizing: border-box; margin: 0; padding: 0; color: #e2e2e8;">...</dd></div>`）へ変更し、会社名・所在地（`〒807-0874 福岡県北九州市八幡西区大浦1-12-26`）・連絡先（`093-692-1761`）・代表者（`福田 智`）・営業時間（`平日 9:00〜17:00`）・対応エリア（`北九州市内（Web制作・DX自動化は全国オンライン対応可）`）・事業内容を掲載。
   - 会社概要セクションの直後に、確定一次事実のみに基づく「よくあるご質問（FAQ）」セクション（`#company-faq`、Q1対応エリア / Q2無料相談・現地調査 / Q3営業時間 / Q4既存HP運用保守）を現行デザイン（`max-width: 900px`, `#1a1a20`, ゴールド枠線）で新設。
   - L245 `<form>`: `action="javascript:alert('ここを押すとメールが届く')"` を `action="#company-qa"` へ変更。
   - L325 フッター: `© 2026 合資会社テクノスペース` へ正規化。
   - `static/css/index.css`: `#company-qa input[type="text"]:focus` スタイル、`#service-estimate-btn:hover` の色変化、`@media (max-width: 960px)` での `#company-faq` 余白対応を最小限追記。

### 3.4 公開ディレクトリ分離（`public/`）および QAニキ（`gemini-target`）検証スコープ
- 実装完了後、公開専用ディレクトリ `TECHNOSPACE/public/` に公開対象アセット一式（`index.html`, `static/`, `robots.txt`, `sitemap.xml`, `llms.txt`）のみを同期出力する。
- QAニキにて Playwright 等を用いた実ブラウザ検証（見出し階層・JSON-LD構文・デスクトップ/モバイル表示・1px維持・コンソールエラー0・HTTP 404ゼロ・旧 `#test_max_length` 相当の境界検証のテストコード化確認）を実施する。

---

## 4. 最終QA検収結果（2026-11-16 完了）

コーダーニキA（`coder-a`）・コーダーニキB（`coder-b`）による実装完了後、QAニキ（`gemini-target`）にて静的検査・JS無効クローラ検査・Playwright 実ブラウザ検証（Desktop 1440×900 / Mobile 375×812）を実施し、**全検証項目 PASS** を確認した。

### 4.1 検証サマリ
- **ブラウザ・通信エラー**: Console Error `0` / Page Error `0` / HTTP Error (`>=400`) `0` / 不要 `alert` ダイアログ `0`（Desktop・Mobile 双方）
- **レイアウト・1px視覚保護**:
  - Desktop (`1440x900`) / Mobile (`375x812`) ともに横スクロール溢れなし（`scrollWidth === innerWidth`）
  - ヘッダー社名 `合資会社テクノスペース`：
    - Desktop (`1440x900`): `43.2px` (`weight: 700`, `496.81px × 75.59px`) を 1px 単位で完全維持
    - Mobile (`375x812`): `@media (max-width: 960px)` の `clamp(1.1rem, 5.2vw, 1.75rem)` + `white-space: nowrap` により **`19.5px`（幅 `233.78px`、1行収容、ヘッダー高さ `77px`）** に収まり、右側の `#menu-toggle`（`left=307px`）との間に **`49.22px` の余白** を確保して非重複を確認
  - ヒーローリード文（`16.8px`, weight `700`）、製品画像3枚の破線枠除去（`borderStyle="none"`, `naturalWidth=420`）を確認
- **AIO / LLMO / SEO / 構造化データ（`java_script_enabled=False` 含む）**:
  - `title` 1行化、`meta[name="description"]`（136文字）、`canonical`（`https://technospace.onrender.com/`）、OGP / Twitter Card タグ、`google-site-verification` 維持を確認
  - `<main>` ランドマーク、単一 `<h1>`、飛び越し・入れ子エラーのない見出し階層（`h1 -> h2 -> h3 -> h4`）を確認
  - JSON-LD (`@graph`: `WebSite`, `LocalBusiness`, `FAQPage`): 構文エラーなし、`postalCode: "807-0874"`、5サービスの `description`、および DOM `#company-faq`（`<details open>` 4問）との完全一致を確認
  - `robots.txt`（検索・AI引用ボット許可／学習ボット拒否＋Sitemap宣言）、`sitemap.xml`、`llms.txt`（42行・一次事実完全同期）を確認
- **インタラクション・境界値検証（旧 `#test_max_length` 代替テスト含む）**:
  - 4箇所すべての CTA クリックによる `#order` カテゴリ自動選択＆スムーズスクロール・フォーカス遷移を確認
  - お名前 (`maxlength=15`) → 所属会社 (`maxlength=20`) → 所属部署 (`maxlength=20`) の段階的表示、および超過文字入力時の上限切り詰め（`15` / `20` / `20` / `300` 文字）を Playwright 上で検証完了
  - 15文字未満送信時のエラー表示、15〜300文字送信時の `e.preventDefault()` によるページ遷移防止と空欄への `'未入力'` 自動補完を確認
  - モバイルハンバーガーメニューの開閉・`Escape` キー閉鎖・背景オーバーレイ閉鎖を確認
- **ファイル整理・公開アセット配置**:
  - `aq_form.py.py` は `TECHNOSPACE/data/aq_form.py.py` へ移動完了
  - `TECHNOSPACE/public/` 配下に公開対象アセット一式（`index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `static/css/index.css`, `static/js/index.js`, `static/img/` 全5画像 `dx_service.jpg`, `dx_service.svg`, `maluti.png`, `pc-printer.png`, `phone.png`）を完全同期出力済み



