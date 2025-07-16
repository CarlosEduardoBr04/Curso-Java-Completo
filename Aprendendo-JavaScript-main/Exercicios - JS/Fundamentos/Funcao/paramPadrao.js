// === Estratégia 1: usando operador lógico OR (||) ===
function soma1(a, b, c) {
    // Se a variável for falsy (false, 0, '', null, undefined, NaN), assume 1 como valor padrão
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log('soma1:')
console.log(soma1())               // 1 + 1 + 1 = 3
console.log(soma1(2))              // 2 + 1 + 1 = 4
console.log(soma1(1, 2, 3))        // 1 + 2 + 3 = 6
console.log(soma1(0, 0, 0))        // 1 + 1 + 1 = 3 (0 é ignorado pois é "falsy")

// === Estratégia 2: usando valores padrão diretamente nos parâmetros (forma moderna) ===
function soma2(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log('\nsoma2:')
console.log(soma2())               // 1 + 1 + 1 = 3
console.log(soma2(2))              // 2 + 1 + 1 = 4
console.log(soma2(1, 2, 3))        // 1 + 2 + 3 = 6
console.log(soma2(0, 0, 0))        // 0 + 0 + 0 = 0

// === Estratégia 3: usando typeof para testar se o valor é undefined ===
function soma3(a, b, c) {
    // typeof sempre retorna string, por isso usamos "undefined"
    a = (typeof a !== "undefined") ? a : 1
    b = (typeof b !== "undefined") ? b : 1
    c = (typeof c !== "undefined") ? c : 1
    return a + b + c
}

console.log('\nsoma3:')
console.log(soma3())               // 1 + 1 + 1 = 3
console.log(soma3(2))              // 2 + 1 + 1 = 4
console.log(soma3(1, 2, 3))        // 1 + 2 + 3 = 6
console.log(soma3(0, 0, 0))        // 0 + 0 + 0 = 0

// === Estratégia 4: usando arguments e isNaN ===
function soma4() {
    let soma = 0

    for (let i = 0; i < 3; i++) {
        // Pega o argumento ou undefined se não existir
        let valor = Number(arguments[i])

        // Se não for número válido, define valor padrão 1
        if (isNaN(valor)) {
            valor = 1
        }

        soma += valor
    }

    return soma
}

console.log('\nsoma4:')
console.log(soma4())                          // 1 + 1 + 1 = 3
console.log(soma4(2))                         // 2 + 1 + 1 = 4
console.log(soma4(1, 2, 3))                   // 1 + 2 + 3 = 6
console.log(soma4(0, 0, 0))                   // 0 + 0 + 0 = 0
console.log(soma4("a", 2, undefined))         // "a" → NaN, undefined → NaN → 1 + 2 + 1 = 4
console.log(soma4("3", "4", "5"))             // strings numéricas → 3 + 4 + 5 = 12


// === OBSERVAÇÕES FINAIS ===
//
// - soma1: é simples, mas ignora valores válidos como 0, pois considera "falsy"
// - soma2: é a forma moderna e recomendada (clara, segura e aceita 0 normalmente)
// - soma3: funciona bem, útil para versões antigas do JS que não suportam valores padrão nos parâmetros
// - soma4: mostra como tratar argumentos manualmente com `arguments` e validar com `isNaN()`
//          — útil se a quantidade de parâmetros for indefinida
