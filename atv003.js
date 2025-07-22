function dolar() {
    let valor = parseFloat(document.getElementById("valor").value);
    let cotacao = 5.58;
    let resultado = document.getElementById("resultado"); // Declare a variável antes de usá-la

    if (isNaN(valor) || valor <= 0) {
        resultado.innerHTML = "Por favor, insira um valor válido.";
    } else {
        let conversao = (valor * cotacao).toFixed(2);
        resultado.innerHTML = `R$ ${conversao}`;
    }

}