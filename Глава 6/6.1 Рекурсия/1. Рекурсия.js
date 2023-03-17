// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10

sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Вариант 1: С использованием цикла.
function sumTo(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    };

    return sum;
}

// Вариант 2: Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo (n) {
    return n === 1 ? 1 : n + sumTo(n - 1)
};

// Вариант 3: С использованием формулы арифметической прогрессии.
function sumTo(n) {
    return n * (n + 1) / 2;
};



// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1) 
};


// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Первая мысль решения задачи это сделать цикл, но тема называется "рекурсия". Я делаю вывод, что через цикл делать неправильно. Пытаюсь сделать через рекурсию. Работает очень долго. Открываю "решение" и мне говорят, что надо делать циклом =)
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    }
    return b;
};


// Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
        }
    }
};

function printList(list) {

    alert(list.value); 

    if (list.next) {
        printList(list.next); 
    }

};

function printList(list) {

    while(list) {
        alert(list.value);
        list = list.next;
}

}