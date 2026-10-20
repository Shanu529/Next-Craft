// Generates original sample concept artwork (website mockups + graphic designs) into public/images.
// All work is fictional sample/concept work. Replace any file in public/images with real work later;
// keep the filename (or update src/data/*.ts).
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const out = (p) => path.join(root, "public/images", p);
const FAM = "Poppins, 'DejaVu Sans', Helvetica, Arial, sans-serif";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const R = (x, y, w, h, f, rx = 0, ex = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" ${ex}/>`;
const C = (x, y, r, f, ex = "") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${ex}/>`;
const P = (d, f, ex = "") => `<path d="${d}" fill="${f}" ${ex}/>`;
const T = (x, y, s, size, f, w = 700, a = "start", ex = "") =>
  `<text x="${x}" y="${y}" font-family="${FAM}" font-size="${size}" font-weight="${w}" fill="${f}" text-anchor="${a}" ${ex}>${esc(s)}</text>`;
const bars = (x, y, n, w, gap, f, h = 12, ws = []) =>
  Array.from({ length: n }, (_, i) => R(x, y + i * (h + gap), ws[i] ?? w, h, f, h / 2)).join("");
const svg = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
const save = async (file, s) => {
  await fs.mkdir(path.dirname(out(file)), { recursive: true });
  await sharp(Buffer.from(s)).webp({ quality: 85 }).toFile(out(file));
  console.log("wrote", file);
};

/* ---------- Website concept mockups (1600x1000 browser window) ---------- */
const browser = (content, { chrome = "#1c1c1c", url = "concept.example", page = "#fff" } = {}) =>
  svg(1600, 1000, `
  ${R(0, 0, 1600, 1000, "#0d0d0d")}
  ${R(80, 70, 1440, 860, 18, 18, "").replace('rx="18"', 'rx="18"')}
  <defs><clipPath id="w"><rect x="80" y="70" width="1440" height="860" rx="18"/></clipPath></defs>
  <g clip-path="url(#w)">
    ${R(80, 70, 1440, 56, chrome)}
    ${C(112, 98, 7, "#ff5f57")}${C(136, 98, 7, "#febc2e")}${C(160, 98, 7, "#28c840")}
    ${R(520, 82, 560, 32, "#ffffff22", 16)}${T(800, 104, url, 15, "#ffffffaa", 500, "middle")}
    ${R(80, 126, 1440, 804, page)}
    <g transform="translate(80,126)">${content}</g>
  </g>`.replace(R(80, 70, 1440, 860, 18, 18, ""), R(80, 70, 1440, 860, "#000", 18)));

const nav = (logo, color, accent, links = ["Product", "Pricing", "Docs"], btn = "#fff", btnTxt = "#000") =>
  `${T(60, 62, logo, 28, color, 700)}${links.map((l, i) => T(760 + i * 120, 60, l, 18, color, 500)).join("")}${R(1230, 30, 150, 48, btn, 24)}${T(1305, 61, "Get started", 17, btnTxt, 600, "middle")}`;

const websites = {
  "saas-launch": browser(`
    ${R(0, 0, 1440, 804, "#0b0f1a")}
    ${nav("Orbit", "#fff", "#008CFF", ["Product", "Pricing", "Docs"], "#008CFF", "#000")}
    ${T(60, 250, "Plan, track and ship", 56, "#fff", 700)}${T(60, 320, "in one calm workspace.", 56, "#008CFF", 700)}
    ${bars(60, 380, 2, 540, 14, "#ffffff33", 14, [560, 420])}
    ${R(60, 470, 190, 58, "#008CFF", 29)}${T(155, 507, "Start free", 20, "#000", 600, "middle")}
    ${R(270, 470, 190, 58, "none", 29, 'stroke="#ffffff55" stroke-width="2"')}${T(365, 507, "Watch demo", 20, "#fff", 500, "middle")}
    ${R(740, 150, 640, 520, "#141a2b", 24, 'stroke="#ffffff1a"')}
    ${T(780, 210, "Project overview", 22, "#fff", 600)}${R(1240, 185, 100, 36, "#008CFF33", 18)}${T(1290, 210, "This week", 15, "#6db6ff", 500, "middle")}
    ${[150, 230, 190, 300, 260, 360, 320].map((h, i) => R(790 + i * 80, 600 - h, 46, h, i === 5 ? "#008CFF" : "#2a3350", 8)).join("")}
    ${R(780, 620, 560, 2, "#ffffff1a")}${bars(780, 640, 1, 200, 0, "#ffffff44", 10)}
    ${R(60, 600, 300, 130, "#141a2b", 18, 'stroke="#ffffff1a"')}${R(84, 626, 40, 40, "#008CFF", 12)}${bars(140, 630, 2, 160, 12, "#ffffff44", 12, [150, 100])}${bars(84, 690, 1, 200, 0, "#ffffff22", 10)}
    ${R(380, 600, 300, 130, "#141a2b", 18, 'stroke="#ffffff1a"')}${R(404, 626, 40, 40, "#ffffff", 12)}${bars(460, 630, 2, 160, 12, "#ffffff44", 12, [140, 90])}${bars(404, 690, 1, 200, 0, "#ffffff22", 10)}
  `, { url: "orbit-saas.concept" }),

  "ember-oak-restaurant": browser(`
    ${R(0, 0, 1440, 804, "#f4ede1")}
    ${T(720, 66, "Ember & Oak", 34, "#22160f", 700, "middle")}${["Menu", "Reserve", "Story"].map((l, i) => T(60 + i * 110, 62, l, 18, "#22160f", 500)).join("")}${R(1250, 30, 130, 46, "#22160f", 23)}${T(1315, 60, "Book", 17, "#f4ede1", 600, "middle")}
    ${T(60, 250, "Fire-cooked", 72, "#22160f", 700)}${T(60, 350, "seasonal plates.", 72, "#b4552d", 700)}
    ${bars(60, 400, 3, 520, 14, "#22160f33", 14, [540, 500, 380])}
    ${R(60, 500, 200, 58, "#22160f", 29)}${T(160, 537, "See the menu", 19, "#f4ede1", 600, "middle")}
    ${C(1030, 380, 300, "#e7d9c3")}${C(1030, 380, 250, "#fffaf0")}${C(1030, 380, 190, "#f0e2cb")}
    ${C(960, 350, 60, "#b4552d")}${C(1070, 330, 44, "#6b8e4e")}${C(1050, 440, 54, "#d9a441")}${C(950, 440, 30, "#6b8e4e")}${C(1120, 410, 24, "#b4552d")}
    ${[0, 1, 2].map((i) => `${R(60 + i * 330, 620, 300, 140, "#fff", 18)}${bars(84 + i * 330, 650, 2, 200, 14, "#22160f33", 12, [200, 140])}${R(84 + i * 330, 710, 60, 24, "#b4552d", 12)}`).join("")}
  `, { url: "emberandoak.concept", chrome: "#e9dfcf" }),

  "developer-portfolio": browser(`
    ${R(0, 0, 1440, 804, "#0d1117")}
    ${T(60, 62, "<jordan.dev />", 26, "#e6edf3", 600)}${["Work", "About", "Contact"].map((l, i) => T(1060 + i * 120, 60, l, 18, "#9da7b3", 500)).join("")}
    ${T(60, 240, "Hi, I build fast,", 58, "#e6edf3", 700)}${T(60, 325, "accessible web apps.", 58, "#008CFF", 700)}
    ${bars(60, 375, 2, 560, 14, "#e6edf333", 14, [520, 400])}
    ${R(60, 460, 200, 58, "#008CFF", 10)}${T(160, 497, "View projects", 19, "#000", 600, "middle")}
    ${R(740, 140, 640, 340, "#161b22", 18, 'stroke="#30363d"')}${C(776, 172, 6, "#ff5f57")}${C(798, 172, 6, "#febc2e")}${C(820, 172, 6, "#28c840")}
    ${[["#ff7b72", 140], ["#e6edf3", 220], ["#79c0ff", 180]].map(([f, w], i) => R(780, 215 + i * 0, 0, 0, f)).join("")}
    ${R(780, 220, 90, 14, "#ff7b72", 7)}${R(880, 220, 150, 14, "#e6edf3", 7)}${R(1040, 220, 120, 14, "#79c0ff", 7)}
    ${R(810, 256, 130, 14, "#d2a8ff", 7)}${R(950, 256, 200, 14, "#e6edf3", 7)}
    ${R(810, 292, 180, 14, "#79c0ff", 7)}${R(1000, 292, 100, 14, "#a5d6ff", 7)}
    ${R(780, 328, 70, 14, "#ff7b72", 7)}${R(860, 328, 240, 14, "#e6edf3", 7)}
    ${R(810, 364, 120, 14, "#d2a8ff", 7)}${R(940, 364, 160, 14, "#79c0ff", 7)}${R(780, 400, 60, 14, "#ff7b72", 7)}
    ${[0, 1, 2].map((i) => `${R(60 + i * 460, 560, 420, 190, "#161b22", 18, 'stroke="#30363d"')}${R(84 + i * 460, 584, 120, 20, "#008CFF", 10)}${bars(84 + i * 460, 630, 2, 300, 14, "#e6edf344", 14, [320, 240])}${R(84 + i * 460, 700, 70, 26, "#ffffff14", 13)}${R(164 + i * 460, 700, 70, 26, "#ffffff14", 13)}`).join("")}
  `, { url: "jordan.dev.concept", chrome: "#161b22" }),

  "form-field-store": browser(`
    ${R(0, 0, 1440, 804, "#fafafa")}${R(0, 0, 1440, 36, "#111")}${T(720, 25, "Free delivery on orders over a set amount", 14, "#fff", 500, "middle")}
    ${T(60, 90, "FORM & FIELD", 28, "#111", 700, "start", 'letter-spacing="3"')}${["Chairs", "Tables", "Lighting", "Decor"].map((l, i) => T(520 + i * 120, 88, l, 18, "#111", 500)).join("")}${R(1270, 58, 110, 44, "#111", 22)}${T(1325, 87, "Cart", 17, "#fff", 600, "middle")}
    ${R(60, 140, 240, 600, "#fff", 18, 'stroke="#e4e4e7"')}${T(86, 186, "Filters", 22, "#111", 600)}${bars(86, 216, 6, 150, 28, "#11111122", 14, [150, 120, 160, 100, 140, 110])}${R(86, 440, 188, 44, "#008CFF", 22)}
    ${[["#d9cbb8", "#111"], ["#111", "#d9cbb8"], ["#008CFF", "#fff"], ["#e8e2d6", "#8a6f4d"], ["#cfd8dc", "#455a64"], ["#f2c9b8", "#a4452c"]]
      .map(([bg, fg], i) => {
        const x = 330 + (i % 3) * 366, y = 140 + Math.floor(i / 3) * 316;
        return `${R(x, y, 340, 230, bg, 16)}${i % 2 ? C(x + 170, y + 120, 64, fg) : R(x + 100, y + 60, 140, 110, fg, 22)}${R(x + 90, y + 175, 160, 16, "#00000020", 8)}${bars(x, y + 248, 1, 180, 0, "#111", 14)}${R(x, y + 276, 80, 12, "#11111155", 6)}`;
      }).join("")}
  `, { url: "formandfield.concept" }),

  "studio-north-agency": browser(`
    ${R(0, 0, 1440, 804, "#f2f0ea")}
    ${T(60, 62, "Studio North", 28, "#000", 700)}${["Work", "Services", "Contact"].map((l, i) => T(1000 + i * 130, 60, l, 18, "#000", 500)).join("")}
    ${T(50, 330, "WE MAKE", 190, "#000", 800, "start", 'letter-spacing="-6"')}${T(50, 500, "BOLD", 190, "#000", 800, "start", 'letter-spacing="-6"')}
    ${R(640, 340, 330, 190, "#ff5a36", 0)}${C(1150, 435, 100, "#000")}${R(1010, 340, 60, 190, "#008CFF")}
    ${R(60, 590, 400, 150, "#000", 0)}${T(90, 650, "Branding", 30, "#fff", 600)}${bars(90, 685, 1, 240, 0, "#ffffff66", 12)}
    ${R(480, 590, 400, 150, "#ff5a36", 0)}${T(510, 650, "Web", 30, "#000", 600)}${bars(510, 685, 1, 240, 0, "#00000066", 12)}
    ${R(900, 590, 480, 150, "#fff", 0, 'stroke="#000" stroke-width="2"')}${T(930, 650, "Campaigns", 30, "#000", 600)}${bars(930, 685, 1, 280, 0, "#00000044", 12)}
  `, { url: "studionorth.concept", chrome: "#e6e3da" }),

  "harbor-pine-consulting": browser(`
    ${R(0, 0, 1440, 804, "#ffffff")}
    ${T(60, 62, "Harbor & Pine", 28, "#12263f", 700)}${["Services", "Approach", "Insights"].map((l, i) => T(700 + i * 130, 60, l, 18, "#12263f", 500)).join("")}${R(1190, 30, 190, 48, "#12263f", 8)}${T(1285, 61, "Book a call", 17, "#fff", 600, "middle")}
    ${R(0, 110, 1440, 420, "#12263f")}
    ${T(60, 250, "Clear strategy for", 68, "#fff", 700)}${T(60, 330, "growing businesses.", 68, "#fff", 700)}
    ${bars(60, 375, 2, 520, 14, "#ffffff44", 14, [520, 380])}${R(60, 440, 220, 56, "#008CFF", 8)}${T(170, 476, "Our approach", 19, "#000", 600, "middle")}
    ${R(840, 190, 540, 340, "#1b3556")}${[[880, 120], [960, 200], [1040, 160], [1120, 260], [1200, 220], [1280, 300]].map(([x, h]) => R(x, 530 - h, 60, h, "#2c4d78")).join("")}${R(840, 520, 540, 10, "#008CFF")}
    ${[["Strategy", "#12263f"], ["Operations", "#12263f"], ["Digital", "#12263f"]].map(([t], i) => `${R(60 + i * 460, 570, 420, 180, "#f4f6f9", 14, 'stroke="#e1e6ee"')}${C(110 + i * 460, 630, 22, "#008CFF")}${T(150 + i * 460, 638, t, 26, "#12263f", 600)}${bars(90 + i * 460, 680, 2, 300, 12, "#12263f33", 12, [320, 240])}`).join("")}
  `, { url: "harborandpine.concept" }),
};

/* ---------- Graphic design pieces ---------- */
const rays = (cx, cy, r1, r2, n, stroke, sw) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return `<line x1="${cx + Math.cos(a) * r1}" y1="${cy + Math.sin(a) * r1}" x2="${cx + Math.cos(a) * r2}" y2="${cy + Math.sin(a) * r2}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }).join("");
const sp = (s) => `letter-spacing="${s}"`;

const designs = {
  "autumn-latte-post": [1080, 1080, `
    ${R(0, 0, 1080, 1080, "#efe0c6")}${C(560, 600, 380, "#3b2314")}${C(560, 600, 320, "#6b4226")}${C(560, 600, 250, "#d9b382")}
    ${P("M440 600 C 480 520, 560 560, 560 600 C 560 660, 640 660, 680 600 C 640 700, 480 700, 440 600Z", "#f3e6d0")}
    ${T(70, 190, "AUTUMN", 140, "#3b2314", 800)}${T(74, 250, "LATTE SEASON", 34, "#3b2314", 600, "start", sp(6))}
    ${R(70, 960, 270, 56, "#3b2314", 28)}${T(205, 997, "Try it today", 22, "#efe0c6", 600, "middle")}${T(1010, 998, "Lumen Coffee Co.", 28, "#3b2314", 600, "end")}`],
  "move-more-fitness": [1080, 1350, `
    ${R(0, 0, 1080, 1350, "#0a0a0a")}${P("M0 1000 L1080 740 L1080 900 L0 1160Z", "#008CFF")}
    ${T(50, 430, "MOVE", 330, "#fff", 800, "start", sp(-8))}${T(50, 700, "MORE.", 330, "#fff", 800, "start", sp(-8))}
    <g transform="rotate(-13.5 90 1078)">${T(90, 1078, "30-DAY CHALLENGE", 58, "#000", 800)}</g>
    ${R(70, 1230, 330, 64, "#fff", 32)}${T(235, 1273, "Start today", 26, "#000", 700, "middle")}${T(1010, 1272, "PULSE FITNESS", 24, "#ffffff99", 600, "end", sp(4))}`],
  "design-meetup-event": [1080, 1080, `
    ${R(0, 0, 1080, 1080, "#008CFF")}${[0, 1, 2, 3].map((i) => R(640 + i * 40, 60 + i * 40, 380 - i * 80, 380 - i * 80, "none", 0, 'stroke="#000" stroke-width="6"')).join("")}
    ${T(70, 520, "DESIGN", 190, "#000", 800, "start", sp(-4))}${T(70, 690, "MEETUP", 190, "#fff", 800, "start", sp(-4))}
    ${R(70, 790, 700, 120, "#000", 0)}${T(110, 865, "SAT  |  7 PM  |  ONLINE", 44, "#fff", 700, "start", sp(3))}
    ${T(70, 1000, "Talks, feedback and good company.", 32, "#000", 500)}`],
  "layout-rules-carousel": [1080, 1080, `
    ${R(0, 0, 1080, 1080, "#f5f5f5")}
    ${R(30, 30, 505, 505, "#111", 0)}${T(70, 150, "4 LAYOUT", 80, "#fff", 800)}${T(70, 240, "RULES", 80, "#008CFF", 800)}${T(70, 490, "Swipe  >", 34, "#fff", 500)}
    ${R(545, 30, 505, 505, "#ffd23f", 0)}${T(80 + 465, 400, "1", 360, "#111", 800)}${T(585, 490, "Use a grid", 40, "#111", 700)}
    ${R(30, 545, 505, 505, "#ff5a36", 0)}${T(80, 915, "2", 360, "#111", 800)}${T(70, 1005, "Give it space", 40, "#111", 700)}
    ${R(545, 545, 505, 505, "#fff", 0, 'stroke="#111" stroke-width="4"')}${T(570, 915, "3", 360, "#008CFF", 800)}${T(585, 1005, "Limit the type", 40, "#111", 700)}`],
  "lumen-studio-logo": [1080, 1080, `
    ${R(0, 0, 1080, 1080, "#ffffff")}${C(540, 400, 74, "#111")}${rays(540, 400, 120, 190, 16, "#111", 14)}${R(700, 230, 36, 36, "#008CFF")}
    ${T(540, 740, "lumen", 190, "#111", 600, "middle", sp(-4))}${T(540, 810, "S T U D I O", 36, "#111", 500, "middle", sp(10))}
    ${T(540, 1010, "LOGO CONCEPT  -  SAMPLE", 22, "#00000077", 500, "middle", sp(5))}`],
  "peak-outdoor-logo": [1080, 1080, `
    ${R(0, 0, 1080, 1080, "#12372a")}${P("M250 640 L450 280 L650 640Z", "#ffffff")}${P("M440 640 L650 340 L860 640Z", "#7fd1a0")}${R(250, 662, 610, 14, "#fff")}${C(760, 250, 44, "#f4c95d")}
    ${T(540, 830, "PEAK", 170, "#fff", 800, "middle", sp(14))}${T(540, 905, "OUTDOOR SUPPLY CO.", 36, "#7fd1a0", 600, "middle", sp(8))}
    ${T(540, 1020, "LOGO CONCEPT  -  SAMPLE", 22, "#ffffff77", 500, "middle", sp(5))}`],
  "verde-market-brand-sheet": [1500, 1000, `
    ${R(0, 0, 1500, 1000, "#f6f3ec")}${T(80, 300, "verde.", 250, "#1d3b2a", 700, "start", sp(-8))}${T(86, 380, "FRESH LOCAL GROCER  -  BRAND SYSTEM", 28, "#1d3b2a", 500, "start", sp(5))}
    ${[["#1d3b2a", "#1D3B2A"], ["#4f9d5b", "#4F9D5B"], ["#f2b84b", "#F2B84B"], ["#e8553d", "#E8553D"], ["#f6f3ec", "#F6F3EC"]].map(([c, l], i) => `${R(80 + i * 260, 480, 230, 200, c, 20, 'stroke="#1d3b2a33"')}${T(95 + i * 260, 720, l, 24, "#1d3b2a", 600)}`).join("")}
    ${T(80, 920, "Aa", 190, "#1d3b2a", 700)}${T(400, 850, "Headline - Poppins SemiBold", 34, "#1d3b2a", 600)}${bars(400, 880, 2, 700, 14, "#1d3b2a44", 14, [700, 520])}
    ${C(1280, 880, 80, "#4f9d5b")}${C(1340, 880, 80, "#f2b84b", 'fill-opacity=".9"')}`],
  "jazz-night-poster": [1080, 1500, `
    ${R(0, 0, 1080, 1500, "#1b1035")}${C(540, 560, 340, "#ff7a3d")}
    ${[0, 1, 2, 3, 4].map((i) => R(180, 560 + i * 62 + 20, 720, 10 + i * 10, "#1b1035")).join("")}
    ${T(540, 1090, "JAZZ", 300, "#fff", 800, "middle", sp(-4))}${T(540, 1230, "NIGHT", 160, "#ff7a3d", 800, "middle", sp(12))}
    ${R(120, 1300, 840, 4, "#ffffff55")}${T(540, 1370, "LIVE ON STAGE  |  FRI  |  8 PM", 36, "#fff", 600, "middle", sp(6))}${T(540, 1430, "The Blue Room - sample poster", 26, "#ffffff88", 500, "middle")}`],
  "less-but-better-editorial": [1080, 1500, `
    ${R(0, 0, 1080, 1500, "#ede8de")}${T(40, 1000, "Aa", 620, "#111", 800, "start", sp(-24))}${R(820, 190, 90, 90, "#008CFF")}
    ${T(70, 130, "TYPOGRAPHY", 30, "#111", 700, "start", sp(8))}${R(70, 160, 940, 3, "#111")}${T(70, 300, "Less, but", 120, "#111", 700)}${T(70, 420, "better.", 120, "#111", 700)}
    ${[0, 1, 2].map((i) => bars(70 + i * 320, 1060, 8, 280, 20, "#11111133", 12, [280, 260, 280, 270, 240, 280, 250, 200, 120])).join("")}${R(70, 1330, 940, 3, "#111")}${T(70, 1400, "EDITORIAL LAYOUT STUDY  -  SAMPLE", 24, "#111", 600, "start", sp(5))}`],
  "open-studio-poster": [1080, 1500, `
    ${R(0, 0, 1080, 1500, "#f2ff3d")}${Array.from({ length: 24 }, (_, i) => R((i % 6) * 180, 960 + Math.floor(i / 6) * 135 + ((i % 6) % 2) * 0, 90 + (i % 3) * 30, 90, i % 2 ? "#111" : "#008CFF")).join("")}
    ${T(60, 270, "OPEN", 330, "#111", 800, "start", sp(-10))}${T(60, 540, "STUDIO", 225, "#111", 800, "start", sp(-8))}${T(60, 720, "DAY", 270, "#111", 800, "start", sp(-8))}
    ${R(60, 780, 600, 6, "#111")}${T(60, 850, "Meet the makers. Bring a friend.", 40, "#111", 600)}`],
  "glacier-water-ad": [1080, 1350, `
    ${R(0, 0, 1080, 1350, "#cfe8f5")}${P("M0 1000 L1080 860 L1080 1350 L0 1350Z", "#a9d3e8")}
    ${T(70, 190, "PURE.", 150, "#0b3c5d", 800)}${T(70, 330, "COLD.", 150, "#0b3c5d", 800)}${T(70, 470, "CLEAR.", 150, "#008CFF", 800)}
    ${R(640, 420, 300, 760, "#ffffffdd", 110, 'stroke="#7fb8d6" stroke-width="6"')}${R(715, 340, 150, 100, "#008CFF", 20)}${R(660, 760, 260, 400, "#9fd2ea", 90)}${R(680, 700, 220, 140, "#fff", 16)}${T(790, 790, "GLACIER", 38, "#0b3c5d", 800, "middle", sp(3))}${T(790, 825, "SPRING WATER", 20, "#0b3c5d", 500, "middle", sp(2))}
    ${P("M120 1000 L220 860 L320 1000Z", "#ffffffcc")}${P("M260 1060 L340 960 L420 1060Z", "#ffffff99")}
    ${T(70, 1240, "Glacier Water", 54, "#0b3c5d", 700)}${T(70, 1290, "SAMPLE ADVERTISEMENT", 20, "#0b3c5d99", 500, "start", sp(4))}`],
  "pulse-headphones-ad": [1080, 1350, `
    ${R(0, 0, 1080, 1350, "#111111")}${C(540, 700, 380, "#1a1a1a")}
    <path d="M280 760 A260 260 0 0 1 800 760" stroke="#fff" stroke-width="44" fill="none" stroke-linecap="round"/>
    ${R(220, 700, 150, 290, "#008CFF", 60)}${R(710, 700, 150, 290, "#008CFF", 60)}${R(200, 730, 60, 230, "#222", 30)}${R(820, 730, 60, 230, "#222", 30)}
    ${T(70, 170, "SOUND,", 140, "#fff", 800)}${T(70, 300, "REIMAGINED.", 140, "#fff", 800, "start", sp(-4))}
    ${T(70, 1150, "Pulse One", 70, "#fff", 700)}${T(70, 1210, "Wireless over-ear headphones", 30, "#ffffff99", 500)}
    ${R(70, 1250, 280, 60, "#fff", 30)}${T(210, 1290, "Listen now", 24, "#000", 700, "middle")}${T(1010, 1290, "SAMPLE AD", 20, "#ffffff77", 500, "end", sp(4))}`],
  "rose-skincare-ad": [1080, 1080, `
    ${R(0, 0, 1080, 1080, "#f1d9cf")}${C(800, 280, 220, "#e8c2b4")}${C(300, 940, 200, "#e8c2b4")}
    ${T(70, 180, "GLOW", 150, "#5a2d27", 800)}${T(70, 300, "FROM WITHIN", 90, "#5a2d27", 700)}
    ${R(410, 520, 320, 90, "#b9776a", 24)}${R(430, 600, 280, 260, "#fff", 40)}${R(470, 660, 200, 130, "#f1d9cf", 16)}${T(570, 745, "ROSE", 52, "#5a2d27", 800, "middle", sp(8))}
    ${P("M820 830 C 780 760, 860 700, 900 740 C 940 780, 880 850, 820 830Z", "#7a9a6e")}${P("M880 880 C 860 820, 940 790, 980 830 C 1000 880, 930 910, 880 880Z", "#8fae82")}
    ${T(70, 1010, "Overnight repair cream  -  SAMPLE AD", 26, "#5a2d27", 600, "start", sp(2))}`],
  "flash-sale-banner": [1500, 600, `
    ${R(0, 0, 1500, 600, "#ffd400")}${P("M900 0 L1500 0 L1500 600 L700 600Z", "#111")}
    ${T(60, 230, "FLASH", 200, "#111", 800, "start", sp(-6))}${T(60, 410, "SALE", 200, "#111", 800, "start", sp(-6))}
    ${R(70, 460, 340, 74, "#111", 37)}${T(240, 510, "SHOP NOW", 30, "#ffd400", 700, "middle", sp(4))}
    ${C(1180, 300, 190, "#ffd400")}${T(1180, 290, "UP TO", 40, "#111", 700, "middle")}${T(1180, 380, "40%", 130, "#111", 800, "middle")}${T(1180, 430, "OFF", 44, "#111", 700, "middle")}
    ${T(1440, 560, "48 HOURS ONLY  -  SAMPLE BANNER", 22, "#ffffff99", 500, "end", sp(3))}`],
  "business-growth-banner": [1500, 600, `
    ${R(0, 0, 1500, 600, "#008CFF")}${T(70, 220, "Grow your", 108, "#000", 800, "start", sp(-3))}${T(70, 340, "business online.", 108, "#fff", 800, "start", sp(-3))}
    ${bars(70, 390, 2, 600, 14, "#00000044", 14, [620, 460])}${R(70, 470, 260, 70, "#000", 35)}${T(200, 516, "Get started", 28, "#fff", 700, "middle")}
    ${R(900, 90, 520, 420, "#fff", 24)}${R(900, 90, 520, 54, "#e9e9ec", 24)}${R(900, 120, 520, 24, "#e9e9ec")}${C(930, 117, 7, "#ff5f57")}${C(954, 117, 7, "#febc2e")}${C(978, 117, 7, "#28c840")}
    ${R(930, 180, 280, 24, "#111", 12)}${bars(930, 224, 2, 330, 14, "#11111133", 12, [340, 240])}${R(930, 290, 140, 44, "#008CFF", 22)}${[0, 1, 2].map((i) => R(930 + i * 160, 370, 140, 110, ["#111", "#008CFF", "#e9e9ec"][i], 14)).join("")}`],
  "back-to-school-flyer": [1080, 1350, `
    ${R(0, 0, 1080, 1350, "#ff6b35")}${R(90, 560, 520, 640, "#fff", 24)}${R(90, 560, 70, 640, "#111", 24)}${Array.from({ length: 8 }, (_, i) => C(125, 620 + i * 70, 14, "#ff6b35")).join("")}${bars(200, 640, 5, 340, 40, "#11111133", 14, [360, 300, 340, 280, 200])}
    <g transform="rotate(18 800 800)">${R(700, 480, 70, 560, "#ffd23f")}${P("M700 480 L735 400 L770 480Z", "#f3d9a4")}${R(700, 1040, 70, 40, "#111")}</g>
    <g transform="rotate(-8 900 900)">${R(840, 560, 70, 560, "#008CFF")}${P("M840 560 L875 480 L910 560Z", "#f3d9a4")}</g>
    ${T(70, 180, "BACK TO", 130, "#fff", 800, "start", sp(-3))}${T(70, 320, "SCHOOL", 160, "#111", 800, "start", sp(-4))}${T(74, 400, "STATIONERY  |  BAGS  |  SUPPLIES", 30, "#fff", 600, "start", sp(3))}
    ${C(880, 1130, 140, "#111")}${T(880, 1115, "SAMPLE", 30, "#ffd23f", 700, "middle", sp(4))}${T(880, 1175, "OFFER", 56, "#fff", 800, "middle")}
    ${T(70, 1290, "Campaign concept - sample flyer", 24, "#ffffffcc", 500)}`],
};

for (const [slug, s] of Object.entries(websites)) await save(`websites/${slug}.webp`, s);
for (const [id, [w, h, body]] of Object.entries(designs)) await save(`graphics/${id}.webp`, svg(w, h, body));

// Open Graph image built from the supplied logo
const logo = path.join(root, "public/brand/nextcraft-logo.jpg");
await sharp(logo).resize(1200, 630, { fit: "contain", background: "#080808" }).png().toFile(out("og.png"));
console.log("wrote og.png");
