document.addEventListener("DOMContentLoaded", () => {
  fetch("./partials/header.html")
    .then(res => res.text())
    .then(html => {
      const h = document.getElementById("header");
      if (h) h.innerHTML = html;
    });

  fetch("./partials/footer.html")
    .then(res => res.text())
    .then(html => {
      const f = document.getElementById("footer");
      if (f) f.innerHTML = html;
    });
});
