'use strict';

// Создать объект rectangle, который описывает ширину и высоту
// (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и
// два геттера для получения периметра и площади прямоугольника

// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"

// По умолчанию значения высоты и ширины заданы 5 см

const rectangle = {
  width: 5,
  height: 5,
  get perimeter() {
    return `Периметр равен ${(this.width * 2) + (this.height * 2)}см`;
  },
  get square() {
    return `Площадь равна ${this.width * this.height}см`;
  },
  set setWidth(x) {
    if (Number.isFinite(x)) {
      this.width = x;
    }
  },
  set setHeight(y) {
    if (Number.isFinite(y)) {
      this.height = y;
    }
  },
};
console.log(rectangle.perimeter);
console.log(rectangle.square);
rectangle.setWidth = '123';
rectangle.setHeight = 12;
console.log(rectangle.width);
console.log(rectangle.height);
