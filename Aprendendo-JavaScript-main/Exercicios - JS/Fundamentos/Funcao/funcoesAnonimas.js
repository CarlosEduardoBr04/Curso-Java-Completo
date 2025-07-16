// Função soma que retorna a soma de dois números
const soma = function (a, b) {
    return a + b;
}

// Função imprimirResultado que recebe dois números e uma função de operação (padrão é soma)
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
// Usa o valor padrão "soma", imprime 7

imprimirResultado(3, 4, soma);
// Passa explicitamente a função soma, imprime 7

imprimirResultado(3, 4, function (x, y) {
    return x - y;
});
// Passa função anônima que subtrai, imprime -1

imprimirResultado(3, 4, (x, y) => x * y);
// Passa arrow function que multiplica, imprime 12

// Objeto pessoa com método falar
const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar(); // Imprime "Opa"
