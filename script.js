const translations = {
  zh: {
    metaTitle: "Britney Lin | Personal Brand Website",
    brand: "Britney Lin",
    navAbout: "About",
    navWork: "Work & Explorations",
    navConnect: "Connect",
    heroTagOne: "學習體驗設計",
    heroTagTwo: "雙語教育",
    heroTagThree: "AI 教育應用",
    aboutTitle: "About",
    aboutIntro: "我是 Britney。",
    aboutP1: "我相信學習不只是知識的累積，更是理解世界、理解自己，並與他人建立連結的過程。",
    aboutP2: "透過教育、語言與數位工具，我持續探索科技如何創造更有溫度的學習體驗，讓知識的傳遞回到人與人的理解與回饋。",
    aboutP3: "我重視深度交流與長期關係的建立，也關心生命是否被真實而有意義地活出。在資訊過載的時代裡，我希望為學習者保留清晰的方向感，並傳遞溫柔而堅定的力量。",
    workTitle: "Work & Explorations",
    selectedHeading: "Selected Works",
    exploringHeading: "Currently Exploring",
    learnMore: "Learn More",
    showLess: "Show Less",
    projectOneDetail: "設計跨文化學習與語言實作活動，透過沉浸式體驗提升溝通力與國際理解。",
    projectTwoDetail: "投入雙語學習情境的規劃與優化，關注「如何讓學習被理解」而不只是被傳遞。",
    projectThreeDetail: "參與教育學習品質提升，關注教學如何持續優化與形成更有系統的學習支持。",
    exploreOneDetail: "探索 AI 如何融入教育設計與數位學習體驗，重構教學與學習的互動方式。",
    exploreTwoDetail: "雙語情境下的 UI/UX 系統設計，關注資訊架構、使用者體驗與語言轉換中的理解效率。",
    exploreThreeDetail: "以影像敘事建立節奏與情感，發展具質感與敘事性的視覺表達。",
    connectKicker: "03 / Connect",
    connectQuote: "「看清生活的本質，仍然選擇熱愛生活」",
    emailLabel: "Email",
    basedLabel: "Based in",
    footer: "「在日復一日的生活裡，我們都比自己以為的更脆弱，也比想像中更堅強。」"
  },
  en: {
    metaTitle: "Britney Lin | Personal Brand Website",
    brand: "Britney Lin",
    navAbout: "About",
    navWork: "Work & Explorations",
    navConnect: "Connect",
    heroTagOne: "Learning Experience Designer",
    heroTagTwo: "Bilingual Education",
    heroTagThree: "AI for Education",
    aboutTitle: "About",
    aboutIntro: "I am Britney.",
    aboutP1: "Learning is not only the accumulation of knowledge. It is also a process of understanding the world, understanding oneself, and building connection with others.",
    aboutP2: "Through education, language, and digital tools, I explore how technology can create warmer learning experiences and return knowledge sharing to human understanding and feedback.",
    aboutP3: "I value deep conversations and long-term relationships. In an age of information overload, I hope to preserve a clear sense of direction for learners and share a gentle but steady strength.",
    workTitle: "Work & Explorations",
    selectedHeading: "Selected Works",
    exploringHeading: "Currently Exploring",
    learnMore: "Learn More",
    showLess: "Show Less",
    projectOneDetail: "Designs cross-cultural learning and language practice activities through immersive experiences.",
    projectTwoDetail: "Shapes bilingual and EMI learning contexts with attention to whether learning is truly understood.",
    projectThreeDetail: "Supports academic quality enhancement and systematic learning innovation.",
    exploreOneDetail: "Explores how AI can enter digital education with more human-centered interaction.",
    exploreTwoDetail: "Studies bilingual UI/UX systems, information architecture, and language-switching clarity.",
    exploreThreeDetail: "Uses cinematic rhythm and emotion to develop refined visual storytelling.",
    connectKicker: "03 / Connect",
    connectQuote: "To see life clearly, and still choose to love it.",
    emailLabel: "Email",
    basedLabel: "Based in",
    footer: "「在日復一日的生活裡，我們都比自己以為的更脆弱，也比想像中更堅強。」"
  }
};

const hasGsap = typeof gsap !== "undefined";
const state = {
  lang: "zh",
  theme: "light"
};

function applyLanguage() {
  const dict = translations[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });
  document.title = dict.metaTitle;
  document.getElementById("langToggle").textContent = state.lang === "zh" ? "EN" : "ZH";
  document.querySelectorAll(".learn-more").forEach((button) => {
    const isOpen = button.closest(".info-card").classList.contains("is-open");
    button.textContent = isOpen ? dict.showLess : dict.learnMore;
  });
  localStorage.setItem("lang", state.lang);
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  document.getElementById("themeToggle").textContent = state.theme === "dark" ? "Light" : "Dark";
  localStorage.setItem("theme", state.theme);
}

function initCardInteractions() {
  document.querySelectorAll(".learn-more").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".info-card");
      const list = button.closest(".interactive-list");
      const willOpen = !card.classList.contains("is-open");
      list.querySelectorAll(".info-card").forEach((item) => {
        item.classList.remove("is-open");
        const itemButton = item.querySelector(".learn-more");
        itemButton.setAttribute("aria-expanded", "false");
        itemButton.textContent = translations[state.lang].learnMore;
      });
      if (willOpen) {
        card.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        button.textContent = translations[state.lang].showLess;
      }
    });
  });
}

function initStickyNav() {
  const header = document.querySelector(".site-header");
  const toggleHeader = () => header.classList.toggle("is-visible", window.scrollY > 120);
  toggleHeader();
  window.addEventListener("scroll", toggleHeader, { passive: true });
}

function initAnimations() {
  if (!hasGsap) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-profile", { y: 18, opacity: 0, duration: 0.8, ease: "power3.out" });
  gsap.from(".hero-tags span", { y: 8, opacity: 0, stagger: 0.08, duration: 0.45, delay: 0.2 });
  gsap.to(".portrait-frame", { y: -7, duration: 3.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.utils.toArray(".reveal:not(.hero-profile)").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: { trigger: element, start: "top 88%" },
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    });
  });
}

document.getElementById("langToggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  applyLanguage();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

applyTheme();
applyLanguage();
initStickyNav();
initCardInteractions();
initAnimations();
