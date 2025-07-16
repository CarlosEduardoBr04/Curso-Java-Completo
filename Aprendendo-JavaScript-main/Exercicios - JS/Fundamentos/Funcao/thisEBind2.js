// === Versão 1: Usando Arrow Function (forma moderna e preferida) ===
function Pessoa1() {
    this.idade = 0;

    // Arrow function mantém o "this" do contexto em que foi criada (a instância de Pessoa1)
    setInterval(() => {
        this.idade++;
        console.log(`Pessoa1: ${this.idade}`);
    }, 1000);
}

new Pessoa1();
// Resultado: a idade será exibida no console a cada segundo (1, 2, 3...)
// "this" funciona corretamente pois arrow function não redefine o contexto



// === Versão 2: Usando bind(this) ===
function Pessoa2() {
    this.idade = 0;

    // Função tradicional redefine o "this", então usamos bind para corrigir
    setInterval(function () {
        this.idade++;
        console.log(`Pessoa2: ${this.idade}`);
    }.bind(this), 1000);
}

new Pessoa2();
// Resultado: idade aumenta corretamente
// "bind(this)" força a função a usar o contexto da instância


// === Versão 3: Usando variável auxiliar (self) ===
function Pessoa3() {
    this.idade = 0;
    const self = this; // Armazena o contexto original

    // Função tradicional usa "self" para manter acesso à instância
    setInterval(function () {
        self.idade++;
        console.log(`Pessoa3: ${self.idade}`);
    }, 1000);
}

new Pessoa3();
// Resultado: funciona corretamente, idade aumenta a cada segundo
// "self" aponta para a instância mesmo dentro da função tradicional

// === Versão 4: Usando função tradicional sem bind ===
function Pessoa4() {
    this.idade = 0;

    // Função tradicional sem bind não funciona corretamente
    setInterval(function () {
        this.idade++;
        console.log(`Pessoa4: ${this.idade}`);
    }, 1000);
}

new Pessoa4();