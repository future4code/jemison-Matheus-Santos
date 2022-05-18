// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    array.reverse();

    return array;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b);

    return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((numero) => numero % 2 === 0);

    return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosParesElevadosADois = array
        .map((numero, index, array) => numero ** 2)
        .filter((numero) => numero % 2 === 0);

    return numerosParesElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    return maiorNumero;
}

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
function retornaNPrimeirosPares(n) {
    const numerosPares = [];

    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (
        ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB
    ) {
        if (ladoA === ladoB && ladoB === ladoC) {
            return `Equilátero`;
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            return `Isósceles`;
        } else {
            return `Escaleno`;
        }
    }

    return classificaTriangulo;
}

// EXERCÍCIO 10
const array = [3, 2, 1, 4, 7, 6, 5];

function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b);
    const segundoMenorNumero = array[1];
    const segundoMaiorNumero = array[array.length - 2];

    const novoArray = [];
    novoArray.push(segundoMaiorNumero, segundoMenorNumero);

    return novoArray;
}

// EXERCÍCIO 11
const filme = {
    nome: "Homem-aranha",
    ano: 2002,
    diretor: "Sam Raimi",
    atores: ["Tobey Maguire", "Kisten Dunst", "Willem Dafoe", "James Franco"],
};

function retornaChamadaDeFilme(filme) {
    const chamadaDoFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;

    return chamadaDoFilme;
}

// EXERCÍCIO 12
const pessoa = {
    nome: "Matheus",
    idade: 26,
    email: "matheusqueirozds@gmail.com",
    endereco: "Salvador, BA",
};

function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: "Anônimo".toUpperCase(),
    };
    return pessoaAnonima;
}

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
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60;
    });
}

// EXERCÍCIO 14
const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function retornaContasComSaldoAtualizado(contas) {
    let total = 0;
    for (let conta of contas) total += conta.saldoTotal;
    return total;
}

// EXERCÍCIO 15A
const consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true;
        }
    });

    return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
