/* ============================================================
   懶惰熊 · Lazy Bear Portfolio
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 作品資料 ---------- */
const works = [
  {
    no: 'ONE',
    title: '香水羅盤',
    titleEn: 'Le Compas',
    desc: '用 AI 為你召喚一張屬於今天的香氛卡牌。輸入今天的心情、習慣、想要的香調、強度、季節、氛圍與預算，系統會在數百款香水中導航出最契合此刻的那一支。深夜星空與燭金的對比配色，把選香變成一場儀式。',
    url: 'https://lazybear-perfume.zeabur.app',
    shot: 'assets/screenshots/perfume.png',
    sigil: 'compass',
  },
  {
    no: 'TWO',
    title: '養魚工具',
    titleEn: 'YOFISH',
    desc: '為水族缸主理人設計的日常管理工具。把餵食、換水、用藥、設備清潔的時程通通排好，每一條魚的健康狀況都會被存進一條可追溯的時間軸。只要享受看魚的時光，瑣事交給 YOFISH。',
    url: 'https://fishmangemant.zeabur.app',
    shot: 'assets/screenshots/fish.png',
    sigil: 'wave',
  },
  {
    no: 'THREE',
    title: 'SmartRead',
    titleEn: 'The Book',
    desc: '讓「想讀的書」真的被讀完。建立書單、設定每日目標頁數、追蹤進度百分比、為每本書留下重點筆記與心得。介面像一座溫暖的紙本書房，把「持續閱讀」變成一件不費力的儀式。',
    url: 'https://smartread-echo.zeabur.app',
    shot: 'assets/screenshots/smartread.png',
    sigil: 'book',
  },
  {
    no: 'FOUR',
    title: '大腦不疲勞',
    titleEn: 'The Rest',
    desc: '為過載的大腦設計的 8 週恢復系統。從 6 題自我檢測開始，分析疲勞型態，每日打卡記錄情緒、睡眠與注意力，再用洞察報告呈現你的恢復軌跡。專為「焦慮、失眠、注意力渙散」族群打造。',
    url: 'https://brain-recovery.zeabur.app',
    shot: 'assets/screenshots/brain.png',
    sigil: 'lotus',
  },
  {
    no: 'FIVE',
    title: '好朋友分析',
    titleEn: 'The Bond',
    desc: '把你和好朋友的 LINE 對話丟進來，AI 會從多年聊天記錄中萃取出 3 大關係軸線（創意對手、垃圾話友、心靈樹洞互負組），並用 12 個切面深入分析你們之間沒被注意過的細節。',
    url: 'https://hi-goodfriend.zeabur.app',
    shot: 'assets/screenshots/goodfriend.png',
    sigil: 'bond',
  },
  {
    no: 'SIX',
    title: '星之占卜',
    titleEn: 'The Star',
    desc: '把星空變成一場儀式。輸入出生年月日、時辰與地點，獲得屬於你的命盤、當日運勢、感情指引與專屬星座建議。櫻粉與金沙的浪漫配色，每一次占卜都像翻開一頁魔法書。',
    url: 'https://zodiac-jean.zeabur.app',
    shot: 'assets/screenshots/zodiac.png',
    sigil: 'star',
  },
];

/* ---------- SVG 卡背符號（金線版） ---------- */
const sigils = {
  compass: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#E8D5B2" stroke-width="0.8"/>
    <circle cx="50" cy="50" r="34" stroke="#C9A876" stroke-width="0.6" stroke-dasharray="1 3"/>
    <path d="M50 14 L56 50 L50 86 L44 50 Z" fill="rgba(232,213,178,0.25)" stroke="#E8D5B2" stroke-width="0.7"/>
    <path d="M14 50 L50 44 L86 50 L50 56 Z" fill="rgba(232,213,178,0.15)" stroke="#C9A876" stroke-width="0.6"/>
    <circle cx="50" cy="50" r="3" fill="#E8D5B2"/>
  </svg>`,
  wave: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#E8D5B2" stroke-width="0.8"/>
    <path d="M14 56 Q26 44 38 56 T62 56 T86 56" stroke="#E8D5B2" stroke-width="1.2" fill="none"/>
    <path d="M14 66 Q26 54 38 66 T62 66 T86 66" stroke="#C9A876" stroke-width="0.9" fill="none"/>
    <path d="M14 46 Q26 34 38 46 T62 46 T86 46" stroke="#C9A876" stroke-width="0.9" fill="none"/>
    <circle cx="50" cy="30" r="3" fill="#E8D5B2"/>
  </svg>`,
  book: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#E8D5B2" stroke-width="0.8"/>
    <path d="M28 32 L50 38 L72 32 L72 70 L50 76 L28 70 Z" fill="rgba(232,213,178,0.15)" stroke="#E8D5B2" stroke-width="0.8"/>
    <path d="M50 38 L50 76" stroke="#C9A876" stroke-width="0.7"/>
    <path d="M34 42 L46 44 M34 50 L46 52 M34 58 L46 60 M54 44 L66 42 M54 52 L66 50 M54 60 L66 58" stroke="#C9A876" stroke-width="0.6"/>
  </svg>`,
  lotus: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#E8D5B2" stroke-width="0.8"/>
    <path d="M50 24 Q60 40 50 56 Q40 40 50 24" fill="rgba(232,213,178,0.2)" stroke="#E8D5B2" stroke-width="0.7"/>
    <path d="M30 38 Q42 48 50 56 Q44 42 30 38" fill="rgba(232,213,178,0.12)" stroke="#C9A876" stroke-width="0.7"/>
    <path d="M70 38 Q58 48 50 56 Q56 42 70 38" fill="rgba(232,213,178,0.12)" stroke="#C9A876" stroke-width="0.7"/>
    <path d="M22 56 Q36 60 50 60 Q40 52 22 56" fill="rgba(232,213,178,0.2)" stroke="#E8D5B2" stroke-width="0.7"/>
    <path d="M78 56 Q64 60 50 60 Q60 52 78 56" fill="rgba(232,213,178,0.2)" stroke="#E8D5B2" stroke-width="0.7"/>
  </svg>`,
  bond: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#E8D5B2" stroke-width="0.8"/>
    <circle cx="40" cy="50" r="16" stroke="#E8D5B2" stroke-width="0.9" fill="rgba(232,213,178,0.1)"/>
    <circle cx="60" cy="50" r="16" stroke="#C9A876" stroke-width="0.9" fill="rgba(232,213,178,0.1)"/>
    <circle cx="40" cy="50" r="2.4" fill="#E8D5B2"/>
    <circle cx="60" cy="50" r="2.4" fill="#C9A876"/>
  </svg>`,
  star: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#E8D5B2" stroke-width="0.8"/>
    <path d="M50 18 L57 42 L82 42 L62 56 L70 80 L50 65 L30 80 L38 56 L18 42 L43 42 Z"
          fill="rgba(232,213,178,0.18)" stroke="#E8D5B2" stroke-width="0.7"/>
    <circle cx="50" cy="50" r="3" fill="#C9A876"/>
  </svg>`,
};

/* ---------- 卡片渲染 ---------- */
function renderCards() {
  const wrap = document.getElementById('cards');
  if (!wrap) return;
  wrap.innerHTML = works.map((w, i) => `
    <button class="card" type="button" data-reveal style="transition-delay: ${i * 70}ms" aria-label="${w.title} — 點擊翻面看詳情">
      <div class="card__inner">
        <article class="card__face card__front">
          <span class="card__corner card__corner--tl"></span>
          <span class="card__corner card__corner--tr"></span>
          <span class="card__corner card__corner--bl"></span>
          <span class="card__corner card__corner--br"></span>
          <p class="card__no">${w.no}</p>
          <div class="card__shot">
            <img src="${w.shot}" alt="${w.title} 介面截圖" loading="lazy" />
          </div>
          <h3 class="card__title">${w.title}</h3>
          <p class="card__title-en">${w.titleEn}</p>
          <p class="card__hint">點擊翻面 ✦ FLIP</p>
        </article>

        <article class="card__face card__back">
          <span class="card__corner card__corner--tl"></span>
          <span class="card__corner card__corner--tr"></span>
          <span class="card__corner card__corner--bl"></span>
          <span class="card__corner card__corner--br"></span>
          <div class="card__sigil">${sigils[w.sigil] || sigils.star}</div>
          <h3 class="card__back-title">${w.title}</h3>
          <p class="card__back-title-en">${w.titleEn}</p>
          <div class="card__back-divider"></div>
          <p class="card__desc">${w.desc}</p>
          <a class="card__open" href="${w.url}" target="_blank" rel="noopener" data-stop>
            開啟連結 ✦ OPEN
          </a>
          <p class="card__flip-back">CLICK TO FLIP BACK</p>
        </article>
      </div>
    </button>
  `).join('');

  // 點擊翻面（按鈕內的連結 stopPropagation）
  wrap.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-stop]')) return;
      card.classList.toggle('is-flipped');
    });
  });
}

/* ---------- Sparkles ---------- */
function makeSparkles(count = 50) {
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

/* ---------- 啟動 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCards();

  document.querySelectorAll('.hero > *').forEach(el => el.setAttribute('data-reveal', ''));

  makeSparkles(40);
  setupStarfield();

  requestAnimationFrame(setupReveal);
});
