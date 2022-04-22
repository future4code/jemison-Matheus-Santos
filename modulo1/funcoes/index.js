/* ==================================== Exercícios de interpretação de código ==================================== */
// 1.
// a) Respectivamente 10 e 50
// b) Não apareceria nada, pois os valores não seriam declarados no console

// 2.
// a) O código solicita uma resposta do usuário e converte a resposta em um booleano, sendo "true" caso a resposta seja igual a que foi definida na lógica ou "false", caso diferente. Além disso, o valor impresso no console será em letras minúsculas e "true" caso contenha a palavra "cenoura" (em letras minúsculas) dentro da resposta.
// b)
// i. true
// ii. true
// iii. false

/* ==================================== Exercícios de escrita de código ==================================== */
// 1.
// a) "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
/* function imprimirAboutMe() {
  const nome = prompt("Qual é o seu nome?");
  let idade = Number(prompt("Qual é a sua idade? (Insira apenas os números)"));
  let cidade = prompt("Em qual cidade você mora atualmente?");
  let ocupacao = prompt(
    "O que você faz atualmente? Ex.: estudante; programador (a); etc."
  ).toLowerCase();

  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`
  );
}

imprimirAboutMe(); */

// b)
/* const infosPessoa = (nome, idade, endereco, profissao) => {
  nome = prompt("Qual é o seu nome?");
  idade = Number(prompt("Qual é a sua idade?"));
  endereco = prompt(
    "Digite seu endereço. Ex.: R. Barão do Rio Branco, 99, Cruzeiro - SP"
  );
  profissao = prompt(
    "Qual é a sua profissão? Ex.: Programador; Engenheiro, etc."
  ).toLowerCase();

  const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`;

  console.log(frase);

  return frase;
};

infosPessoa(); */

// 2.
// a)
/* const numeros = (num1, num2) => {
  const soma = num1 + num2;
  console.log(soma);

  return soma;
};

numeros(4, 3); */

// b)
/* const numeros = (num1, num2) => {
  const maiorOuIgual = num1 >= num2;
  console.log(maiorOuIgual);

  return maiorOuIgual;
};

numeros(5, 10); */

// c)
/* const numero = (num) => {
  const par = num % 2 === 0;
  const impar = num % 2 === 1;
  console.log(`O número ${num} é par? ${par}`);
  console.log(`O número ${num} é ímpar? ${impar}`);
};

numero(64); */

// d)
/* const recebeUmaMensagem = (mensagem) => {
  mensagem = "Matheus é lindo";
  console.log(mensagem.length);
  console.log(mensagem.toUpperCase());
};

recebeUmaMensagem(); */

// 3.
/* const operacoes = (soma, subtracao, multiplicacao, divisao) => {
  const num1 = Number(prompt("Digite um número"));
  const num2 = Number(prompt("Digite outro número"));

  soma = num1 + num2;
  subtracao = num1 - num2;
  multiplicacao = num1 * num2;
  divisao = num1 / num2;

  console.log(`${num1} + ${num2} = ${soma}`);
  console.log(`${num1} - ${num2} = ${subtracao}`);
  console.log(`${num1} x ${num2} = ${multiplicacao}`);
  console.log(`${num1} ÷ ${num2} = ${divisao}`);
};

operacoes(); */
