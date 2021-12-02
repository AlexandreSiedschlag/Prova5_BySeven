/*
         TO DO
- Elaborar 3 Templates.
- Armazenar Histórico.
- Montar formulário do jeito que o usuário quiser.
- Configurar novos templates
- Converter URI em URL
- Enviar mensagem por whatsapp
- Criar preview da mensagem
*/

var cont_input = 1
var cont_date = 1
var cont_combobox = 1
var cont_textbox = 1
function pegarValoresForm(){
    // if {
    // DDD.length = 2
    // Celular.length = 9
    // Texto >= 10 
}
function changeCard(numero){
    if (numero == 1){
        document.getElementById('card1').style.display ='none'
        document.getElementById('card2').style.display ='none'
        document.getElementById('card3').style.display ='none'
        document.getElementById('card4').style.display ='grid'
        imagemCard4 = document.getElementById('idImagemCard4').style.background = 'url("Code.jpeg")';
    }
    if (numero == 2){
        document.getElementById('card1').style.display ='none'
        document.getElementById('card2').style.display ='none'
        document.getElementById('card3').style.display ='none'
        document.getElementById('card4').style.display ='grid'
        imagemCard4 = document.getElementById('idImagemCard4').style.background = 'url("orange.jpg")';
    }
    if (numero == 3){
        document.getElementById('card1').style.display ='none'
        document.getElementById('card2').style.display ='none'
        document.getElementById('card3').style.display ='none'
        document.getElementById('card4').style.display ='grid'
        imagemCard4 = document.getElementById('idImagemCard4').style.background = 'url("Matrix.jpeg")';
    }
    if (numero == 4){
        document.getElementById('card1').style.display ='grid'
        document.getElementById('card2').style.display ='grid'
        document.getElementById('card3').style.display ='grid'
        document.getElementById('card4').style.display ='none'
    }
}

/* Celular */
function addCelular(){
        conteudo =`<div id="divCelular${cont_input}" class="div2-inputs"><label for="celular">Numerico</label><input type="number" id="ddd${cont_input}" placeholder="DDD"><input type="number" id="celular${cont_input}" placeholder="Celular"><button id="remove-celular" onclick="deleteCelular('divCelular${cont_input}');return false;"><i class="fas fa-minus-square"></i></button></div>`;
        document.querySelector('#bloco-inputs').innerHTML += conteudo;
        cont_input += 1;
};
function deleteCelular(id) {
        document.querySelector(`#${id}`).remove()
}

/* Data */
function addDate(){
        conteudo =`<div id="date${cont_date}" class="div2-inputs"><label for="date">Data</label><input type="date" placeholder="Data"><button id="remove-date" onclick="deleteDate('date${cont_date}');return false;"><i class="fas fa-minus-square"></i></button></div>`;
        document.querySelector('#bloco-date').innerHTML += conteudo;
        cont_date += 1;
}
function deleteDate(id) {
        document.querySelector(`#${id}`).remove()
}

