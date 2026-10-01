/**
 * Koussay Magoura — Modern Interactive Portfolio & CV Script
 */

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

/* ==========================================================================
   Multi-language Translation Dictionary (EN / AR)
   ========================================================================== */
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.availability": "Available for freelance & remote projects",
    "hero.greeting": "Building digital",
    "hero.highlight": "products that work.",
    "hero.desc": "Independent Web Developer focused on modern websites, web applications, management systems, landing pages and custom digital solutions.",
    "hero.projects": "View projects",
    "hero.contact": "Contact me ↗",
    "hero.cv": "Download CV",
    "about.kicker": "01 / PROFILE",
    "about.title": "From idea to<br><span>working product.</span>",
    "about.text": "I build practical web products from concept to deployment, combining clean interfaces, modern JavaScript frameworks, databases and thoughtful problem solving.",
    "about.fact1": "independent work on current platform",
    "about.fact2": "independent development on Atafawok School",
    "about.fact3": "used strategically for debugging, planning & testing",
    "skills.kicker": "02 / STACK",
    "skills.title": "Tools I build with.",
    "projects.kicker": "03 / SELECTED WORK",
    "projects.title": "Projects with a purpose.",
    "status.dev": "IN DEVELOPMENT",
    "project.demo": "Live demo ↗",
    "project1.desc": "Educational web application developed for an educational project, with approximately 80% of the development handled independently.",
    "project1.feat": "Authentication · Dashboard · Student Management · Educational Content · Database · Responsive Design",
    "project2.title": "Educational Institution Management Platform",
    "project2.desc": "Comprehensive management platform for private educational institutions and external teaching organizations.",
    "project2.feat": "Students · Teachers · Subjects · Groups · Payments · Statistics · Accounts",
    "project3.title": "AI Telegram Assistant",
    "project3.desc": "Telegram-based AI assistant project integrating Google's Gemini API for intelligent conversations and AI-powered features.",
    "project3.feat": "Conversations · Programming Help · Summaries · Image Generation · Web Search",
    "project3.role": "Role: Project Supervisor / Technical Coordination",
    "project4.title": "Restaurant Digital Menu",
    "project4.desc": "Digital menu web solution designed to give restaurant customers quick access to menu information.",
    "services.kicker": "04 / SERVICES",
    "services.title": "What I can build.",
    "srv1.title": "Websites & Landing Pages",
    "srv1.desc": "Modern, responsive pages built around a clear goal.",
    "srv2.title": "Web Applications",
    "srv2.desc": "Interactive products, dashboards and management systems.",
    "srv3.title": "Custom Systems",
    "srv3.desc": "Database-driven solutions tailored to a specific workflow.",
    "srv4.title": "AI & Integrations",
    "srv4.desc": "Connect web products with AI services and external APIs.",
    "srv5.title": "UI Implementation",
    "srv5.desc": "Responsive interfaces from ideas, references or designs.",
    "srv6.title": "Deployment & Fixes",
    "srv6.desc": "Deployment, debugging and development of existing projects.",
    "workflow.kicker": "05 / WORKFLOW",
    "workflow.title": "A simple process.",
    "wf1.b": "Understand",
    "wf1.s": "Idea & requirements",
    "wf2.b": "Plan",
    "wf2.s": "Structure & approach",
    "wf3.b": "Build",
    "wf3.s": "UI & development",
    "wf4.b": "Test",
    "wf4.s": "Debug & refine",
    "wf5.b": "Deploy",
    "wf5.s": "Ship the product",
    "contact.kicker": "06 / CONTACT",
    "contact.title": "Have a project<br><em>in mind?</em>",
    "contact.text": "Tell me what you want to build. Let's turn the idea into something usable.",
    "contact.emailLbl": "Email",
    "contact.tgLbl": "Telegram",
    "contact.copyLbl": "Quick action",
    "contact.copyBtn": "Copy email ⧉",
    "footer.meta": "Web Developer · M'Sila, Algeria",
    "toast.msg": "Email copied to clipboard."
  },
  ar: {
    "nav.about": "من أنا",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.services": "الخدمات",
    "nav.contact": "تواصل معي",
    "hero.availability": "متاح للعمل الحر والمشاريع عن بُعد",
    "hero.greeting": "بناء وتطوير",
    "hero.highlight": "منتجات رقمية استثنائية.",
    "hero.desc": "مطور ويب متخصص في بناء المواقع العصرية، تطبيقات الويب المتقدمة، لوحات التحكم، وأنظمة الإدارة المدمجة بالذكاء الاصطناعي.",
    "hero.projects": "تصفح المشاريع",
    "hero.contact": "تواصل معي ↗",
    "hero.cv": "تحميل السيرة الذاتية",
    "about.kicker": "01 / نبذة شخصية",
    "about.title": "من الفكرة المبتكرة<br><span>إلى منتج واقعي متكامل.</span>",
    "about.text": "أقوم بتطوير حلول برمجية متكاملة وعالية الأداء من مرحلة التخطيط والتصميم وحتى النشر السحابي، مع التركيز على واجهات جذابة وتجربة مستخدم فائقة السلاسة.",
    "about.fact1": "عمل وتطوير مستقل على المنصة الحالية",
    "about.fact2": "تطوير مستقل بنسبة 80% لمشروع مدرسة التفوق",
    "about.fact3": "توظيف استراتيجي للذكاء الاصطناعي في التخطيط والتحسين",
    "skills.kicker": "02 / التقنيات",
    "skills.title": "الأدوات والتقنيات التي أعمل بها.",
    "projects.kicker": "03 / أعمال مختارة",
    "projects.title": "مشاريع تم بناؤها بدقة وهدف.",
    "status.dev": "قيد التطوير",
    "project.demo": "معاينة حية ↗",
    "project1.desc": "تطبيق ويب تعليمي متكامل تم تطويره لمؤسسة تعليمية، مع إنجاز أكثر من 80% من التطوير البرمجي بشكل مستقل وكفاءة عالية.",
    "project1.feat": "نظام تسجيل ودخول · لوحة تحكم · إدارة الطلاب · محتوى تعليمي · قاعدة بيانات · تصميم متجاوب",
    "project2.title": "منصة إدارة المؤسسات التعليمية",
    "project2.desc": "منصة سحابية متقدمة لتسيير المؤسسات التعليمية الخاصة ومراكز التدريس، تشمل إدارة الطلاب والأساتذة والحسابات والتقارير.",
    "project2.feat": "إدارة الطلاب · الأساتذة · المواد الدراسية · الأفواج · المدفوعات · الإحصائيات · الحسابات",
    "project3.title": "مساعد ذكي عبر تيليجرام",
    "project3.desc": "مشروع مساعد ذكي تفاعلي على تيليجرام مدمج مع Google Gemini API للمحادثة الذكية وتوليد الأفكار والمساعدة البرمجية.",
    "project3.feat": "محادثات ذكية · مساعدة برمجية · تلخيص نصوص · توليد صور · بحث تفاعلي",
    "project3.role": "الدور: مشرف المشروع والتنسيق التقني",
    "project4.title": "منيو رقمي للمطاعم",
    "project4.desc": "حل ويب ذكي لقائمة مطاعم تفاعلية تتيح للزبائن استعراض الوجبات والأسعار بسرعة فائقة وتصميم جذاب.",
    "services.kicker": "04 / الخدمات",
    "services.title": "ما يمكنني تقديمه لك.",
    "srv1.title": "المواقع وصفحات الهبوط",
    "srv1.desc": "صفحات عصرية وسريعة مصممة خصيصاً لتحقيق أهدافك وجذب العملاء.",
    "srv2.title": "تطبيقات الويب التفاعلية",
    "srv2.desc": "بناء أنظمة ولوحات تحكم قوية وسهلة الاستخدام تلبي احتياجاتك.",
    "srv3.title": "أنظمة مخصصة وقواعد بيانات",
    "srv3.desc": "حلول برمجية متكاملة مبنية على قواعد بيانات مصممة لنمط عملك.",
    "srv4.title": "تكامل الذكاء الاصطناعي و APIs",
    "srv4.desc": "ربط منصتك بنماذج الذكاء الاصطناعي والخدمات السحابية المتقدمة.",
    "srv5.title": "تطوير واجهات المستخدم (UI/UX)",
    "srv5.desc": "تحويل التصاميم والأفكار إلى واجهات برمجية حية ومتجاوبة بدقة.",
    "srv6.title": "النشر، الصيانة والتطوير",
    "srv6.desc": "استضافة المشاريع، إصلاح المشاكل البرمجية وتطوير الأنظمة القائمة.",
    "workflow.kicker": "05 / منهجية العمل",
    "workflow.title": "خطوات عمل واضحة وفعالة.",
    "wf1.b": "الفهم والتحليل",
    "wf1.s": "دراسة المتطلبات والأهداف",
    "wf2.b": "التخطيط والهيكلة",
    "wf2.s": "بناء المعمارية وخطة التنفيذ",
    "wf3.b": "التطوير البرمجي",
    "wf3.s": "كتابة كود نظيف وتصميم جذاب",
    "wf4.b": "الفحص والاختبار",
    "wf4.s": "تحسين الأداء وضمان الجودة",
    "wf5.b": "النشر والإطلاق",
    "wf5.s": "تسليم وتشغيل المشروع بنجاح",
    "contact.kicker": "06 / تواصل",
    "contact.title": "هل لديك مشروع<br><em>تريد تنفيذه؟</em>",
    "contact.text": "شاركني فكرتك ولنبدأ بتحويلها إلى واقع رقمي مميز يعمل بأعلى كفاءة.",
    "contact.emailLbl": "البريد الإلكتروني",
    "contact.tgLbl": "تيليجرام",
    "contact.copyLbl": "إجراء سريع",
    "contact.copyBtn": "نسخ البريد الإلكتروني ⧉",
    "footer.meta": "مطور ويب · المسيلة، الجزائر",
    "toast.msg": "تم نسخ البريد الإلكتروني بنجاح."
  }
};

/* ==========================================================================
   State & Preferences Management
   ========================================================================== */
let lang = localStorage.getItem("lang") || "ar"; // Default to Arabic for user comfort
let theme = localStorage.getItem("theme") || "dark"; // Default to dark for high-end aesthetic

function applyTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  const btn = $("#themeBtn");
  if (btn) btn.textContent = theme === "dark" ? "☼" : "☾";
}
applyTheme(theme);

function applyLang(l) {
  lang = l;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  
  const langBtn = $("#langBtn");
  if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";
  
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value) el.innerHTML = value;
  });
  
  localStorage.setItem("lang", lang);
}
applyLang(lang);

// Theme toggle
const themeBtn = $("#themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  });
}

// Lang toggle
const langBtn = $("#langBtn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    applyLang(lang === "ar" ? "en" : "ar");
  });
}

// Mobile navigation drawer
const menuBtn = $("#menuBtn");
const nav = $("#nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  $$(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });

$$(".reveal").forEach(el => observer.observe(el));

// Back to top button
const topBtn = $("#topBtn");
if (topBtn) {
  window.addEventListener("scroll", () => topBtn.classList.toggle("show", window.scrollY > 400));
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Copy email with toast notification
const copyBtn = $("#copyBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("k4781884@gmail.com");
      const t = $("#toast");
      if (t) {
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 2200);
      }
    } catch (err) {
      console.warn("Clipboard failed", err);
    }
  });
}

/* ==========================================================================
   Interactive Terminal Simulator
   ========================================================================== */
const commands = [
  { 
    cmd: "whoami", 
    out: ["<span class='ok'>Koussay Magoura</span>", "Web Developer & Solutions Architect · KAKA-311"] 
  },
  { 
    cmd: "cat skills.json", 
    out: ["<span class='key'>Frontend:</span> React, Next.js, Modern JavaScript, UI/UX", "<span class='key'>Backend:</span> Node.js, Express, MongoDB, REST APIs", "<span class='key'>AI:</span> Gemini, OpenAI, Intelligent Agents"] 
  },
  { 
    cmd: "status --project", 
    out: ["<span class='ok'>● ATAFAWOK SCHOOL:</span> Live (80% Independent Dev)", "<span class='key'>● MANAGEMENT PLATFORM:</span> In Active Development"] 
  },
  { 
    cmd: "deploy --production", 
    out: ["<span class='ok'>✓ SUCCESS:</span> Fast, Responsive, High Performance."] 
  }
];

let ci = 0, char = 0, phase = "type";
const typed = $("#typed"), output = $("#terminalOutput");

function terminalLoop() {
  if (!typed || !output) return;
  const item = commands[ci];
  if (phase === "type") {
    typed.textContent = item.cmd.slice(0, char++);
    if (char > item.cmd.length) {
      phase = "wait";
      setTimeout(terminalLoop, 400);
      return;
    }
    setTimeout(terminalLoop, 45);
  } else {
    output.innerHTML = item.out.map(x => `<div>${x}</div>`).join("");
    setTimeout(() => {
      typed.textContent = "";
      output.innerHTML = "";
      char = 0;
      ci = (ci + 1) % commands.length;
      phase = "type";
      terminalLoop();
    }, 2800);
  }
}
terminalLoop();

/* ==========================================================================
   Powerful 3D Interactive Cosmic Canvas & Constellation Mesh
   ========================================================================== */
const canvas = $("#spaceCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let W, H, dpr;
  let particles = [];
  let mouse = { x: -1000, y: -1000, active: false, targetX: 0.5, targetY: 0.5, currentX: 0.5, currentY: 0.5 };

  const PARTICLE_COUNT = 90;
  const MAX_CONNECT_DIST = 140;
  const MOUSE_CONNECT_DIST = 190;

  function initParticles() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(PARTICLE_COUNT, Math.floor(W / 12));
    particles = [];

    for (let i = 0; i < count; i++) {
      const z = 0.2 + Math.random() * 0.8; // Depth factor (0.2 to 1.0)
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: z,
        radius: (1.2 + Math.random() * 2.2) * z,
        vx: (Math.random() - 0.5) * 0.45 * z,
        vy: (Math.random() - 0.5) * 0.45 * z,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        isAccent: Math.random() > 0.75 // 25% are vibrant glowing nodes
      });
    }
  }

  window.addEventListener("resize", initParticles);
  initParticles();

  window.addEventListener("pointermove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    mouse.targetX = e.clientX / W;
    mouse.targetY = e.clientY / H;
  });

  window.addEventListener("pointerleave", () => {
    mouse.active = false;
    mouse.targetX = 0.5;
    mouse.targetY = 0.5;
  });

  function drawScene() {
    ctx.clearRect(0, 0, W, H);

    // Smooth mouse parallax lerp
    mouse.currentX += (mouse.targetX - mouse.currentX) * 0.05;
    mouse.currentY += (mouse.targetY - mouse.currentY) * 0.05;

    const isDark = document.documentElement.dataset.theme === "dark";
    const offsetX = (mouse.currentX - 0.5) * 50;
    const offsetY = (mouse.currentY - 0.5) * 35;

    // Node colors
    const defaultColor = isDark ? "rgba(226, 232, 240, " : "rgba(30, 41, 59, ";
    const accentColor = isDark ? "rgba(255, 96, 54, " : "rgba(228, 87, 46, ";
    const cyanColor = isDark ? "rgba(56, 189, 248, " : "rgba(2, 132, 199, ";

    // 1. Update and draw connecting constellation lines between nodes
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      const x1 = p1.x + offsetX * p1.z;
      const y1 = p1.y + offsetY * p1.z;

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const x2 = p2.x + offsetX * p2.z;
        const y2 = p2.y + offsetY * p2.z;

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dist = Math.hypot(dx, dy);

        if (dist < MAX_CONNECT_DIST) {
          const alpha = (1 - dist / MAX_CONNECT_DIST) * 0.28 * Math.min(p1.z, p2.z);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = p1.isAccent || p2.isAccent ? `${accentColor}${alpha * 1.5})` : `${cyanColor}${alpha})`;
          ctx.lineWidth = Math.min(p1.z, p2.z) * 1.2;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor with interactive neon beam
      if (mouse.active) {
        const mdx = x1 - mouse.x;
        const mdy = y1 - mouse.y;
        const mdist = Math.hypot(mdx, mdy);

        if (mdist < MOUSE_CONNECT_DIST) {
          const mAlpha = (1 - mdist / MOUSE_CONNECT_DIST) * 0.65 * p1.z;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `${accentColor}${mAlpha})`;
          ctx.lineWidth = p1.z * 1.6;
          ctx.stroke();

          // Mouse gentle gravitational pull
          p1.x -= mdx * 0.004 * p1.z;
          p1.y -= mdy * 0.004 * p1.z;
        }
      }
    }

    // 2. Draw 3D particle nodes with glowing radial auras
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      // Wrap around bounds with buffer
      if (p.x < -30) p.x = W + 30;
      if (p.x > W + 30) p.x = -30;
      if (p.y < -30) p.y = H + 30;
      if (p.y > H + 30) p.y = -30;

      const px = p.x + offsetX * p.z;
      const py = p.y + offsetY * p.z;
      const pulsingRadius = p.radius + Math.sin(p.pulse) * 0.6 * p.z;

      // Outer glow halo
      if (p.isAccent || p.z > 0.7) {
        const glowRadius = pulsingRadius * (isDark ? 4.5 : 3.5);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
        const glowColor = p.isAccent ? accentColor : cyanColor;
        grad.addColorStop(0, `${glowColor}${isDark ? 0.45 : 0.25})`);
        grad.addColorStop(1, `${glowColor}0)`);

        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Core particle node
      ctx.beginPath();
      ctx.arc(px, py, Math.max(0.8, pulsingRadius), 0, Math.PI * 2);
      ctx.fillStyle = p.isAccent ? `${accentColor}0.95)` : `${defaultColor}${0.3 + p.z * 0.55})`;
      ctx.fill();
    });

    requestAnimationFrame(drawScene);
  }

  requestAnimationFrame(drawScene);
}

/* ==========================================================================
   Card & Terminal 3D Tilt Reactivity
   ========================================================================== */
const tiltElement = $(".tilt");
if (tiltElement && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", e => {
    const rect = tiltElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    const clampedX = Math.max(-1.5, Math.min(1.5, normX));
    const clampedY = Math.max(-1.5, Math.min(1.5, normY));

    tiltElement.style.transform = `perspective(1000px) rotateY(${clampedX * 7}deg) rotateX(${-clampedY * 7}deg)`;
  });

  tiltElement.addEventListener("pointerleave", () => {
    tiltElement.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  });
}
