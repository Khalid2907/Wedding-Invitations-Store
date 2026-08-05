import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const F = "#0d1a0d";
const GOLD = "#c8a55a";
const CREAM = "#f0ebe0";
const LIGHT = "#d8d0bc";
const MUTED = "rgba(240,235,224,0.55)";
const BORDER = "rgba(200,165,90,0.18)";
const WEDDING_DATE = new Date("2026-10-03T17:30:00");

const GALLERY = [
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop&auto=format", caption: "Where it all began" },
  { url: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=1200&h=800&fit=crop&auto=format", caption: "A moment to remember" },
  { url: "https://images.unsplash.com/photo-1606216794079-73f7fbd92e68?w=1200&h=800&fit=crop&auto=format", caption: "Our journey together" },
  { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop&auto=format", caption: "Forever starts here" },
];

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return { d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);
  useEffect(() => { const fn = () => setW(window.innerWidth); window.addEventListener("resize", fn); return () => window.removeEventListener("resize", fn); }, []);
  return w;
}

const z2 = (n: number) => String(n).padStart(2, "0");

function BotanicalRule({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg width="200" height="44" viewBox="0 0 200 44" fill="none" style={{ display: "block", margin: "0 auto", opacity }}>
      <line x1="0" y1="22" x2="68" y2="22" stroke={GOLD} strokeWidth="0.5" />
      <line x1="132" y1="22" x2="200" y2="22" stroke={GOLD} strokeWidth="0.5" />
      <path d="M68 22 Q76 10 86 14 Q80 22 68 22Z" fill={GOLD} opacity="0.65" />
      <path d="M68 22 Q76 34 86 30 Q80 22 68 22Z" fill={GOLD} opacity="0.4" />
      <path d="M132 22 Q124 10 114 14 Q120 22 132 22Z" fill={GOLD} opacity="0.65" />
      <path d="M132 22 Q124 34 114 30 Q120 22 132 22Z" fill={GOLD} opacity="0.4" />
      <line x1="86" y1="22" x2="94" y2="22" stroke={GOLD} strokeWidth="0.5" />
      <line x1="114" y1="22" x2="106" y2="22" stroke={GOLD} strokeWidth="0.5" />
      <rect x="96" y="18" width="8" height="8" transform="rotate(45 100 22)" fill={GOLD} opacity="0.9" />
    </svg>
  );
}

function CB({ style, flip }: { style?: React.CSSProperties; flip?: "x" | "y" | "both" }) {
  const sx = flip === "x" || flip === "both" ? -1 : 1;
  const sy = flip === "y" || flip === "both" ? -1 : 1;
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: "absolute", transform: `scale(${sx},${sy})`, ...style }}>
      <path d="M4 4 L4 20" stroke={GOLD} strokeWidth="0.8" opacity="0.55" />
      <path d="M4 4 L20 4" stroke={GOLD} strokeWidth="0.8" opacity="0.55" />
      <circle cx="4" cy="4" r="1.5" fill={GOLD} opacity="0.7" />
    </svg>
  );
}

function Monogram() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
      <circle cx="44" cy="44" r="42" stroke={GOLD} strokeWidth="0.6" opacity="0.35" />
      <circle cx="44" cy="44" r="36" stroke={GOLD} strokeWidth="0.4" opacity="0.2" />
      <text x="44" y="54" textAnchor="middle" fontFamily="'Cormorant', serif" fontSize="30" fill={GOLD} opacity="0.9" fontStyle="italic" fontWeight="300">L&amp;K</text>
    </svg>
  );
}

// Centered max-width wrapper for text sections
function W({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px", ...style }}>
      {children}
    </div>
  );
}

export default function App() {
  const [gateOpen, setGateOpen] = useState(false);
  const [gateGone, setGateGone] = useState(false);
  const [slide, setSlide] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const { d, h, m, s } = useCountdown(WEDDING_DATE);
  const ww = useWindowWidth();
  const D = ww >= 1024; // isDesktop

  const openGate = () => { setGateOpen(true); setTimeout(() => setGateGone(true), 1400); };
  const prev = useCallback(() => setSlide((p) => (p - 1 + GALLERY.length) % GALLERY.length), []);
  const next = useCallback(() => setSlide((p) => (p + 1) % GALLERY.length), []);

  useEffect(() => {
    if (!gateGone) return;
    const els = mainRef.current?.querySelectorAll<HTMLElement>("[data-r]") ?? [];
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).style.opacity = "1";
        (e.target as HTMLElement).style.transform = "translateY(0)";
      }
    }), { threshold: 0.08 });
    els.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(28px)"; el.style.transition = "opacity 0.9s ease, transform 0.9s ease"; obs.observe(el); });
    return () => obs.disconnect();
  }, [gateGone]);

  const SliderArrows = () => (
    <>
      {([{ s: "left" as const, a: prev, i: <ChevronLeft size={18} /> }, { s: "right" as const, a: next, i: <ChevronRight size={18} /> }]).map(({ s, a, i }) => (
        <button key={s} onClick={a}
          style={{ position: "absolute", [s]: 16, top: "50%", transform: "translateY(-60%)", background: "rgba(13,26,13,0.75)", border: `1px solid rgba(200,165,90,0.35)`, color: GOLD, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)", transition: "background 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,165,90,0.15)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(13,26,13,0.75)")}
        >{i}</button>
      ))}
    </>
  );

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: F, minHeight: "100vh" }}>

      {/* ══ GATE ══ */}
      {!gateGone && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, pointerEvents: gateOpen ? "none" : "auto" }}>
          <div style={{ position: "absolute", inset: "0 50% 0 0", background: F, borderRight: `1px solid ${BORDER}`, transition: "transform 1.3s cubic-bezier(0.76,0,0.24,1)", transform: gateOpen ? "translateX(-100%)" : "translateX(0)", overflow: "hidden" }}>
            <CB style={{ top: 20, left: 20 }} /><CB style={{ bottom: 20, left: 20 }} flip="y" />
          </div>
          <div style={{ position: "absolute", inset: "0 0 0 50%", background: F, borderLeft: `1px solid ${BORDER}`, transition: "transform 1.3s cubic-bezier(0.76,0,0.24,1)", transform: gateOpen ? "translateX(100%)" : "translateX(0)", overflow: "hidden" }}>
            <CB style={{ top: 20, right: 20 }} flip="x" /><CB style={{ bottom: 20, right: 20 }} flip="both" />
          </div>
          {!gateOpen && (
            <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
              <div style={{ position: "relative", border: `1px solid rgba(200,165,90,0.28)`, padding: D ? "64px 72px 56px" : "52px 44px 44px", textAlign: "center", maxWidth: D ? 480 : 340, width: "100%" }}>
                <CB style={{ top: -1, left: -1 }} /><CB style={{ top: -1, right: -1 }} flip="x" />
                <CB style={{ bottom: -1, left: -1 }} flip="y" /><CB style={{ bottom: -1, right: -1 }} flip="both" />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.6, marginBottom: 24 }}>YOU ARE CORDIALLY INVITED TO</p>
                <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 72 : 56, color: CREAM, lineHeight: 1, fontWeight: 300, margin: "0 0 2px" }}>Layla</h1>
                <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 28 : 22, color: GOLD, fontStyle: "italic", margin: "6px 0", fontWeight: 300 }}>&amp;</p>
                <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 72 : 56, color: CREAM, lineHeight: 1, fontWeight: 300, margin: "0 0 28px" }}>Karim</h1>
                <BotanicalRule />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: LIGHT, letterSpacing: 3.5, margin: "20px 0 32px", opacity: 0.65 }}>3 · OCTOBER · 2026</p>
                <button onClick={openGate}
                  style={{ background: "transparent", border: `1px solid rgba(200,165,90,0.6)`, color: GOLD, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: 4.5, padding: "13px 36px", cursor: "pointer", transition: "all 0.35s ease", width: "100%" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = F; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
                >OPEN INVITATION</button>
              </div>
              <div style={{ marginTop: 32 }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 4, color: GOLD, opacity: 0.3, animation: "pulse 2s ease-in-out infinite" }}>↓ &nbsp; SCROLL DOWN &nbsp; ↓</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ══ MAIN CONTENT ══ */}
      <div ref={mainRef} style={{ width: "100%", background: F, overflowX: "hidden" }}>

        {/* HERO — full bleed */}
        <section style={{ position: "relative", height: "100vh", minHeight: D ? 760 : 640 }}>
          <img
            src="https://images.unsplash.com/photo-1510737542136-6a0bdc72ecb8?w=1800&h=1200&fit=crop&auto=format&q=85"
            alt="Layla and Karim in the garden at dusk"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,26,13,1) 0%, rgba(13,26,13,0.45) 45%, rgba(13,26,13,0.1) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: D ? "0 0 80px" : "0 40px 64px", textAlign: "center" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.65, marginBottom: 18 }}>WE ARE GETTING MARRIED</p>
            <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 112 : 68, color: CREAM, lineHeight: 1, fontWeight: 300, margin: "0 0 20px" }}>Layla &amp; Karim</h1>
            <BotanicalRule />
            <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 26 : 20, color: LIGHT, letterSpacing: 4, marginTop: 18, fontStyle: "italic", fontWeight: 300 }}>An Evening in the Garden</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: GOLD, letterSpacing: 4, marginTop: 10, opacity: 0.7 }}>3 · OCTOBER · 2026</p>
          </div>
        </section>

        {/* OPENING QUOTE */}
        <section data-r style={{ borderBottom: `1px solid ${BORDER}`, padding: D ? "96px 0" : "72px 44px" }}>
          <W>
            <div style={{ textAlign: "center" }}>
              <BotanicalRule />
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 38 : 28, color: CREAM, lineHeight: 1.55, fontStyle: "italic", fontWeight: 300, margin: "32px auto", maxWidth: D ? 860 : 340 }}>
                "A night among the roses, the stars, and the ones we love most."
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, color: GOLD, letterSpacing: 3.5, opacity: 0.55 }}>VILLA ROSA GARDEN · BEIRUT, LEBANON</p>
            </div>
          </W>
        </section>

        {/* COUNTDOWN */}
        <section data-r style={{ background: "rgba(200,165,90,0.05)", borderBottom: `1px solid ${BORDER}`, padding: D ? "80px 0" : "64px 32px" }}>
          <W>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 36 }}>COUNTING DOWN TO OUR DAY</p>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                {[{ val: z2(d), label: "DAYS" }, null, { val: z2(h), label: "HOURS" }, null, { val: z2(m), label: "MINS" }, null, { val: z2(s), label: "SECS" }].map((item, i) =>
                  item === null ? (
                    <span key={i} style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 88 : 52, color: GOLD, opacity: 0.25, lineHeight: 1, padding: D ? "0 16px 32px" : "0 6px 22px" }}>·</span>
                  ) : (
                    <div key={i} style={{ textAlign: "center", minWidth: D ? 140 : 72 }}>
                      <div style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 96 : 56, color: CREAM, lineHeight: 1, fontWeight: 300 }}>{item.val}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 8, color: GOLD, letterSpacing: 2.5, marginTop: 10, opacity: 0.55 }}>{item.label}</div>
                    </div>
                  )
                )}
              </div>
              <svg width="100" height="52" viewBox="0 0 100 52" fill="none" style={{ margin: "40px auto 0", display: "block", opacity: 0.25 }}>
                <line x1="50" y1="48" x2="50" y2="8" stroke={GOLD} strokeWidth="0.8" />
                <path d="M50 32 Q40 22 32 24 Q40 30 50 32Z" fill={GOLD} /><path d="M50 32 Q60 22 68 24 Q60 30 50 32Z" fill={GOLD} />
                <path d="M50 20 Q42 12 36 16 Q42 18 50 20Z" fill={GOLD} /><path d="M50 20 Q58 12 64 16 Q58 18 50 20Z" fill={GOLD} />
                <circle cx="50" cy="6" r="3" fill={GOLD} />
                <line x1="18" y1="48" x2="18" y2="24" stroke={GOLD} strokeWidth="0.6" />
                <path d="M18 36 Q10 30 6 32 Q12 36 18 36Z" fill={GOLD} opacity="0.7" /><path d="M18 36 Q26 30 30 32 Q24 36 18 36Z" fill={GOLD} opacity="0.7" />
                <line x1="82" y1="48" x2="82" y2="24" stroke={GOLD} strokeWidth="0.6" />
                <path d="M82 36 Q74 30 70 32 Q76 36 82 36Z" fill={GOLD} opacity="0.7" /><path d="M82 36 Q90 30 94 32 Q88 36 82 36Z" fill={GOLD} opacity="0.7" />
              </svg>
            </div>
          </W>
        </section>

        {/* WELCOME NOTE */}
        <section data-r style={{ padding: D ? "96px 0" : "72px 44px" }}>
          <W>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 20 }}>A NOTE TO YOU</p>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 52 : 34, color: CREAM, fontWeight: 300, marginBottom: 24 }}>Welcome, dear guest</h2>
              <BotanicalRule />
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: D ? 15 : 13, color: MUTED, lineHeight: 2.1, maxWidth: D ? 720 : 360, margin: "28px auto 0", fontWeight: 300 }}>
                As the October light falls gold through the roses and the garden fills with the warmth of lanterns and laughter, we wish for nothing more than to share this evening with the people who have shaped our story.
              </p>
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 30 : 24, color: GOLD, fontStyle: "italic", marginTop: 32, fontWeight: 300 }}>— Layla &amp; Karim</p>
              <svg width="28" height="52" viewBox="0 0 28 52" fill="none" stroke={GOLD} strokeWidth="0.9" opacity="0.28" style={{ margin: "32px auto 0", display: "block" }}>
                <path d="M6 4 L22 4 L18 24 Q14 30 10 24 Z" /><line x1="14" y1="24" x2="14" y2="42" /><line x1="8" y1="42" x2="20" y2="42" />
                <circle cx="12" cy="16" r="1" /><circle cx="16" cy="12" r="0.8" /><circle cx="14" cy="20" r="0.6" />
              </svg>
            </div>
          </W>
        </section>

        {/* GALLERY — full bleed */}
        <section data-r style={{ borderTop: `1px solid ${BORDER}` }}>
          {D ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ position: "relative", overflow: "hidden", height: 640 }}>
                <div style={{ display: "flex", height: "100%", transition: "transform 0.75s cubic-bezier(0.76,0,0.24,1)", transform: `translateX(-${slide * 100}%)` }}>
                  {GALLERY.map((p, i) => (
                    <div key={i} style={{ minWidth: "100%", position: "relative", height: 640 }}>
                      <img src={p.url} alt={p.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "80px 32px 48px", background: "linear-gradient(to top, rgba(13,26,13,0.92) 0%, transparent 100%)", textAlign: "center" }}>
                        <p style={{ fontFamily: "'Cormorant', serif", fontSize: 22, color: CREAM, fontStyle: "italic", fontWeight: 300 }}>{p.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <SliderArrows />
                <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8 }}>
                  {GALLERY.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 28 : 6, height: 6, borderRadius: 3, background: i === slide ? GOLD : "rgba(200,165,90,0.25)", border: "none", cursor: "pointer", transition: "all 0.35s ease", padding: 0 }} />
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 72px", borderLeft: `1px solid ${BORDER}` }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 20 }}>OUR STORY</p>
                <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: 52, color: CREAM, fontWeight: 300, marginBottom: 28, lineHeight: 1.1 }}>Our Moments</h2>
                <BotanicalRule />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: MUTED, lineHeight: 2.1, fontWeight: 300, marginTop: 28 }}>
                  Every photograph is a chapter of a story written in laughter, in stolen glances, and in the quiet certainty of knowing you have found your person. These are the moments that led us here.
                </p>
                <p style={{ fontFamily: "'Cormorant', serif", fontSize: 22, color: GOLD, fontStyle: "italic", marginTop: 36, fontWeight: 300 }}>{GALLERY[slide].caption}</p>
              </div>
            </div>
          ) : (
            <>
              <div style={{ padding: "56px 0 32px", textAlign: "center" }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 12 }}>OUR STORY</p>
                <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: 34, color: CREAM, fontWeight: 300 }}>Our Moments</h2>
              </div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ display: "flex", transition: "transform 0.75s cubic-bezier(0.76,0,0.24,1)", transform: `translateX(-${slide * 100}%)` }}>
                  {GALLERY.map((p, i) => (
                    <div key={i} style={{ minWidth: "100%", position: "relative" }}>
                      <img src={p.url} alt={p.caption} style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "80px 32px 28px", background: "linear-gradient(to top, rgba(13,26,13,0.92) 0%, transparent 100%)", textAlign: "center" }}>
                        <p style={{ fontFamily: "'Cormorant', serif", fontSize: 20, color: CREAM, fontStyle: "italic", fontWeight: 300 }}>{p.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <SliderArrows />
                <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 0 28px" }}>
                  {GALLERY.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 28 : 6, height: 6, borderRadius: 3, background: i === slide ? GOLD : "rgba(200,165,90,0.25)", border: "none", cursor: "pointer", transition: "all 0.35s ease", padding: 0 }} />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        {/* SAVE THE DATE — full bleed */}
        <section data-r style={{ position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1800&h=700&fit=crop&auto=format&q=80" alt="A garden evening" style={{ width: "100%", height: D ? 500 : 320, objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,26,13,0.7) 0%, rgba(13,26,13,0.3) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", border: `1px solid rgba(200,165,90,0.3)`, padding: D ? "48px 80px" : "32px 44px", position: "relative" }}>
              <CB style={{ top: -1, left: -1 }} /><CB style={{ top: -1, right: -1 }} flip="x" />
              <CB style={{ bottom: -1, left: -1 }} flip="y" /><CB style={{ bottom: -1, right: -1 }} flip="both" />
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.6, marginBottom: 10 }}>SAVE THE DATE</p>
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 56 : 36, color: CREAM, fontWeight: 300, letterSpacing: 2 }}>3 October 2026</p>
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 22 : 16, color: GOLD, fontStyle: "italic", marginTop: 6, opacity: 0.8 }}>Villa Rosa Garden, Beirut</p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section data-r style={{ borderTop: `1px solid ${BORDER}`, padding: D ? "96px 0 80px" : "72px 40px 56px" }}>
          <W>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 12 }}>ORDER OF THE EVENING</p>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 52 : 34, color: CREAM, fontWeight: 300, marginBottom: 24 }}>The Garden Journey</h2>
              <BotanicalRule />
            </div>
            <div style={{ display: D ? "grid" : "block", gridTemplateColumns: D ? "1fr 1fr" : undefined, gap: D ? "0 80px" : undefined, position: "relative" }}>
              {!D && <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, ${BORDER} 10%, ${BORDER} 90%, transparent)` }} />}
              {[
                { time: "3:30 PM", title: "Arrival & Welcome Drinks", desc: "Valet parking, garden cocktails, and floral installations as you stroll the grounds." },
                { time: "4:30 PM", title: "Garden Ceremony", desc: "An intimate ceremony beneath the ancient oak, surrounded by roses and soft candlelight." },
                { time: "6:00 PM", title: "Golden Hour on the Terrace", desc: "Champagne and canapés as the last light falls through the garden in amber and rose." },
                { time: "7:30 PM", title: "Candlelit Dinner & Live Strings", desc: "A long-table feast with seasonal cuisine, live music, and toasts to new beginnings." },
                { time: "11:00 PM", title: "Dancing & Sparkler Farewell", desc: "A sparkling sendoff as we close the garden gates on this golden night forever." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: D ? 28 : 24, marginBottom: D ? 48 : (i < 4 ? 40 : 0), alignItems: "flex-start" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: F, border: `1px solid rgba(200,165,90,0.5)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, opacity: 0.8 }} />
                  </div>
                  <div style={{ paddingTop: 5 }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, color: GOLD, letterSpacing: 3, marginBottom: 6, opacity: 0.75 }}>{item.time}</p>
                    <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 26 : 21, color: CREAM, fontWeight: 400, marginBottom: 6, lineHeight: 1.2 }}>{item.title}</p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: D ? 13.5 : 12.5, color: MUTED, lineHeight: 1.75, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* VENUE */}
        <section data-r>
          {D ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ position: "relative", overflow: "hidden", minHeight: 520 }}>
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=700&fit=crop&auto=format&q=85" alt="Villa Rosa Garden venue" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(13,26,13,0.5) 100%)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 72px", background: "rgba(200,165,90,0.04)", borderLeft: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 16 }}>THE VENUE</p>
                <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: 52, color: CREAM, fontWeight: 300, marginBottom: 20, lineHeight: 1.1 }}>Villa Rosa Garden</h2>
                <BotanicalRule />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: MUTED, lineHeight: 1.9, margin: "20px 0 32px", fontWeight: 300 }}>12 Garden Lane, Blossom Hill<br />Beirut, Lebanon</p>
                <div>
                  <a href="#"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 32px", border: `1px solid rgba(200,165,90,0.45)`, color: GOLD, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: 3.5, textDecoration: "none", transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(200,165,90,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,165,90,0.7)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,165,90,0.45)"; }}
                  ><MapPin size={13} />VIEW ON MAP</a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div style={{ position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=680&h=400&fit=crop&auto=format&q=85" alt="Villa Rosa Garden venue" style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,26,13,0.98) 0%, rgba(13,26,13,0.15) 60%)" }} />
              </div>
              <div style={{ padding: "52px 44px", textAlign: "center", background: "rgba(200,165,90,0.04)", borderBottom: `1px solid ${BORDER}` }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 16 }}>THE VENUE</p>
                <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: 36, color: CREAM, fontWeight: 300, marginBottom: 20 }}>Villa Rosa Garden</h2>
                <BotanicalRule />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: MUTED, lineHeight: 1.9, margin: "20px 0 32px", fontWeight: 300 }}>12 Garden Lane, Blossom Hill<br />Beirut, Lebanon</p>
                <a href="#"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 32px", border: `1px solid rgba(200,165,90,0.45)`, color: GOLD, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: 3.5, textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(200,165,90,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,165,90,0.7)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,165,90,0.45)"; }}
                ><MapPin size={13} />VIEW ON MAP</a>
              </div>
            </>
          )}
        </section>

        {/* GUIDELINES */}
        <section data-r style={{ padding: D ? "96px 0" : "72px 44px" }}>
          <W>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 5, color: GOLD, opacity: 0.55, marginBottom: 12 }}>A FEW NOTES FROM US</p>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 52 : 34, color: CREAM, fontWeight: 300, marginBottom: 24 }}>Things to Know</h2>
              <BotanicalRule />
            </div>
            <div style={{ display: D ? "grid" : "flex", gridTemplateColumns: D ? "1fr 1fr" : undefined, flexDirection: D ? undefined : "column" as const, gap: D ? "0 80px" : 0 }}>
              {[
                { title: "Dress Code", detail: "Garden formal. We adore florals, sage greens, dusty rose, and champagne tones. Please avoid wearing white or black." },
                { title: "Adults Only", detail: "This evening is an intimate celebration for adults. We appreciate your understanding and thank you for making arrangements." },
                { title: "Arrival", detail: "Doors open at 3:30 PM. Valet parking is available. Kindly be seated by 4:15 PM so the ceremony may begin on time." },
                { title: "RSVP by September 1st", detail: "Kindly confirm your attendance before 1 September 2026. Your presence at our table means everything to us." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px 0", borderBottom: `1px solid rgba(200,165,90,0.1)`, display: "grid", gridTemplateColumns: "16px 1fr", gap: "0 20px", alignItems: "flex-start" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, opacity: 0.5, marginTop: 10 }} />
                  <div>
                    <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 26 : 21, color: CREAM, fontWeight: 400, marginBottom: 8 }}>{item.title}</p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: D ? 13.5 : 12.5, color: MUTED, lineHeight: 1.8, fontWeight: 300 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* RSVP */}
        <section data-r style={{ padding: D ? "100px 0 120px" : "72px 44px 80px", textAlign: "center", background: "rgba(200,165,90,0.04)", borderTop: `1px solid ${BORDER}` }}>
          <W>
            <div style={{ marginBottom: 28 }}><Monogram /></div>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 60 : 36, color: CREAM, fontWeight: 300, marginBottom: 12 }}>Will you join us?</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: D ? 15 : 13, color: MUTED, lineHeight: 1.9, marginBottom: 36, fontWeight: 300 }}>
              Confirm your attendance before<br /><span style={{ color: GOLD, opacity: 0.9 }}>1 September 2026</span>
            </p>
            <a href="#"
              style={{ display: "inline-block", padding: D ? "18px 80px" : "15px 52px", background: GOLD, color: F, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: 4.5, textDecoration: "none", fontWeight: 500, transition: "opacity 0.3s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >CONFIRM ATTENDANCE</a>
          </W>
        </section>

        {/* CLOSING PHOTO — full bleed */}
        <section data-r style={{ position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1524824267900-2b6ed65f6ae3?w=1800&h=800&fit=crop&auto=format&q=85" alt="Layla and Karim at dusk" style={{ width: "100%", height: D ? 600 : 400, objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,26,13,0.96) 0%, rgba(13,26,13,0.15) 55%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: D ? "0 0 80px" : "0 40px 60px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 80 : 48, color: CREAM, fontWeight: 300, marginBottom: 10 }}>See you in the garden.</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, color: GOLD, letterSpacing: 4, opacity: 0.65 }}>WITH ALL OUR LOVE</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: `1px solid ${BORDER}`, padding: D ? "64px 0 56px" : "48px 40px 40px" }}>
          <W>
            <div style={{ textAlign: "center" }}>
              <BotanicalRule opacity={0.5} />
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: D ? 32 : 26, color: GOLD, letterSpacing: 6, margin: "24px 0 8px", fontStyle: "italic", fontWeight: 300 }}>L &amp; K</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 4, color: LIGHT, opacity: 0.35, marginBottom: 24 }}>3 · OCTOBER · 2026</p>
              <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
                {["✦", "♥", "✦"].map((sym, i) => <span key={i} style={{ color: GOLD, fontSize: 10, opacity: 0.35 }}>{sym}</span>)}
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: 2, color: LIGHT, opacity: 0.2, fontWeight: 300 }}>Villa Rosa Garden · Beirut, Lebanon</p>
            </div>
          </W>
        </footer>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }`}</style>
    </div>
  );
}
