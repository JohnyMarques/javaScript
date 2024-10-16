function validarCampos() {
    
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;
    
    // Convertendo os valores para números
    campoA = Number(campoA);
    campoB = Number(campoB);
    


    if (campoB > campoA) {
        document.getElementById('resultado').innerText = "Campo B é maior que o Campo A. Você venceu o teste!";
    } else {
        document.getElementById('resultado').innerText = "Campo B não é maior que o Campo A, você falhou no teste.";
    }
    
}