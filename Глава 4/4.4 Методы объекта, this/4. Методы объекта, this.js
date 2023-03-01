// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?

// Результат = TypeError: Cannot read properties of undefined (reading 'name')


// Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.a = +prompt('Первое значение')
    this.b = +prompt('Второе значение')
  },

  sum() {
    return this.a + this.b;
  },
  
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep() 
  .down()
  .showStep();
  