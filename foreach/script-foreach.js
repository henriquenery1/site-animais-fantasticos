//Exercício
// Mostre no console cada parágrado do site
const p = document.querySelectorAll('p');
console.log(p);
p.forEach((item) => {
    console.log(item);
})


// Mostre o texto dos parágrafos no console
p.forEach((item) => {
    console.log(item.innerText);
});
// Como corrigir os erros abaixo:
/*
const imgs = document.querySelectorAll('img');
imgs.forEach(item, index => {
 console.log(item, index);
});
let i = 0;
imgs.forEach( => {
 console.log(i++);
});
imgs.forEach(() => i++);
*/

const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
 console.log(item, index);
});
let i = 0;
imgs.forEach(() => {
 console.log(i++);
});
imgs.forEach(() => i++);