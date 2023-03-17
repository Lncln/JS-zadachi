// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
        clearInterval(timerId);
    }
        current++;
    }, 1000);
}


// Используя рекурсивный setTimeout.
function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
        setTimeout(go, 1000);
    }
        current++;
    }, 1000);
};




// Что покажет setTimeout?
let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
    i++;
}
// Любой вызов setTimeout будет выполнен только после того, как текущий код завершится.
// Последним значением i будет: 100000000.