'use strict';

// Переписать игровой бот для игры "Угадай число"
// Функционал остаётся прежний, но вместо цикла (while или for) - рекурсия

// генерирует случайное число от 1 до 100(включительно)
const random = Math.floor(Math.random() * 100) + 1;
console.log(random);


const guessNumber = (number) => {
  // предлагает пользователю ввести свой вариант отгадки;
  number = prompt('Попробуй угадать число от 0 до 100', '');
  // если пользователь ввел не число, то выводит “Введи число!”;
  if (isNaN(number) || number === '') {
    alert('Введи число!', '');
    console.log('Ошибка');
    return guessNumber(number);
    // если пользователь нажимает “Отмена”, то игра заканчивается.
  } else if (number === null) {
    alert('Игра окончена!');
  } else {
  // если пользовательское число больше, чем загаданное,
  // то бот выводит “Меньше!” и предлагает ввести новый вариант;
    if (number > random) {
      alert('Меньше!', '');
      return guessNumber(number);
    // если пользовательское число меньше, чем загаданное,
    // то бот выводит “Больше!” и предлагает ввести новый вариант;
    } else if (number < random) {
      alert('Больше!', '');
      return guessNumber(number);
      // если пользователь вводит правильное число, то бот выводит “Правильно!”;
    } else {
      number = random;
      alert('Правильно!');
    }
  }
};

guessNumber();
