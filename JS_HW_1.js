// объявление переменной item_1 и присваивание ей числового значения 5
let item_1 = 5;
// вывод в консоль значения переменной item_1
console.log(item_1);
// объявление переменной item_2 и присваивание ей числового значения 3
let item_2 = 3;
// вывод в консоль значения переменной item_2
console.log(item_2);
// объявление переменной item_3 и присваивание ей значения сумм переменных item_1 и item_2
let item_3 = item_1 + item_2;
// вывод в консоль значения переменной item_3
console.log(item_3);
// объявление переменной item_4 и присваивание ей строкового значения Yolochka
let item_4 = 'Yolochka';
// вывод в консоль значения переменной item_4
console.log(item_4);
// вывод в консоль результата суммы переменных item_3 и item_4
console.log(item_3 +' ' + item_4);
// вывод в консоль результата умножения переменных item_3 и item_4
console.log(item_3 * item_4);
// объявление переменной item_5 и присваивание ей значения переменной item_3
let item_5 = item_3;
// объявление переменной item_6 и присваивание ей числового значения 15
let item_6 = 15;
// объявление переменной item_6_type и присваивание ей типа значения переменной item_6
let item_6_type = typeof(item_6);
//  Вывод в консоль типа данных item_6 в виде 'item_6 == '  item_6,  'item_6_type == '  item_6_type
console.log('item_6 ==', item_6, 'item_6_type ==', item_6_type);
// объявление переменной item_7 и присваивание ей строкового значения переменной item_6
let item_7 = String(item_6);
// объявление переменной item_7_type и присваивание ей типа значения переменной item_7
let item_7_type = typeof(item_7);
//  Вывод в консоль типа данных item_7 в виде 'item_7 == '  item_7,  'item_7_type == '  item_7_type
console.log('item_7 ==', item_7, 'item_7_type ==', item_7_type);
// объявление переменной age_1 и присваивание ей числового значения 10
let age_1 = 10;
// объявление переменной age_2 и присваивание ей числового значения 18
let age_2 = 18;
// объявление переменной age_3 и присваивание ей числового значения 60
let age_3 = 60;
// Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
if (age_1 < age_2){
    console.log('You dont have access cause your age is' +' ', age_1 + ' ', 'It is less then' + ' ', age_2);
    }
// Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
else if (age_1 >= age_2, age_1 < age_3){
    console.log('Welcome!');
    }
// Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
else if (age_1 > age_3){
    console.log('Keep calm and look Culture channel');
    }
// Иначе выводите “Technical work”
else { console.log('Technical work')
}
