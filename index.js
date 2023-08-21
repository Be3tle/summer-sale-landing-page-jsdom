const cards = document.querySelectorAll(".card");
const selectedItems = document.querySelector(".selected-items");
const totalPriceElement = document.getElementById("total");
const discountElement = document.getElementById("discount");
const grandTotalElement = document.getElementById("grand-total");
let itemNumber = 1;
let total = 0;

for (const card of cards) {
  card.addEventListener("click", function () {
    const cardTitle = card.querySelector(".card-title").textContent;
    const cardPrice = parseFloat(card.querySelector(".card-body p").innerText);
    const selectedItem = document.createElement("div");
    selectedItem.classList.add("selected-item");
    selectedItem.innerHTML = `<h4>${itemNumber}. ${cardTitle}</h4>`;
    itemNumber++;
    selectedItems.appendChild(selectedItem);
    total += cardPrice;
    totalPriceElement.textContent = total.toFixed(2);

    const discount = parseFloat(discountElement.textContent);
    const grandTotal = total - discount;
    grandTotalElement.textContent = grandTotal.toFixed(2);
  });
}
