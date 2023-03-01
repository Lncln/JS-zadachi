// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

alert( unique(values) ); // Hare,Krishna,:-O



// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
let map = new Map();

map.set("name", "John");

// let keys = map.keys();
let keys = Array.from(map.keys());


// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


