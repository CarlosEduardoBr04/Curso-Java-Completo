// Função tradicional que compara se o "this" é igual ao parâmetro recebido
let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global); 
// Saída: true
// No Node.js, quando chamada normalmente, o "this" dentro da função tradicional aponta para o objeto global

const obj = {};
comparaComThis = comparaComThis.bind(obj);
// Agora, o "this" da função está permanentemente ligado ao objeto "obj"

comparaComThis(global); 
// Saída: false
// Porque o "this" está fixado em "obj", não é mais o global

comparaComThis(obj); 
// Saída: true
// Porque "this" é o "obj" que usamos no bind

// Função arrow que compara "this" com o parâmetro recebido
let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global); 
// Saída: false
// Arrow functions não possuem "this" próprio, herdam o "this" do contexto léxico (aqui, provavelmente module.exports)

comparaComThisArrow(module.exports); 
// Saída: true
// O "this" da arrow function é o contexto externo, que em Node.js é module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj);

comparaComThisArrow(obj); 
// Saída: false
// O bind não muda o "this" da arrow function, pois ele é fixo no contexto onde foi criada

comparaComThisArrow(module.exports); 
// Saída: true
// Continua verdadeiro, pois "this" da arrow function continua sendo module.exports
