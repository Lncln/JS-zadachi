// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
    name: "Василий Иванович",
    age: 35
};

let jsonedUser = JSON.stringify(user);
let userFromJson = JSON.parse(jsonedUser);
console.log(userFromJson);


// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на
let room = {
    number: 23
};  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

  // цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));