
//Exercício
// Retorne no console todas as imagens do site
const img = document.getElementsByTagName('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const a = document.querySelectorAll('[href^="#"]');
console.log(a);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2animais = document.querySelector('.animais-descricao h2');
console.log(h2animais);

// Selecione o último p do site
const paragra =document.querySelectorAll('p');
console.log(paragra[--paragra.length]);