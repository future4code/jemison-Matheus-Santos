// a) Através do parâmetro 'process.argv', que enviará os dados inseridos para a aplicação.

// b)
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const recebeDadosUsuario = (nome, idade) => {
   return `Olá, ${nome}! Você tem ${idade} anos.`;
};

console.log(recebeDadosUsuario(nome, idade));

// c)
const idadeSeteAnos = idade + 7;
const recebeNovosDadosUsuario = (idadeSeteAnos) => {
   return `${recebeDadosUsuario(
      nome,
      idade
   )} Em sete anos você terá ${idadeSeteAnos}.`;
};
console.log(recebeNovosDadosUsuario(idadeSeteAnos));
