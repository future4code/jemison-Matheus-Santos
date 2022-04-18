/* ================================ INTERPRETAÇÃO DE CÓDIGO ================================ */
//--------------------------------- QUESTÃO 1  ---------------------------------
const bool1 = true;
const bool2 = false;
const bool3 = !bool2; //true

let resultado = bool1 && bool2; //resultado = true E false
console.log("a. ", resultado); //resultado = false

resultado = bool1 && bool2 && bool3; //resultado = true E false E true
console.log("b. ", resultado); //resultado = false

resultado = !resultado && (bool1 || bool2); //resultado = ! E (true OU false)
console.log("c. ", resultado); //resultado = false

console.log("d. ", typeof resultado); // typeof resultado = boolean

//--------------------------------- QUESTÃO 2  ---------------------------------
let primeiroNumero = Number(prompt("Digite um número!"));
let segundoNumero = Number(prompt("Digite outro número!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma);
// RESPOSTA: Será impresso a junção das strings, ao invés de uma soma

//--------------------------------- QUESTÃO 3  ---------------------------------
//RESPOSTA: Converter as strings para numbers

/* ================================ ESCRITA DE CÓDIGO ================================ */
//--------------------------------- QUESTÃO 1  ---------------------------------
// a)
const idadeDoUsuario = Number(prompt("Quantos anos você tem?"));

// b)
const idadeDoAmigo = Number(prompt("E seu melhor amigo? Tem quantos anos?"));

// c)
let condicao = idadeDoUsuario > idadeDoAmigo;

// console.log("Sua idade é maior do que a do seu melhor amigo?", condicao);

// d)
const diferencaDeIdade = idadeDoUsuario - idadeDoAmigo;
console.log(
  "A diferença de idade entre vocês é de",
  diferencaDeIdade,
  "ano(s)"
);

//--------------------------------- QUESTÃO 2  ---------------------------------
// a)
const numPar = Number(prompt("Insira um número par"));

// b)
const restoDaDivisao = numPar % 2;

// c)
console.log(restoDaDivisao); // Todo número par dividido por dois tem o resto igual ao número zero

// d) Todo número ímpar dividido por dois tem o resto igual ao número um

//--------------------------------- QUESTÃO 3  ---------------------------------
const idadeEmAnos = Number(prompt("Qual é a sua idade?"));
const umAnoEmDias = Number(365);
const umDiaEmHoras = Number(24);

// a) A idade do usuário em meses
const idadeEmMeses = idadeEmAnos * 12;
console.log(`Sua idade equivale a ${idadeEmMeses}`, `meses`);

// b) A idade do usuário em dias
const idadeEmDias = idadeEmAnos * umAnoEmDias;
console.log(`Sua idade equivale a ${idadeEmDias}`, `dias`);

// c) A idade do usuário em horas
const idadeEmHoras = idadeEmAnos * (umDiaEmHoras * umAnoEmDias);
console.log(`Sua idade equivale a ${idadeEmHoras}`, `horas`);

//--------------------------------- QUESTÃO 4  ---------------------------------
const numUm = Number(prompt("Insira um número"));
const numDois = Number(prompt("Insira outro número"));

const maiorQue = numUm > numDois;
const igual = numUm === numDois;
const divisivelPor1 = numUm % numDois === 0;
const divisivelPor2 = numDois % numUm === 0;

console.log("O primeiro numero é maior que segundo?", maiorQue);
console.log("O primeiro numero é igual ao segundo?", igual);
console.log("O primeiro numero é divisível pelo segundo?", divisivelPor1);
console.log("O segundo numero é divisível pelo primeiro?", divisivelPor2);
