
  function toggleTable() {
    const table = document.getElementById("priceTable");
    const title = document.querySelector(".prices h2");
    table.classList.toggle("hidden");

    if (table.classList.contains("hidden")) {
      title.innerHTML = "Середні ціни за 7–10 днів перебування ⮞";
    } else {
      title.innerHTML = "Середні ціни за 7–10 днів перебування ⮟";
    }
  }

