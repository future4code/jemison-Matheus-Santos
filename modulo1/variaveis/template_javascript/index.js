/* ========== EXERCÍCIO 1 ========== */
//  a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// RESPOSTA:
/* let nome; */

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// RESPOSTA:
/* let idade; */

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
// RESPOSTA:
/*console.log(typeof nome);
console.log(typeof idade); */

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// RESPOSTA:
/* Porque não foi definido nenhum valor de variável. */

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// RESPOSTA:
/*const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?"); */

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// RESPOSTA 1:
/* console.log(typeof nome);
console.log(typeof idade); */

// RESPOSTA 2:
/* Notei que o tipo de ambas as variáveis é string. */

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
// RESPOSTA:
/* console.log("Olá", nome + ", você tem", idade, "anos."); */

/* ========== EXERCÍCIO 2 ========== */
// a) Crie três novas variáveis, contendo as respostas

// RESPOSTA
/* const sonoProfundo = "Você está dormindo bem?";
const projetoVerao = "Você está se exercitando?";
const AguaeVida = "Você está bebendo água?";

let primeiraResposta = "Apenas quando não sou o Cavaleiro da Lua. 🌙";
let segundaResposta =
  "Projeto verão já entrou em produção. Pena que o inverno tá chegando. 💀❄";
let terceiraResposta =
  "Bebendo lágrimas e chorando água, depois da aula de variáveis. 😭"; */

// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
// RESPOSTA:
/* console.log(sonoProfundo, "-", primeiraResposta);
console.log(projetoVerao, "-", segundaResposta);
console.log(AguaeVida, "-", terceiraResposta); */

/* ========== EXERCÍCIO 3 ========== */
// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).
// RESPOSTA
/* let a = 10;
let b = 25;
let c;

c = b;
b = a;
a = c;
console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
console.log("O novo valor de c é", c); */

/* ========== DESAFIOS ========== */
