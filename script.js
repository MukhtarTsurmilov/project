'use strict'
let money = Number(prompt("Ваш бюджет на месяц?")),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income : [],
        savings: false,
    };

        for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt( "Во сколько обойдется?");

        if ((typeof (a))==="string" && (typeof (a)) != null && (typeof (b)) != null
        && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a]=b;
        } else {
                console.log("Введены некорректные данные");
                i--
        }

        };

/*let i = 0; ТРЕНИРОВКА ЦИКЛА WHILE
while (i < 2) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
        } else {
                console.log("Введены некорректные данные");
                i--
        }

        i++;
}*/

/*let i = 0; ТРЕНИРОВКА ЦИКЛА DO - WHILE

do {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
        } else {
                console.log("Введены некорректные данные");
                i--
        }

        i++;
}

while (i < 2);*/


        appData.moneyPerDay = appData.budget / 30;
alert("ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log("Средний уровень достатка");
} else if (ppData.moneyPerDay > 2000 ) {
        console.log("Высокий уровень достатка");
} else {
        console.log("Произошла ошибка");
}
