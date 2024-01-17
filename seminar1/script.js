// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

var arr = [1, 5, 7, 9];
var min = Math.min(...arr);
console.log(min);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

let count = 0;
const createCounter = () => {
    return {
        increment: () => count++,
        decrement: () => count--,
    };
};
const res = createCounter();
console.log(res.increment());
console.log(res.increment());
console.log(res.increment());
console.log(res.decrement());
console.log(res.decrement());
console.log(res.increment());
console.log(res.decrement());
console.log(res.decrement());
console.log(res.decrement());

// 3) 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции

const factorial = (num) => {
    if (num === 0) {
        return 1;
    } else {
        return (num) * factorial(num - 1);
    }
}

console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)

// // Дополнительная задача
// 4) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// *Пример**
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);