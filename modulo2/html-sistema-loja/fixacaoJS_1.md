Não consegui fazer pelo programa, pois segui essa lógica:

Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

>salarioFixoMensal = R$2000

>comissaoPorCarroVendido = R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas). 

```javascript  
const salarioFixoMensal = 2000;
const valorDoCarro = Number(prompt("Qual o valor do carro?"));
const qtdeCarrosVendidos = Number(prompt("Quantos carros você vendeu?"));
const comissaoPorCarroVendido = 100 + 0.05 * valorDoCarro;
const valorTotalVendas = qtdeCarrosVendidos * valorDoCarro;

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioFinalDoMes = salarioFixoMensal + comissaoPorCarroVendido;

    console.log(`1. Salário fixo mensal:R$ ${salarioFixoMensal}`);
    console.log(`2. Valor do Carro: R$ ${valorDoCarro}`);
    console.log(`3. Quantidade de carros vendidos: ${qtdeCarrosVendidos}`);
    console.log(`4. Comissão por carro vendido: R$ ${comissaoPorCarroVendido}`);
    console.log(`5. Valor total de vendas: R$ ${valorTotalVendas}`);
    console.log(`6. Salário final: R$ ${salarioFinalDoMes}`);

    return salarioFinalDoMes;
}

calculaSalario(qtdeCarrosVendidos, valorTotalVendas);
```

Retorne o salário final do mês do funcionário com base nesses valores.
