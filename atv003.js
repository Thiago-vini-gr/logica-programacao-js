function dolar() {
    let valor = parseFloat(document.getElementById("valor").value);
    let cotacao = 5.58;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultado.innerHTML = "Por favor, insira um valor válido.";
        alert("Por favor, insira um valor válido.");
    } else {
        let conversao = (valor * cotacao).toFixed(2);
        resultado.innerHTML = `R$ ${conversao}`;
        alert(`O valor convertido em Reais é: R$ ${conversao}`);
    }
}