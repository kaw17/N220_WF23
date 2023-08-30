//variables
//tickets
var ticketPrice = 14;
var ticketCount = 3;
var ticketTotal = ticketPrice*ticketCount;

//shopping
var jacket = 70;
var sweater = 55;
var shirt = 35;
var pants = 75;
var skirt = 49;
var sandals = 30;
var shoes = 60;
var bankAccount = 235.87;
var bankRemain = bankAccount-shirt-pants-shoes;

//pizza
var wholePizzas = 4;
var slicePerStudent = 2.5;
var slices = 8;
var totalSlices = wholePizzas*slices;

//monty
var adultPrice = 12;
var childPrice = 6;
var drinkPrice = 1.5;
var adults = 2;
var childs = 1;
var drinks = 3;

//tips
var first = 202.45;
var second = 134.97;
var third = 256.63;
var fourth = 178.22;

//equations
//tickets
document.getElementById('ticketNum').innerHTML += ticketCount;
document.getElementById('ticketCost').innerHTML += ticketPrice;
document.getElementById('ttCost').innerHTML += ticketTotal;

//shopping
document.getElementById('bank').innerHTML += bankRemain;
document.getElementById('addJacket').innerHTML += (bankRemain>jacket);

//pizza
document.getElementById('profPizza').innerHTML += totalSlices%slicePerStudent;

//monty
var totalAdult = adultPrice*adults;
var totalChild = childPrice*childs;
var totalDrink = drinkPrice*drinks;
document.getElementById('Monty').innerHTML += totalAdult+totalChild+totalDrink;

//tips
var totalTips = first+second+third+fourth;
document.getElementById('tips').innerHTML += totalTips/4;