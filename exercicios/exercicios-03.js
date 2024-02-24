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

/* 1. Utilizando a linguagem JavaScript, você deverá implementar três funções distintas:*/
// Função para calcular o desconto
function calcularDesconto(preco, percentualDesconto) {
    // Verifica se o percentual de desconto é válido
    if (percentualDesconto < 0 || percentualDesconto > 100) {
        return "Percentual de desconto inválido";
    }

    // Calcula o valor do desconto
    const desconto = (preco * percentualDesconto) / 100;

    // Retorna o preço com desconto
    return preco - desconto;
}

// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Função para verificar se um número é negativo
function verificarNegativo(numero) {
    return numero < 0;
}

// Exemplos de uso das funções
console.log(calcularDesconto(100, 10)); // Saída esperada: 90
console.log(verificarParOuImpar(5));    // Saída esperada: ímpar
console.log(verificarNegativo(-3));     // Saída esperada: true

/*  2. Utilize os operadores necessários para realizar as operações dentro das funções.*/
// Função para calcular o desconto
function calcularDesconto(preco, percentualDesconto) {
    // Calcula o valor do desconto
    const desconto = preco * (percentualDesconto / 100);

    // Retorna o preço com desconto
    return preco - desconto;
}

// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
}

// Função para verificar se um número é negativo
function verificarNegativo(numero) {
    return numero < 0;
}

// Exemplos de uso das funções
console.log(calcularDesconto(100, 10)); // Saída esperada: 90
console.log(verificarParOuImpar(5));    // Saída esperada: ímpar
console.log(verificarNegativo(-3));     // Saída esperada: true




/*3. Teste suas funções com diferentes valores de entrada para garantir que elas estão funcionando corretamente.*/
console.log(calcularDesconto(100, 10)); // Saída esperada: 90
console.log(calcularDesconto(50, 20));  // Saída esperada: 40
console.log(calcularDesconto(200, 25)); // Saída esperada: 150

console.log(verificarParOuImpar(5));    // Saída esperada: ímpar
console.log(verificarParOuImpar(10));   // Saída esperada: par
console.log(verificarParOuImpar(0));    // Saída esperada: par

console.log(verificarNegativo(-3));     // Saída esperada: true
console.log(verificarNegativo(5));      // Saída esperada: false
console.log(verificarNegativo(0));      // Saída esperada: false
