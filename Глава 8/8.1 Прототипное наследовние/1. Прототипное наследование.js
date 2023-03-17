// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // true (1)
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // null (2)
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // undefined (3)




//   С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
//   Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};





// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
// Ответ: rabbit.



// Почему наедаются оба хомяка?
let hamster = {
    stomach: [],
  
    eat(food) {
        this.stomach = [food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  alert( lazy.stomach ); // apple