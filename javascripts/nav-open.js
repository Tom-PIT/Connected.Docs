// Opens the Domains (English) / Domene (Slovenian) sections of the sidebar by default.
// Material's navigation.expand would open every section, so this opens only these.
(function () {
  var TITLES = ["Domains", "Domene"];

  function openDomainsSection() {
    var items = document.querySelectorAll("li.md-nav__item--nested");
    items.forEach(function (li) {
      var toggle = li.querySelector(":scope > input.md-nav__toggle");
      var label = li.querySelector(".md-ellipsis");
      if (!toggle || !label) return;
      if (TITLES.indexOf(label.textContent.trim()) !== -1) {
        toggle.checked = true;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openDomainsSection);
  } else {
    openDomainsSection();
  }
})();
