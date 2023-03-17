// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// 1
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true

// 2
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false

// 3
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true

// 4
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined




// Создайте новый объект с помощью уже существующего
Да, мы можем создать объект такого же типа, используя конструктор объекта obj, через new obj.constructor().
Пример функции-конструктора, с которой такой вызов корректно сработает:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person('John', 25);
let jane = new john.constructor('Jane', 30);

Пример функции-конструктора, с которой такой код поведёт себя неправильно:

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.drive = function() {
        console.log('Driving...');
    }
}

const bmw = new Car('BMW', 'X5');
const mercedes = new bmw.constructor('Mercedes', 'GLC');

