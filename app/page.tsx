"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

type Lang = "zh" | "en";

const copy = {
  zh: {
    nav: ["About", "Work & Explorations", "Connect"],
    lang: "EN",
    heroKicker: "Personal Brand / Learning / Connection",
    heroTitle: "在知識與人之間，設計更有溫度的理解。",
    heroLead:
      "我是 Britney，探索教育、語言與數位工具如何讓學習不只是被傳遞，而是被理解、被回應，並與人產生真實連結。",
    heroCta: "開始探索",
    aboutTitle: "About",
    aboutIntro: "我是 Britney。",
    aboutBody: [
      "我相信學習不只是知識的累積，更是理解世界、理解自己，並與他人建立連結的過程。",
      "透過教育、語言與數位工具，我持續探索科技如何創造更有溫度的學習體驗，讓知識的傳遞回到人與人的理解與回饋。",
      "我重視深度交流與長期關係的建立，也關心生命是否被真實而有意義地活出。在資訊過載的時代裡，我希望為學習者保留清晰的方向感，不致迷失。"
    ],
    reveal: "閱讀更多",
    hide: "收合",
    workTitle: "Work & Explorations",
    selected: "Selected Works",
    exploring: "Currently Exploring",
    learnMore: "Learn More",
    modalLabel: "專注閱讀",
    close: "Close",
    connectTitle: "Connect",
    quote: "「看清生活的本質，仍然選擇熱愛生活」",
    closing: "「在日復一日的日常拉扯中，我們都比自己想像的還要脆弱與堅強。」",
    footer: "Personal Brand Website · 溫柔、簡潔、以人為本。"
  },
  en: {
    nav: ["About", "Work & Explorations", "Connect"],
    lang: "中",
    heroKicker: "Personal Brand / Learning / Connection",
    heroTitle: "Designing warmer understanding between knowledge and people.",
    heroLead:
      "I am Britney. I explore how education, language, and digital tools can make learning not only delivered, but understood, responded to, and connected to real people.",
    heroCta: "Begin exploring",
    aboutTitle: "About",
    aboutIntro: "I am Britney.",
    aboutBody: [
      "I believe learning is not only the accumulation of knowledge, but a process of understanding the world, understanding oneself, and building connections with others.",
      "Through education, language, and digital tools, I explore how technology can create warmer learning experiences and bring knowledge sharing back to human understanding and feedback.",
      "I value deep communication and long-term relationships. In an age of information overload, I hope to preserve a clear sense of direction for learners."
    ],
    reveal: "Read more",
    hide: "Collapse",
    workTitle: "Work & Explorations",
    selected: "Selected Works",
    exploring: "Currently Exploring",
    learnMore: "Learn More",
    modalLabel: "Focus View",
    close: "Close",
    connectTitle: "Connect",
    quote: "To see life clearly, and still choose to love it.",
    closing:
      "In the everyday pull of ordinary life, we are all more fragile and stronger than we imagine.",
    footer: "Personal Brand Website · Warm, minimal, and human-centered."
  }
};

const selectedWorks = [
  {
    number: "Project 01",
    title: "International Learning & Cross-Cultural Exchange Program",
    zh: "設計跨文化學習與語言實作活動，透過沉浸式體驗提升溝通力與國際理解。",
    en: "Designed cross-cultural learning and language practice activities that strengthen communication and international understanding through immersive experiences."
  },
  {
    number: "Project 02",
    title: "Bilingual Education & EMI Learning Design",
    zh: "投入雙語學習情境的規劃與優化，關注「如何讓學習被理解」而不只是被傳遞。",
    en: "Focused on bilingual learning contexts, asking how learning can be understood instead of merely delivered."
  },
  {
    number: "Project 03",
    title: "Academic Quality Enhancement & Learning Innovation Systems",
    zh: "參與教育學習品質提升，關注教學如何持續優化與形成更有系統的學習支持。",
    en: "Contributed to learning quality enhancement with attention to continuous improvement and systematic learner support."
  }
];

const explorations = [
  {
    number: "Theme 01",
    title: "AI × Digital Education",
    zh: "探索 AI 如何融入教育設計與數位學習體驗，重構教學與學習的互動方式。",
    en: "Exploring how AI can be integrated into education design and digital learning experiences."
  },
  {
    number: "Theme 02",
    title: "Bilingual UI/UX System Design",
    zh: "雙語情境下的 UI/UX 系統設計，關注資訊架構、使用者體驗與語言轉換中的理解效率。",
    en: "Designing bilingual UI/UX systems with attention to information architecture and comprehension."
  },
  {
    number: "Theme 03",
    title: "Cinematic Video Storytelling",
    zh: "以影像敘事建立節奏與情感，發展具質感與敘事性的視覺表達。",
    en: "Using cinematic storytelling to build rhythm, emotion, and refined visual expression."
  }
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [dark, setDark] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<(typeof selectedWorks)[number] | null>(null);
  const [showNav, setShowNav] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 260], [0, 1]);
  const navY = useTransform(scrollY, [0, 260], [-18, 0]);

  const t = copy[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [dark, lang]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowNav(latest > 180);
  });

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <motion.nav
        style={{ opacity: navOpacity, y: navY }}
        className={`fixed inset-x-3 top-3 z-50 mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-navy/10 bg-ivory/80 px-3 py-2 shadow-soft backdrop-blur-2xl dark:border-white/15 dark:bg-[#1F2630]/80 ${showNav ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-label="Primary navigation"
        aria-hidden={!showNav}
      >
        <div className="hidden text-sm font-bold text-navy dark:text-ivory sm:block">Britney</div>
        <div className="flex flex-1 items-center justify-center gap-1 text-xs font-bold text-navy/70 dark:text-ivory/70 sm:text-sm">
          <a className="rounded-full px-3 py-2 hover:bg-rose/60 dark:hover:bg-white/10" href="#about">
            {t.nav[0]}
          </a>
          <a className="rounded-full px-3 py-2 hover:bg-rose/60 dark:hover:bg-white/10" href="#work">
            {t.nav[1]}
          </a>
          <a className="rounded-full px-3 py-2 hover:bg-rose/60 dark:hover:bg-white/10" href="#connect">
            {t.nav[2]}
          </a>
        </div>
        <div className="flex gap-1">
          <button
            className="grid size-9 place-items-center rounded-full border border-navy/10 text-xs font-black text-navy dark:border-white/15 dark:text-ivory"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            aria-label="Switch language"
          >
            {t.lang}
          </button>
          <button
            className="grid size-9 place-items-center rounded-full border border-navy/10 text-navy dark:border-white/15 dark:text-ivory"
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </motion.nav>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-screen w-[min(1120px,calc(100%-32px))] place-items-center py-12">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
              <p className="mb-5 text-xs font-black uppercase tracking-[.18em] text-gold">{t.heroKicker}</p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-navy dark:text-ivory sm:text-7xl lg:text-8xl">
                {t.heroTitle}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 dark:text-ivory/70">{t.heroLead}</p>
              <a
                href="#about"
                className="mt-9 inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-bold text-ivory shadow-soft transition hover:-translate-y-0.5 dark:bg-ivory dark:text-navy"
              >
                {t.heroCta}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: .94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8, delay: .15 }}
              className="mx-auto w-full max-w-sm rounded-[8px] border border-navy/10 bg-white/55 p-6 shadow-soft backdrop-blur dark:border-white/15 dark:bg-white/5"
            >
              <div className="mx-auto aspect-square w-64 overflow-hidden rounded-full border border-gold/60 bg-rose p-2">
                <Image
                  src="/profile.jpg"
                  alt="Britney portrait"
                  width={512}
                  height={512}
                  priority
                  className="h-full w-full rounded-full object-cover object-[50%_30%]"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto w-[min(1080px,calc(100%-32px))] scroll-mt-28 border-t border-navy/10 py-20 dark:border-white/15">
          <SectionHead number="01" title={t.aboutTitle} />
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="rounded-[8px] border border-navy/10 bg-white/45 p-6 shadow-soft dark:border-white/15 dark:bg-white/5 sm:p-9">
              <p className="font-serif text-3xl text-navy dark:text-ivory">{t.aboutIntro}</p>
              <p className="mt-6 text-lg leading-9 text-ink/70 dark:text-ivory/70">{t.aboutBody[0]}</p>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    {t.aboutBody.slice(1).map((line) => (
                      <p key={line} className="mt-5 text-lg leading-9 text-ink/70 dark:text-ivory/70">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="mt-7 rounded-full border border-navy/10 px-4 py-2 text-sm font-black text-navy transition hover:bg-rose/60 dark:border-white/15 dark:text-ivory dark:hover:bg-white/10"
                aria-expanded={aboutOpen}
              >
                {aboutOpen ? t.hide : t.reveal}
              </button>
            </div>
            <div className="grid gap-3">
              {["Articulacy", "Sincerity & Empathy", "Resonance"].map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .08 }}
                  className="rounded-full border border-navy/10 bg-rose/50 px-5 py-4 text-center font-serif text-xl font-bold text-navy shadow-soft dark:border-white/15 dark:bg-white/5 dark:text-ivory"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto w-[min(1080px,calc(100%-32px))] scroll-mt-28 border-t border-navy/10 py-20 dark:border-white/15">
          <SectionHead number="02" title={t.workTitle} />
          <div className="grid gap-5 lg:grid-cols-2">
            <WorkColumn title={t.selected} items={selectedWorks} lang={lang} learnMore={t.learnMore} modalLabel={t.modalLabel} openCard={openCard} setOpenCard={setOpenCard} setModalItem={setModalItem} />
            <WorkColumn title={t.exploring} items={explorations} lang={lang} learnMore={t.learnMore} modalLabel={t.modalLabel} openCard={openCard} setOpenCard={setOpenCard} setModalItem={setModalItem} />
          </div>
        </section>

        <section id="connect" className="mx-auto w-[min(1080px,calc(100%-32px))] scroll-mt-28 py-20">
          <div className="rounded-[8px] border border-navy/10 bg-white/55 p-7 shadow-soft dark:border-white/15 dark:bg-white/5 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">03 / {t.connectTitle}</p>
            <blockquote className="mt-7 border-l-2 border-gold pl-5">
              <p className="font-serif text-3xl italic leading-snug text-navy dark:text-ivory sm:text-5xl">{t.quote}</p>
            </blockquote>
            <div className="my-10 h-px w-full bg-gradient-to-r from-gold to-transparent" />
            <address className="grid gap-5 not-italic">
              <ContactRow icon={<Mail size={18} />} label="Email" value="britney880414@gmail.com" href="mailto:britney880414@gmail.com" />
              <ContactRow icon={<MapPin size={18} />} label="Based in" value="Taipei, Taiwan" />
              <ContactRow label="Instagram" value="@britney" href="https://www.instagram.com/_________britney_________?igsh=MThvZ2k0ZmYyNTdwMA%3D%3D&utm_source=qr" />
            </address>
            <p className="mt-10 max-w-3xl font-serif text-lg italic leading-8 text-ink/55 dark:text-ivory/55">{t.closing}</p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto w-[min(1080px,calc(100%-32px))] pb-10 text-center text-sm text-ink/55 dark:text-ivory/55">
        {t.footer}
      </footer>

      <AnimatePresence>
        {modalItem && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-ink/30 p-4 backdrop-blur-sm dark:bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: .97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: .97 }}
              className="w-full max-w-lg rounded-[8px] border border-navy/10 bg-ivory p-6 shadow-soft dark:border-white/15 dark:bg-[#242D39]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-gold">{modalItem.number}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-navy dark:text-ivory">{modalItem.title}</h3>
                </div>
                <button className="grid size-10 shrink-0 place-items-center rounded-full border border-navy/10 dark:border-white/15" onClick={() => setModalItem(null)} aria-label={t.close}>
                  <X size={18} />
                </button>
              </div>
              <p className="mt-6 text-lg leading-8 text-ink/70 dark:text-ivory/70">{modalItem[lang]}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SectionHead({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-9 grid gap-2 sm:grid-cols-[72px_1fr] sm:items-baseline">
      <span className="text-xs font-black uppercase tracking-[.18em] text-gold">{number}</span>
      <h2 className="font-serif text-4xl leading-tight text-navy dark:text-ivory sm:text-6xl">{title}</h2>
    </div>
  );
}

function WorkColumn({
  title,
  items,
  lang,
  learnMore,
  modalLabel,
  openCard,
  setOpenCard,
  setModalItem
}: {
  title: string;
  items: typeof selectedWorks;
  lang: Lang;
  learnMore: string;
  modalLabel: string;
  openCard: string | null;
  setOpenCard: (value: string | null) => void;
  setModalItem: (value: (typeof selectedWorks)[number]) => void;
}) {
  return (
    <div className="rounded-[8px] border border-navy/10 bg-white/45 p-5 shadow-soft dark:border-white/15 dark:bg-white/5 sm:p-7">
      <h3 className="font-serif text-3xl text-navy dark:text-ivory">{title}</h3>
      <div className="mt-6 grid gap-3">
        {items.map((item) => {
          const isOpen = openCard === item.title;
          return (
            <article key={item.title} className="rounded-[8px] border border-navy/10 bg-ivory/70 p-5 dark:border-white/15 dark:bg-white/5">
              <p className="text-xs font-black uppercase tracking-[.15em] text-gold">{item.number}</p>
              <h4 className="mt-3 text-xl font-bold leading-snug text-navy dark:text-ivory">{item.title}</h4>
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden leading-7 text-ink/70 dark:text-ivory/70"
                  >
                    {item[lang]}
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  className="rounded-full bg-navy px-4 py-2 text-sm font-black text-ivory dark:bg-ivory dark:text-navy"
                  onClick={() => setOpenCard(isOpen ? null : item.title)}
                  aria-expanded={isOpen}
                >
                  {learnMore}
                </button>
                <button
                  className="rounded-full border border-navy/10 px-4 py-2 text-sm font-black text-navy dark:border-white/15 dark:text-ivory"
                  onClick={() => setModalItem(item)}
                >
                  {modalLabel}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a className="underline decoration-transparent underline-offset-4 transition hover:text-gold hover:decoration-current" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {value}
    </a>
  ) : (
    <strong>{value}</strong>
  );

  return (
    <p className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-5">
      <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-gold">
        {icon}
        {label}
      </span>
      <span className="text-xl font-bold text-navy dark:text-ivory sm:text-2xl">{content}</span>
    </p>
  );
}
