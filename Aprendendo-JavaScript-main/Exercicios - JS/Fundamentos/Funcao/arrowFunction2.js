function pessoa() {
    this.idade = 0;

    // setInterval chama uma função repetidamente a cada 1000ms (1 segundo)
    // Usamos arrow function para manter o "this" referenciando o objeto "pessoa"
    setInterval(() => {
        this.idade++;              // Incrementa a propriedade idade da instância
        console.log(this.idade);  // Mostra a idade atual no console
    }, 1000);
}

new pessoa(); // Cria uma nova instância de pessoa que vai incrementar idade a cada segundo
