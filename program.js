const acc = document.querySelector(".accordion");
  const panel = document.querySelector(".panel");

  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });