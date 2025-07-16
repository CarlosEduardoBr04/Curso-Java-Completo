// Declara uma função chamada "soma"
function soma() {
    // Inicializa uma variável chamada "soma" com valor 0
    let soma = 0 

    // Percorre todos os argumentos passados para a função
    // "arguments" é um objeto semelhante a array contendo todos os argumentos passados
    // "i" representa o índice de cada argumento (0, 1, 2, ...)
    for (i in arguments) {
        // Adiciona o valor do argumento atual à variável soma
        soma += arguments[i]
        // Se os argumentos forem números, isso funciona.
        // Se forem strings, ele faz concatenação (como em soma('a', 'b')).
    }

    // Retorna o valor final da soma (ou concatenação, dependendo dos tipos)
    return soma
}

// Testes da função:

// Nenhum argumento passado → soma continua 0
console.log(soma()) // saída: 0

// Um único argumento (1) → soma = 1
console.log(soma(1)) // saída: 1

// Três argumentos numéricos → soma = 1.1 + 2.2 + 3.3 = 6.6
console.log(soma(1.1, 2.2, 3.3)) // saída: 6.6

// Três números + uma string → soma numérica falha na string, vira concatenação de string
// soma = 1.1 + 2.2 + 3.3 = 6.6 → 6.6 + "teste" = "6.6teste" (conversão implícita)
console.log(soma(1.1, 2.2, 3.3, "teste")) // saída: "6.6teste"

/// Três strings → soma = "a" + "b" + "c" = "abc"
console.log(soma('a', 'b', 'c')) // saída: "abc"
