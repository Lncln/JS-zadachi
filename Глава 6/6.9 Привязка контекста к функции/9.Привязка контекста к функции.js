// Что выведет функция?
function f() {
    alert( this ); // null
}

let user = {
    g: f.bind(null)
};

user.g();
// Ответ: null.



// Можем ли мы изменить this дополнительным связыванием?
// Что выведет этот код?
function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
  f();
//   Ответ: Вася.



// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему?

//   Ответ: undefined.
//   Результатом работы bind является другой объект. У него уже нет свойства test.



// Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));



// Использование частично применённой функции для логина
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
askPassword(() => user.login(true), () => user.login(false));