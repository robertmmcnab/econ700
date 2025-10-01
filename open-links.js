document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("a[href]").forEach(function(link) {
    // skip anchor-only links (#) so scroll works normally
    if (!link.getAttribute("href").startsWith("#")) {
      link.setAttribute("target", "_blank");
    }
  });
});
