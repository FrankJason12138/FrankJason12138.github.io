// Lightweight image loading optimizations.
// Applies lazy loading + async decoding by default without breaking explicitly set attributes.
(function () {
  function applyDefaults(img) {
    if (!img || img.hasAttribute("data-no-lazy") || img.classList.contains("no-lazy")) {
      return;
    }

    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }
  }

  function init() {
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      applyDefaults(imgs[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
