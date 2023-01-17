const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const recebeOperacao = (operacao) => {
   const soma = num1 + num2;
   const subtracao = num1 - num2;
   const multiplicacao = num1 * num2;
   const divisao = num1 / num2;

   switch (operacao) {
      case "soma":
         return `A soma desses números é igual a ${soma}.`;
         break;
      case "subtracao":
         return `A subtração desses números é igual a ${subtracao}.`;
         break;
      case "multiplicacao":
         return `A multiplicação desses números é igual a ${multiplicacao}.`;
         break;
      case "divisão":
         return `A divisão desses números é igual a ${divisao}.`;
         break;
      default:
         return "Você inseriu alguma informação errada. Tente novamente evitando acentuações.";
         break;
   }
};

console.log(recebeOperacao(operacao));
