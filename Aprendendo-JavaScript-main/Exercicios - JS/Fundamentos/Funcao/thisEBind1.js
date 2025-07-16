// === Exemplo de uso do "this" e "bind" em JavaScript ===

const pessoa = {
    saudacao: 'Bom dia',

    // Método que imprime a saudação do objeto
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
// Saída: "Bom dia"
// Aqui, o método é chamado diretamente no contexto do objeto "pessoa".
// Portanto, o "this" dentro da função aponta corretamente para o objeto "pessoa".

const falar = pessoa.falar;
// A função foi atribuída a uma variável separada.
// Isso quebra o vínculo com o objeto original.

falar(); 
// Saída: undefined
// Agora o "this" não aponta mais para o objeto "pessoa".
// Em vez disso, no modo estrito (`strict mode`), será `undefined`.
// Fora do modo estrito (em browsers), pode até apontar para o `window`.

const falarDePessoa = pessoa.falar.bind(pessoa);
// O método "bind" cria uma nova função com "this" permanentemente associado ao objeto "pessoa".

falarDePessoa(); 
// Saída: "Bom dia"
// Mesmo fora do objeto, a função mantém o "this" correto por causa do "bind".



//this depende de como a função é chamada, e não de onde foi definida.
//Quando retiramos um método do objeto (como const falar = pessoa.falar), o this perde o vínculo com o objeto.
//O método bind(obj) serve para fixar o valor de this em um objeto específico.
// Isso é útil quando queremos garantir que uma função sempre use um determinado contexto, mesmo quando chamada de forma diferente.
// Por exemplo, se quisermos passar uma função como callback ou usá-la em um evento, o `bind` assegura que o `this` sempre se refira ao objeto desejado.
//Isso é essencial quando queremos manter o contexto original de um método, mesmo quando o passamos como parâmetro ou usamos em outro lugar.

