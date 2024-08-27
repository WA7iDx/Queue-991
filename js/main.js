// i18n configration
document.addEventListener("DOMContentLoaded", function () {
  let currentLang = localStorage.getItem("lang") || "en";
  loadLanguage(currentLang);

  document.getElementById("lang-en").addEventListener("click", function () {
    switchLanguage("en");
    window.location.reload();
  });

  document.getElementById("lang-ar").addEventListener("click", function () {
    switchLanguage("ar");
    window.location.reload();
  });

  // fetch my json file method
  function loadLanguage(lang) {
    fetch(`i18n/${lang}.json`)
      .then((response) => response.json())
      .then((translations) => {
        document.querySelectorAll("[data-i18n]").forEach((elem) => {
          const key = elem.getAttribute("data-i18n");

          if (elem.tagName === "INPUT") {
            elem.placeholder = translations[key];
          }
          elem.textContent = translations[key];
        });
        document.body.setAttribute("dir", translations.dir);

        setActiveButton(lang);
      });
  }

  // switching langage
  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    loadLanguage(lang);
  }

  // detected which btn is active
  function setActiveButton(lang) {
    document
      .getElementById("lang-en")
      .classList.toggle("active", lang === "en");
    document
      .getElementById("lang-ar")
      .classList.toggle("active", lang === "ar");
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop >= 50) {
    console.log("test");
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});

//nav link animation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  hamburger.classList.toggle("toggle");
});
