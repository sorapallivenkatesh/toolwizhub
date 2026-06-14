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
