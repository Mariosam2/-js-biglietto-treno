const ticketPrice = document.getElementById("ticket_price");
let  km = Number(prompt("Inserisca i chilometri che vuole percorrere"));
while(true) {
    if(km){
        console.log(km);
        break;
    } 
    km = Number(prompt("Inserisca i chilometri che vuole percorrere"));
    
}
let userAge = Number(prompt("Inserisca la sua età"));
while(true) {
    if(userAge){
        console.log(userAge);
        break;
    } 
    userAge = Number(prompt("Inserisca la sua età"));
    
}
let price = km * 0.21;
const underAge = 18;
const overAge = 65;
const underAgeDiscount = 20;
const overAgeDiscount = 40;

if (userAge <  underAge) {
    let discount;
    discount = (price/100) * underAgeDiscount;
    price = price - discount;
} 

if(userAge > overAge) {
    let discount;
    discount = (price/100) * overAgeDiscount;
    price = price - discount;
}
price.toString();
ticketPrice.innerHTML = `Il suo biglietto costa: ${price}€`;