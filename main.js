function validarCampos() {
    
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;
    
    // Convertendo os valores para números
    campoA = Number(campoA);
    campoB = Number(campoB);
    


    if (campoB > campoA) {
        document.getElementById('resultado').innerText = "VALOR DIGITADO NO CAMPO B É MAIOR QUE O CAMPO A. VOCÊ VENCEU O TESTE!";
        resultado.style.color = 'green';
    } else {
        document.getElementById('resultado').innerText = "VALOR DIGITADO NO CAMPO B NÃO É MAIOR QUE O CAMPO A, VOCÊ FALHOU NO TESTE!";
        resultado.style.color = 'red';
    }
    
}