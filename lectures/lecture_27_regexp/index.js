console.log("Lecture 27. RegExp")

/**
 1. Регулярное выражение (регулярка, RegExp) – это последовательность символов, которая описывает поисковый шаблон
 2. В основном используются для сопоставления строк с шаблоном, для задач по типу "найти и заменить"
 3. Каждый символ в регулярном выражении является или метасимволом,
    который несет специальный смысл, или же обычный символ в его буквальным понимании.
    Вместе они могут формировать шаблон-правило, согласно которому можно
    убедиться, подходит ли текст под этот шаблон
 4. Реализованы в большинстве языках программирования и появилось как понятие еще 1950 году

 5. Многие игнорируют.
 6. Никто не знает регулярки, то есть не умеет их писать с "наскоку" :)
 7. Все гуглят :)

 7. Регулярные выражения плохо подходят для обратки "осмысленного" текста.

 Примеры:
    – проверка текста на соответствие требованиям (телефон, почта, пароль, никнейм)
    – маскированный ввод (masked input)
    – поиск подстроки в строке
**/


// ---------------------- 1. Как описываются ----------------------


// var str = "Lorem ipsum dolor sit amet";
// var myRegex = /sit/
// console.log(str.match(myRegex));
// console.log(str.search(myRegex));
// console.log(myRegex.test(str));
// console.log(str.replace(myRegex, 'HELLO'));
// console.log(str.replace(/sit/, 'HELLO'));


// ---------------------- 2. Операции ----------------------
// match
// replace
// test
// search


// var str = "Lorem ipsum dolor sit amet sit!";
// var regexp = /sit/
// var res = str.match(regexp);

// var str = "We will, we will"
// var regexp = /we/
// var res = str.replace(regexp, "I")

// var str = "example@org.com"
// var regexp = /@/
// var res = regexp.test(str)

// var str = "Today we're going to learn RegExp"
// var regexp = /we/
// var res = str.search(regexp)

// ---------------------- 3. Флаги ----------------------
// /i
// /g

// var str = "Lorem ipsum Sit dolor sit 04 amet sit!";
// console.log(str);
// console.log(str.replace(/sit/ig, '__hello__'))
// console.log(str.toLowerCase().replace("sit", '__hello__'))

// var str = "We will, we will, we will do"
// var regexp = /we/g
// var res = str.replace(regexp, "I")
// console.log(res);



// ---------------------- 4. Классы ----------------------
// \w – находит буквенный символ и "_"
// \s – находит пробельный символ + "\n, \t"
// \d – находит цифру
// \b – граница слова
// \W – находит НЕ буквенный символ
// \S – находит НЕ пробельный символ
// \D – находит НЕ числовой символ
// \B – находит НЕ границу слова
// . – находит вообще всё

// var str = "Есть ли стандарт CSS3?";
// var regexp = /css\d/
// var res = str.match(regexp);
// console.log(res);

// var str = "I loveHTML5!"
// var regexp = /\S\w\w\w\w\d/
// var res = str.match(regexp);
// console.log(res);

// var str = "I 22 love HTML5!"
// var regexp = /\B\w\w\B/g
// var res = str.match(regexp);
// console.log(res); // ['ov', 'TM']




// ---------------------- 5. Якоря ----------------------
// ^ – искать с начала строки
// $ – искать с конца строки



// var goodInput = "12:34";
// var badInput = "12:354";
//
// var regexp = /^\d\d:\d\d$/;
// var res = goodInput.match(regexp);
// console.log(res);




// ---------------------- 6. Граница слова ----------------------
// \b
// Завтрак в 09:00 в комнате 123:456

// var str = "09:00 Завтрак в в комнате 123:456"
// var res = str.match(/\b\d\d:\d\d\b/g)
// console.log(res);




// ---------------------- 7. Диапазоны, отрицательные диапазоны, экранирование ----------------------
// [a-Z]
// [^A-Z]

// console.log("function sayHello()".match(/sayHello\(\)/)); – экранирование
// console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi));
// console.log("aliCE15@gma..il.com".match(/[0-9a-z@.]/g));


// var regexp = /\b\d\d[:-]\d\d\b/g;
// console.log("Завтрак в 09:00. Ужин в 21-30".match(regexp));



// ---------------------- 8. Квантификаторы ----------------------
// ? – "может быть, а может не быть"
// + – повторять много раз, минимум один
// * – повторять много раз, минимум 0
// {} – "от скольки до скольки"
// {3,} – от трех
// {1,3} – от одной до трех
// {2} – именно 2

// var regexp = /\.+/g;
// console.log("Привет!... Как дела?.....".replace(regexp, ' точки '));

// var regexp = /ет*/g;
// console.log("Приветтттттт!... Как дела!.....".match(regexp))


// var regexp = /#([a-f0-9]{3}){1,2}\b/g
// var regexp = /#([\w\d]{3}){1,2}\b/g
// var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// alert(str.match(regexp))


// "+7(903)-123-45-67".replace(/[^+\d]/g, '');
// "+79031234567"




// -------------------- 9. Жадный / не жадный поиск ----------------------
// var regexp = /".+"/g;
// var str = 'a "witch" and her "broom" is one';
// alert( str.match(regexp));


// var regexp = /"[^"]+"/g;
// var  str = 'a "witch" and her "broom" is one';
// alert(str.match(regexp));


// ---------------------- 10. Группы ----------------------
// ()

// alert( 'Gogogo now!'.match(/(go)+/i));
// alert( "site.com my.site.com".match(/(\w+\.)+\w+/g));

// let regexp = /ваш шаблон/g;
// let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
// alert( str.match(regexp) ); // #3f3 #AA00ef
