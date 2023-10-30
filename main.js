// 1) Математические расчеты и функции
// Создайте две функции, add и multiply; пусть каждая принимает
// по два аргумента. Функция add должна складывать аргументы
// и возвращать результат, а функция multiply — перемножать
// аргументы.
// С помощью только этих двух функций вычислите следующее
// несложное выражение: 36325 * 9824 + 777

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// let result = add(multiply(36325, 9824), 777);

// console.log(result);





//  2) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function square(number) {
//     return number * number;
// }

// let number = 7;
// let result = square(number);
// console.log("Квадрат числа " + number + " равен " + result);






//  3) Сделайте функцию, которая возвращает сумму двух чисел.

// function addNumbers(a, b) {
//     return a + b;
// }
// let num1 = 7;
// let num2 = 5;
// let sum = addNumbers(num1, num2);
// console.log(sum);




//  4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function subtractAndDivide(a, b, c) {
//     return (a - b) / c;
// }

// let num1 = 12;
// let num2 = 2;
// let num3 = 2;
// let result = subtractAndDivide(num1, num2, num3);
// console.log(result);




//  5) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function getDayOfWeek(number) {
    let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    
    if (number >= 1 && number <= 7) {
        return daysOfWeek[number - 1];
    } else {
        return "Неверное значение.";
    }
}
    let dayNumber = 5; 
    let day = getDayOfWeek(dayNumber);
    console.log("День недели с номером " + dayNumber + " - это " + day);
