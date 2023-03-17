// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ?
  alert( counter2() ); // ?

// Ответ: Они независимы (0, 1)


// Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ?
  alert( counter.up() ); // ?
  alert( counter.down() ); // ?
// Не понимаю почему он не долежн работать (Что должно было вызвать сомнение).
// Ответ: Будет работать. Покажет 1.


// Посмотрите на код. Какой будет результат у вызова на последней строке?
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
//  Ответ: sayHi не вызовется вне конструкции if


// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
function sum(a) {
    return function(b) {
        return a + b; 
    };
};

// sum(1)(2) = 3
// sum(5)(-1) = 4


// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

function inBetween(a, b) {
    return function(value) {
        return value >= a && value <= b;
    };
};

function inArray(arr) {
    return function(value) {
        return arr.includes(value);
    };
};


// Напишите функцию byField, которая может быть использована для этого.
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
};



// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
    let shooters = [];

    for (let i = 0; i <= 10; i++) {

        let shooter = function() { // функция shooter
                alert( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);

    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...