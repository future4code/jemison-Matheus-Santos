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

function retornaObjetoEntreDoisNumeros(num1, num2) {
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
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
