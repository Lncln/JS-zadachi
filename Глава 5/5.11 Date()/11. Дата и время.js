// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let date = new Date(2012, 1, 20, 3, 12);
alert(date);


// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );        // нужно вывести "ВТ"


// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }

    return day;
};


// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28


// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let difference = now - today; 

    return Math.round(difference / 1000); 
}

alert(getSecondsToday());


// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;

    return Math.round(diff / 1000);
};


// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) { 
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000); 
    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
        return min + ' мин. назад';
    }

    let formattedDate = addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + addZero(date.getFullYear()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
    
    return formattedDate
};
function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
};

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );