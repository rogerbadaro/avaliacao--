const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  })
}