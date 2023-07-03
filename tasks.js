const rain = Math.random() * 1;
if (Math.round(rain) === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
} else {
    console.log("Дождя нет!");
}

let param1 = +prompt("Введите кол-во баллов по математике:");
let param2 = +prompt("Введите кол-во баллов по русскому языку: ");
let param3 = +prompt("Введите кол-во баллов по информатике: ");

const AllParam = param1 + param2 + param3;

if (AllParam >= 265) {
    document.querySelector("body").innerHTML =
        "<h1>Поздравляю, вы поступили на бюджет!</h1>";
} else {
    5;
    document.querySelector("body").innerHTML = "<h1>Идем в Пту :(</h1>";
}

let amount = +prompt("Сколько денег вы хотите снять?");

if (amount % 100 === 0) {
    console.log(`Снять ${amount}`);
} else {
    console.log("Банкомат не выдает такую валюту");
}
