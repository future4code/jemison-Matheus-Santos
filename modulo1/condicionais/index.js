// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// Exercício 1
// a) Solicita um número do usuário e estabelece duas condições "Se o nº for par. / Se não..." e imprime no console a frase de acordo com as condições especificadas.
// b) Para todo número par
// c) Para todo número ímpar

// Exercício 2
// a) Para definir o preço do produto de acordo com o nome informado pelo usuário.
// b) O preço da fruta Maçã é R$ 2.25
// c) O código vai continuar executando, levando em consideração o próximo trecho de código, que no caso é o default.

// Exercício 3
// a) Solicitando uma informação numérica do usuário
// b) Esse número passou no teste. Nada, pois não foi definido um else.
// c) Sim, pois o console.log(mensagem) não foi declarado dentro de nenhuma estrutura condicional.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Exercício 1
// a) e b)
/* const respostaDoUsuario = Number(
  prompt("Qual é a sua idade atual? (Por favor, não minta para si mesmo)")
); */

// c)
/* if (respostaDoUsuario >= 18) {
  console.log("Você pode dirigir ao infinito e além!!!");
} else {
  console.log("Você não dirige sua vida e quer dirigir um carro? Sinto muito.");
} */

// Exercício 2
/* const respostaDoAluno = prompt(
  "Você estuda em qual turno? Digite M (matutino), V (vespertino) ou N (noturno)."
);

if (respostaDoAluno === "M") {
  console.log("Bom dia, o Sol já nasceu lá na fazendinha. 🌞");
} else if (respostaDoAluno === "V") {
  console.log("Boa tarde! Vamos ver o por do sol, me dê a mão... 🎵");
} else if (respostaDoAluno === "N") {
  console.log("Boa noite, Batman!🦇");
} else {
  console.log("Você digitou algo errado. Tente outra vez.");
} */

// Exercício 3
/* const respostaDoAluno = prompt(
  "Você estuda em qual turno? Digite M (matutino), V (vespertino) ou N (noturno)."
);

switch (respostaDoAluno.toUpperCase()) {
  case "M":
    console.log("Bom dia, o Sol já nasceu lá na fazendinha. 🌞");
    break;
  case "V":
    console.log("Boa tarde! Vamos ver o por do sol, me dê a mão... 🎵");
    break;
  case "N":
    console.log("Boa noite, Batman!🦇");
    break;
  default:
    console.log("Você digitou algo errado. Tente outra vez.");
    break;
} */

// Exercício 4
/* const generoDoFilme = "fantasia";
const valorDoIngresso = 15;

const respostaGenero = prompt("Qual o gênero de filme você vai assistir?");
const respostaPreco = Number(prompt("Qual o preço do ingresso?"));

if (respostaGenero === generoDoFilme && respostaPreco < valorDoIngresso) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}
 */
