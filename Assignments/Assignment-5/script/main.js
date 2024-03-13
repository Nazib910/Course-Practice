let clickPress = 0;
let totalPrice = 0;
let discount = 0;
let availableSeats = 40;

function buySeat() {
  const getElement = event.target.id;
  const elementId = document.getElementById(getElement);

  if (elementId.classList.contains("bg-[#1DD100]")) {
    return;
  } else {
    if (clickPress >= 4) {
      alert("No more than 4 seats allowed");
      return;
    }

    elementId.classList.add("bg-[#1DD100]");
    clickPress++;

    const seatsDiv = document.getElementById("seats");
    if (seatsDiv && clickPress <= 4) {
      const seatNameP = document.createElement("p");
      seatNameP.innerText = elementId.textContent;
      seatsDiv.appendChild(seatNameP);
    }

    const seatCounter = document.getElementById("seat-add-count");
    if (seatCounter) {
      seatCounter.innerText = clickPress;
      if (clickPress === 1) {
        seatCounter.classList.add("px-2");
      }
    }

    const classDiv = document.getElementById("class");
    if (classDiv && clickPress <= 4) {
      const classP = document.createElement("p");
      classP.innerText = "Economy";
      classDiv.appendChild(classP);
    }
    const priceDiv = document.getElementById("price");
    if (priceDiv && clickPress <= 4) {
      const priceP = document.createElement("p");
      priceP.innerText = "550";
      priceDiv.appendChild(priceP);
      totalPrice += 550;
    }
    const totalPriceElement = document.getElementById("total-price");
    if (totalPriceElement) {
      totalPriceElement.innerText = totalPrice;
    }

    availableSeats--;
    document.getElementById("current-available-seat").innerText =
      availableSeats;

    if (clickPress === 4) {
      document.getElementById("total-price-section").classList.remove("hidden");
      document.getElementById("discount-section").classList.remove("hidden");
    }

    elementId.removeEventListener("click", buySeat);

    if (clickPress > 4) {
      alert("No more than 4 seats allowed");
      elementId.classList.remove("bg-[#1DD100]");
      return;
    }
  }
}

function applyDiscount() {
  const inputCouponValue = document.getElementById("input-coupon").value;
  if (inputCouponValue === "NEW15") {
    discount = 15 / 100;
  } else if (inputCouponValue === "Couple 20") {
    discount = 20 / 100;
  } else {
    discount = 0;
    return;
  }

  let grandTotal = totalPrice;
  if (discount > 0) {
    const discountAmount = totalPrice * discount;
    grandTotal -= discountAmount;
  }
  const grandTotalElement = document.getElementById("grand-total");
  if (grandTotalElement) {
    grandTotalElement.innerText = grandTotal;
  }
}



const applyButton = document.getElementById("apply-button");
if (applyButton) {
  applyButton.addEventListener("click", applyDiscount);
}
