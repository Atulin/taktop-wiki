(() => {
  const perfStart = performance.now();

  const switcher = document.getElementById("theme-switch");
  const btn = switcher?.querySelector("button.open") as HTMLElement;
  const options = switcher?.querySelector("nav.options") as HTMLElement;
  const optionBtns = [
    ...options.querySelectorAll("button[data-theme]"),
  ] as HTMLButtonElement[];

  // Initial theme
  (() => {
    const theme = localStorage.getItem("theme") ?? "auto";
    document.documentElement.setAttribute("theme", theme);

    const currentThemeBtn = optionBtns.find((b) => b.dataset.theme === theme);

    if (currentThemeBtn) {
      const svg = currentThemeBtn.querySelector("svg") as SVGSVGElement;
      btn.innerHTML = svg.outerHTML;
    } else {
      console.error("Button not found");
      console.error(`Current theme is ${theme}`);
    }
  })();

  // Toggle menu
  btn?.addEventListener("click", () => {
    options.classList.toggle("visible");
  });

  // Handle theme change
  optionBtns.forEach((b) =>
    b.addEventListener("click", () => {
      const theme = b.dataset.theme ?? "auto";

      document.documentElement.setAttribute("theme", theme);
      localStorage.setItem("theme", theme);
      btn.innerHTML = (b.querySelector("svg") as SVGSVGElement).outerHTML;
    })
  );

  // Close menu on click-away
  document.body.addEventListener("click", (ev: Event) => {
    const allowed = [btn, options, ...optionBtns].includes(
      ev.target as HTMLElement
    );
    if (!allowed) {
      options.classList.remove("visible");
    }
  });

  const perfEnd = performance.now();
  console.log(`Theme setup took ${perfEnd - perfStart} ms`);
})();
