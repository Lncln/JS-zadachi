// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = function(value) {
        count = value
    }

    counter.decrease = () => count--;

    return counter;
};

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
counter.set(10); // установить новое значение счётчика
alert( counter() ); // 10
counter.decrease(); // уменьшить значение счётчика на 1
alert( counter() ); // 10 (вместо 11)



// Напишите функцию sum, которая бы работала следующим образом:
function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6 // Очень слабо понял каким образом вызывается
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15