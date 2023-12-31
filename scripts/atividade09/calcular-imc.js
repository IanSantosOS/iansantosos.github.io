const tela = document.querySelector("#alert");

const nome = document.querySelector("#nome");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");

function mostrarTela() {
    const valorPeso = Number(peso.value.replace(',', '.'));
    const valorAltura = Number(altura.value.replace(',', '.'));
    
    if (isNaN(valorAltura) || isNaN(valorPeso)) {
        alert('Caracteres não numerais nos campos Peso ou Altura');
        return;
    }
    
    const imc = calcularIMC(valorPeso, valorAltura);
    
    tela.innerHTML = `
    <div id="fechar" onclick="fecharTela()">X</div>
    <p>Olá, ${nome.value.trim()}.</p>
    <p>O seu IMC é de ${imc}</p>
    `;
    tela.style.display = "block";
}

function fecharTela() {
    tela.style.display = "none";
}

function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc.toFixed(2);
}