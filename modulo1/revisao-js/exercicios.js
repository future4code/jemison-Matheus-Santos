// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
/* const array = [3, 2, 1, 4, 7];

function retornaTamanhoArray(array) {
    return array.length;
} */

// EXERCÍCIO 02
/* const array = [8, 23, 16, 10];

function retornaArrayInvertido(array) {
    array.reverse();

    return array;
} */

// EXERCÍCIO 03
/* const array = [90, 50, 80, 20, 10];

function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b);

    return array;
} */

// EXERCÍCIO 04
/* let array = [1, 2, 3, 4, 5, 6];

 function retornaNumerosPares(array) {
    const resultado = array.filter((numero) => numero % 2 === 0);
    console.log(resultado)
    return resultado;
} */

// EXERCÍCIO 05
/* function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array
        .map((numero, index, array) => numero ** 2)
        .filter((numero) => numero % 2 === 0);
    console.log(numerosPares);
    return numerosPares;
} */

// EXERCÍCIO 06
/* let array = [1, 5, 3, 7, 5, 2];

function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
} */

// EXERCÍCIO 07

/* function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
    const diferenca = maiorNumero - menorNumero;

    return (objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca,
    });
} */

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
/* const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
};

function retornaChamadaDeFilme(filme) {
    const chamadaDoFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;

    return chamadaDoFilme;
} */

// EXERCÍCIO 12
/* const pessoa = {
    nome: "Matheus",
    idade: 26,
    email: "matheusqueirozds@gmail.com",
    endereco: "Salvador, BA",
};

pessoa.nome = "Anônimo";

function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: "Anônimo".toUpperCase(),
    };
    return pessoaAnonima;
} */

// EXERCÍCIO 13A

const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 },
];

function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
    });
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
