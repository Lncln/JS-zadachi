// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
a = 2
b = 2
c = 2
d = 1

// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;
let x = 1 + (a *= 2);
a = 4;
x = 5;

// Какой результат будет у выражений ниже?
"" + 1 + 0  // 10?
"" - 1 + 0 // -1
true + false // 1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // '  -9  5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// В чём ошибка? Исправьте её. Результат должен быть 3.
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 12

