/** 
 * Exercício de Loops em JavaScript
 * 
 * Objetivo:
 * O objetivo deste exercício é praticar o uso de loops em JavaScript, como o for.
 * 
 * Instruções:
 * Implemente duas funções distintas:
 *    - imprimirNumeros(numero): Esta função recebe um número como parâmetro e imprime todos os números de 1 até o número fornecido.
 *    - imprimirPares(numero): Esta função recebe um número como parâmetro e imprime todos os números pares de 2 até o número fornecido.
 * 
 * Utilize a estrutura de loop for para implementar a lógica das funções.
 * 
 * Teste as funções com diferentes valores de entrada para garantir que elas estão funcionando corretamente.
 * 
 * Exemplo de Uso:
 * console.log("Números até 5:");
 * imprimirNumeros(5); // Deve imprimir 1, 2, 3, 4, 5
 * 
 * console.log("Números pares até 10:");
 * imprimirPares(10); // Deve imprimir 2, 4, 6, 8, 10
 * 
 * Observações:
 * - Certifique-se de compreender como a estrutura de loop for é utilizada dentro das funções.
 * - Experimente criar seus próprios casos de teste para verificar se as funções estão se comportando conforme o esperado.
 * - Caso encontre dificuldades, consulte a documentação do JavaScript ou peça auxílio a um colega ou professor.
 */


function imprimirNumeros(numero){
    let contador = 0;
    do {
        console.log(contador)
        contador++
    } while (contador<=numero);
}

//imprimirNumeros(10)

/*
function imprimirPares(numero){
    for (i = 2, i < numero, i++) {
        console.log(i);
    }
}

imprimirPares(10)
*/