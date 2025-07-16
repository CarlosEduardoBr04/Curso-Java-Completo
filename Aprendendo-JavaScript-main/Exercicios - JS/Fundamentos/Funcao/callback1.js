// Array com nomes de fabricantes de carros
const fabricantes = ["BMW", "Fiat", "Honda", "Toyota", "Volkswagen"];

// Função que imprime o índice (mais 1) e o nome recebido
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

// Usando forEach para percorrer o array e chamar a função imprimir para cada item
fabricantes.forEach(imprimir);
// Saída:
// 1. BMW
// 2. Fiat
// 3. Honda
// 4. Toyota
// 5. Volkswagen

// Usando forEach com função anônima diretamente
fabricantes.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
});
// Mesma saída que acima

// Usando forEach com arrow function
fabricantes.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`);
});
// Mesma saída que acima
