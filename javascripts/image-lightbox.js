// Opens an image in a fullscreen overlay when it is clicked.
// Click the overlay, press Esc, or press the close button to dismiss.
// Images that are links, emoji or icons are left alone.
(function () {
  var overlay = null;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "img-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image viewer");

    var big = document.createElement("img");
    big.className = "img-lightbox__img";
    big.alt = "";

    var close = document.createElement("button");
    close.className = "img-lightbox__close";
    close.type = "button";
    close.setAttribute("aria-label", "Close");
    close.textContent = "×";

    var frame = document.createElement("div");
    frame.className = "img-lightbox__frame";
    frame.appendChild(big);
    frame.appendChild(close);
    overlay.appendChild(frame);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", hide);
    big.addEventListener("click", function (e) {
      e.stopPropagation();
      hide();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) hide();
    });
  }

  function show(src, alt) {
    if (!overlay) build();
    var big = overlay.querySelector(".img-lightbox__img");
    big.src = src;
    big.alt = alt || "";
    overlay.classList.add("is-open");
    document.documentElement.classList.add("img-lightbox-open");
  }

  function hide() {
    overlay.classList.remove("is-open");
    document.documentElement.classList.remove("img-lightbox-open");
  }

  function isEligible(img) {
    if (img.closest("a")) return false;          // keep image links working
    if (img.classList.contains("twemoji")) return false;
    if (img.closest(".md-header, .md-footer, .md-sidebar, .md-search")) return false;
    return img.closest(".md-typeset") !== null;
  }

  function init() {
    document.querySelectorAll(".md-typeset img").forEach(function (img) {
      if (!isEligible(img) || img.dataset.lightbox === "on") return;
      img.dataset.lightbox = "on";
      img.classList.add("img-zoomable");
    });
  }

  document.addEventListener("click", function (e) {
    var img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains("img-zoomable")) return;
    e.preventDefault();
    show(img.currentSrc || img.src, img.alt);
  });

  // Material swaps pages without a full reload (instant navigation).
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
