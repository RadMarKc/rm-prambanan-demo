(function () {
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");

  navToggle.addEventListener("click", function () {
    nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    });
  });

  var tabs = document.querySelectorAll(".menu__tab");
  var panels = document.querySelectorAll(".menu__panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");
      tabs.forEach(function (t) { t.classList.remove("menu__tab--active"); });
      panels.forEach(function (p) { p.classList.remove("menu__panel--active"); });
      tab.classList.add("menu__tab--active");
      var panel = document.getElementById("tab-" + target);
      if (panel) panel.classList.add("menu__panel--active");
    });
  });

  function updateOpenStatus() {
    var box = document.getElementById("openStatus");
    if (!box) return;
    var now = new Date();
    var hour = now.getHours() + now.getMinutes() / 60;
    var open = hour >= 10 && hour < 22;
    var text = box.querySelector(".status__text");
    if (open) {
      box.classList.add("is-open");
      box.classList.remove("is-closed");
      text.textContent = "Buka sekarang — tutup pukul 22.00";
    } else {
      box.classList.add("is-closed");
      box.classList.remove("is-open");
      if (hour < 10) {
        text.textContent = "Tutup — buka lagi pukul 10.00";
      } else {
        text.textContent = "Tutup — buka lagi besok pukul 10.00";
      }
    }
  }

  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);
})();
