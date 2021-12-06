'use strict';

let number = Math.ceil(Math.random() * 100);
alert('Загадано число от 1 до 100. Угадай');
let userNumber;

//Прооверка
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function one(n) {

  function two() {
    let question = confirm('Отгадаете число?');
    if (question) {
      do {
        userNumber = prompt('Введите число');
      }
      while (!isNumber(userNumber) && userNumber != null);

      if(userNumber === null){
        console.log('Игра оконченна');
      }else if (userNumber > n) {
        alert('Много');
        two();
      } else if (userNumber < number) {
        alert('Мало');
        two();
      } else if (userNumber == number) {
        alert('Вы выиграли');
      } else if (!userNumber) {
        alert('Введите число');
      }
    } else {
      alert('Game ower...');
    }

  }
  two();
}
one(number);
