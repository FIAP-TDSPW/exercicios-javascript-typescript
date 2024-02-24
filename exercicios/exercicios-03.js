/** 
 * Exercício de Lógica e Programação em JavaScript
 * 
 * Objetivo:
 * O objetivo deste exercício é praticar o uso de operadores em JavaScript, aplicando-os em funções simples.
 * 
 * Instruções:
 * 1. Utilizando a linguagem JavaScript, você deverá implementar três funções distintas:
 *    - calcularDesconto(preco, percentualDesconto): Esta função recebe dois parâmetros, o preço original de um produto e o percentual de desconto a ser aplicado. Ela deve retornar o preço com o desconto aplicado.
 *    - verificarParOuImpar(numero): Esta função recebe um número como parâmetro e deve retornar a string 'par' se o número for par e 'ímpar' se for ímpar.
 *    - verificarNegativo(numero): Esta função recebe um número como parâmetro e deve retornar true se o número for negativo e false caso contrário.
 * 
 * 2. Utilize os operadores necessários para realizar as operações dentro das funções.
 * 3. Teste suas funções com diferentes valores de entrada para garantir que elas estão funcionando corretamente.
 * 
 * Exemplo de Uso:
 * console.log(calcularDesconto(100, 10)); // Deve retornar 90
 * console.log(verificarParOuImpar(5)); // Deve retornar 'ímpar'
 * console.log(verificarNegativo(-3)); // Deve retornar true
 * 
 * Observações:
 * - Certifique-se de compreender como os operadores aritméticos e condicionais são utilizados dentro das funções.
 * - Experimente criar seus próprios casos de teste para verificar se as funções estão se comportando conforme o esperado.
 * - Caso encontre dificuldades, consulte a documentação do JavaScript ou peça ajuda a um colega ou professor.
 * 
 */

function calcularDesconto(preco, percentualDesconto) {
    desconto = preco*percentualDesconto
    precoDescontado = preco-desconto
    console.log(precoDescontado)
}

calcularDesconto(100, 0.4)
calcularDesconto(349.99, .25)

function verificarParOuImpar(num) {
    if (num % 2 == 0) {
        console.log(`O numero ${num} é par`)
    } else {
        console.log(`O numero ${num} é impar`)
    }
}

verificarParOuImpar(6)
verificarParOuImpar(99)
verificarParOuImpar(10)
verificarParOuImpar(-3)
verificarParOuImpar(6.6)