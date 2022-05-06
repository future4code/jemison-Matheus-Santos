/* ========= EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ========= */
// --------- Exercício 1 ---------
// a) Será impresso, respectivamente, todos os itens da constante usuário,  o valor do índice (a posição) e o array completo.

// --------- Exercício 2 ---------
// a) Serão impressos todos os itens da constante usuário dentro do parâmetro "nome".

// --------- Exercício 3 ---------
// a) O array original será impresso, com exceção do item que contem o apelido "Chijo".

/* ========= EXERCÍCIOS DE ESCRITA DE CÓDIGO ========= */
// --------- Exercício 1 ---------
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a) Crie um novo array que contenha apenas o nome dos doguinhos
/* const nomeDosPets = pets.map((pet, index, Array) => {
  return pet.nome;
});

console.log(nomeDosPets); */

// b) Crie um novo array apenas com os cachorros salsicha
/* const nomeDosPets = pets.filter((pet, index, array) => {
  return pet.raca === "Salsicha";
});

console.log(nomeDosPets); */

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
/* const nomeDosPets = pets.filter((pet, index, array) => {
  if (pet.raca === "Poodle") {
    console.log(
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.raca}!`
    );
  }
}); */

// --------- Exercício 2 ---------
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a) Crie um novo array que contenha apenas o nome de cada item
/* const nomeDosItens = produtos.map((produto, index, array) => {
  return produto.nome;
});

console.log(nomeDosItens); */

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
/* const nomeEPreco = produtos.filter((produto, index, array) => {
  delete produto.categoria;

  return produtos;
}); */

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
/* const nomeEPreco = produtos.filter((produto, index, array) => {
    return produto.categoria === "Bebidas";
  });
  
  console.log(nomeEPreco); */

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
/* const nomeEPreco = produtos.filter((produto, index, array) => {
  return produto.nome.includes("Ypê");
});

console.log(nomeEPreco); */

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
/* const frases = produtos.map((produto, index, array) => {
  return `🚨 É SÓ HOJE! Compre ${produto.nome} por R$ ${produto.preco}!`;
});

console.log(frases); */
