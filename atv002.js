function calcularMedia() {
let numb = parseFloat(document.getElementById("numero1").value);
let numb2 = parseFloat(document.getElementById("numero2").value);

if (isNaN(numb) || isNaN(numb2)) {
    alert("Por favor, insira números válidos.");
} else {
    let media = (numb + numb2) / 2;
    document.getElementById("resultado").textContent = `A média é: ${media.toFixed(2)}`;
}
}
function apagarCampos() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').innerText = '';
}
