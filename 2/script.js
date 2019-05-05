'use strict';
//ОБОЗНАЧЕНИЕ РАБОТЫ С js6
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
// (isNaN) не число - true
start();

let appData = {
    allMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && a != '' && b != '' && a.length < 30) {
            console.log("done");
            appData.expenses[a] = b;
            //expenses - новое свойство у объекта appData. [любая строка(ключ)] = значение
        } else {
            console.log ("bad result");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.allMoney / 30).toFixed();
    // toFixed(x) округляет число до x символов после запятой. Возращает строчное значение 
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();

function checkSavings(){
    if(appData.savings == true) {
        let save = +prompt("Введите сумму накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        
        appData.monthIncome = save/100/12*percent;
        alert("доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    let o = 0;
    while(o < 3) {
        o++;
        let opt = +prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses = {
            1 : opt
            }
        console.log (opt);
    }
}
chooseOptExpenses();