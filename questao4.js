var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
var primeiro = frutas[0];

var ultimo = frutas[frutas.length - 1];
// Banana
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });

  var adicionar = frutas.push('Laranja');

var ultimo = frutas.pop(); 

var primeiro = frutas.shift(); o

var adicionar = frutas.unshift('Morango') // adiciona ao início

frutas.push('Manga');

var pos = frutas.indexOf('Banana');

var removedItem = frutas.splice(pos, 1); 

var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais); 


var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n); 

console.log(vegetais); 

console.log(itensRemovidos); 