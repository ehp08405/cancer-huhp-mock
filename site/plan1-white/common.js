// スマホのメニュー開閉と、一覧の絞り込み（どの案でも共通）
document.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-nav-toggle]");
  if (toggle) {
    const nav = document.getElementById(toggle.getAttribute("aria-controls"));
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    return;
  }
  const filter = e.target.closest("[data-filter]");
  if (filter) {
    const value = filter.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b === filter)));
    document.querySelectorAll("[data-cat]").forEach((item) => {
      item.hidden = value !== "all" && item.dataset.cat !== value;
    });
    document.querySelectorAll("[data-year-group]").forEach((g) => {
      g.hidden = !g.querySelector("[data-cat]:not([hidden])");
    });
  }
});
