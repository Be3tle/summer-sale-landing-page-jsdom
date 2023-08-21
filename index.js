const cards = document.querySelectorAll(".card");
const selectedItems = document.querySelector(".selected-items");
const totalPriceElement = document.getElementById("total");
const discountElement = document.getElementById("discount");
const grandTotalElement = document.getElementById("grand-total");
const purchaseBtn = document.getElementById("purchase-btn");
const couponInput = document.getElementById("coupon-input");
const discountBtn = document.getElementById("discount-btn");

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

    if (total > 0) {
      purchaseBtn.removeAttribute("disabled");
    } else purchaseBtn.setAttribute("disabled", true);
  });
}

discountBtn.addEventListener("click", function () {
  const couponCode = couponInput.value;
  if (couponCode === "SELL200") {
    const discountAmount = total * 0.2;
    discountElement.innerText = discountAmount.toFixed(2);
    grandTotalElement.innerText = (total - discountAmount).toFixed(2);
  } else {
    discountElement.innerText = "00";
    grandTotalElement.innerText = total.toFixed(2);
  }
  couponInput.value = "";
});
