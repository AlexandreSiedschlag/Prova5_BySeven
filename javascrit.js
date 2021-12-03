let cont_input = 1
let cont_date = 1
let cont_combobox = 1
let cont_textbox = 1
let cont_novocard = 4
let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let card3 = document.getElementById('card3')
let todos_os_cards = ['card1', 'card2', 'card3']



/* Funcoes de cards*/
function esconderCard(numero){
    document.getElementById(`card${numero}`).style.display = 'none'
}
function verCard(numero){
    document.getElementById(`card${numero}`).style.display = 'grid'
}
function esconderCardsCriados(){
    card1.style.display ='grid'
    card2.style.display ='grid'
    card3.style.display ='grid'
    for (let i=4;i<=todos_os_cards.length;i++){
        console.log(todos_os_cards.length)
        console.log(`i${i}`)
        esconderCard(i);  
    }
    
}
function verCardsCriados(){
    card1.style.display ='none'
    card2.style.display ='none'
    card3.style.display ='none'
    for (let i=4;i<=todos_os_cards.length;i++){
        console.log(todos_os_cards.length)
        console.log(`i${i}`)
        verCard(i);
    }
}
function mostrarCard(numero){
    esconderCardsCriados()
    let newcard = document.getElementById(`card${numero}`)
    newcard.style.display ='grid'

}
function mostrarTelaPrincipal(numero){
    esconderCardsCriados()
    
    let templates = JSON.parse(localStorage.getItem('')) || []
    divNovosCards = document.querySelector('#div-novos-cards')
    templates.forEach(element => {
        let div = document.createElement('div')
        div.innerHTML = `
<div class="card" onclick="changeCard(1);return false;">
    <div class="card-image"></div>
    <div class="card-text">
        <span class="date">${template.descricao}</span>
        <h2>${template.nome}</h2>
        <p>Texto Random</p>
    </div>
    <div class="card-stats">
        <div class="stat">
            <div class="value">${template.elementos.filter((tartaruga)=>{return tartaruga.element=='nome'}).length}</div>
            <div class="type">Nome</div>
        </div>
        <div class="stat border">
            <div class="value">${template.elementos.filter((elemento)=>{return elemento.element=='data'}).length}</div>
            <div class="type">Data</div>
        </div>
        <div class="stat">
            <div class="value">1</div>
            <div class="type">Select</div>
        </div>
    </div>
</div>
`
x.appendChild(div)
    });
}
function changeCard(numero){
    
    if (numero == 1){ /*Template1*/
        mostrarCard(numero)
        document.getElementById('idImagemCard4').style.background = 'url("1.jpg")';
    }
    else if (numero == 2){ /*Template2*/
        mostrarCard(numero)
        document.getElementById('idImagemCard4').style.background = 'url("orange.jpg")';
    }
    else if (numero == 3){ /*Template3*/
        mostrarCard(numero)
        document.getElementById('idImagemCard4').style.background = 'url("Matrix.jpeg")';
    }
    else {
        mostrarTelaPrincipal()
    }
}
function addCard(){
    novocard = `card${cont_novocard}`
    conteudo = `
    <div id='card${cont_novocard}'>
    <div class="card-2">
    <div class="card-2-image" id='idImagemCard4' ></div>
    <form class='proprio-form'>
        <p> Card${cont_novocard} </p>
        <div class='div-inputs'>

            <!--Celular-->
            <div class='div2-inputs'>
                <label for="celular${cont_novocard}">Numerico</label>
                <input required="required" autofocus type="number" id="ddd${cont_novocard}" placeholder="DDD">
                <input required="required" type="number" id="celular${cont_novocard}" placeholder="Celular">
                <button id='add-celular' onclick="addCelular();return false;"><i class="fas fa-plus-square" ></i></button>
            </div>
        
            <!--Bloco Celular-->
            <div id='bloco-inputs'>
            </div>
            
            
            <!--Date-->
            <div class='div2-inputs'>
                <label for="date${cont_novocard}">Data</label>
                <input type="date" id="date${cont_novocard}" placeholder="Data">
                <button id='add-date'  onclick="addDate();return false;"><i class="fas fa-plus-square" ></i></button>
            </div>

            <!--Bloco Date-->
            <div id='bloco-date'>
            </div>

        
            <!--Select-->
            <div class='div2-inputs'>
                <label for="select${cont_novocard}">ComboBox</label>
                <select id="select${cont_novocard}">
                <option value="option1" disabled>Selecione</option>
                <option value="option1">Exemplo 1</option>
                <option value="option2">Exemplo 2</option>
                </select>
                <button id='add-select' disabled><i class="fas fa-plus-square"></i></button>
            </div>

            <!--Bloco Select-->
            <div id='bloco-select'>
            </div>

        
            <!--TextArea-->
            <div class='div2-inputs'>
                <textarea   id="textarea${cont_novocard}"
                            cols="40" 
                            rows="10" 
                            style='resize: none' 
                            placeholder="Text Area - Digite seu texto aqui"></textarea>
            </div>

        </div><!--FIM div-inputs--> 
    </form>
    <div class='card-stats-2 card4'><!--Botoes-->

        <div class="stat-2">
        <div class="btn">
            <button type='submit' onclick="changeCard(4);return false;" class='btn cancel' id='cancel1'>Cancelar</button>
        </div>
        </div>

        <div class="stat-2">
        <div class="btn">
            <button type='submit' onclick="changeCard(4);return false;" class='btn send'>Enviar</button>
        </div>
        </div>

    </div>
</div>
    `
    document.querySelector('#div-novos-cards').innerHTML += conteudo;
    mostrarCard(cont_novocard)

    todos_os_cards.push(novocard)
    console.log(todos_os_cards)
    cont_novocard += 1;
}






/*Funcoes de dentro do Form */
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






/* Mexer no Storage */
const Storage = {
    set(values){
        localStorage.setItem(`prova5.storage`, JSON.stringify(values))
    },
    get(origin){
        return JSON.parse(localStorage.getItem(`prova5.storage`)) || []
    },
    delete(){
        localStorage.removeItem('prova5.storage')
    }
}