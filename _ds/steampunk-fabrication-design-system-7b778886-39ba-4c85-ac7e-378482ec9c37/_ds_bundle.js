/* @ds-bundle: {"format":3,"namespace":"SteampunkFabricationDesignSystem_7b7788","components":[],"sourceHashes":{"ui_kits/website/Footer.jsx":"648102151310","ui_kits/website/Hero.jsx":"f78e4bfa7265","ui_kits/website/Nav.jsx":"13cb54f8128a","ui_kits/website/Projects.jsx":"3e6b27f50135","ui_kits/website/QuoteForm.jsx":"2c82e58121ad","ui_kits/website/Sections.jsx":"c750c81f47b0","ui_kits/website/app.jsx":"a3bedc055a76"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SteampunkFabricationDesignSystem_7b7788 = window.SteampunkFabricationDesignSystem_7b7788 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Footer.jsx
try { (() => {
// Site footer.
function Footer() {
  const cols = [["Services", ["Metal Fabrication", "Welding Services", "Millwright Services", "CNC Machining", "Pressure Vessels"]], ["Company", ["About Us", "Gallery", "Blog", "Reviews", "Apply Now"]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-top"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gear"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bt"
  }, "Steampunk", /*#__PURE__*/React.createElement("small", null, "Fabrication"))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/1.6 var(--font-body)",
      color: "var(--fg-3)",
      marginTop: 16
    }
  }, "Full-service welding, machining & fabrication. R \xB7 U \xB7 S code certified. Anything, anywhere \u2014 we make it happen.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    className: "foot-col",
    key: h
  }, /*#__PURE__*/React.createElement("h5", null, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i
  }, i)))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "tel:6017573377"
  }, "(601) 757-3377"), /*#__PURE__*/React.createElement("a", null, "steampunkfab.com"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--fg-3)",
      fontSize: 13,
      lineHeight: 1.5
    }
  }, "3196 Tower Road", /*#__PURE__*/React.createElement("br", null), "Hazlehurst, MS 39083"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp sm"
  }, "S"), /*#__PURE__*/React.createElement("span", {
    className: "stamp sm"
  }, "U"), /*#__PURE__*/React.createElement("span", {
    className: "stamp sm r"
  }, "R")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Steampunk Fabrication, LLC"), /*#__PURE__*/React.createElement("span", null, "Welding \xB7 Fabrication \xB7 Millwright Services \xB7 24/7"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Full-bleed hero with chrome headline, CTAs, and the code-stamp row.
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-anim": true
  }, "Welding \xB7 Fabrication \xB7 Millwright Services"), /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "chrome",
    "data-anim": true
  }, "Built To Spec."), /*#__PURE__*/React.createElement("span", {
    className: "chrome",
    "data-anim": true,
    style: {
      animationDelay: ".08s"
    }
  }, "Anywhere.")), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    "data-anim": true,
    style: {
      animationDelay: ".16s"
    }
  }, "Full-service welding, fabrication, and millwright \u2014 anywhere in the US. Large project crews or small maintenance crews. We show up, around the clock."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    "data-anim": true,
    style: {
      animationDelay: ".24s"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onQuote
  }, "Request a Quote ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u203A")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "tel:6017573377"
  }, "Call 24/7")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stamps",
    "data-anim": true,
    style: {
      animationDelay: ".32s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp sm"
  }, "S"), /*#__PURE__*/React.createElement("span", {
    className: "stamp sm"
  }, "U"), /*#__PURE__*/React.createElement("span", {
    className: "stamp sm r"
  }, "R"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 13px/1.5 var(--font-mono)",
      color: "var(--steel-300)",
      letterSpacing: ".02em"
    }
  }, "ASME & NBIC code certified"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Shared icon + small helpers, plus the top navigation bar.
function Icon({
  name,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    className: className,
    style: style
  });
}
function Nav({
  onQuote
}) {
  const [open, setOpen] = React.useState(false);
  const links = [["About", "caps"], ["Services", "stamps"], ["Gallery", "projects"], ["Contact", "cta"]];
  const applyUrl = "https://steampunkfab.com";
  const go = id => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 74,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gear"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bt"
  }, "Steampunk", /*#__PURE__*/React.createElement("small", null, "Fabrication"))), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, links.map(([t, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id)
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-phone"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), " (601) 757-3377"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onQuote
  }, "Request a Quote ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u203A")), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    style: {
      width: 26,
      height: 26
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mob-menu" + (open ? " open" : "")
  }, links.map(([t, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id)
  }, t)), /*#__PURE__*/React.createElement("a", {
    onClick: () => {
      setOpen(false);
      onQuote();
    },
    style: {
      color: "var(--hivis)"
    }
  }, "Request a Quote \u203A")));
}
Object.assign(window, {
  Icon,
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
// Project gallery + click-to-open lightbox.
const PROJECTS = [{
  img: "../../assets/project-vessel-head.jpg",
  pos: "center 30%",
  tag: "U-Stamp",
  title: "Pressure Vessel Head",
  spec: "304 SS · Section VIII",
  desc: "ASME-stamped vessel head — formed, welded, and hydro-tested in the shop before shipping to the plant."
}, {
  img: "../../assets/project-ring.jpg",
  pos: "center 40%",
  tag: "CNC Machined",
  title: "Bearing Housing Ring",
  spec: "Forged steel · ±0.002\"",
  desc: "Large-diameter housing machined on the CNC lathe and mill to tight tolerance for a rebuild."
}, {
  img: "../../assets/project-cone.jpg",
  pos: "center 35%",
  tag: "Plate Rolled",
  title: "Transition Cone",
  spec: "Carbon plate · rolled",
  desc: "Rolled and seam-welded cone section for a material-handling chute in a sawmill."
}, {
  img: "../../assets/project-flange.jpg",
  pos: "center 45%",
  tag: "Shop Fab",
  title: "Slip-On Flange",
  spec: "Carbon steel · turned & drilled",
  desc: "Large slip-on flange faced and bored on the CNC lathe, bolt holes drilled to pattern — ready for fit-up and weld."
}, {
  img: "../../assets/project-pipespools.jpg",
  pos: "center 55%",
  tag: "Piping",
  title: "Alloy Pipe Spools",
  spec: "Carbon / alloy",
  desc: "Run of fabricated pipe spools staged for inspection before field install."
}, {
  img: "../../assets/shop-interior.jpg",
  pos: "center 65%",
  tag: "The Shop",
  title: "Fabrication Floor",
  spec: "Plate roll · brake",
  desc: "Our main bay — plate roll, press brake, and table space to build big and build right."
}];
function Projects({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    "data-anim": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Recent Work"), /*#__PURE__*/React.createElement("h2", null, "Off The Floor"), /*#__PURE__*/React.createElement("p", null, "A look at what's leaving the shop and going to the field.")), /*#__PURE__*/React.createElement("div", {
    className: "proj-grid"
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "proj",
    key: i,
    onClick: () => onOpen(p),
    "data-anim": true,
    style: {
      animationDelay: i % 3 * .06 + "s"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    loading: "lazy",
    style: {
      objectPosition: p.pos || "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ov"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, p.tag), /*#__PURE__*/React.createElement("h4", null, p.title), /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, p.spec)))))));
}
function Lightbox({
  project,
  onClose
}) {
  if (!project) return null;
  React.useEffect(() => {
    const h = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "lb-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("button", {
    className: "lb-close",
    onClick: onClose
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "lb",
    onClick: e => e.stopPropagation(),
    style: {
      animation: "up .25s var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: project.img,
    alt: project.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "lb-body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      display: "inline-block",
      background: "rgba(166,206,57,.16)",
      color: "var(--hivis)",
      font: "700 10px/1 var(--font-head)",
      textTransform: "uppercase",
      letterSpacing: ".12em",
      padding: "6px 9px",
      borderRadius: "var(--r-xs)",
      marginBottom: 12
    }
  }, project.tag), /*#__PURE__*/React.createElement("h3", null, project.title), /*#__PURE__*/React.createElement("p", null, project.desc)), /*#__PURE__*/React.createElement("div", {
    className: "lb-spec"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "SPEC")), /*#__PURE__*/React.createElement("div", null, project.spec)))));
}
Object.assign(window, {
  Projects,
  Lightbox
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteForm.jsx
try { (() => {
// CTA band with call card + the quote-request modal form.
function CtaBand({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "band cta",
    id: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap cta-in"
  }, /*#__PURE__*/React.createElement("div", {
    "data-anim": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Get Started"), /*#__PURE__*/React.createElement("h2", null, "Got A Project? Let's Build It."), /*#__PURE__*/React.createElement("p", null, "Send us the drawing, the photo, or just the problem. We'll figure out how to make it \u2014 in the shop or out in the field."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onQuote
  }, "Request a Quote ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    className: "cta-call",
    "data-anim": true,
    style: {
      animationDelay: ".1s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp",
    style: {
      borderColor: "var(--hivis)",
      color: "var(--hivis)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone-call",
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lb"
  }, "Call 24/7 \xB7 Hazlehurst, MS"), /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, "(601) 757-3377"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.4 var(--font-body)",
      color: "var(--fg-3)",
      marginTop: 6
    }
  }, "steampunkfab.com \xB7 3196 Tower Rd")))));
}
function QuoteModal({
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    const h = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  const services = ["Metal Fabrication", "Welding Services", "Millwright Services", "CNC Machining", "Pressure Vessel / Boiler", "24/7 Field / Emergency"];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("button", {
    className: "lb-close",
    onClick: onClose
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation(),
    style: {
      animation: "up .25s var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-panel"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "ok-msg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("h3", null, "Request Received"), /*#__PURE__*/React.createElement("p", null, "Thanks \u2014 a fabricator will reach out shortly. Need it now? Call (601) 757-3377, 24/7."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      marginTop: 20
    },
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Request a Quote"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fgrid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    required: true,
    placeholder: "Jane Welder"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    placeholder: "Plant / EPC"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    required: true,
    placeholder: "(601) 555-0100"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: "email",
    placeholder: "you@company.com"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fld full"
  }, /*#__PURE__*/React.createElement("label", null, "Service Needed"), /*#__PURE__*/React.createElement("select", {
    className: "inp"
  }, services.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "fld full"
  }, /*#__PURE__*/React.createElement("label", null, "Tell us about the job"), /*#__PURE__*/React.createElement("textarea", {
    className: "inp",
    placeholder: "Material, size, plant type, timeline, drawings\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 4
    }
  }, "Send Request ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u203A")))))));
}
Object.assign(window, {
  CtaBand,
  QuoteModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Capabilities grid, code-stamps band, and the stats band.

const CAPS = [["layers", "Metal Fabrication", "Carbon steel, stainless, aluminum, and specialty alloys — plate roll, pipe roll, press brake, laser, plasma, and full CNC machine shop."], ["flame", "Welding Services", "Code and specialty welding — procedure-qualified for carbon, stainless, and alloy. S, U, and R stamped."], ["wrench", "Millwright Services", "Equipment installation, alignment, rigging, and mechanical repair. Planned turnarounds and emergency outages."], ["cog", "CNC Machine Shop", "Mill, lathe, laser, and plasma — parts cut and turned to drawing tolerance in-house."], ["gauge", "Pressure Vessels & Boilers", "ASME Section VIII vessels and power boilers fabricated, hydro-tested, and code-stamped in our shop."], ["truck", "24/7 Mobile Field Service", "Welding and repair crews on your site, around the clock — large project crews or small maintenance crews, anywhere in the US."]];
function Capabilities() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band",
    id: "caps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    "data-anim": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What We Do"), /*#__PURE__*/React.createElement("h2", null, "One Shop. Every Process."), /*#__PURE__*/React.createElement("p", null, "From a single machined flange to a code-stamped vessel installed in the field \u2014 it all happens under one roof, or on yours.")), /*#__PURE__*/React.createElement("div", {
    className: "cap-grid"
  }, CAPS.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "cap",
    key: t,
    "data-anim": true,
    style: {
      animationDelay: i * .06 + "s"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic
  }), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
const STAMPS = [["S", "S Stamp", "ASME power boilers — designed, built, and stamped to The Boiler & Pressure Vessel Code."], ["U", "U Stamp", "ASME Section VIII pressure vessels, fabricated and certified for service."], ["R", "R Stamp", "NBIC authorization for repairs and alterations to in-service equipment."]];
function StampsBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "band stamps-band",
    id: "stamps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navy-tex"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    "data-anim": true,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Certified"), /*#__PURE__*/React.createElement("h2", null, "Stamped, Tested, Signed Off.")), /*#__PURE__*/React.createElement("div", {
    className: "stamps-row"
  }, STAMPS.map(([s, t, d], i) => /*#__PURE__*/React.createElement("div", {
    className: "stamp-card",
    key: s,
    "data-anim": true,
    style: {
      animationDelay: i * .08 + "s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stamp" + (s === "R" ? " r" : "")
  }, s), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d)))))));
}
function Stats() {
  const data = [[/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "24"), "/7"), "Emergency response"], [/*#__PURE__*/React.createElement(React.Fragment, null, "R", /*#__PURE__*/React.createElement("b", null, "\xB7"), "U", /*#__PURE__*/React.createElement("b", null, "\xB7"), "S"), "Code stamps held"], ["USA", "Nationwide coverage"], ["Any Scale", "Large crews · small maintenance crews"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, data.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: i,
    "data-anim": true,
    style: {
      animationDelay: i * .06 + "s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, l)))));
}
Object.assign(window, {
  Capabilities,
  StampsBand,
  Stats
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
// Assembles the page, wires the quote modal + project lightbox,
// drives scroll-in animations, and (re)renders Lucide icons.
function App() {
  const [quote, setQuote] = React.useState(false);
  const [proj, setProj] = React.useState(null);

  // Render/refresh Lucide icons after every commit.
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  // Scroll-reveal via IntersectionObserver.
  React.useEffect(() => {
    const els = document.querySelectorAll("[data-anim]");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: .15
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  // Lock scroll while an overlay is open.
  React.useEffect(() => {
    document.body.style.overflow = quote || proj ? "hidden" : "";
  }, [quote, proj]);
  const openQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(StampsBand, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Projects, {
    onOpen: setProj
  }), /*#__PURE__*/React.createElement(CtaBand, {
    onQuote: openQuote
  }), /*#__PURE__*/React.createElement(Footer, null), proj && /*#__PURE__*/React.createElement(Lightbox, {
    project: proj,
    onClose: () => setProj(null)
  }), quote && /*#__PURE__*/React.createElement(QuoteModal, {
    onClose: () => setQuote(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

})();
