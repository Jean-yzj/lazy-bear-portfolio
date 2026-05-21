/* ============================================================
   懶惰熊 · Lazy Bear Portfolio
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 作品資料 ----------
   描述為草稿，使用者隨時可在這裡編輯。
   每張卡的圖示是 SVG（不同的星座/魔法符號）。
*/
const works = [
  {
    no: 'ONE',
    title: '香水羅盤',
    titleEn: 'Le Compas',
    desc: '為每一段情緒找到對的香氣。輸入心情、場景與偏好，AI 在無數香水中為你導航出最契合的選擇。',
    url: 'https://lazybear-perfume.zeabur.app',
    sigil: 'compass',
  },
  {
    no: 'TWO',
    title: '養魚工具',
    titleEn: 'Aquarius',
    desc: '讓水族缸主理人專心享受。餵食、換水、用藥週期自動編排，所有日常都化作清單與提醒。',
    url: 'https://fishmangemant.zeabur.app',
    sigil: 'wave',
  },
  {
    no: 'THREE',
    title: 'SmartRead',
    titleEn: 'The Book',
    desc: '把每一本想讀的書變成計畫。從目標頁數到閱讀節奏，讓「持續閱讀」變成一件不費力的事。',
    url: 'https://smartread-echo.zeabur.app',
    sigil: 'book',
  },
  {
    no: 'FOUR',
    title: '大腦恢復',
    titleEn: 'The Rest',
    desc: '為大腦設計的休息儀式。用結構化的方法緩解疲勞，把專注力穩定地、優雅地找回來。',
    url: 'https://brain-recovery.zeabur.app',
    sigil: 'lotus',
  },
  {
    no: 'FIVE',
    title: '好朋友分析',
    titleEn: 'The Bond',
    desc: '用數據看見友誼的形狀。理解朋友的個性、相處模式，以及你們之間悄悄發生的化學反應。',
    url: 'https://hi-goodfriend.zeabur.app',
    sigil: 'bond',
  },
  {
    no: 'SIX',
    title: '星座算命',
    titleEn: 'The Star',
    desc: '把星空變成一場儀式。輸入生辰，獲得當日運勢、感情指引，以及只屬於你的星座建議。',
    url: 'https://zodiac-jean.zeabur.app',
    sigil: 'star',
  },
];

/* ---------- SVG 卡牌符號 ---------- */
const sigils = {
  compass: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#6BA3D6" stroke-width="0.8"/>
    <circle cx="50" cy="50" r="34" stroke="#A5C9E5" stroke-width="0.6" stroke-dasharray="1 3"/>
    <path d="M50 14 L56 50 L50 86 L44 50 Z" fill="#B8D4E8" stroke="#2C5A8B" stroke-width="0.6"/>
    <path d="M14 50 L50 44 L86 50 L50 56 Z" fill="#ECF4FB" stroke="#6BA3D6" stroke-width="0.6"/>
    <circle cx="50" cy="50" r="3" fill="#2C5A8B"/>
  </svg>`,
  wave: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M14 56 Q26 44 38 56 T62 56 T86 56" stroke="#6BA3D6" stroke-width="1.4" fill="none"/>
    <path d="M14 66 Q26 54 38 66 T62 66 T86 66" stroke="#A5C9E5" stroke-width="1" fill="none"/>
    <path d="M14 46 Q26 34 38 46 T62 46 T86 46" stroke="#B8D4E8" stroke-width="1" fill="none"/>
    <circle cx="50" cy="30" r="3" fill="#6BA3D6"/>
  </svg>`,
  book: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M28 32 L50 38 L72 32 L72 70 L50 76 L28 70 Z" fill="#ECF4FB" stroke="#2C5A8B" stroke-width="0.8"/>
    <path d="M50 38 L50 76" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M34 42 L46 44 M34 50 L46 52 M34 58 L46 60 M54 44 L66 42 M54 52 L66 50 M54 60 L66 58" stroke="#A5C9E5" stroke-width="0.6"/>
  </svg>`,
  lotus: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M50 24 Q60 40 50 56 Q40 40 50 24" fill="#ECF4FB" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M30 38 Q42 48 50 56 Q44 42 30 38" fill="#F5FAFE" stroke="#A5C9E5" stroke-width="0.8"/>
    <path d="M70 38 Q58 48 50 56 Q56 42 70 38" fill="#F5FAFE" stroke="#A5C9E5" stroke-width="0.8"/>
    <path d="M22 56 Q36 60 50 60 Q40 52 22 56" fill="#ECF4FB" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M78 56 Q64 60 50 60 Q60 52 78 56" fill="#ECF4FB" stroke="#6BA3D6" stroke-width="0.8"/>
    <ellipse cx="50" cy="62" rx="20" ry="3" fill="#B8D4E8"/>
  </svg>`,
  bond: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#6BA3D6" stroke-width="0.8"/>
    <circle cx="40" cy="50" r="16" stroke="#6BA3D6" stroke-width="0.9" fill="rgba(184,212,232,0.25)"/>
    <circle cx="60" cy="50" r="16" stroke="#2C5A8B" stroke-width="0.9" fill="rgba(184,212,232,0.25)"/>
    <circle cx="40" cy="50" r="2.5" fill="#6BA3D6"/>
    <circle cx="60" cy="50" r="2.5" fill="#2C5A8B"/>
  </svg>`,
  star: `<svg viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#6BA3D6" stroke-width="0.8"/>
    <path d="M50 18 L57 42 L82 42 L62 56 L70 80 L50 65 L30 80 L38 56 L18 42 L43 42 Z"
          fill="#ECF4FB" stroke="#2C5A8B" stroke-width="0.8"/>
    <circle cx="50" cy="50" r="3" fill="#6BA3D6"/>
  </svg>`,
};

/* ---------- 卡片渲染 ---------- */
function renderCards() {
  const wrap = document.getElementById('cards');
  if (!wrap) return;
  wrap.innerHTML = works.map((w, i) => `
    <a class="card" href="${w.url}" target="_blank" rel="noopener" data-reveal style="transition-delay: ${i * 80}ms">
      <span class="card__shine"></span>
      <span class="card__corner card__corner--tl"></span>
      <span class="card__corner card__corner--tr"></span>
      <span class="card__corner card__corner--bl"></span>
      <span class="card__corner card__corner--br"></span>
      <div class="card__sigil">${sigils[w.sigil] || sigils.star}</div>
      <p class="card__num">${w.no}</p>
      <h3 class="card__title">${w.title}</h3>
      <p class="card__title-en">${w.titleEn}</p>
      <p class="card__desc">${w.desc}</p>
      <span class="card__open">OPEN ✦</span>
    </a>
  `).join('');
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

/* ---------- 背景星空（canvas） ---------- */
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
    const count = Math.round((innerWidth * innerHeight) / 14000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.5 + 0.2,
      tw: Math.random() * 0.012 + 0.004,
      d: Math.random() < 0.5 ? -1 : 1,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const s of stars) {
      s.a += s.tw * s.d;
      if (s.a <= 0.1 || s.a >= 0.7) s.d *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(107, 163, 214, ${s.a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener('resize', resize);
  if (!prefersReducedMotion) requestAnimationFrame(draw);
}

/* ---------- Hero 滑鼠視差 ---------- */
function setupHeroParallax() {
  if (prefersReducedMotion) return;
  const hero = document.querySelector('.hero');
  const layers = document.querySelectorAll('[data-parallax]');
  if (!hero || layers.length === 0) return;

  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  const lerp = (a, b, t) => a + (b - a) * t;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });
  hero.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

  function loop() {
    currentX = lerp(currentX, targetX, 0.05);
    currentY = lerp(currentY, targetY, 0.05);
    layers.forEach((el) => {
      const depth = parseFloat(el.dataset.parallax) || 1;
      const x = -currentX * depth * 16;
      const y = -currentY * depth * 16;
      el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ---------- 卡片 3D 傾斜 ---------- */
function setupCardTilt() {
  if (prefersReducedMotion) return;
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    let rafId = null;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * 6;
      const ry = (x - 0.5) * 6;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = `translateY(-8px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = '';
    });
  });
}

/* ---------- 滾動顯示 nav ---------- */
function setupNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 240) nav.classList.add('is-visible');
    else nav.classList.remove('is-visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
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

  // 把幾組元素自動加上 reveal
  document.querySelectorAll(
    '.hero__content > *, .intro__inner > *, .works__header > *, .divider'
  ).forEach(el => el.setAttribute('data-reveal', ''));

  makeSparkles(50);
  setupStarfield();
  setupHeroParallax();
  setupNav();

  // 等卡片插入後啟動 reveal + tilt
  requestAnimationFrame(() => {
    setupReveal();
    setupCardTilt();
  });
});
