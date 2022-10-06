const ticketPrice = document.getElementById("ticket_price");

const km = Number(prompt("Inserisca i chilometri che vuole percorrere"));
const userAge = Number(prompt("Inserisca la sua età"));
let price = km * 0.21;
const underAge = 18;
const overAge = 65;
const underAgeDiscount = 20;
const overAgeDiscount = 40;

if (userAge <  underAge) {
    let discountedPrice;
    discountedPrice = (price/100) * underAgeDiscount;
    price = discountedPrice;
} 

if(userAge > overAge) {
    let discountedPrice;
    discountedPrice = (price/100) * overAgeDiscount;
    price = discountedPrice;
}
price.toString();
ticketPrice.innerHTML = `Il suo biglietto costa: ${price}€`;