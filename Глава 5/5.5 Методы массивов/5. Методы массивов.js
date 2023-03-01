// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
    str = str.split('')
    str = str.map(
        (char, index) => str[index - 1] === '-' ? char.toUpperCase() : char
    )
    str.forEach((char, index) => {
        if (char === '-') {
            str.splice(index, 1);
        }
    });
    str = str.join(''); 
    return str
};
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
camelize("-w-o-r-d-");


// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
let arr = [5, 3, 8, 1];
function filterRange(arr, a ,b) {
    return arr.filter(item => {
        if (a <= item && item <= b) {
            return item
        }
    });
}

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)


// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    arr.forEach((elem, index) => {
        if (elem < a || elem > b) {
            arr.splice(index, 1);
        }
    });

}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]


// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10


// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    return arr.slice().sort();
}

let arrSorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)


// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
let powerCalc = new Calculator;
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);


let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша


// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
    {fullName: "Вася Пупкин", id: 1},
    {fullName: "Петя Иванов", id: 2},
    {fullName: "Маша Петрова", id: 3}
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин


// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
let arr = [1, 2, 3];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(arr);
alert(arr);


// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
function unique(arr) {
    let result = [];

    for (let elem of arr) {
        if (!result.includes(elem)) {
            result.push(elem);
        }
    }

    return result;
}

    let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
    ];

alert( unique(strings) ); // кришна, харе, :-O


// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
let usersById = groupById(users);





  /*
  // после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */