//Строки........................ 




/*
Проверка на спам

Для поиска без учёта регистра символов 
переведём всю строку в нижний регистр, 
а потом проверим, есть ли в ней искомые 
подстроки:





function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
*/


/*
Методы toLowerCase() и toUpperCase() 
меняют регистр символов:

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
Если мы захотим перевести в нижний регистр 
какой-то конкретный символ:

alert( 'Interface'[0].toLowerCase() ); // 'i'
*/




/*
Получить символ из строки

let str = `Hello`;

// получаем первый символ
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// получаем последний символ
alert( str[str.length - 1] ); // o
*/


/*
Одинарные и двойные кавычки работают, 
по сути, одинаково, а если использовать 
обратные кавычки, то в такую строку мы 
сможем вставлять произвольные выражения, 
обернув их в ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
Ещё одно преимущество обратных кавычек — 
они могут занимать более одной строки, 
вот так:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // список гостей, 
состоящий из нескольких строк
*/


//Числа..................... 
/*
Для получения чисел из строки 
есть parseInt и parseFloat.

Они «читают» число из строки. 
Если в процессе чтения возникает ошибка, 
они возвращают полученное до ошибки число. 
Функция parseInt возвращает целое число, 
а parseFloat возвращает число 
с плавающей точкой:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
*/



/*
// округление чисел с плавающей точкой
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3*/
