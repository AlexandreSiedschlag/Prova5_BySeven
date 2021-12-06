/*Contadores */
cont_cards = 4
templates = []
templates = getStorage()




/*Chamadas de funcoes */


/*Templates*/
function deletarCard(indice){
    templates.splice(templates.indexOf(indice),1);
}


    

/*Formulario*/
function enviarFormulario(){
    pegarValoresFormularioEGravarNoStorage(cont_cards)
    cont_cards += 1
    cancelarFormulario()
}
function mostrarFormulario(numero){
    
    x = document.getElementsByClassName('flex') 
    x[0].style.display='none' //pagina inicial
    document.getElementById('divNovoCard').style.display = 'none'

    document.getElementById('formulario').style.display ='block'
    
}
function cancelarFormulario(){

    x = document.getElementsByClassName('flex')
    x[0].style.display='flex' //pagina inicial
    document.getElementById('divNovoCard').style.display = 'flex' // Templates criados

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
function gerarHtmlDoTemplateCriado(){
    if (templates.length>=0){
        console.log(templates[0].indice)
        console.log(`Templates.length: ${templates[0].indice}`)
        i=0
        a=4
        while (i<templates.length){
            console.log('For->')
            console.log(`I: ${i}`)
            console.log(`a: ${a}`)
            let div = document.createElement('div');  
            htmlASerGerado = `
                <div id='card${templates[i].indice}' class='classe-cards'> 
    
                    <div class='titulo'>
                        <h2>Card${templates[i].indice}</h2>
                    </div>
    
                    <div class='inputs'>
                        <input id='ddd${templates[i].indice}' type="numeric" placeholder="DDD">
                    </div>
    
                    <div class='inputs'>
                        <input id='celular${templates[i].indice}' type="numeric" placeholder="Celular">
                    </div>
    
                    <div class='inputs'>
                        <input id='email${templates[i].indice}' type="email" placeholder="Email">
                    </div>
    
                    <div class='inputs'>
                        <input id='date${templates[i].indice}' type="date" placeholder="Date">
                    </div>
    
                    <div class='inputs'>
                        <select id="select${templates[i].indice}">
                            <option value="">Option1</option>
                            <option value="">Option2</option>
                            <option value="">Option3</option>
                        </select>
                    </div>
    
                    <div class='inputs'>
                        <textarea id="textarea${templates[i].indice}" cols="70" rows="5" placeholder="Texto"></textarea>
                    </div>
    
                    <div class='inputs'>
                        Preview
                    </div>
    
                    <div class='class-botoes'>
                        <button id='limpar${templates[i].indice}' onclick='limparFormulario(${templates[i].indice})'>Limpar Campos ${templates[i].indice}</button>
                        <button id='deletar${templates[i].indice}' onclick='deletarCard(${templates[i].indice})'>Deletar Card ${templates[i].indice}</button>
                        <button id='btn${templates[i].indice}' onclick='pegarValoresCard(${templates[i].indice})'>Card${templates[i].indice}</button>
                    </div>`
            let divNovoCard = document.getElementById('divNovoCard');
            console.log(divNovoCard)
            div.innerHTML = htmlASerGerado
            divNovoCard.appendChild(div)
            i += 1;
            a += 1;
        }
    }
}
gerarHtmlDoTemplateCriado()


