/* Neste exercício, você encontrará a implementação de uma função em JavaScript:

1. Função para verificar a maioridade

Sua tarefa é criar uma nova função:



2. Função para dobrar um número

Esta função deve receber um parâmetro do tipo number e retornar o dobro desse número.

Após criar essa nova função, teste-a com alguns valores e imprima o resultado no console.

Você pode executar o código usando Node.js ou qualquer outro ambiente de execução JavaScript para verificar se a nova função foi implementada corretamente. */

/* Código para o aluno:

// Função para verificar a maioridade
function verificarMaioridade(idade) {
   return idade >= 18;
}

// Função para dobrar um número
function dobrarNumero(numero) {
   return numero * 2;
}

// Teste da função
console.log(dobrarNumero(5)); // Deve imprimir 10
console.log(dobrarNumero(10)); // Deve imprimir 20

*/




function verificarMaioridade(idade) {
   if (idade >=18) {
      console.log("É adulto")
   }else{
      console.log("Não é adulto")
   }
}

verificarMaioridade(21)

function dobrarValor(valor) {
   return valor+valor;
}

console.log(dobrarValor(10))