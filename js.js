/*Contadores */
cont_cards = 4


/*Storage */
function setStorage(numero, conteudo){
    localStorage.setItem(`Card${numero}-Input`, JSON.stringify(conteudo));
}
function getStorage(numero){
    return JSON.parse(localStorage.getItem(`Card${numero}-Input`)) || []
}
function deleteStorage(numero){
    localStorage.removeItem(`Card${numero}`)
}

/*Cards*/
function criarCard(){
    // conteudo = {
    //     'indice': cont_cards,
    //     'ddd': '',
    //     'celular': '',
    //     'email': '',
    //     'data': '',
    //     'select': '',
    //     'text': ''
    // }
    // setStorage(cont_cards, conteudo);
    
    // for (let i=0; i< localStorage.length;i++ ){
    //     let key = localStorage.key(i)
    //     console.log(`${key}: ${localStorage.getItem(key)}`)
    //     console.log(key[1])
    // }
    
    
    
    
}
function deletarCard(numero){
    console.log(numero)
    deleteStorage(numero)
    document.getElementById(`card${numero}`).remove()
}
function editarCard(numero){
}
function limparFormulario(){
    document.getElementById(`formulario-ddd`).value = ''
    document.getElementById(`formulario-celular`).value = ''
    document.getElementById(`formulario-email`).value = ''
    document.getElementById(`formulario-date`).value = ''
    document.getElementById(`formulario-select`).value = ''
    document.getElementById(`formulario-textarea`).value = ''
}
function pegarValoresFormulario(){
    ddd = document.getElementById(`formulario-ddd`).value
    celular = document.getElementById(`formulario-celular`).value
    email = document.getElementById(`formulario-email`).value
    data = document.getElementById(`formulario-date`).value
    select = document.getElementById(`formulario-select`).value
    text = document.getElementById(`formulario-textarea`).value
    conteudo = {
        'ddd': ddd,
        'celular': celular,
        'email': email,
        'data': data,
        'select': select,
        'text': text
    }
    setStorage(numero, conteudo);
    limparFormulario(numero)
}

function conteudoCard(){
    let div = document.createElement('div')
    let divNovoCard = document.getElementById('div-novo-card')
    div.innerHTML = `
    <div id='card${cont_cards}' class='classe-cards'> 

                <div class='titulo'>
                    <h2>Card${cont_cards}</h2>
                </div>

                <div class='inputs'>
                    <input id='ddd${cont_cards}' type="numeric" placeholder="DDD">
                </div>

                <div class='inputs'>
                    <input id='celular${cont_cards}' type="numeric" placeholder="Celular">
                </div>

                <div class='inputs'>
                    <input id='email${cont_cards}' type="email" placeholder="Email">
                </div>

                <div class='inputs'>
                    <input id='date${cont_cards}' type="date" placeholder="Date">
                </div>

                <div class='inputs'>
                    <select id="select${cont_cards}">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                        <option value="">Option3</option>
                    </select>
                </div>

                <div class='inputs'>
                    <textarea id="textarea${cont_cards}" cols="70" rows="5" placeholder="Texto"></textarea>
                </div>

                <div class='class-botoes'>
                    <button id='limpar${cont_cards}' onclick='limparFormulario(${cont_cards})'>Limpar Campos ${cont_cards}</button>
                    <button id='deletar${cont_cards}' onclick='deletarCard(${cont_cards})'>Deletar Card ${cont_cards}</button>
                    <button id='btn${cont_cards}' onclick='pegarValoresCard(${cont_cards})'>Card${cont_cards}</button>
                </div>
    `
    divNovoCard.appendChild(div)
    cont_cards += 1
}

/*Formulario*/

function mostrarFormulario(){
    x = document.getElementsByClassName('flex')
    x[0].style.display='none'

    document.getElementById('formulario').style.display ='block'
}
function cancelarFormulario(){
    x = document.getElementsByClassName('flex')
    x[0].style.display='flex'

    document.getElementById('formulario').style.display ='none'
}
function enviarFormulario(){
    pegarValoresFormulario()
}