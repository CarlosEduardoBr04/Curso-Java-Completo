// === Exemplo com função "dobro" ===

// Forma tradicional de declarar uma função anônima em uma variável
let dobro = function (a) {
    return 2 * a;
}

// Reescrita como arrow function com bloco e return explícito
dobro = (a) => {
    return 2 * a;
}

// Versão ainda mais curta: arrow function com retorno implícito
dobro = a => 2 * a;

console.log(dobro(Math.PI));
// Saída: 6.283185307179586
// Math.PI ≈ 3.1416, multiplicado por 2 dá aproximadamente 6.2832

// === Exemplo com função "ola" ===

// Forma tradicional
let ola = function () {
    return 'Olá';
}

// Com arrow function (sem parâmetros, retorno explícito)
ola = () => 'Olá';  // retorno implícito com arrow

// Com parâmetro sublinhado (usado apenas por convenção)
ola = _ => 'Olá';   // "_" é um parâmetro válido, mesmo que não seja usado

console.log(ola());
// Saída: "Olá"
// O uso de "_" permite manter a sintaxe com parâmetro, mesmo se não for utilizado
