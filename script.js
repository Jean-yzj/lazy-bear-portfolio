/* ============================================================
   懶惰熊 · Lazy Bear Portfolio
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 作品資料 ----------
   每個作品都有：標題、副標、tagline、四個功能、為什麼想做、連結
*/
const works = [
  {
    no: 'ONE',
    title: '香水羅盤',
    titleEn: 'Le Compas',
    tagline: '用 AI 為你召喚一張屬於今天的香氛卡牌。',
    url: 'https://lazybear-perfume.zeabur.app',
    sigil: 'compass',
    features: [
      { name: '召喚今日香方', desc: '輸入心情、習慣、季節、預算，AI 在數百款香水中為你導航出最契合此刻的那一支。' },
      { name: '進入香水圖書館', desc: '逛遍資料庫裡的所有香水，依香調、品牌、調香師、強度任意搜尋與篩選。' },
      { name: '收藏你的香水', desc: '把心動的那幾支放進你的私人收藏，下次回來繼續翻閱。' },
      { name: '分享卡牌', desc: '一鍵把今天召喚到的香方卡牌變成可分享的圖卡，傳給朋友看。' },
    ],
    why: '我相信選香水不該是花錢試錯的過程。我想把它變成一場儀式 — 像每天抽一張塔羅，今天的你，配上今天的味道。',
  },
  {
    no: 'TWO',
    title: '養魚工具',
    titleEn: 'YOFISH',
    tagline: '為水族缸主理人設計的日常管理工具。',
    url: 'https://fishmangemant.zeabur.app',
    sigil: 'wave',
    features: [
      { name: '建立水族檔案', desc: '為每一個缸、每一條魚建立檔案，水質參數與設備配置一目了然。' },
      { name: '排程提醒', desc: '餵食、換水、用藥、設備清潔通通排程化，到時間自動提醒，不漏掉任何一次。' },
      { name: '健康日誌', desc: '為每一條魚記錄健康狀態、用藥歷程，每一次異常都會被存進可追溯的時間軸。' },
      { name: '一鍵切換多缸', desc: '同時管理多個水族缸的主理人，可在不同缸之間快速切換。' },
    ],
    why: '我想讓水族缸主理人專心享受看魚的時光。那些瑣碎到讓人想放棄的細節，就交給工具去管。',
  },
  {
    no: 'THREE',
    title: 'SmartRead',
    titleEn: 'The Book',
    tagline: '讓「想讀的書」真的被讀完。',
    url: 'https://smartread-echo.zeabur.app',
    sigil: 'book',
    features: [
      { name: '建立想讀書單', desc: '把想讀的書一本本加進來，組成你的私人書房。' },
      { name: '每日目標頁數', desc: '為每本書設定每天要讀的頁數，把「讀完」拆解成可達成的小步驟。' },
      { name: '進度追蹤', desc: '視覺化呈現每本書的進度百分比，看見自己一頁頁讀過來的軌跡。' },
      { name: '筆記與心得', desc: '為每本書留下重點筆記、想法、心得，未來翻回去也能立刻想起當下的感受。' },
    ],
    why: '我有太多「想讀但沒讀完」的書。我想要一個工具，能溫柔地推著我把它們真的讀完。',
  },
  {
    no: 'FOUR',
    title: '大腦不疲勞',
    titleEn: 'The Rest',
    tagline: '為過載的大腦設計的 8 週恢復系統。',
    url: 'https://brain-recovery.zeabur.app',
    sigil: 'lotus',
    features: [
      { name: '6 題自我檢測', desc: '從六個切面快速判讀你目前的大腦疲勞型態與嚴重程度。' },
      { name: '每日打卡', desc: '每天記錄情緒、睡眠品質、注意力狀態，把模糊的「累」變成可追蹤的數據。' },
      { name: '8 週恢復計畫', desc: '依照你的型態給出結構化的休息與重建任務，一週一週把大腦調回正軌。' },
      { name: '洞察報告', desc: '把你 8 週的變化整理成一份完整報告，你會清楚看到自己變好了多少。' },
    ],
    why: '焦慮、失眠、注意力渙散，常常不是意志力的問題 — 是大腦真的太累了。這個工具，是給那個總是覺得自己不夠努力的你。',
  },
  {
    no: 'FIVE',
    title: '好朋友分析',
    titleEn: 'The Bond',
    tagline: '用 AI 分析你和好朋友之間的真實關係。',
    url: 'https://hi-goodfriend.zeabur.app',
    sigil: 'bond',
    features: [
      { name: '上傳 LINE 對話', desc: '把你和好朋友的 LINE 對話記錄丟進來，幾年份都沒問題。' },
      { name: '3 大關係軸線', desc: 'AI 萃取出「創意對手 / 純粹垃圾話友 / 心靈樹洞互負組」三條軸線的分數。' },
      { name: '12 個切面深度剖析', desc: '從聊天主題、互動模式、情緒節奏等 12 個切面，看見你們關係的細節。' },
      { name: '個人化關係報告', desc: '產出一份只屬於你們倆的關係報告，可以收藏，也可以給對方看。' },
    ],
    why: '我想知道，那些和我聊了好多年的朋友，跟我到底是什麼關係。文字裡藏著很多我們自己都沒注意到的線索。',
  },
  {
    no: 'SIX',
    title: '星之占卜',
    titleEn: 'The Star',
    tagline: '把星空變成一場儀式。',
    url: 'https://zodiac-jean.zeabur.app',
    sigil: 'star',
    features: [
      { name: '輸入生辰', desc: '輸入你的出生年月日、時辰與地點，產出專屬於你的命盤。' },
      { name: '當日運勢', desc: '每日翻牌一次，看當日感情、工作、財運的指引方向。' },
      { name: '感情指引', desc: '針對感情關係給出星座視角的解讀與當週建議。' },
      { name: '專屬星座建議', desc: '依你的太陽 / 月亮 / 上升星座給出貼合你的長期建議。' },
    ],
    why: '我想要一個介面像魔法書的占卜工具。每一次翻開，都讓人覺得自己被宇宙好好對待。',
  },
];

/* ---------- SVG 卡面符號（金/藍版，會放大顯示） ---------- */
const sigils = {
  compass: `<svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="92" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="76" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 4"/>
    <circle cx="100" cy="100" r="60" stroke="#B8D4E8" stroke-width="0.5"/>
    <polygon points="100,30 158,140 42,140" stroke="#6BA3D6" stroke-width="0.5" />
    <polygon points="100,170 42,60 158,60" stroke="#6BA3D6" stroke-width="0.5" />
    <path d="M100,30 L106,100 L100,170 L94,100 Z" fill="rgba(201,168,118,0.35)" stroke="#C9A876" stroke-width="0.6"/>
    <path d="M30,100 L100,94 L170,100 L100,106 Z" fill="rgba(184,212,232,0.35)" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="4" fill="#1B2C4A"/>
    <g fill="#C9A876">
      <circle cx="100" cy="22" r="1.6"/><circle cx="100" cy="178" r="1.6"/>
      <circle cx="22" cy="100" r="1.6"/><circle cx="178" cy="100" r="1.6"/>
    </g>
  </svg>`,
  wave: `<svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="92" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="76" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 4"/>
    <path d="M28 110 Q52 88 76 110 T124 110 T172 110" stroke="#6BA3D6" stroke-width="1.2"/>
    <path d="M28 130 Q52 108 76 130 T124 130 T172 130" stroke="#B8D4E8" stroke-width="1"/>
    <path d="M28 90 Q52 68 76 90 T124 90 T172 90" stroke="#C9A876" stroke-width="1"/>
    <g fill="#C9A876">
      <circle cx="100" cy="56" r="3"/><circle cx="72" cy="64" r="1.6"/><circle cx="128" cy="64" r="1.6"/>
    </g>
  </svg>`,
  book: `<svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="92" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="76" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 4"/>
    <path d="M52 64 L100 74 L148 64 L148 146 L100 156 L52 146 Z" fill="rgba(184,212,232,0.18)" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M100 74 L100 156" stroke="#C9A876" stroke-width="0.8"/>
    <g stroke="#C9A876" stroke-width="0.6">
      <path d="M62 84 L94 88"/><path d="M62 96 L94 100"/><path d="M62 108 L94 112"/>
      <path d="M106 88 L138 84"/><path d="M106 100 L138 96"/><path d="M106 112 L138 108"/>
    </g>
    <path d="M100 64 L104 56 L96 56 Z" fill="#C9A876"/>
  </svg>`,
  lotus: `<svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="92" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="76" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 4"/>
    <path d="M100 50 Q116 78 100 112 Q84 78 100 50" fill="rgba(201,168,118,0.18)" stroke="#C9A876" stroke-width="0.8"/>
    <path d="M62 74 Q86 92 100 112 Q88 80 62 74" fill="rgba(184,212,232,0.18)" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M138 74 Q114 92 100 112 Q112 80 138 74" fill="rgba(184,212,232,0.18)" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M44 110 Q72 118 100 116 Q80 102 44 110" fill="rgba(201,168,118,0.18)" stroke="#C9A876" stroke-width="0.8"/>
    <path d="M156 110 Q128 118 100 116 Q120 102 156 110" fill="rgba(201,168,118,0.18)" stroke="#C9A876" stroke-width="0.8"/>
    <ellipse cx="100" cy="124" rx="34" ry="3" fill="rgba(107,163,214,0.3)"/>
  </svg>`,
  bond: `<svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="92" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="76" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 4"/>
    <circle cx="78" cy="100" r="32" stroke="#6BA3D6" stroke-width="0.9" fill="rgba(184,212,232,0.16)"/>
    <circle cx="122" cy="100" r="32" stroke="#C9A876" stroke-width="0.9" fill="rgba(201,168,118,0.12)"/>
    <circle cx="78" cy="100" r="3.5" fill="#6BA3D6"/>
    <circle cx="122" cy="100" r="3.5" fill="#C9A876"/>
  </svg>`,
  star: `<svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="92" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="100" cy="100" r="76" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 4"/>
    <path d="M100 40 L114 86 L162 86 L122 112 L138 158 L100 130 L62 158 L78 112 L38 86 L86 86 Z"
          fill="rgba(184,212,232,0.18)" stroke="#6BA3D6" stroke-width="0.8"/>
    <circle cx="100" cy="100" r="5" fill="#C9A876"/>
    <g fill="#C9A876">
      <circle cx="46" cy="60" r="1.6"/><circle cx="154" cy="60" r="1.6"/>
      <circle cx="46" cy="140" r="1.6"/><circle cx="154" cy="140" r="1.6"/>
    </g>
  </svg>`,
};

/* ---------- 卡片渲染（只有 sigil + 字） ---------- */
function renderCards() {
  const wrap = document.getElementById('cards');
  if (!wrap) return;
  wrap.innerHTML = works.map((w, i) => `
    <button class="card" type="button" data-index="${i}" data-reveal style="transition-delay: ${i * 70}ms" aria-label="${w.title} — 點擊看詳細介紹">
      <span class="card__corner card__corner--tl"></span>
      <span class="card__corner card__corner--tr"></span>
      <span class="card__corner card__corner--bl"></span>
      <span class="card__corner card__corner--br"></span>
      <p class="card__no">${w.no}</p>
      <div class="card__sigil">${sigils[w.sigil] || sigils.star}</div>
      <h3 class="card__title">${w.title}</h3>
      <p class="card__title-en">${w.titleEn}</p>
      <p class="card__tag">${w.tagline}</p>
      <p class="card__hint">OPEN ✦ 點擊放大</p>
    </button>
  `).join('');

  wrap.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10);
      openModal(idx);
    });
  });
}

/* ---------- Modal（翻開放大成全頁介紹） ---------- */
function renderModal(work) {
  const featuresHTML = work.features.map((f, i) => `
    <li class="feature" style="transition-delay: ${300 + i * 80}ms">
      <span class="feature__mark">✦</span>
      <div class="feature__body">
        <h4 class="feature__name">${f.name}</h4>
        <p class="feature__desc">${f.desc}</p>
      </div>
    </li>
  `).join('');

  return `
    <div class="modal__corner modal__corner--tl"></div>
    <div class="modal__corner modal__corner--tr"></div>
    <div class="modal__corner modal__corner--bl"></div>
    <div class="modal__corner modal__corner--br"></div>
    <button class="modal__close" type="button" aria-label="關閉">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    </button>
    <div class="modal__inner">
      <div class="modal__sigil">${sigils[work.sigil] || sigils.star}</div>
      <p class="modal__no">${work.no}</p>
      <h2 class="modal__title">${work.title}</h2>
      <p class="modal__title-en">${work.titleEn}</p>
      <div class="modal__divider">
        <svg viewBox="0 0 240 20">
          <line x1="0" y1="10" x2="95" y2="10" stroke="#C9A876" stroke-width="0.8"/>
          <path d="M120,4 L122,8 L126,10 L122,12 L120,16 L118,12 L114,10 L118,8 Z" fill="#C9A876"/>
          <line x1="145" y1="10" x2="240" y2="10" stroke="#C9A876" stroke-width="0.8"/>
        </svg>
      </div>
      <p class="modal__tagline">${work.tagline}</p>

      <section class="modal__section">
        <p class="modal__section-label">FEATURES · 主要功能</p>
        <ul class="features">${featuresHTML}</ul>
      </section>

      <section class="modal__section modal__section--why">
        <p class="modal__section-label">WHY · 為什麼想做</p>
        <p class="modal__why">${work.why}</p>
      </section>

      <a class="modal__open" href="${work.url}" target="_blank" rel="noopener">
        <span>開啟連結 ✦ OPEN</span>
      </a>
    </div>
  `;
}

let openIndex = -1;
const backdrop = document.getElementById('modalBackdrop');
const modal    = document.getElementById('modal');

function openModal(idx) {
  if (!modal || !backdrop) return;
  const work = works[idx];
  if (!work) return;
  openIndex = idx;
  modal.innerHTML = renderModal(work);
  // wire close button
  modal.querySelector('.modal__close')?.addEventListener('click', closeModal);
  // open
  document.body.classList.add('is-modal-open');
  requestAnimationFrame(() => {
    backdrop.classList.add('is-open');
  });
}

function closeModal() {
  if (!modal || !backdrop) return;
  backdrop.classList.remove('is-open');
  document.body.classList.remove('is-modal-open');
  // clear after transition
  setTimeout(() => {
    if (!backdrop.classList.contains('is-open')) modal.innerHTML = '';
  }, 700);
  openIndex = -1;
}

/* ---------- Sparkles ---------- */
function makeSparkles(count = 40) {
  const root = document.getElementById('sparkles');
  if (!root) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.animationDelay = (Math.random() * 6).toFixed(2) + 's';
    s.style.animationDuration = (4 + Math.random() * 6).toFixed(2) + 's';
    const size = (2 + Math.random() * 4).toFixed(1);
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    frag.appendChild(s);
  }
  root.appendChild(frag);
}

/* ---------- 背景星空 canvas ---------- */
function setupStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.scale(dpr, dpr);
    seed();
  }
  function seed() {
    const count = Math.round((innerWidth * innerHeight) / 16000);
    stars = Array.from({ length: count }, () => {
      const isGold = Math.random() < 0.35;
      return {
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.012 + 0.004,
        d: Math.random() < 0.5 ? -1 : 1,
        gold: isGold,
      };
    });
  }
  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const s of stars) {
      s.a += s.tw * s.d;
      if (s.a <= 0.1 || s.a >= 0.7) s.d *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.gold
        ? `rgba(201, 168, 118, ${s.a})`
        : `rgba(107, 163, 214, ${s.a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener('resize', resize);
  if (!prefersReducedMotion) requestAnimationFrame(draw);
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const els = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ---------- 全域：ESC + backdrop 點擊關閉 ---------- */
function setupGlobal() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && openIndex >= 0) closeModal();
  });
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }
}

/* ---------- 啟動 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  document.querySelectorAll('.hero > *').forEach(el => el.setAttribute('data-reveal', ''));
  makeSparkles(40);
  setupStarfield();
  setupGlobal();
  requestAnimationFrame(setupReveal);
});
