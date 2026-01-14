  const cookie = document.getElementById("cookie");
  const message = document.getElementById("message");

  let fortunes = [];

  function getDeviceLang() {
    const lang = (navigator.language || "en").toLowerCase();
    return lang.slice(0, 2);
  }

  async function loadFortunes() {
    const lang = getDeviceLang();
    const supported = ["de", "en", "ko"];
    const chosen = supported.includes(lang) ? lang : "en";

    try {
      const res = await fetch(`fortunes.${chosen}.json`);
      fortunes = await res.json();
    } catch (e) {
      const res = await fetch("fortunes.en.json");
      fortunes = await res.json();
    }
  }

  loadFortunes();


cookie.addEventListener("click", function () {


  const randomIndex = Math.floor(Math.random() * fortunes.length);
  message.textContent = fortunes[randomIndex];
  message.classList.add("show");

  cookie.classList.add("squish");

  cookie.addEventListener(
    "animationend",
    () => {
      cookie.classList.remove("squish");
    },
    { once: true }
  );

});
