// Выведется ли alert? Да

if ("0") {
    alert( 'Привет' );
}
// ОТвет: Да

// Название JavaScript
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

let inputValue = prompt('Какое "официальное" название JavaScript?', '');

if (inputValue === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

let number = prompt('Enter a number');

if (number > 0) {
    alert( 1 );
} else if (number < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

// Перепишите конструкцию if с использованием условного оператора '?':
let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}
result = (a + b < 4) ? 'Мало' : "Много"

// Перепишите if..else с использованием нескольких операторов '?'.

let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';

