"use strict";

const names = ['Ivan', 'Nazar', 'Gosha', 'Egor', 'Ilya', 'Sasha'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
})

const shotNames = names.filter(name => name.length < 5);

const shortNames2 = names.filter(function(name) {
    // return name.toLowerCase() === 'nazar';
    if(name.toLowerCase === 'nazar') {
        return true;
    }
    else if(name.length < 3) {
        return false;
    }
    else {
        return true;
    }
})

const shortNames3 = names.filter(function(name) {
    return name.toLowerCase() === 'nazar';
})

console.log(shortNames);
console.log(shotNames);
console.log(shortNames2);
console.log(shortNames3);

const names2 = ['IvaN', 'NaZAr', 'GOsha', 'EGOR', 'Ilya', 'Sasha'];
// const result = names2.map(name => name.toLowerCase());
const result = names2.map(name => {
    if(name.toLowerCase() === 'egor') {
        return 'David';
    }
    else if (name.length > 4) {
        return 'keklol';
    } else {
        return name;
    }
})

console.log(result);

const names3 = [41, 'IvaN', 'NaZAr', 'GOsha'];
const names4 = ['41', 'IvaN', 'NaZAr', 'GOsha'];

console.log(names3.some(name => typeof(name) === 'number'));
console.log(names3.every(name => typeof(name) === 'number'));
console.log(names4.some(name => typeof(name) === 'number'));
console.log(names4.every(name => typeof(name) === 'number'));
console.log(names4.every(name => typeof(name) === 'string'));
console.log(names4.some(name => typeof(name) === 'string'));
console.log(names3.some(name => typeof(name) === 'string'));
console.log(names3.every(name => typeof(name) === 'string'));

const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);
const res2 = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);
console.log(res2);
console.log(arr.join(', '));

const names5 = 'Ivan, Nazar, Gosha, Egor, Ilya, Sasha';
console.log(names5.split(', ').filter(name => name.toLowerCase() !== 'Gosha').join(', '));

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'cat'
}

const newArr = Object.entries(obj);
console.log(newArr);
const newObj = Object.fromEntries(newArr);
console.log(newObj);