
// new RegExp('pattern', 'flags');
// /pattern/flags

// Search

// const answer = prompt('Введите ваше имя: ');
// const reg = /n/i;

// i без учитывания регистра
// g глобально
// m многострочный режим

// console.log(answer.search(reg));
// console.log(answer);
// alert(answer);

// const answer2 = prompt('Введите ваше имя: ');
// const reg2 = /n/ig;

// console.log(answer2.match(reg2));
// console.log(answer2.matchAll(reg2));

// const pass = prompt('Password: ');
// console.log(pass.replace(/a/g, '*'));
// console.log(pass.replace(/\./g, '*'));
// console.log(pass.replace(/\\/g, '*'));

// console.log('12-34-56'.replace(/\-/g, ':'));

// let time = '12-34-56'.split('-').join(':');
// console.log(time);

// const answer3 = prompt('Введите ваше имя: ');
// const reg3 = /n/i;

// console.log(reg3.test(answer3));

// const answer4 = prompt('Введите ваше имя: ');
// const reg4 = /\d/g;
// console.log(answer4.match(reg4));

// const str = 'MJs ban fmnds R2D2'
// const reg5 = /\w\d\w\d/g;
// console.log(str.match(reg5));

// const str2 = 'MJs ban fmnds R2D2'
// const reg6 = /\D/ig;
// console.log(str2.match(reg6));

// Reverse Classes
// \d цифры \ D не цифры
// \w все слова. все цифры и нижние подчеркивания \ W
// \s пробелы \ S