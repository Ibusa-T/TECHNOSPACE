const XML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const ALLOWED_QA_CATEGORIES = new Set([
  'web-content-create',
  'automation',
  'quotation',
  'materials',
  'other',
]);

// SVG内埋め込みテキストのXML/HTML特殊文字をエスケープする純関数
function escapeXml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (ch) => XML_ESCAPE_MAP[ch]);
}

// セクションが画面中央を跨いでいるときに背景レイヤーの輝度を上げる
function setupScrollBrightness(sectionSelector, layerId) {
  const section = document.querySelector(sectionSelector);
  const bgLayer = document.getElementById(layerId);
  if (!section || !bgLayer) return;

  const updateBrightness = () => {
    const rect = section.getBoundingClientRect();
    const viewCenter = window.innerHeight * 0.5;
    const isFocused = rect.top <= viewCenter && rect.bottom >= viewCenter;
    bgLayer.style.filter = isFocused ? 'brightness(1.5)' : 'brightness(0.7)';
  };

  window.addEventListener('scroll', updateBrightness, { passive: true });
  window.addEventListener('resize', updateBrightness, { passive: true });
  window.dispatchEvent(new Event('scroll'));
}

// 画像未配置時に420x420のスタイリッシュなSVGプレースホルダーを描画
function applyPlaceholderImage(imgEl) {
  if (!imgEl || imgEl.dataset.fallbackApplied === 'true') return;
  imgEl.dataset.fallbackApplied = 'true';
  const rawTitle = imgEl.getAttribute('data-placeholder-title') || imgEl.getAttribute('alt') || 'IMAGE';
  const title = escapeXml(rawTitle);
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

  if (!isMenuListenerAttached) {
    menuToggle.addEventListener('click', () => {
      // ボタンとメニューの両方にクラスをトグル（交互に付け外し）する
      const willOpen = !menuToggle.classList.contains('is-open');
      setMenuOpenState(willOpen);
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

  // Web制作・DXセクション スクロール連動 背景輝度変化
  setupScrollBrightness('#web-contents-create', 'web-contents-create-bg-layer');
  setupScrollBrightness('#company-dx', 'dx-bg-layer');

  // ボタン押下 → カテゴリ検証・自動選択 → スムーズスクロール → フォーカス
  function jumpToQaWithCategory(value) {
    const selectEl = document.getElementById('order');
    if (selectEl && ALLOWED_QA_CATEGORIES.has(value)) {
      selectEl.value = value;
    }
    const target = document.getElementById('company-qa');
    // お問い合わせにジャンプ
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (selectEl) {
      // スクロール位置を崩さずにセレクトボックスへ画面フォーカス
      selectEl.focus({ preventScroll: true });
    }
    setMenuOpenState(false);
  }

  // 専用CTAクリックで該当カテゴリを選択してお問い合わせフォームへ遷移
  const ctaCategoryBindings = [
    ['a.hero-cta', 'other'],
    ['a.web-contents-create-cta', 'web-content-create'],
    ['#service-estimate-btn', 'materials'],
    ['a.dx-cta', 'automation'],
  ];
  ctaCategoryBindings.forEach(([selector, category]) => {
    const ctaEl = document.querySelector(selector);
    if (ctaEl) {
      ctaEl.addEventListener('click', (e) => {
        e.preventDefault();
        jumpToQaWithCategory(category);
      });
    }
  });

  // ナビゲーションリンクのスムーズスクロール＆モバイルメニュー自動クローズ（専用CTAは二重スクロール除外）
  const dedicatedCtaSelector = '.hero-cta, #service-estimate-btn, .dx-cta, .web-contents-create-cta';
  const anchorLinks = document.querySelectorAll('a[href^="#"], .header-item a, .footer-item a');
  anchorLinks.forEach((link) => {
    if (link.matches(dedicatedCtaSelector)) return;
    link.addEventListener('click', (e) => {
      const rawHref = link.getAttribute('href') || '';
      const targetId = rawHref.startsWith('#') ? rawHref.slice(1) : rawHref;
      const targetEl = targetId ? document.getElementById(targetId) : null;
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpenState(false);
    });
  });

  // 動的表示JS（お名前 → 所属会社 → 所属部署）
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

  // フォームバリデーション＆規定値挿入
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
        e.preventDefault();
        if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
          firstChild.textContent = QA_LABEL_NORMAL;
        }
        qaFieldLabel.style.color = '#f3e5ab';

        // 規定値挿入（バリデーション通過後）
        const nameEl    = document.getElementById('guest-name');
        const companyEl = document.getElementById('guest-company');
        const deptEl    = document.getElementById('guest-dept');

        if (nameEl    && nameEl.value.trim() === '')    nameEl.value    = '未入力';
        if (companyEl && companyEl.value.trim() === '') companyEl.value = '未入力';
        if (deptEl    && deptEl.value.trim() === '')    deptEl.value    = '未入力';
      }
    });
  }
});
