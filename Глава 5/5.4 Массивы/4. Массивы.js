let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits; // ссылка на массив
shoppingCart.push("Банан");

alert( fruits.length ); // 4


// Давайте произведём 5 операций с массивом.
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");


// Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // Выводит элементы массива


Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) {
        break;
    }

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumInput());


На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
  let maxSum = 0; 

  for (let i = 0; i < arr.length; i++) {
    let sumOfElem= 0;
    for (let j = i; j < arr.length; j++) {
      sumOfElem += arr[j];
      maxSum = Math.max(maxSum, sumOfElem);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

