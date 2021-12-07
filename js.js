/*Contadores */
templates = []
templates = getStorageTemplates()
console.log(templates)
mensagens = []
mensagens = getStorageMensagens()
console.log(mensagens)

/*Chamadas de funcoes*/
gerarHtmlDoTemplateCriado()

/*Templates*/
function deletarCard(indice){
    templates.splice(indice, 1);
    setStorageTemplates(templates)
    location.reload()
}
function gerarHtmlDoTemplateCriado(){
    let divNovoCard = document.getElementById('divNovoCard');
    divNovoCard.innerHTML = ''
    if (templates.length>0){
        i=0
        while (i<templates.length){
            htmlASerGerado = `
                <div id='card${templates[i].indice}' class='classe-cards'> 
    
                    <div class='titulo' id='divtitutlo${templates[i].indice}'>
                        <h2>Card${templates[i].indice}</h2>
                    </div>
    
                    <div class='inputs' id='divddd${templates[i].indice}'>
                        <input id='ddd${templates[i].indice}' type="numeric" placeholder="DDD">
                    </div>
    
                    <div class='inputs' id='divcelular${templates[i].indice}'>
                        <input id='celular${templates[i].indice}' type="numeric" placeholder="Celular">
                    </div>
    
                    <div class='inputs' id='divemail${templates[i].indice}'>
                        <input id='email${templates[i].indice}' type="email" placeholder="Email">
                    </div>
    
                    <div class='inputs' id='divdata${templates[i].indice}'>
                        <input id='date${templates[i].indice}' type="date" placeholder="Date">
                    </div>
    
                    <div class='inputs' id='divselect${templates[i].indice}'>
                        <select id="select${templates[i].indice}">
                            <option value="">Option1</option>
                            <option value="">Option2</option>
                            <option value="">Option3</option>
                        </select>
                    </div>
    
                    <div class='inputs' id='divtextarea${templates[i].indice}'>
                        <textarea id="textarea${templates[i].indice}" cols="70" rows="5" placeholder="Texto"></textarea>
                    </div>
    
                    <div class='inputs' id='divpreview${templates[i].indice}'>
                        Preview
                    </div>
    
                    <div class='class-botoes' id='divbotoes${templates[i].indice}'>
                        <button id='limpar${templates[i].indice}' onclick='limparFormulario(${templates[i].indice})'>Limpar Campos ${templates[i].indice}</button>
                        <button id='deletar${templates[i].indice}' onclick='deletarCard(${templates[i].indice})'>Deletar Card ${templates[i].indice}</button>
                        <button id='btn${templates[i].indice}' onclick='pegarValoresCard(${templates[i].indice})'>Card${templates[i].indice}</button>
                    </div>`
            let div = document.createElement('div');
            div.innerHTML = htmlASerGerado
            divNovoCard.appendChild(div)
            i += 1;
        }
    }
}
/**/
function enviarMensagem(conteudo){
    // alert(`Mensagem: ${conteudo}`)
}

/*Formulario*/
function mostrarFormulario(numero){ // mostra formulario fixo ou dinamico
    x = document.getElementsByClassName('flex') 
    x[0].style.display='none' //pagina inicial
    document.getElementById('divNovoCard').style.display = 'none'

    if (numero>=3){
        document.getElementById('formularioFixo').style.display ='none'
        document.getElementById('formularioDinamico').style.display ='block'
    }
    else {
        document.getElementById('formularioFixo').style.display ='block'
        document.getElementById('formularioDinamico').style.display ='none'
        formatarFormulario(numero)
    }
}
function enviarFormulario(form){
    if (form == 'fixo'){
        console.log('formulario fixo')
        dddFixo = document.getElementById(`formularioFixoDDD`).value
        celularFixo = document.getElementById(`formularioFixoCelular`).value
        emailFixo = document.getElementById(`formularioFixoEmail`).value
        dataFixo = document.getElementById(`formularioFixoDate`).value
        selectFixo = document.getElementById(`formularioFixoSelect`).value
        textFixo = document.getElementById(`formularioFixoTextarea`).value

        mensagem = {
            'ddd': dddFixo,
            'celular': celularFixo,
            'email': emailFixo,
            'data': dataFixo,
            'select': selectFixo,
            'text': textFixo
        }
        mensagens.push(mensagem)
        setStorageMensagens(mensagem);
        limparFormulario()
        // enviarMensagem(JSON.stringify(mensagem))
        // cancelarFormulario()
    }
    else{
        console.log('formulario dinamico')
        pegarValoresFormularioEGravarNoStorage()
        limparFormulario()
        // gerarHtmlDoTemplateCriado()
    }
}
function pegarValoresFormulario(){
    
}
function cancelarFormulario(){
    x = document.getElementsByClassName('flex')
    x[0].style.display='flex' //pagina inicial
    document.getElementById('divNovoCard').style.display = 'flex' // Templates criados
    document.getElementById('formularioFixo').style.display ='none' // formulario Fixo
    document.getElementById('formularioDinamico').style.display ='none'// formulario Dinamico
}
function pegarValoresFormularioEGravarNoStorage(){
    ddd = document.getElementById(`formularioDinamicoDDD`).value
    celular = document.getElementById(`formularioDinamicoCelular`).value
    email = document.getElementById(`formularioDinamicoEmail`).value
    data = document.getElementById(`formularioDinamicoDate`).value
    select = document.getElementById(`formularioDinamicoSelect`).value
    text = document.getElementById(`formularioDinamicoTextarea`).value

    let indexNovoDoTemplate = 0
    if (templates.length>0){
        let comprimento = templates.length //index 3
        let indexUltimoTemplate = (comprimento - 1) // 2
        let indiceUltimoTemplate = templates[indexUltimoTemplate].indice //14
        indexNovoDoTemplate = indiceUltimoTemplate + 1
        //indexNovoDoTemplate = templates[templates.length -1].indice +1
    }
    else {
        indexNovoDoTemplate = 4
    }

    template = {
        'indice': indexNovoDoTemplate,
        'ddd': ddd,
        'celular': celular,
        'email': email,
        'data': data,
        'select': select,
        'text': text
    }
    templates.push(template)
    setStorageTemplates(templates);
    limparFormulario()
}
function limparFormulario(){
    document.getElementById(`formularioFixoDDD`).value = ''
    document.getElementById(`formularioFixoCelular`).value = ''
    document.getElementById(`formularioFixoEmail`).value = ''
    document.getElementById(`formularioFixoDate`).value = ''
    document.getElementById(`formularioFixoSelect`).value = ''
    document.getElementById(`formularioFixoTextarea`).value = ''

    document.getElementById(`formularioDinamicoDDD`).value = ''
    document.getElementById(`formularioDinamicoCelular`).value = ''
    document.getElementById(`formularioDinamicoEmail`).value = ''
    document.getElementById(`formularioDinamicoDate`).value = ''
    document.getElementById(`formularioDinamicoSelect`).value = ''
    document.getElementById(`formularioDinamicoTextarea`).value = ''
}
function formatarFormulario(numero){
    ddd = document.getElementById(`formularioFixoDDD`)
    celular = document.getElementById(`formularioFixoCelular`)
    email = document.getElementById(`formularioFixoEmail`)
    data = document.getElementById(`formularioFixoDate`)
    select = document.getElementById(`formularioFixoSelect`)
    text = document.getElementById(`formularioFixoTextarea`)
    if (numero == 0){
        ddd.style.display =  'inline-block'
        celular.style.display = 'inline-block'
        email.style.display = 'none'
        data.style.display = 'none'
        select.style.display = 'none'
        text.style.display = 'inline-block'        
    }
    else if (numero == 1){
        ddd.style.display =  'inline-block'
        celular.style.display = 'inline-block'
        email.style.display = 'inline-block'
        data.style.display = 'none'
        select.style.display = 'none'
        text.style.display = 'inline-block' 
    }
    else if (numero == 2){
        ddd.style.display =  'inline-block'
        celular.style.display = 'inline-block'
        email.style.display = 'inline-block'
        data.style.display = 'inline-block'
        select.style.display = 'none'
        text.style.display = 'inline-block' 
    }
    else if (numero == 3){
        ddd.style.display =  'inline-block'
        celular.style.display = 'inline-block'
        email.style.display = 'inline-block'
        data.style.display = 'inline-block'
        select.style.display = 'inline-block'
        text.style.display = 'inline-block' 
        document.getElementById('formularioDinamicoDate').disabled = false
    }
}

/*Storage*/
function setStorageTemplates(conteudo){
    localStorage.setItem(`Templates`, JSON.stringify(conteudo));
}
function getStorageTemplates(){
    return JSON.parse(localStorage.getItem(`Templates`)) || []
}
function setStorageMensagens(conteudo){
    localStorage.setItem(`Mensagens`, JSON.stringify(conteudo));
}
function getStorageMensagens(){
    return JSON.parse(localStorage.getItem(`Mensagens`)) || []
}
function deleteStorageTemplates(){
    localStorage.removeItem(`Templates`)
}
