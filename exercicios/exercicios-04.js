/** 
 * Exercício de Estruturas de Controle em JavaScript
 * 
 * Objetivo:
 * O objetivo deste exercício é praticar o uso da estrutura de controle switch em JavaScript.
 * 
 * Instruções:
 * Implemente a função verificarDiaSemana(numero) que recebe um número correspondente a um dia da semana (1 para Domingo, 2 para Segunda-feira, etc.) e retorna o nome do dia.
 * 
 * Utilize a estrutura de controle switch para implementar a lógica da função.
 * 
 * Teste a função com diferentes valores de entrada para garantir que ela está funcionando corretamente.
 * 
 * Exemplo de Uso:
 * console.log(verificarDiaSemana(1)); // Deve retornar 'Domingo'
 * console.log(verificarDiaSemana(3)); // Deve retornar 'Terça-feira'
 * console.log(verificarDiaSemana(6)); // Deve retornar 'Sexta-feira'
 * console.log(verificarDiaSemana(8)); // Deve retornar 'Dia inválido'
 * 
 * Observações:
 * - Certifique-se de compreender como a estrutura de controle switch é utilizada dentro da função.
 * - Caso encontre dificuldades, consulte a documentação do JavaScript ou peça ajuda a um colega ou professor.
 * 
 */


function verificarDiaSemana(numero) {
    let diaSemana;
    switch (numero) {
        case 1:
            diaSemana = 'Domingo';
            break;
        case 2:
            diaSemana = 'Segunda-feira';
            break;
        case 3:
            diaSemana = 'Terça-feira';
            break;
        case 4:
            diaSemana = 'Quarta-feira';
            break;
        case 5:
            diaSemana = 'Quinta-feira';
            break;
        case 6:
            diaSemana = 'Sexta-feira';
            break;
        case 7:
            diaSemana = 'Sábado';
            break;
        default:
            diaSemana = 'Dia inválido';
    }
    return diaSemana;
}

// Teste da função verificarDiaSemana
console.log(verificarDiaSemana(1)); // Saída esperada: 'Domingo'
console.log(verificarDiaSemana(3)); // Saída esperada: 'Terça-feira'
console.log(verificarDiaSemana(6)); // Saída esperada: 'Sexta-feira'
console.log(verificarDiaSemana(8)); // Saída esperada: 'Dia inválido'
