// Условие задачи: 
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. 
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
// объявление функции checkAge с параметром age_1, потому что в данной задаче будет изменяться и проверяться age_1
function checkAge(age_1) {
// в тело функции мы поместили код из пунктов 30-33 ДЗ Вадима:
if (age_1 < age_2){
    console.log('You dont have access cause your age is' +' ', age_1 + ' ', 'It is less then' + ' ', age_2);
    }
else if (age_1 >= age_2, age_1 < age_3){
    console.log('Welcome!');
    }
else if (age_1 > age_3){
    console.log('Keep calm and look Culture channel');
    }
else { console.log('Technical work')
}
}
//вызов функции checkAge  с параметрами 17,  age_2, age_3
checkAge(17, age_2, age_3);
//вызов функции checkAge  с параметрами 18,  age_2, age_3
checkAge(18, age_2, age_3);
//вызов функции checkAge  с параметрами 61,  age_2, age_3
checkAge(61, age_2, age_3);