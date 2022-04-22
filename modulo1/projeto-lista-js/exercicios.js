// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt("altura");
  let largura = prompt("largura");

  let calculaAreaRetangulo = altura * largura;

  console.log(calculaAreaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Ano atual");
  let anoDeNascimento = prompt("Ano de Nascimento");

  imprimeIdade = anoAtual - anoDeNascimento;

  console.log(imprimeIdade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual o seu primeiro nome?");
  let idade = prompt("Qual a sua idade?");
  let email = prompt("Digite o seu e-mail principal");

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let primeiraCor = prompt("Qual é a sua cor favorita?");
  let segundaCor = prompt("Qual é a sua segunda cor favorita?");
  let terceiraCor = prompt("Qual é a sua terceira cor favorita?");

  let imprimeTresCoresFavoritas = [primeiraCor, segundaCor, terceiraCor];

  console.log(imprimeTresCoresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
