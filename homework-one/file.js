var ticketPrice = 14;
var ticketCount = 3;
var ticketTotal = ticketPrice*ticketCount;

document.getElementById('ticketNum').innerHTML += ticketCount;
document.getElementById('ticketCost').innerHTML += ticketPrice;
document.getElementById('ttCost').innerHTML += ticketTotal;