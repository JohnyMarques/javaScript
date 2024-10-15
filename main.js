function verificarValores(){

let campoA = document.getElementById('campoA').value;
let campoB = document.getElementById('campoB').value;
let mensagem = document.getElementById('mensagem');


if(campoB > campoA){
    mensagem.textContent = "Correto! B é maior que A.";
    mensagem.className = 'message certo'
}
else{

}
}