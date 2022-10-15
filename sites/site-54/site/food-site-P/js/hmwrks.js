
// "use strict";

// // 1 //

// const arr = ['2', 3, '4', '5', 6];
// const arr2 = arr.filter(numbers => typeof(numbers) === 'number');
// console.log(arr2);

// // 2 //

// const arrNames = ['Ivan', 'Vova', 'Nazar', 'Gosha', 'Egor', 'Ilya'];
// arrNames.push('Bogdan');
// const arr2Names = arrNames.map(name => {
//     return `Username: ${name}`
// })
// console.log(arr2Names);

// // 3 // 

// const arr3 = ['2', 3, '4', '5', 6];
// console.log(arr3.some(numbers => typeof(numbers) === 'number'));

// // 4 //

// const arr4 = ['2', 3, '4', '5', 6];
// console.log(arr4.every(numbers => typeof(numbers) === 'number'));


// 1 //

// const arr = "My Name is Ivan";
// let newArr = /ivan/i;
// console.log(arr.search(newArr));

// 2 //

// const userSay= "Hello tell me 085 945 mmm i forgot ahaha o 2593";
// let tel = /\d/g;
// console.log(userSay.match(tel).join(''));

// 3 //

// const arr2 = "+380998534569";
// let reg = /\(+38)?(-|\s|()?(050|063|095)(-|\s|))?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}(-|\s)?/;
// console.log(reg.test(arr2));

// 4 //

// const arr3 = "C8on2g5ra5t1u2la5ti75on8s";
// console.log(arr3.replace(/\d/g, ''));
