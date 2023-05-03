'use strict';

// Напишите рекурсивную функцию, которая принимает один параметр массив,
// генерирует целое число от 0 до 10 включительно и добавляет его в массив.

// Каждый раз после добавления нового числа проверяет сумму элементов массива,
// если она меньше 50 запускается снова передавая себе массив.
// Если сумма больше 50-ти, то функция возвращает этот массив.

const checkSumArr = (arr) => {
  const random = Math.floor(Math.random() * 11);
  arr.push(random); // и добавляет его в массив.
  const sum = arr.reduce((total, amount) => total + amount);
  if (sum > 50) {
    return arr;
  } else {
    checkSumArr(arr);
  }
};

const array = [1, 2, 3];
checkSumArr(array);
console.log(array);
