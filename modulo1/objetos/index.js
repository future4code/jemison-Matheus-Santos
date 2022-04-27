// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// Exercício 1
// Letra a)
// Matheus Nachtergaele
// Virginia Cavendish
// { canal: "Globo", horario: "14h" }

// Exercício 2
// Letra a)
// { nome: 'Juca', idade: 3, raca: 'SRD' }
// { nome: 'Juba', idade: 3, raca: 'SRD' }
// { nome: 'Jubo', idade: 3, raca: 'SRD' }

// Letra b) Ela faz uma cópia de um objeto, dando a possibilidade da mesma ser manipulada posteriormente, como ocorreu no 2º e 3º console.log.

// Exercício 3
// Letra a)
// false
// undefined

// Letra b)
// O false foi porque a função chamou o objeto, selecionando um de seus valores declarados.
// O undefined ocorreu porquê esse parâmetro não havia sido declarado no objeto.

// ===================== AGORA VEM A BOMBA ===================== //

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Exercício 1
// Letra a)
/* const pessoa = {
  nome: "Matheus",
  apelidos: ["Math", "Theus", "Breka"],
};

const imprimeMensagem = (pessoa) => {
  console.log(
    `Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`
  );
  return pessoa;
};

imprimeMensagem(pessoa); */

// Letra b)
/* const novosApelidos = {
  ...pessoa,
  apelidos: ["Queiroz", "Theu", "O absorvedor"],
};

imprimeMensagem(novosApelidos);
 */

// Exercício 2
// Letra a)
/* const pessoa1 = {
  nome: "Peter",
  idade: 25,
  profissao: "fotógrafo",
};

const pessoa2 = {
  nome: "Bruce",
  idade: 34,
  profissao: "CEO da Wayne Enterprises",
}; */

// Letra b)
/* const pessoas = (pessoa1, pessoa2) => {
  const informacoesDasPessoas = [
    pessoa1.nome,
    pessoa1.nome.length,
    pessoa1.idade,
    pessoa1.profissao,
    pessoa1.profissao.length,
    pessoa2.nome,
    pessoa2.nome.length,
    pessoa2.idade,
    pessoa2.profissao,
    pessoa2.profissao.length,
  ];

  console.log(informacoesDasPessoas);
  return informacoesDasPessoas;
};

pessoas(pessoa1, pessoa2); */

// Exercício 3
// Letra a)
const carrinho = [];

// Letra b)
const laranja = {
  nome: "laranja",
  disponibilidade: true,
};

const melancia = {
  nome: "melancia",
  disponibilidade: true,
};

const uva = {
  nome: "uva",
  disponibilidade: true,
};
// Letra c)
const recebeFruta = (fruta) => {
  return carrinho.push(fruta);
};

recebeFruta(laranja);
recebeFruta(melancia);
recebeFruta(uva);

// Letra d)
console.log(carrinho);
