/* ToolWizHub hub — splash + mobile nav. */

/* ── Splash (Tickbox-style, once per session) ─────── */
(function splash() {
  const el = document.getElementById("splash");
  if (!el) return;
  if (document.documentElement.classList.contains("no-splash")) { el.remove(); return; }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hold = reduced ? 400 : 1700;
  const fade = reduced ? 150 : 600;

  let done = false;
  const dismiss = () => {
    if (done) return;
    done = true;
    try { sessionStorage.setItem("toolwizhub:splashed", "1"); } catch (_) {}
    el.classList.add("is-hiding");
    setTimeout(() => el.remove(), fade);
  };
  el.addEventListener("click", dismiss);
  setTimeout(dismiss, hold);
})();

/* ── Mobile nav toggle ────────────────────────────── */
(function nav() {
  const navEl = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!navEl || !toggle || !links) return;

  const close = () => { navEl.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); };
  toggle.addEventListener("click", () => {
    const open = navEl.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
})();
