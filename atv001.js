const pessoa = {
    nome: "João Silva",
    sexo: "Masculino",
    idade: 30,
    salario: 4500.00
  };
  
  // Exibindo os dados
  console.log("Nome:", pessoa.nome);
  console.log("Sexo:", pessoa.sexo);
  console.log("Idade:", pessoa.idade);
  console.log("Salário: R$", pessoa.salario.toFixed(2));

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano_de_fabricacao: 2019,
    ano_do_modelo: 2020,
    preco: 120000.00
};


 let teste = "Teste de variável";


console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano_de_fabricacao);
console.log("Ano do Modelo:", carro.ano_do_modelo);
console.log("Preço: R$", carro.preco.toFixed(2));

console.log(`teste: ${teste}`);