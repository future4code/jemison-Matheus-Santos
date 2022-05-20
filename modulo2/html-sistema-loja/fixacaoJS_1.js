/* ==================== ENTENDENDO A LÓGICA ==================== */
// Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

// Salario Fixo = 2000
// Valor do carro: informado pelo usuário

// Comissão por carro vendido = R$100
// Comissão de 5% sobre as vendas: 5% * Valor do Carro

// Quantidade de carros vendidos: informado pelo usuário
// Valor total de vendas: informado pelo usuário

// Salário final informado no output

/* ==================== CRIAÇÃO DA FUNÇÃO ==================== */
// Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioFixo = 2000; // informado no enunciado
    const valorDoCarro = 30000; // informado pelo usuário
    const comissaoPorCarroVendido = 100; // informado no enunciado
    const comissaoSobreAsVendas = 0.05 * valorDoCarro;

}

calculaSalario();

/* ==================== RETORNANDO O RESULTADO ==================== */
// Retorne o salário final do mês do funcionário com base nesses valores.
