/*Contadores */
cont_cards = 4
templates = []
/*Templates*/
function deletarCard(numero){
    console.log(numero)
    deleteStorage(numero)
    document.getElementById(`card${numero}`).remove()
}
function editarCard(numero){
}

function gerarHtmlDoTemplateCriado(preview){
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

                <div class='inputs'>
                    Preview
                </div>

                <div class='class-botoes'>
                    <button id='limpar${cont_cards}' onclick='limparFormulario(${cont_cards})'>Limpar Campos ${cont_cards}</button>
                    <button id='deletar${cont_cards}' onclick='deletarCard(${cont_cards})'>Deletar Card ${cont_cards}</button>
                    <button id='btn${cont_cards}' onclick='pegarValoresCard(${cont_cards})'>Card${cont_cards}</button>
                </div>
    `
    divNovoCard.appendChild(div)
}

/*Formulario*/
function enviarFormulario(){
    pegarValoresFormularioEGravarNoStorage(cont_cards)
    cont_cards += 1
    templates = getStorage()
    gerarHtmlDoTemplateCriado(templates)
    cancelarFormulario()
}
function mostrarFormulario(numero){
    
    x = document.getElementsByClassName('flex') 
    x[0].style.display='none' //pagina inicial
    document.getElementById('div-novo-card').style.display = 'none'

    document.getElementById('formulario').style.display ='block'
    
}
function cancelarFormulario(){

    x = document.getElementsByClassName('flex')
    x[0].style.display='flex' //pagina inicial
    document.getElementById('div-novo-card').style.display = 'flex' // Templates criados

    document.getElementById('formulario').style.display ='none' // formulario
    
}
function pegarValoresFormularioEGravarNoStorage(){
    ddd = document.getElementById(`formulario-ddd`).value
    celular = document.getElementById(`formulario-celular`).value
    email = document.getElementById(`formulario-email`).value
    data = document.getElementById(`formulario-date`).value
    select = document.getElementById(`formulario-select`).value
    text = document.getElementById(`formulario-textarea`).value

    template = {
        'indice':cont_cards,
        'ddd': ddd,
        'celular': celular,
        'email': email,
        'data': data,
        'select': select,
        'text': text
    }
    templates.push(template)
    setStorage(templates);
    limparFormulario()
}
function limparFormulario(){
    document.getElementById(`formulario-ddd`).value = ''
    document.getElementById(`formulario-celular`).value = ''
    document.getElementById(`formulario-email`).value = ''
    document.getElementById(`formulario-date`).value = ''
    document.getElementById(`formulario-select`).value = ''
    document.getElementById(`formulario-textarea`).value = ''
}
function formatarFormulario(numero){
    ddd = document.getElementById(`formulario-ddd`)
    celular = document.getElementById(`formulario-celular`)
    email = document.getElementById(`formulario-email`)
    data = document.getElementById(`formulario-date`)
    select = document.getElementById(`formulario-select`)
    text = document.getElementById(`formulario-textarea`)
    if (numero == 0){
        ddd.style.visibility =  'visible'
        celular.style.visibility = 'visible'
        email.style.visibility = 'hidden'
        data.style.visibility = 'hidden'
        select.style.visibility = 'hidden'
        text.style.visibility = 'visible'        
    }
    else if (numero == 1){
        ddd.style.visibility =  'visible'
        celular.style.visibility = 'visible'
        email.style.visibility = 'visible'
        data.style.visibility = 'hidden'
        select.style.visibility = 'hidden'
        text.style.visibility = 'visible' 
    }
    else if (numero == 2){
        ddd.style.visibility =  'visible'
        celular.style.visibility = 'visible'
        email.style.visibility = 'visible'
        data.style.visibility = 'visible'
        select.style.visibility = 'hidden'
        text.style.visibility = 'visible' 
    }
    else if (numero == 3){
        ddd.style.visibility =  'visible'
        celular.style.visibility = 'visible'
        email.style.visibility = 'visible'
        data.style.visibility = 'visible'
        select.style.visibility = 'visible'
        text.style.visibility = 'visible' 
    }
}

/*Storage*/
function setStorage(conteudo){
    localStorage.setItem(`Templates`, JSON.stringify(conteudo));
}
function getStorage(){
    return JSON.parse(localStorage.getItem(`Templates`)) || []
}
function deleteStorage(){
    localStorage.removeItem(`Templates`)
}
