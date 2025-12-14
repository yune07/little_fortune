  const cookie = document.getElementById("cookie");
  const message = document.getElementById("message");

  let fortunes = [];
  let alreadyClicked = false;

  fetch("fortunes.json")
    .then(response => response.json())
    .then(data => {
      fortunes = data;
    });

  cookie.addEventListener("click", function () {
    if (alreadyClicked){
        return;
    }
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    message.textContent = fortunes[randomIndex];

    message.classList.add("show");
    cookie.classList.add("clicked");
    cookie.classList.add("hide");

    alreadyClicked = true;
  });
