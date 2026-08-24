'use client'

import { useState } from 'react'

/* ---------------------------------------------------------
   Content — transcribed from Figma
   "SENA — Landing / Dark (Charcoal)" · node 707:1140
   --------------------------------------------------------- */

const NAV = [
  { label: 'სერვისები', href: '#services', current: true },
  { label: 'ჩვენს შესახებ', href: '#about', current: false },
  { label: 'პარტნიორები', href: '#partners', current: false },
  { label: 'კითხვები', href: '#faq', current: false },
  { label: 'კონტაქტი', href: '#contact', current: false },
]

const HERO_ACTIONS = [
  'თავჯდომარის ოთახო',
  'თქვენი სადარბაზო',
  'კორპუსის რეგისტრაცია',
  'როგორ მუშაობს',
]

const FEATURES = [
  {
    title: 'ღია ჩატი',
    body: 'დაელაპარაკეთ მთელ კორპუსს, ერთ სართულს ან მხოლოდ თქვენს სადარბაზოს.',
  },
  {
    title: 'კენჭისყრა',
    body: 'გადაწყვიტეთ ერთად — გადაღებეთ სადარბაზო, აირჩიეთ კონტრაქტორი, გაინაწილეთ ხარჯი.',
  },
  {
    title: 'საფულე',
    body: 'შეაგროვეთ საერთო ხარჯები და გადასახადები — ცხრილების და ნაღდი კონვერტის გარეშე.',
  },
  {
    title: 'შეტყობინებები',
    body: 'განცხადებები, რომლებიც ყველას მიაწვდება — ლიფტში ქაღალდის გარეშე. მომენტალური განახლება: მმართველ კომპანიას ან ამხანაგობას შეუძლია დისტანციურად, წამებში გაავრცელოს ინფორმაცია (წყლის შეწყვეტა, ლიფტის გათიშვა, კრების თარიღი).',
  },
  {
    title: 'ღონისძიებების დაგეგმვა',
    body: 'დაგეგმეთ ეზოს ბარბექიუ ან საახალწლო წვეულება ხუთ წუთში.',
  },
]

const PILLARS = [
  {
    title: 'საკითხების მართვა',
    body: 'გაფუჭებული ლიფტი, გაუმართავი განათება, დაზიანებული სახურავი — მობინადრე ხსნის თიქეთს აპლიკაციიდან, თავმჯდომარე ხედავს, ხელოსანი ასრულებს.',
  },
  {
    title: 'ონლაინ კენჭისყრა',
    body: 'ბიუჯეტი, ტარიფი, სარემონტო სამუშაოები — გადაწყვეტილება მიიღება კენჭისყრით, სადარბაზოში კრების მოწვევის გარეშე.',
  },
  {
    title: 'სამეზობლო',
    body: 'განცხადებები, დაკარგული ნივთები, დისკუსიები და ურთიერთდახმარება — თემი, რომელიც კორპუსს სახლად აქცევს.',
  },
]

const SERVICES = [
  {
    num: '01',
    title: 'ავტომატური ბილინგი',
    body: 'ყოველთვიური საწევრო ავტომატურად ერიცხება ბინებს, გადახდა ერთი შეხებით.',
  },
  {
    num: '02',
    title: 'გამჭვირვალე ფინანსები',
    body: 'ყოველი ხარჯი ქვითრით — ბალანსი ხელმისაწვდომია ყველა მობინადრისთვის.',
  },
  {
    num: '03',
    title: 'სამეზობლოს ჩატი',
    body: 'ერთი ღილაკი კრიტიკულ სიტუაციაში — შეტყობინება მყისვე მიდის თავმჯდომარესთან.',
  },
  {
    num: '04',
    title: 'დავების მართვა',
    body: 'დავალიანების გადანაწილება, შემცირება ან განვადება — ოპერატორის მონაწილეობით.',
  },
]

const STATS = [
  { value: '24/7', label: 'სისტემა ხელმისაწვდომია' },
  { value: 'TLS 1.3', label: 'დაშიფრული კავშირი' },
  { value: '100%', label: 'ხარჯი ქვითრით' },
  { value: '2', label: 'ენა — ქართული და ინგლისური' },
]

const PARTNERS = [168, 199, 209, 195, 168, 131, 211, 176]

const FAQ_TABS = ['ყველა', 'ფინანსები', 'უსაფრთხოება', 'აპლიკაცია']

/* NOTE: only the first answer exists in the Figma frame. The rest carry a
   placeholder so the accordion stays usable — swap in real copy before launch. */
const FAQ_PLACEHOLDER = 'პასუხის ტექსტი მზადდება.'

const FAQ = [
  {
    q: 'როგორ ხდება ყოველთვიური საწევროს გადახდა?',
    a: 'ყოველთვიური საწევროს გადახდა შეგიძლიათ პირდაპირ აპლიკაციიდან — მთავარ ეკრანზე იხილავთ თქვენს დავალიანებას და გადახდის ვადას, ხოლო ღილაკით „გადახდა" თანხას ერთი შეხებით ჩარიცხავთ მიბმული ბარათიდან. ალტერნატიულად, გადახდა შესაძლებელია ინტერნეტ ბანკიდან ან Paybox-იდან თქვენი უნიკალური 10-ნიშნა კოდის მითითებით. თუ საწევროზე მეტ თანხას ჩარიცხავთ, სხვაობა დარჩება თქვენს ბალანსზე და ავტომატურად გამოიქვითება მომდევნო თვეს.',
  },
  { q: 'ვინ ხედავს კორპუსის ფინანსებს?', a: FAQ_PLACEHOLDER },
  { q: 'რა ხდება, თუ მობინადრეს დავალიანება დაუგროვდა?', a: FAQ_PLACEHOLDER },
  { q: 'რამდენად დაცულია ჩემი მონაცემები?', a: FAQ_PLACEHOLDER },
  { q: 'შემიძლია თუ არა ჩემი მონაცემების წაშლა?', a: FAQ_PLACEHOLDER },
  { q: 'ვინ პასუხობს, თუ თავმჯდომარე შეიცვალა?', a: FAQ_PLACEHOLDER },
  { q: 'როგორ ვიპოვო ჩემი კორპუსი აპლიკაციაში?', a: FAQ_PLACEHOLDER },
  { q: 'რა ხდება, თუ ბინა გავქირავე?', a: FAQ_PLACEHOLDER },
  { q: 'აპლიკაცია ფასიანია?', a: FAQ_PLACEHOLDER },
]

const SOCIALS = [
  { src: '/img/social-1.svg', label: 'Facebook' },
  { src: '/img/social-2.svg', label: 'Instagram' },
  { src: '/img/social-3.svg', label: 'LinkedIn' },
  { src: '/img/social-youtube.svg', label: 'YouTube' },
]

/* --------------------------------------------------------- */

export default function Page() {
  const [lang, setLang] = useState<'ka' | 'en'>('ka')
  const [activeFeature, setActiveFeature] = useState(3)
  const [faqTab, setFaqTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* ================= 01 Header ================= */}
      <header className="header">
        <a className="logo" href="#top" aria-label="SENA">
          <img className="logo__mark" src="/img/header-mark.svg" alt="" />
          <span className="logo__word">
            <img src="/img/header-word-ka.svg" alt="" height={16} />
            <img src="/img/header-word-en.svg" alt="" height={16} />
            <img src="/img/header-rule.svg" alt="" height={4} />
          </span>
        </a>

        <nav className="nav" aria-label="მთავარი ნავიგაცია">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__tools">
          <div className="pill" role="group" aria-label="ენა">
            <button
              className="pill__opt"
              aria-pressed={lang === 'ka'}
              onClick={() => setLang('ka')}
            >
              ქარ
            </button>
            <button
              className="pill__opt"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              Eng
            </button>
          </div>
          <div className="pill" role="group" aria-label="თემა">
            <span className="swatch swatch--a" />
            <span className="swatch swatch--b" />
            <span className="swatch swatch--c" />
          </div>
        </div>
      </header>

      <main id="top">
        {/* ================= Hero ================= */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__logo">
              <img
                className="hero__mark"
                src="/img/hero-mark.svg"
                alt="SENA"
                width={152}
                height={206}
              />
              <img
                className="hero__wordmark"
                src="/img/hero-wordmark.svg"
                alt="სენა — Ubi concordia, ibi victoria"
                width={288}
                height={195}
              />
            </div>

            <div className="hero__actions">
              {HERO_ACTIONS.map((label) => (
                <a key={label} className="btn-ghost" href="#contact">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Coverflow — mobile app ================= */}
        <section className="coverflow section" id="app">
          <div className="coverflow__inner">
            <div className="coverflow__head">
              <p className="eyebrow">მობილური აპლიკაცია</p>
              <h2 className="t-display">კორპუსი — თქვენს ჯიბეში</h2>
              <p className="t-body">
                ბალანსი, გადახდები, კენჭისყრები, სამეზობლო ჩატი და გადაუდებელი
                დახმარება. ყველაფერი ერთ აპლიკაციაში, ქართულ ენაზე.
              </p>
            </div>

            <div className="coverflow__body">
              <div className="feature-list">
                {FEATURES.map((feature, i) => (
                  <button
                    key={feature.title}
                    className={`feature${i === activeFeature ? ' feature--active' : ''}`}
                    onClick={() => setActiveFeature(i)}
                  >
                    <span className="feature__text">
                      <span className="t-h3">{feature.title}</span>
                      <span className="t-body">{feature.body}</span>
                    </span>
                    <span className="feature__chevron" aria-hidden="true">
                      ›
                    </span>
                  </button>
                ))}
              </div>

              <div className="coverflow__stage">
                <img
                  src="/img/coverflow.png"
                  alt="SENA აპლიკაციის ეკრანები: მთავარი, ფინანსები და ჩატი"
                  width={677}
                  height={680}
                />
                <button
                  className="coverflow__nav coverflow__nav--prev"
                  aria-label="წინა ეკრანი"
                >
                  ‹
                </button>
                <button
                  className="coverflow__nav coverflow__nav--next"
                  aria-label="შემდეგი ეკრანი"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 03 Pillars ================= */}
        <section className="pillars section">
          <div className="pillars__inner">
            <div className="section__head">
              <p className="eyebrow">ᲔᲙᲝᲡᲘᲡᲢᲔᲛᲐ</p>
              <h2 className="t-display">სამი ბურჯი, რომელზეც დგას ამხანაგობა</h2>
            </div>
            <div className="pillars__row">
              {PILLARS.map((pillar) => (
                <article key={pillar.title} className="pillar">
                  <img
                    className="pillar__dot"
                    src="/img/pillar-dot.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                  <h3 className="t-h3">{pillar.title}</h3>
                  <p className="t-body">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 04 Services ================= */}
        <section className="services section" id="services">
          <div className="services__inner">
            <div className="section__head">
              <p className="eyebrow">ᲡᲔᲠᲕᲘᲡᲔᲑᲘ</p>
              <h2 className="t-display">ყველაფერი, რაც კორპუსს სჭირდება</h2>
            </div>

            {/* The Figma frame repeats 01–04 across two rows; the second row's
                third card is the illustrated variant. Kept as designed. */}
            <div className="services__grid">
              {[0, 1].map((row) =>
                SERVICES.map((service) => {
                  const illustrated = row === 1 && service.num === '03'
                  return (
                    <article
                      key={`${row}-${service.num}`}
                      className={`service${illustrated ? ' service--feature' : ''}`}
                    >
                      <div className="service__text">
                        <p className="service__num">{service.num}</p>
                        <h3 className="t-h3">{service.title}</h3>
                        <p className="t-small">{service.body}</p>
                      </div>
                      {illustrated && (
                        <img
                          className="service__shot"
                          src="/img/service-chat.png"
                          alt=""
                          width={110}
                          height={192}
                        />
                      )}
                    </article>
                  )
                })
              )}
            </div>
          </div>
        </section>

        {/* ================= 05 Stats ================= */}
        <section className="stats">
          {STATS.map((stat) => (
            <div key={stat.value} className="stat">
              <p className="stat__value">{stat.value}</p>
              <p className="t-small">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ================= 08 Partners ================= */}
        <section className="partners" id="partners">
          <div className="partners__head">
            <div className="section__head">
              <p className="eyebrow">ᲞᲐᲠᲢᲜᲘᲝᲠᲔᲑᲘ</p>
              <h2 className="t-display">ვისთან ერთად ვმუშაობთ</h2>
            </div>
            <a className="btn-ghost" href="#contact">
              გახდი პარტნიორი
            </a>
          </div>
          <div className="partners__row">
            {PARTNERS.map((width, i) => (
              <img
                key={i}
                className="partners__chip"
                src={`/img/partner-${i + 1}.png`}
                alt={`პარტნიორი ${i + 1}`}
                style={{ width }}
                height={66}
              />
            ))}
          </div>
        </section>

        {/* ================= Projects reel ================= */}
        <section className="reel">
          <p className="eyebrow reel__label">ᲞᲠᲝᲔᲥᲢᲔᲑᲘ</p>
          <div className="reel__track">
            <img src="/img/projects-track.png" alt="SENA-ს პროექტები" />
            <img src="/img/projects-track.png" alt="" aria-hidden="true" />
          </div>
        </section>

        {/* ================= 06 About ================= */}
        <section className="about section" id="about">
          <div className="about__inner">
            <div className="section__head">
              <p className="eyebrow">ᲩᲕᲔᲜᲡ ᲨᲔᲡᲐᲮᲔᲑ</p>
              <h2 className="t-display">ნდობა, რომელიც ციფრებით იწყება</h2>
            </div>

            <div className="about__body">
              <div className="about__story">
                <p className="t-body">
                  SENA დაიბადა მარტივი დაკვირვებით: ამხანაგობის ფინანსები ხშირად
                  ბუნდოვანი რჩება — ვინ რამდენი გადაიხადა, სად დაიხარჯა თანხა და
                  რატომ. სწორედ ეს ბუნდოვანება ანგრევს მეზობლებს შორის ნდობას.
                </p>
                <p className="t-body">
                  ჩვენ ავაშენეთ სისტემა, რომელიც ბალანსს, გადახდებს, კენჭისყრებს
                  და სამეზობლო კომუნიკაციას ერთ სივრცეში აერთიანებს — ბანკის
                  დონის უსაფრთხოებით, სრული გამჭვირვალობითა და ქართულ ენაზე.
                </p>
                <a className="about__more t-body-strong" href="#contact">
                  იხილეთ მეტი
                </a>
              </div>

              <aside className="about__mission">
                <p className="eyebrow">ᲩᲕᲔᲜᲘ ᲛᲘᲡᲘᲐ</p>
                <p className="t-lead" style={{ color: 'var(--text-ink)' }}>
                  გვინდა, ყოველ ამხანაგობას ჰქონდეს ისეთივე გამჭვირვალე და
                  მოქნილი ფინანსური სისტემა, როგორიც თანამედროვე კომპანიას —
                  ბიუროკრატიისა და ეჭვების გარეშე.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ================= 09 FAQ ================= */}
        <section className="faq section" id="faq">
          <div className="faq__inner">
            <div className="section__head">
              <p className="eyebrow">ᲮᲨᲘᲠᲐᲓ ᲓᲐᲡᲛᲣᲚᲘ ᲙᲘᲗᲮᲕᲔᲑᲘ</p>
              <h2 className="t-display">პასუხები, სანამ იკითხავთ</h2>
            </div>

            <div className="faq__tabs" role="group" aria-label="კითხვების ფილტრი">
              {FAQ_TABS.map((tab, i) => (
                <button
                  key={tab}
                  className="tab"
                  aria-pressed={i === faqTab}
                  onClick={() => setFaqTab(i)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="faq__list">
              {FAQ.map((item, i) => {
                const open = openFaq === i
                return (
                  <div
                    key={item.q}
                    className={`faq__row${open ? ' faq__row--open' : ''}`}
                  >
                    <button
                      className="faq__q"
                      aria-expanded={open}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className="faq__sign" aria-hidden="true">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && (
                      <p className="faq__a" id={`faq-a-${i}`}>
                        {item.a}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= Lead form ================= */}
        <section className="lead section" id="contact">
          <div className="lead__head">
            <p className="eyebrow">ᲓᲐᲬᲧᲔᲑᲐ</p>
            <h2 className="t-display">დაგვიკავშირდით</h2>
            <p className="t-body">
              დატოვეთ საკონტაქტო ინფორმაცია — ჩვენი ოპერატორი დაგიკავშირდებათ და
              კორპუსს სისტემაში ჩართავს.
            </p>
          </div>

          <form
            className="lead__panel"
            onSubmit={(e) => {
              e.preventDefault()
              /* TODO: wire to the real lead endpoint */
            }}
          >
            <div className="lead__row">
              <label className="field field--name">
                <span className="sr-only" hidden>
                  სახელი და გვარი
                </span>
                <input name="name" placeholder="სახელი და გვარი" required />
              </label>
              <label className="field">
                <span className="sr-only" hidden>
                  ტელეფონი
                </span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="ტელეფონი"
                  required
                />
              </label>
            </div>

            <label className="field">
              <span className="sr-only" hidden>
                ელ-ფოსტა
              </span>
              <input name="email" type="email" placeholder="ელ-ფოსტა" required />
            </label>

            <label className="field">
              <span className="sr-only" hidden>
                კომენტარი
              </span>
              <textarea name="message" placeholder="კომენტარი" rows={4} />
            </label>

            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>
                ვეთანხმები მოხმარების წესებს და კონფიდენციალურობის პოლიტიკას.
              </span>
            </label>

            <button className="btn-gold lead__submit" type="submit">
              განაცხადის გაგზავნა
            </button>
          </form>
        </section>

        {/* ================= 11 CTA band ================= */}
        <section className="cta">
          <img className="cta__bg" src="/img/cta-bg.svg" alt="" />
          <h2 className="t-display">დაარეგისტრირეთ თქვენი კორპუსი</h2>
          <p className="t-body cta__sub">
            თავისუფალია. ჩვენი ოპერატორი დაგიკავშირდებათ და კორპუსს სისტემაში
            ჩართავს ერთ კვირაში.
          </p>
          <a className="btn-gold" href="#contact">
            კორპუსის რეგისტრაცია
          </a>
        </section>
      </main>

      {/* ================= 12 Footer ================= */}
      <footer className="footer section">
        <div className="footer__inner">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__lockup">
                <img src="/img/footer-mark.svg" alt="" width={72} height={97} />
                <span className="footer__word">
                  <img src="/img/footer-word-ka.svg" alt="SENA" />
                  <img src="/img/footer-word-en.svg" alt="" />
                </span>
              </div>
              <p className="t-small">
                ამხანაგობის ციფრული სისტემა — ფინანსები, გადაწყვეტილებები და
                სამეზობლო ერთ ადგილას.
              </p>
            </div>

            <div className="footer__col">
              <h3>ნავიგაცია</h3>
              <a href="#services">სერვისები</a>
              <a href="#about">ჩვენს შესახებ</a>
              <a href="#partners">პარტნიორები</a>
              <a href="#faq">კითხვები</a>
              <a href="#contact">რეგისტრაცია</a>
            </div>

            <div className="footer__col">
              <h3>კონტაქტი</h3>
              <p>თბილისი, საქართველო</p>
              <p>+995 (0) 00 00 00 00</p>
              <a href="mailto:info@senagroup.ge">info@senagroup.ge</a>
            </div>

            <div className="footer__col">
              <h3>აპლიკაცია</h3>
              <a className="badge" href="#app">
                <img src="/img/store-appstore.svg" alt="" />
                <span className="t-small">ჩამოტვირთეთ App Store</span>
              </a>
              <a className="badge" href="#app">
                <img src="/img/store-googleplay.svg" alt="" />
                <span className="t-small">ჩამოტვირთეთ Google Play</span>
              </a>
              <div className="socials">
                {SOCIALS.map((social) => (
                  <a key={social.label} href="#" aria-label={social.label}>
                    <img src={social.src} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer__rule" />

          <div className="footer__bottom">
            <p>© 2026 SENA. ყველა უფლება დაცულია.</p>
            <div className="footer__legal">
              <a href="#">მოხმარების წესები</a>
              <a href="#">კონფიდენციალურობის პოლიტიკა</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
